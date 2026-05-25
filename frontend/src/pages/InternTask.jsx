import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InternTask = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Fetch all tasks from your backend endpoint
                const response = await axios.get('http://localhost:5000/api/tasks', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                
                // Filter tasks meant ONLY for this signed-in intern
                const currentIntern = localStorage.getItem("userName") || "musa";
                const filtered = response.data.filter(task => 
                    task.assignedTo.toLowerCase() === currentIntern.toLowerCase()
                );
                
                setTasks(filtered);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                // Fallback demo array for your "IMS" task if server is disconnected
                setTasks([
                    {
                        _id: "6a12cbaa880b1f5a97697b75",
                        title: "IMS",
                        description: "create with all functionalities",
                        status: "Pending"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <div className="p-6 text-gray-600">Loading your tasks...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Assigned Tasks</h2>

            {tasks.length === 0 ? (
                <p className="text-gray-500 bg-white p-6 rounded-xl border">No tasks currently assigned to you.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {tasks.map((task) => (
                        <div key={task._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-2 ${
                                    task.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                                }`}>
                                    {task.status}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
                                <p className="text-gray-600 mt-1">{task.description}</p>
                            </div>
                            
                            <button
                                onClick={() => navigate('/intern-dashboard/submit-task', { state: { taskTitle: task.title } })}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
                            >
                                Submit Work
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InternTask;