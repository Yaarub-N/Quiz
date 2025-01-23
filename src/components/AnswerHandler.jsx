const AnswerHandler = ({ handleAnswer, options }) => (
  <div className="options">
    {options.map((option, index) => (
      <button key={index} onClick={() => handleAnswer(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default AnswerHandler;
