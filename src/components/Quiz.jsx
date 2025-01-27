import { useState, useEffect } from "react";
import React from "react";
import AnswerHandler from "./AnswerHandler";
import Result from "./Result";
import "../styles/QuizStyles.css";
import { ThreeDots } from "react-loader-spinner";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12);

  // Fetch questions from a JSON file
  useEffect(() => {
    setTimeout(() => {
      fetch("/questions.json") // Om filen ligger i public-mappen
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const shuffledData = data
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
          setShuffledQuestions(shuffledData);
        })
        .catch((error) => console.error("Error fetching questions:", error));
    }, 2000);
  }, []);

  // Timer effect
  useEffect(() => {
    if (currentQuestionIndex + 1 === 10) {
      setQuizComplete(true);
    } else {
      if (timeLeft > 0 && !quizComplete) {
        const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setTimeLeft(10);
      }
    }
  }, [timeLeft, quizComplete, currentQuestionIndex]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Rätt! 😀👌");
      setTimeLeft(10);
    } else {
      setFeedback("Fel! 😒");
      setTimeLeft(10);
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
    setTimeLeft(10);
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
    fetch("/questions.json") // Re-fetch questions to reset the quiz
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
    return (
      <div className="quiz-container">
        <div className="threeDts">
          <ThreeDots
            color=" var(--button-hover-background)"
            visible={true}
            height="100"
            width="80"
            radius="100"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="timer">
        <p>
          Återstående tid: <span className="timeLeft"> {timeLeft} </span>
          sekunder
        </p>
        <p>
          Question: {currentQuestionIndex + 1} av {shuffledQuestions.length}
        </p>
      </div>
      <div className="questionContainer">
        <h2 className="question">{currentQuestion.question}</h2>
        <AnswerHandler
          handleAnswer={handleAnswer}
          options={currentQuestion.options}
        />
      </div>
      <p
        className={`feedback ${feedback === "Rätt! 😀👌" ? "right" : "wrong"}`}
      >
        {feedback}
      </p>
    </div>
  );
};

export default Quiz;
