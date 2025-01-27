import React from "react";
import PropTypes from "prop-types";
import "../styles/QuizStyles.css";

const RestartButton = ({ onRestart }) => {
  //av ChatGPT-4
  RestartButton.propTypes = {
    onRestart: PropTypes.func.isRequired, // Funktion för att starta om quizet
  };
  return (
    <button className="restart" onClick={onRestart}>
      Starta om
    </button>
  );
};

export default RestartButton;
