import React, { useState } from "react";

const Progress = () => {
  // Tracking Nusa's progress on your exact system task
  const [progressList] = useState([
    {
      _id: "p1",
      internName: "Ayesha",
      currentTask: "Create a student loan handler system",
      completionPercentage: 75 // You can tweak this percentage as needed!
    }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Intern Progress Tracks</h1>

      <table className="w-full border text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Intern Name</th>
            <th className="p-3 border">Current Task</th>
            <th className="p-3 border">Completion</th>
          </tr>
        </thead>
        <tbody>
          {progressList.map((progress) => (
            <tr key={progress._id} className="hover:bg-gray-50">
              <td className="p-3 border font-medium">{progress.internName}</td>
              <td className="p-3 border">{progress.currentTask}</td>
              <td className="p-3 border w-1/4">
                <div className="flex items-center gap-3">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${progress.completionPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 min-w-[40px]">
                    {progress.completionPercentage}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;