import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/task")
      .then((res) => res.json())
      .then((data) => {
        // 🔑 THE FIX: Target the array nested inside the object
        if (data && data.success && Array.isArray(data.tasks)) {
          setTasks(data.tasks);
        } else {
          setTasks([]); // Fallback safety net
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setTasks([]); // Fallback safety net if server crashes
      });
  }, []);

  return (
    <div className="bg-white p-5 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="border p-3 rounded mb-3"
          >
            <h2 className="font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-sm text-gray-600">Assigned To: {task.assignedTo}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Tasks;