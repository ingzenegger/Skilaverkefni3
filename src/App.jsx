import { useState } from "react";
import { questions } from "./questions";
import "./App.css";

function App() {
  return (
    <>
      {console.log(questions[0])}
      <ul>
        {questions.map((qst) => (
          <li key={qst.id} className="spurning">
            Spurning {qst.id}: {qst.question}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
