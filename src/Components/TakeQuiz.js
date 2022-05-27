import React from "react";
import Start from "./Start";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import End from "./End";

import { useState, useEffect } from "react";
const TakeQuiz = () => {
  let interval;

  const location = useLocation();

  const quizData = location.state.arr;

  const [step, setStep] = useState(1);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      {/* {step === 1 && <Start onQuizStart={quizStartHandler} />} */}
      {step === 1 && (
        <Question
          data={quizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
        />
      )}


    </div>
  );
};

export default TakeQuiz;
