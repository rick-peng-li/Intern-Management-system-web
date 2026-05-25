import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitTaskForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Autofills target project if navigated from the task card link
    const initialTaskTitle = location.state?.taskTitle || "";

    const [formData, setFormData] = useState({
        taskTitle: initialTaskTitle, // 🔑 Matches your schema field name
        githubLink: '',              // 🔑 Matches your schema field name
    });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                internName: localStorage.getItem("userName") || "Musa", // 🔑 Matches your schema
                taskTitle: formData.taskTitle,                          // 🔑 Matches your schema
                githubLink: formData.githubLink                         // 🔑 Matches your schema
            };

            // Sends data directly to your existing submissions endpoint
            await axios.post('http://localhost:5000/api/submission/add', payload, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            setMessage('✅ Project successfully submitted to admin evaluation log!');
            setTimeout(() => navigate('/intern-dashboard/my-tasks'), 2000);
        } catch (error) {
            console.error("Submission failed:", error);
            setMessage('❌ Error pushing submission to database logs.');
        }
    };

    return (
        <div className="p-4 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Deliverables</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                {message && <div className="p-3 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium">{message}</div>}

                <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Project/Task Title</label>
                    <input 
                        type="text"
                        required
                        value={formData.taskTitle}
                        onChange={(e) => setFormData({...formData, taskTitle: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. IMS"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">GitHub Repository URL</label>
                    <input 
                        type="url"
                        required
                        value={formData.githubLink}
                        onChange={(e) => setFormData({...formData, githubLink: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://github.com/your-username/repo"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-blue-600/20"
                >
                    Push Submission Log
                </button>
            </form>
        </div>
    );
};

export default SubmitTaskForm;