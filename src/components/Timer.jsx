import React from "react";

import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeUp();
    }
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="timer">
      <p>Återstående tid: {timeLeft} sekunder</p>
    </div>
  );
};

export default Timer;
