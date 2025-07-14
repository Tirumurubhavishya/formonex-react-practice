import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ff69b4');
  const [name, setName] = useState('');

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="name-input"
      />

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input"
      />

      <p className="label">Preview:</p>

      <div className="preview-tag" style={{ color: color }}>
        {name || 'Your Name Here'}
      </div>
    </div>
  );
}

export default App;
