import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
// import { isFinished, setIsFinished, score, setScore } from "./App";

function QuestionViewer({ data, score, setScore, isFinished, setIsFinished }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the index of the current object

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSelectedAnswer(null);
  }; //Function for next question

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }; //Function for "previous" button
  // Sleppa?

  const currentQuestion = data[currentIndex]; // Get the object to display

  const correctAnswer = currentQuestion.correctIndex;

  const questionId = currentQuestion.id;

  const [selectedAnswer, setSelectedAnswer] = useState(null); //state to track selected answer

  const [quizProgress, setQuizProgress] = useState(0); //state for progress bar

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setQuizProgress(quizProgress + 10);

    if (answerIndex === correctAnswer) {
      setScore(score + 1);
      console.log(score);
    }

    if (questionId < 10) {
      setTimeout(() => {
        handleNext();
      }, 1000);
    }

    // You can add logic here to check if the answer is correct
    // and provide feedback, move to the next question, etc.
  };

  const finishQuiz = () => {
    setIsFinished(!isFinished);
  };

  return (
    <div className="spurning-div">
      {currentQuestion ? (
        <div>
          <h2>Spurning {questionId}:</h2>
          <p className="question">{currentQuestion.question}</p>
          <p className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option}
                className="option"
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null && selectedAnswer !== index} //disable other buttons, user can't change their answer
                style={{
                  backgroundColor:
                    selectedAnswer !== null &&
                    selectedAnswer === index &&
                    selectedAnswer === correctAnswer
                      ? "var(--secondary-color)" //Rétt svar
                      : selectedAnswer !== null &&
                        selectedAnswer === index &&
                        selectedAnswer !== correctAnswer
                      ? "var(--wrong-answer-color)" //Rangt svar
                      : "",
                  cursor:
                    selectedAnswer !== null && selectedAnswer !== index
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {option}
              </button>
            ))}
          </p>
          <ProgressBar progress={quizProgress} color="var(--primary-color)" />
        </div>
      ) : (
        <p>No object selected.</p>
      )}
      {/* <button onClick={handlePrevious} disabled={data.length <= 1}>
          Previous
        </button> */}
      {/* <button onClick={handleNext} disabled={selectedAnswer === null}>
        Næsta spurning
      </button> */}
      {questionId === 10 && currentIndex === 9 && selectedAnswer !== null ? (
        <button className="finish-button" onClick={finishQuiz}>
          Finish
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default QuestionViewer;
