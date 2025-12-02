import { useState } from "react";
import { questions } from "./questions";
import "./App.css";
import QuestionViewer from "./QuestionViewer.jsx";

function App() {
  const [user, setUser] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const startQuiz = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying ? (
        <QuestionViewer data={questions} />
      ) : (
        <div>
          <h2>
            Velkomin í Krakka<span className="kviss">kviss!</span>
          </h2>
          <input
            value={user}
            placeholder="Sláðu inn nafnið þitt"
            onChange={(e) => setUser(e.target.value)}
          />
          <p>Halló, {user || "gestur"}!</p>
          <button className="start" onClick={startQuiz}>
            BYRJA
          </button>
        </div>
      )}
    </>
  );
}

export default App;
