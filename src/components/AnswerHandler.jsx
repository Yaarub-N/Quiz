import React, { useState } from "react";
import PropTypes from "prop-types";

//av ChatGPT-4
const AnswerHandler = ({ handleAnswer, options, correctAnswer }) => {
  AnswerHandler.propTypes = {
    handleAnswer: PropTypes.func.isRequired, // Funktion som hanterar svaret
    options: PropTypes.arrayOf(PropTypes.string).isRequired, // Array av alternativ (strings)
    correctAnswer: PropTypes.string.isRequired, // Rätt svar (string)
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (option) => {
    if (!isDisabled) {
      setSelectedOption(option); // Spara användarens val
      handleAnswer(option); // Kör funktionen för att hantera svaret
      setIsDisabled(true); // Inaktivera knappar

      setTimeout(() => {
        setSelectedOption(null); // Återställ val efter 1 sekund
        setIsDisabled(false); // Aktivera knappar igen
      }, 1000);
    }
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option)}
          disabled={isDisabled}
          className={`
            option-btn 
            ${
              selectedOption === option && option === correctAnswer
                ? "correct"
                : ""
            }
            ${
              selectedOption === option && option !== correctAnswer
                ? "incorrect"
                : ""
            }
            ${
              selectedOption !== null && option === correctAnswer
                ? "correct"
                : ""
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default AnswerHandler;
