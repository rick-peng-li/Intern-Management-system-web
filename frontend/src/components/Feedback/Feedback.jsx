import React, { useState } from "react";

const Feedback = () => {
  // Realistic review for Nusa's progress based on your system description
  const [feedbacks] = useState([
    {
      _id: "f1",
      internName: "Musa",
      comments: "Great job implementing all major core functionalities for the intern management system. UI tables and dashboards look excellent.",
      rating: 5
    }
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Intern Feedback Logs</h1>

      <table className="w-full border text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Intern Name</th>
            <th className="p-3 border">Comments</th>
            <th className="p-3 border">Rating</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback._id} className="hover:bg-gray-50">
              <td className="p-3 border font-medium">{feedback.internName}</td>
              <td className="p-3 border text-gray-600 italic">"{feedback.comments}"</td>
              <td className="p-3 border">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {feedback.rating} / 5
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;