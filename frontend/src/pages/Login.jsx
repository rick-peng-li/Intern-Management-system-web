import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { useAuth } from '../context/authContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            });
            
            if (response.data.success) {
                // 1. Update the global React Auth Context state
                login(response.data.user);
                
                // 2. Save token validation credentials
                localStorage.setItem("token", response.data.token);

                // 🔑 3. ADD THIS LINE: Save the name string to filter assignments
                localStorage.setItem("userName", response.data.name);

                // 4. Dynamic routing path separation based on privilege role
                if (response.data.user.role === "admin") {
                    navigate('/admin-dashboard');
                } else {
                    navigate("/intern-dashboard");
                }
                
                setError(null); // Clear any previous errors on success
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.error || "Login failed");
            } else {
                setError("Server Error");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 from-50% to-gray-100 to-50% space-y-6">
            <h2 className="font-bold text-3xl text-white">
                Intern Management System
            </h2>

            <div className="border shadow-lg p-6 w-80 bg-white rounded">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Login
                </h2>
                
                {error && <p className='text-red-500 text-sm mb-2 text-center'>{error}</p>}
                
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="******"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="mb-4 flex items-center justify-between">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-600 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <div className="mb-3">
                        <button
                            type="submit"
                            className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;