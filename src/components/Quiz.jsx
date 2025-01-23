import { useState, useEffect } from "react";
import AnswerHandler from "./AnswerHandler";
import "../styles/QuizStyles.css";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("questions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const shuffledData = data.sort(() => Math.random() - 0.5).slice(0, 10);
        setShuffledQuestions(shuffledData);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Rätt! 😀👌");
    } else {
      setFeedback("Fel! 😒");
    }
  };

  if (shuffledQuestions.length === 0) {
    return <div className="quiz-container">Laddar frågor...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <AnswerHandler
          handleAnswer={handleAnswer}
          options={currentQuestion.options}
        />
      </div>
      <p className="feedback">{feedback}</p>
    </div>
  );
};

export default Quiz;
