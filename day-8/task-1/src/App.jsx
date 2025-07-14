import React, { useState } from 'react';
import './App.css';

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [section, setSection] = useState('');
  const [gender, setGender] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted:
    Name: ${name}
    Email: ${email}
    Roll No: ${rollNo}
    Section: ${section}
    Gender: ${gender}`);

  
    setName('');
    setEmail('');
    setRollNo('');
    setSection('');
    setGender('');
  }

  return (
    <div className="login-container">
      <h2>Student Login Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <p>Name: {name}</p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <p>Email: {email}</p>

      <input
        type="text"
        placeholder="Enter Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        className="input-field"
      />
      <p>Roll No: {rollNo}</p>

      <input
        type="text"
        placeholder="Enter Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
        className="input-field"
      />
      <p>Section: {section}</p>

      <div className="gender-section">
        <p>Gender:</p>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={(e) => setGender(e.target.value)}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={(e) => setGender(e.target.value)}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            value="Other"
            checked={gender === 'Other'}
            onChange={(e) => setGender(e.target.value)}
          /> Other
        </label>
        <p>Selected Gender: {gender}</p>
      </div>

      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LoginForm;
