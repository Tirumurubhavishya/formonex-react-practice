// StudentDetails.jsx
import React from 'react';

function Student({ name, email, mobile }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Student Details</h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Mobile:</span> {mobile}
        </p>
      </div>
    </div>
  );
}

export default Student;