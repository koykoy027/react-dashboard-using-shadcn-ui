// Routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Students from "@/pages/admin/students/index"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Students/>} />
    </Routes>
  );
};

export default AppRoutes;
