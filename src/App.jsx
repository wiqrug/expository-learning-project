import React from "react";
import Quiz from "./Quizz";
import { jsQuizz } from "./constants";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chapters from "./Chapters";
import AboutUs from "./about-us/AboutUs";

function App() {
  // @ts-ignore
  // return <Quiz questions={jsQuizz.questions}></Quiz>;
  // return <Homepage></Homepage>;

  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
