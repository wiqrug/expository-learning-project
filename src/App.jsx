import React from "react";
import Quiz from "./Quizz";
import { jsQuizz } from "./constants";

function App() {
  // @ts-ignore
  return <Quiz questions={jsQuizz.questions}></Quiz>;
}

export default App;
