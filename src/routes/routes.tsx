import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import AdminLayout from "@/components/layouts/admin/main";
import Students from "@/pages/admin/students";
import Dashboard from "@/pages/admin/dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <AdminLayout>
            <Outlet />
          </AdminLayout>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
