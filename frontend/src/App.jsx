import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import InternDashboard from "./pages/InternDashboard";

import PrivateRoutes from "./assets/utils/PrivateRoutes";
import RoleBaseRoute from "./assets/utils/RoleBaseRoute";

import AdminSummary from "./components/dashboard/AdminSummary";

import Interns from "./components/Interns/Interns";
import AddInterns from "./components/Interns/AddInterns";
import DeleteInterns from "./components/Interns/DeleteInterns";

import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/Tasks/AddTask";

import Submissions from "./components/Submissions/Submissions";
import Progress from "./components/Progress/Progress";
import Feedback from "./components/Feedback/Feedback";

// 🔑 NEW INTERN COMPONENT IMPORTS
import InternOverview from "./pages/InternOverview";
import InternTasks from "./pages/InternTask";
import SubmitTaskForm from "./pages/SubmitTaskForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        >
          {/* Nested Routes */}
          <Route index element={<AdminSummary />} />

          {/* Intern Routes */}
          <Route path="interns" element={<Interns />} />
          <Route path="add-intern" element={<AddInterns />} />
          <Route path="delete-intern" element={<DeleteInterns />} />

          {/* Task Routes */}
          <Route path="tasks" element={<Tasks />} />
          <Route path="add-task" element={<AddTask />} />

          {/* Other Routes */}
          <Route path="submissions" element={<Submissions />} />
          <Route path="progress" element={<Progress />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* 🔑 UPDATED: Intern Dashboard Layout with Nested Child Routes */}
        <Route
          path="/intern-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["intern"]}>
                <InternDashboard />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        >
          {/* 🔑 These render inside the <Outlet /> of your InternDashboard component */}
          <Route index element={<InternOverview />} />
          <Route path="my-tasks" element={<InternTasks />} />
          <Route path="submit-task" element={<SubmitTaskForm />} />
        </Route>

        {/* Unauthorized Route */}
        <Route
          path="/unauthorized"
          element={<h1>Unauthorized Access</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;