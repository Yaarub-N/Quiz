import { useState, useEffect } from "react";
import AnswerHandler from "./AnswerHandler";
import Result from "./Result";
import "../styles/QuizStyles.css";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Fetch questions from a JSON file
  useEffect(() => {
    fetch("../jsonFolder/questions.json")
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

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setQuizComplete(true);
    }
  }, [timeLeft, quizComplete]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Rätt! 😀👌");
    } else {
      setFeedback("Fel! 😒");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(30);
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
    fetch("../jsonFolder/questions.json") // Re-fetch questions to reset the quiz
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = data.sort(() => Math.random() - 0.5).slice(0, 10);
        setShuffledQuestions(shuffledData);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  };

  if (quizComplete) {
    return (
      <Result
        score={score}
        totalQuestions={shuffledQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  if (shuffledQuestions.length === 0) {
    return <div className="quiz-container">Laddar frågor...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="timer">
        <p>Återstående tid: {timeLeft} sekunder</p>
      </div>
      <div className="questionContainer">
        <h2 className="question">{currentQuestion.question}</h2>
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
