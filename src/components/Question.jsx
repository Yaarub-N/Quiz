import PropTypes from "prop-types";

const Question = ({ currentQuestion, handleAnswer }) => {
  if (!currentQuestion || !handleAnswer) {
    return <div>Fel i fråga eller svarshantering</div>;
  }

  return (
    <div className="question">
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Question;
