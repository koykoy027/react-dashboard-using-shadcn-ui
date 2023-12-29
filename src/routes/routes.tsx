import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import AdminLayout from "@/components/layouts/admin/main";
import Students from "@/pages/admin/students";
import Dashboard from "@/pages/admin/dashboard";
import Login from "@/pages/auth/login-form";
import NotFound from "@/pages/system/not-found";
import SettingsMain from "@/pages/admin/settings/settings-main";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="login" element={<Login/>}/>
      <Route path="/*" element={<NotFound/>}/>

      {/* Admin routes */}
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
        <Route path="/settings" element={<SettingsMain />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
