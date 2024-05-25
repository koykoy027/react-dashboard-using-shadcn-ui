import * as z from "zod";

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, "Please enter your email address")
      .email("Please enter a valid email address"),
    firstname: z.string().min(1, "Please enter your firstname"),
    middlename: z.string().min(1, "Please enter your middlename"),
    lastname: z.string().min(1, "Please enter your lastname"),
    password: z.string().min(1, "Password must be at least 8 characters long"),
    password_confirmation: z
      .string()
      .min(1, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password == data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Confirm password do not match",
  });

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password must be at least 8 characters long"),
});
