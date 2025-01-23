import { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Lägg till eller ta bort "dark-theme" från <body> beroende på isDarkTheme
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className="app">
      <header>
        <button className="theme-switch" onClick={handleThemeToggle}>
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
      </header>
      <main>
        <h1>Quiz</h1>
      </main>
      <footer>
        <p>&copy; 2025 Yaarub</p>
      </footer>
    </div>
  );
};

export default App;
