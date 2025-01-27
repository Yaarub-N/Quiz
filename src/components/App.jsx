import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
import Quiz from "./Quiz";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="app">
      <header>
        <h1 className="quiz">Quiz</h1>
        <button className="theme-switch" onClick={handleThemeToggle}>
          {isDarkTheme ? "🌞" : "🌛"}
        </button>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>&copy; 2025 Yaarub</p>
      </footer>
    </div>
  );
};

export default App;
