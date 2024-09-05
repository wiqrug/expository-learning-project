import React from "react";
import Quiz from "./Quizz";
import { jsQuizz } from "./constants";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chapters from "./Chapters";
import AboutUs from "./about-us/AboutUs";
import DescribingUI from "./DescribingUI";
import AddingInteractivity from "./AddingInteractivity";
import ManagingState from "./ManagingState";
import EscapeHatches from "./EscapeHatches";

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
        <Route
          path="/chapters/describing-ui"
          element={<DescribingUI></DescribingUI>}
        />
        <Route
          path="/chapters/adding-interactivity"
          element={<AddingInteractivity></AddingInteractivity>}
        />
        <Route
          path="/chapters/managing-state"
          element={<ManagingState></ManagingState>}
        />
        <Route
          path="/chapters/escape-hatches"
          element={<EscapeHatches></EscapeHatches>}
        />
      </Routes>
    </Router>
  );
}

export default App;
