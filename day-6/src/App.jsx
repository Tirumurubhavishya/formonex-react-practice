import React, { useState } from "react";
import "./App.css";

const flowers = {
  Rose: {
    emoji: "🌹",
    name: "Rose",
    description: "Symbol of love, passion, and beauty."
  },
  Sunflower: {
    emoji: "🌻",
    name: "Sunflower",
    description: "Represents warmth, happiness, and energy."
  },
  Lily: {
    emoji: "🌸",
    name: "Lily",
    description: "Stands for purity, renewal, and peace."
  }
};

function App() {
  const [selected, setSelected] = useState("Rose");

  return (
    <div className="container">
      {/* Header */}
      <header className="navbar">
        <div className="nav-title">🌼 Flower World</div>
      </header>

      {/* Main layout */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          {Object.keys(flowers).map((key) => (
            <div
              key={key}
              className={`sidebar-item ${selected === key ? "active" : ""}`}
              onClick={() => setSelected(key)}
            >
              <span className="icon">{flowers[key].emoji}</span>
              <span>{flowers[key].name}</span>
            </div>
          ))}
        </aside>

        {/* Content */}
        <main className="content">
          <div className="flower-emoji">{flowers[selected].emoji}</div>
          <h2>{flowers[selected].name}</h2>
          <p>{flowers[selected].description}</p>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 Flower World 🌸</footer>
    </div>
  );
}

export default App;