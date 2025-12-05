import { useState } from "react";
import { questions } from "./questions";
import "./App.css";
import QuestionViewer from "./QuestionViewer.jsx";
import QuizComplete from "./QuizComplete.jsx";

function App() {
  const [user, setUser] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null)); //added later, doesn't really do anything but show that  I can use useState to store data into an array, and console log it on finish. (ég líka að reyna venja mig á að nota ensku...)

  const startQuiz = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying === !true && isFinished === !true ? (
        <div>
          <input
            value={user}
            placeholder="Sláðu inn nafnið þitt"
            onChange={(e) => setUser(e.target.value)}
          />
          <h2>
            Halló,<span className="user-name"> {user || "snillingur"}</span>!{" "}
          </h2>
          <h2>
            {" "}
            Ertu klár í <span className="krakka">Krakka</span>
            <span className="kviss">kvizzið?</span>
          </h2>

          <button className="start" onClick={startQuiz}>
            BYRJA
          </button>
        </div>
      ) : isPlaying && isFinished === !true ? (
        <QuestionViewer
          data={questions}
          setScore={setScore}
          score={score}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          answers={answers}
          setAnswers={setAnswers}
        />
      ) : isPlaying && isFinished ? (
        <QuizComplete
          user={user}
          score={score}
          setScore={setScore}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          answers={answers}
          setAnswers={setAnswers}
        />
      ) : (
        <p>Hvar er appið mitt?</p>
      )}
    </>
  );
}

export default App;
