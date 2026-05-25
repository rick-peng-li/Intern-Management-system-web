import React from 'react';
import { Outlet } from 'react-router-dom';
import InternSidebar from '../components/dashboard/InternSidebar'; // Adjust this import path depending on your folder layout

const InternDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* 1. Renders your custom blue/indigo sidebar menu on the left */}
      <InternSidebar />
      
      {/* 2. Main content block offset by the 64-width fixed sidebar (ml-64) */}
      <div className="flex-1 ml-64 p-8">
        
        {/* Top welcome header */}
        <header className="bg-white shadow rounded-xl p-4 mb-6">
          <h1 className="text-xl font-bold text-gray-700">
            Welcome Back, {localStorage.getItem("userName") || "Intern"} 👋
          </h1>
        </header>

        {/* 3. 🔑 THE CRITICAL PIECE: This renders your active sub-pages dynamically */}
        <main>
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};

export default InternDashboard;