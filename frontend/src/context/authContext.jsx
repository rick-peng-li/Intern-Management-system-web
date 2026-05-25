import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token");

                if (token) {
                    const response = await axios.get(
                        "http://localhost:5000/api/auth/verify",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    console.log(response)

                    if (response.data.success) {
                        setUser(response.data.user);
                    } else {
                        setUser(null);
                    }
                } else {
                    // If no token exists in localStorage, immediately set user to null
                    setUser(null);
                    setLoading(false )
                }
            } catch (error) {
                console.log(error)
                console.log("Token verification failed:", error);
                setUser(null);
            } finally {
                // This is the magic fix: it now ALWAYS runs to drop the white screen
                setLoading(false);
            }
        };

        verifyUser();
    }, []);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <userContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </userContext.Provider>
    );
};

export const useAuth = () => useContext(userContext);

export default AuthContext;