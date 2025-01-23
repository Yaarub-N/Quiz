import { useState, useEffect } from "react";
import "../styles/QuizStyles.css";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Fetch questions from a JSON file
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

  if (shuffledQuestions.length === 0) {
    return <div className="quiz-container">Laddar frågor...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
