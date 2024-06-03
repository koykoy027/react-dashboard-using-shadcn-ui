// src\lib\apis\auth\login.ts
import { fetchWithCSRFToken } from '../axios';

export const fetchLogin = async (formData: any) => {
  try {
    const response = await fetchWithCSRFToken({
      method: 'post',
      url: '/api/login',
      data: formData,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }

};