import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const Navbar = () => {

    const { user, setUser } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem("token")

        setUser(null)

        navigate("/login")
    }

    return (

        <div className='flex justify-between items-center h-14 px-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md'>

            <p className='text-lg font-semibold'>
                Welcome {user?.name}
            </p>

            <button
                onClick={handleLogout}
                className='bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition'
            >
                Logout
            </button>

        </div>
    )
}

export default Navbar