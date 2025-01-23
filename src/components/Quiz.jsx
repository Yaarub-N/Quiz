import { useState, useEffect } from "react";
import "../styles/QuizStyles.css";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

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

  console.log(shuffledQuestions);
};

export default Quiz;
