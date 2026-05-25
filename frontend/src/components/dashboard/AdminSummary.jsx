import React from 'react'

const AdminSummary = () => {

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Dashboard Overview
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Total Interns */}
                <div className="bg-white p-5 rounded-2xl shadow-md">

                    <h2 className="text-gray-500 text-sm">
                        Total Interns
                    </h2>

                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        120
                    </p>

                </div>

                {/* Active Tasks */}
                <div className="bg-white p-5 rounded-2xl shadow-md">

                    <h2 className="text-gray-500 text-sm">
                        Active Tasks
                    </h2>

                    <p className="text-3xl font-bold text-green-600 mt-2">
                        35
                    </p>

                </div>

                {/* Submissions */}
                <div className="bg-white p-5 rounded-2xl shadow-md">

                    <h2 className="text-gray-500 text-sm">
                        Submissions
                    </h2>

                    <p className="text-3xl font-bold text-purple-600 mt-2">
                        89
                    </p>

                </div>

                {/* Pending Reviews */}
                <div className="bg-white p-5 rounded-2xl shadow-md">

                    <h2 className="text-gray-500 text-sm">
                        Pending Reviews
                    </h2>

                    <p className="text-3xl font-bold text-red-500 mt-2">
                        12
                    </p>

                </div>

            </div>

        </div>

    )
}

export default AdminSummary