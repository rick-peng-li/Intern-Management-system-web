import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    assignedTo: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔑 THE FIX: Send a POST request with the form data to the backend
      const res = await fetch("http://localhost:5000/api/task/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      if (data.success) {
        alert("Task Saved to Database Successfully!");
        // Reset form on success
        setTask({
          title: "",
          description: "",
          deadline: "",
          assignedTo: "",
        });
      } else {
        alert("Error saving task: " + (data.error || "Unknown server error"));
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to connect to the backend server. Is it running?");
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add New Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Task Title */}
          <div>
            <label className="block mb-1 font-medium">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="4"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Deadline */}
          <div>
            <label className="block mb-1 font-medium">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={task.deadline}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Assign Intern */}
          <div>
            <label className="block mb-1 font-medium">
              Assign To
            </label>
            <input
              type="text"
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
              placeholder="Enter intern name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;