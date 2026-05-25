import React, { useState } from "react";

const Submissions = () => {
  // Dummy data using your exact project and intern name from the logs
  const [submissions] = useState([
    {
      _id: "s1",
      internName: "Musa",
      taskTitle: "Intern management system",
      githubLink: "https://github.com/Nusa-dev/intern-management-system"
    }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Submissions</h1>

      <table className="w-full border text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Intern</th>
            <th className="p-3 border">Task</th>
            <th className="p-3 border">GitHub Link</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id} className="hover:bg-gray-50">
              <td className="p-3 border font-medium">{submission.internName}</td>
              <td className="p-3 border">{submission.taskTitle}</td>
              <td className="p-3 border">
                <a 
                  href={submission.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {submission.githubLink}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;