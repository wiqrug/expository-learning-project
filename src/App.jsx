import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chapters from "./components/Chapters";
import AboutUs from "./about-us/AboutUs";
import DescribingUI from "./components/DescribingUI";
import AddingInteractivity from "./components/AddingInteractivity";
import ManagingState from "./components/ManagingState";
import EscapeHatches from "./components/EscapeHatches";

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
        <Route path="/chapters/describing-ui" element={<DescribingUI />} />
        <Route
          path="/chapters/adding-interactivity"
          element={<AddingInteractivity />}
        />
        <Route path="/chapters/managing-state" element={<ManagingState />} />
        <Route path="/chapters/escape-hatches" element={<EscapeHatches />} />
      </Routes>
    </Router>
  );
}

export default App;
