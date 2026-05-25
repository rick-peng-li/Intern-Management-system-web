import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  FaTachometerAlt,
  FaUsers,
  FaTasks,
  FaClipboardList,
  FaChartLine,
  FaComments,
  FaSignOutAlt
} from 'react-icons/fa'

const AdminSidebar = () => {

  return (

<div className='bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 text-white h-screen w-64 fixed left-0 top-0 p-5 shadow-2xl overflow-y-auto'>
      {/* Logo */}
      <div className='mb-10 border-b border-white/20 pb-5'>

        <h1 className='text-3xl font-bold'>
          Intern
        </h1>

        <h1 className='text-3xl font-bold text-blue-100 -mt-1'>
          Management
        </h1>

        <p className='text-blue-100 text-sm mt-1'>
          System
        </p>

      </div>

      {/* Menu */}
      <div className='flex flex-col gap-2'>

        <p className='text-blue-100 text-xs uppercase mb-2 tracking-wider'>
          Main Menu
        </p>

        {/* Dashboard */}
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        {/* Interns */}
        <NavLink
          to="/admin-dashboard/interns"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaUsers />
          <span>Interns</span>
        </NavLink>

        {/* Add Intern */}
        <NavLink
          to="/admin-dashboard/add-intern"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaUsers />
          <span>Add Intern</span>
        </NavLink>

        {/* Delete Intern */}
<NavLink
  to="/admin-dashboard/delete-intern"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
      isActive ? "bg-white/30" : ""
    }`
  }
>
  <FaUsers />
  <span>Delete Intern</span>
</NavLink>

        {/* Tasks */}
        <NavLink
          to="/admin-dashboard/tasks"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaTasks />
          <span>Tasks</span>
        </NavLink>

        <NavLink
  to="/admin-dashboard/add-task"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
      isActive ? "bg-white/30" : ""
    }`
  }
>
  <FaTasks />
  <span>Add Task</span>
</NavLink>

        {/* Submissions */}
        <NavLink
          to="/admin-dashboard/submissions"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaClipboardList />
          <span>Submissions</span>
        </NavLink>

        {/* Progress */}
        <NavLink
          to="/admin-dashboard/progress"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaChartLine />
          <span>Progress</span>
        </NavLink>

        {/* Feedback */}
        <NavLink
          to="/admin-dashboard/feedback"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              isActive ? "bg-white/30" : ""
            }`
          }
        >
          <FaComments />
          <span>Feedback</span>
        </NavLink>

        {/* Logout */}
      {/* Logout */}
<button
  onClick={() => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }}
  className='flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/80 transition-all duration-300 mt-8 w-full'
>

  <FaSignOutAlt />

  <span>Logout</span>

</button>


      </div>

    </div>
  )
}

export default AdminSidebar