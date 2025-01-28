import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
import Quiz from "./Quiz";
import { Tooltip } from "react-tooltip";

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

        <a
          className="themeSwitchContainer"
          data-tooltip-id="my-tooltip"
          data-tooltip-variant="info"
          data-tooltip-offset={5}
          data-tooltip-content={isDarkTheme ? "light theme" : "dark theme"}
        >
          <button className="themeSwitch" onClick={handleThemeToggle}>
            {isDarkTheme ? "🌞" : "🌛"}
          </button>
        </a>
        <Tooltip id="my-tooltip" className="tooltip" />
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
