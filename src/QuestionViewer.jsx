import React, { useState } from "react";

function QuestionViewer({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the index of the current object

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentQuestion = data[currentIndex]; // Get the object to display

  return (
    <div className="spurning-div">
      {currentQuestion ? (
        <div>
          <h2>Spurning {currentQuestion.id}:</h2>
          <p className="question">{currentQuestion.question}</p>
          <p className="options">
            {currentQuestion.options.map((opt) => (
              <button key={opt} className="option">
                {opt}
              </button>
            ))}
          </p>

          {/* Render other properties of the currentQuestion */}
        </div>
      ) : (
        <p>No object selected.</p>
      )}

      <button onClick={handlePrevious} disabled={data.length <= 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={data.length <= 1}>
        Next
      </button>
    </div>
  );
}

export default QuestionViewer;
