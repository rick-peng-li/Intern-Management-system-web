import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTasks, FaTh, FaSignOutAlt, FaUserGraduate } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';

const InternSidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    return (
        <div className="bg-gray-900 text-white h-screen w-64 fixed left-0 top-0 bottom-0 flex flex-col justify-between shadow-2xl border-r border-gray-800">
            {/* Top Branding Section */}
            <div>
                <div className="bg-blue-600 h-16 flex items-center justify-center gap-2 px-4 shadow-md">
                    <FaUserGraduate className="text-2xl text-white" />
                    <h3 className="font-bold text-xl tracking-wide uppercase text-white truncate">
                        Intern Workspace
                    </h3>
                </div>

                {/* Navigation Links */}
                <nav className="mt-6 px-4 space-y-2">
                    <NavLink
                        to="/intern-dashboard"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                isActive
                                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`
                        }
                    >
                        <FaTh className="text-lg transition-transform group-hover:scale-110" />
                        <span>Overview</span>
                    </NavLink>

                    <NavLink
                        to="/intern-dashboard/my-tasks"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                isActive
                                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`
                        }
                    >
                        <FaTasks className="text-lg transition-transform group-hover:scale-110" />
                        <span>My Tasks</span>
                    </NavLink>
                </nav>
            </div>

            {/* Bottom Logout Button Area */}
            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-red-600/10 hover:text-red-500 rounded-xl transition-all duration-200 font-medium group text-left"
                >
                    <FaSignOutAlt className="text-lg transition-transform group-hover:translate-x-1" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

// 🔑 THE CRITICAL EXPORT THAT FIXES YOUR BLANK PAGE ERROR:
export default InternSidebar;