// App.jsx
import React, { useState } from 'react';
import Student from './Student';
import Studentdata from './Student.json'; // Import student data

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [showDetails, setShowDetails] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data against Studentdata
    const matchedStudent = Studentdata.find(
      (student) =>
        student.name === formData.name &&
        student.email === formData.email &&
        student.mobile === formData.mobile
    );

    if (matchedStudent) {
      setShowDetails(true);
    } else {
      setError('Student not found. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-100 p-4">
      {!showDetails ? (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-indigo-600">Student Login</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-200 focus:border-indigo-600 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-200 focus:border-indigo-600 outline-none"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-200 focus:border-indigo-600 outline-none"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
            Sign In
          </button>
        </form>
      ) : (
        <Student name={formData.name} email={formData.email} mobile={formData.mobile} />
      )}
    </div>
  );
}

export default App;
