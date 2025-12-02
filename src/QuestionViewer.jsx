import React, { useState } from "react";

function QuestionViewer({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the index of the current object

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSelectedAnswer(null);
  }; //Function for "next" button

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }; //Function for "previous" button
  // Sleppa?

  const currentQuestion = data[currentIndex]; // Get the object to display

  const currentAnswer = currentQuestion.correctIndex;

  const questionId = currentQuestion.id;

  const [selectedAnswer, setSelectedAnswer] = useState(null); //state to track selected answer

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);

    // You can add logic here to check if the answer is correct
    // and provide feedback, move to the next question, etc.
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
                    selectedAnswer === currentAnswer
                      ? "#01c2ab" //Rétt svar
                      : selectedAnswer !== null &&
                        selectedAnswer === index &&
                        selectedAnswer !== currentAnswer
                      ? "#c74c2b" //Rangt svar
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
        </div>
      ) : (
        <p>No object selected.</p>
      )}
      {/* <button onClick={handlePrevious} disabled={data.length <= 1}>
          Previous
        </button> */}
      <button onClick={handleNext} disabled={data.length <= 1}>
        Næsta spurning
      </button>
      {questionId === 10 && currentIndex === 9 && selectedAnswer !== null ? (
        <button>Finish</button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default QuestionViewer;
