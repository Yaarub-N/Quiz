/*import React from "react";

const AnswerHandler = ({ handleAnswer, options }) => (
  <div className="options">
    {options.map((option, index) => (
      <button key={index} onClick={() => handleAnswer(option)}>
        {option}
      </button>
    ))}
  </div>
);
*/
import React, { useState } from "react";

const AnswerHandler = ({ handleAnswer, options }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (option) => {
    if (!isDisabled) {
      handleAnswer(option); // Kör den ursprungliga funktionen
      setIsDisabled(true); // Inaktivera knappar
      setTimeout(() => {
        setIsDisabled(false); // Aktivera igen efter 1 sekund
      }, 1000); // 1000 ms = 1 sekund
    }
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option)}
          disabled={isDisabled} // Inaktivera om debounce är aktiv
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default AnswerHandler;
