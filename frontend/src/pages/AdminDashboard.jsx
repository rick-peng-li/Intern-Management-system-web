import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

import AdminSidebar from "../components/dashboard/AdminSidebar.jsx";
import Navbar from "../components/dashboard/Navbar.jsx";

const AdminDashboard = () => {

  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Section */}
      <div className="flex-1 ml-64">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6">

          {/* Welcome Message */}
          <div className="bg-white shadow-md rounded-xl p-5 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {user?.name || "Admin"} 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage interns, tasks, submissions, and progress from your dashboard.
            </p>
          </div>

          {/* Nested Routes */}
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;