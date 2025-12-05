import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function QuestionViewer({
  data,
  score,
  setScore,
  isFinished,
  setIsFinished,
  answers,
  setAnswers,
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the index of the current object

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSelectedAnswer(null);
  }; //Function for moving to next question

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }; //Function for "previous" button
  // ákvað að sleppa next og previous tökkum, notandi getur ekki breytt svari svo það virtist ekki þjóna tilgangi að bakka. Hægt að byrja aftur upp á nýtt og reyna að hækka score frekar. En function fær að hanga inni svo ég sjái hvernig þetta virkaði.

  const currentQuestion = data[currentIndex]; // Get the object to display

  const correctAnswer = currentQuestion.correctIndex;

  const questionId = currentQuestion.id;

  const [selectedAnswer, setSelectedAnswer] = useState(null); //state to track selected answer

  const [quizProgress, setQuizProgress] = useState(0); //state for progress bar

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setQuizProgress(quizProgress + 10);

    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = answerIndex;
      return updated;
    });

    if (answerIndex === correctAnswer) {
      setScore(score + 1);
    }

    if (questionId < 10) {
      setTimeout(() => {
        handleNext();
      }, 1000);
    }
  };

  const finishQuiz = () => {
    setIsFinished(!isFinished);
    console.log(answers);
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
                disabled={selectedAnswer !== null && selectedAnswer !== index} //disable other buttons so user can't change their answer
                style={{
                  backgroundColor:
                    selectedAnswer !== null &&
                    selectedAnswer === index &&
                    selectedAnswer === correctAnswer
                      ? "var(--secondary-color)" //Correct answer
                      : selectedAnswer !== null &&
                        selectedAnswer === index &&
                        selectedAnswer !== correctAnswer
                      ? "var(--wrong-answer-color)" //Wrong answer
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

      {questionId === 10 && currentIndex === 9 && selectedAnswer !== null ? (
        <button className="finish-button" onClick={finishQuiz}>
          Ljúka <span className="kviss">kvizzi</span>
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default QuestionViewer;
