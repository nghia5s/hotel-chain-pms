import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CRS from "../pages/CRS";
import FrontDesk from "../pages/FrontDesk";
import Housekeeping from "../pages/Housekeeping";
import CRM from "../pages/CRM";
import OTAIntegration from "../pages/OTAIntegration";
import Reports from "../pages/Reports";
import Login from "../pages/Login";
import Layout from "../components/Layout"; // layout chứa Sidebar + Header

// Kiểm tra đăng nhập (demo)
const isAuthenticated = () => localStorage.getItem("isLoggedIn") === "true";

// Route bảo vệ
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default function AppRouter() {
  return (
    <Routes>
      {/* Login: độc lập, full-screen, không có Layout */}
      <Route path="/login" element={<Login />} />

      {/* Các route sau khi đăng nhập: được bọc bởi Layout (có Sidebar + Header) */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="crs" element={<CRS />} />
        <Route path="frontdesk" element={<FrontDesk />} />
        <Route path="housekeeping" element={<Housekeeping />} />
        <Route path="crm" element={<CRM />} />
        <Route path="ota" element={<OTAIntegration />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* Mặc định: nếu chưa login điều hướng về /login, nếu login điều hướng về / */}
      <Route
        path="*"
        element={isAuthenticated() ? <Navigate to="/" replace /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}
