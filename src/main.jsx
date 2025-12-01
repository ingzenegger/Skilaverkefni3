import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import QuestionViewer from "./QuestionViewer.jsx";
import { questions } from "./questions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Krakkakviss</h1>
    {/* <App /> */}
    <QuestionViewer data={questions} />
  </StrictMode>
);
