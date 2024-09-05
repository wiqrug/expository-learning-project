import React, { useState } from "react";
import { resultInitialState } from "../utils/constants";
import { Link } from "react-router-dom";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(true);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIndex(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };
  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                // @ts-ignore
                className={answerIndex === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIndex === null}>
              {currentQuestion === questions.length - 1 ? "finish" : "next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result </h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>

          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Total Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <div className="chapters-button-setup">
            <Link to={"/chapters/describing-ui/sections/"}>
              <button>Back</button>
            </Link>
            <button onClick={onTryAgain}>try again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
