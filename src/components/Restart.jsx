import React from "react";
import "../styles/QuizStyles.css";

const RestartButton = ({ onRestart }) => {
  return (
    <button className="restart" onClick={onRestart}>
      Starta om
    </button>
  );
};

export default RestartButton;
