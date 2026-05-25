import React, { useEffect, useState } from 'react';
import { FaTasks, FaClock, FaCheckCircle } from 'react-icons/fa';

const InternOverview = () => {
    // Basic stats state (You can connect this to real API counts later)
    const [stats, setStats] = useState({
        pending: 1,
        completed: 0
    });

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Workspace Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Tasks Assigned */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Assigned Tasks</p>
                        <h4 className="text-3xl font-bold text-gray-800 mt-1">{stats.pending + stats.completed}</h4>
                    </div>
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                        <FaTasks className="text-2xl" />
                    </div>
                </div>

                {/* Pending Tasks */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Pending Tasks</p>
                        <h4 className="text-3xl font-bold text-gray-800 mt-1">{stats.pending}</h4>
                    </div>
                    <div className="p-4 bg-yellow-50 text-yellow-600 rounded-xl">
                        <FaClock className="text-2xl" />
                    </div>
                </div>

                {/* Completed Tasks */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Completed Work</p>
                        <h4 className="text-3xl font-bold text-gray-800 mt-1">{stats.completed}</h4>
                    </div>
                    <div className="p-4 bg-green-50 text-green-600 rounded-xl">
                        <FaCheckCircle className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternOverview;