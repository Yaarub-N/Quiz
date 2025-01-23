import React from "react";

import PropTypes from "prop-types";

const Result = ({ score, totalQuestions, onRestart }) => {
  const getResultMessage = () => {
    if (score === totalQuestions) {
      return "Perfect... Du är en stjärna! 🎊 🎉😁👌";
    } else if (score === 8 && score < 10) {
      return "Grymt! 🎉😁👌";
    } else if (score > 5 && score < 8) {
      return "Bra jobbat! 🎉";
    } else {
      return "Försök igen. Du behöver öva mer 👎😣.";
    }
  };

  return (
    <div className="quiz-container">
      <div className="result">
        <h1>{getResultMessage()}</h1>
        <p className="points">
          Din poäng: {score} av {totalQuestions}
        </p>
        <button className="startaOm" onClick={onRestart}>
          Starta om
        </button>
      </div>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default Result;
