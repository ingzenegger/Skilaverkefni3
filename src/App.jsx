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
      )}
    </>
  );
}

export default App;
