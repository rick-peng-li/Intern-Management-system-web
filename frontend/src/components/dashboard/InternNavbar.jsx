import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const InternNavbar = () => {
    const user = localStorage.getItem("userName") || "Intern";

    return (
        <header className="bg-white h-16 shadow-sm border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-500">System Connected</span>
            </div>
            
            <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium text-sm">{user}</span>
                <FaUserCircle className="text-2xl text-gray-400" />
            </div>
        </header>
    );
};

export default InternNavbar;