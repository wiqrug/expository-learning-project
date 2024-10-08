import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chapters from "./components/Chapters";
import AboutUs from "./components/AboutUs";
import DescribingUI from "./components/DescribingUI";
import AddingInteractivity from "./components/AddingInteractivity";
import ManagingState from "./components/ManagingState";
import EscapeHatches from "./components/EscapeHatches";
import YourFirstComponent from "./components/YourFirstComponent";
import DescribingUISections from "./components/DescribingUISections";
import Quiz from "./components/Quizz";
import { jsQuizz } from "./utils/constants";
import ImportingAndExportingComponents from "./components/ImportingAndExportingComponents";
import WritingMarkupWithJsx from "./components/WritingMarkupWithJsx";
import PassingPropsToAComponent from "./components/PassingPropsToAComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import KeepComponentsPure from "./components/KeepComponentsPure";
import YourUIAsATree from "./components/YourUIAsATree";

function App() {
  return (
    <Router>
      <Link to="/">
        <button className="top-left-button">Home</button>
      </Link>
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
        <Route
          path="/chapters/describing-ui/first-component"
          element={<YourFirstComponent />}
        />
        <Route
          path="/chapters/describing-ui/sections"
          element={<DescribingUISections />}
        />
        <Route
          path="/chapters/describing-ui/sections/your-first-component"
          element={<YourFirstComponent />}
        />
        <Route
          path="/chapters/describing-ui/sections/your-first-component/quiz"
          element={<Quiz questions={jsQuizz.questions}></Quiz>}
        />
        <Route
          path="/chapters/describing-ui/sections/importing-and-exporting-components"
          element={
            <ImportingAndExportingComponents></ImportingAndExportingComponents>
          }
        />
        <Route
          path="/chapters/describing-ui/sections/importing-and-exporting-components/quiz"
          element={<Quiz questions={jsQuizz.questions2}></Quiz>}
        />
        <Route
          path="/chapters/describing-ui/sections/writing-markup-with-jsx/quiz"
          element={<Quiz questions={jsQuizz.questions3}></Quiz>}
        />
        <Route
          path="/chapters/describing-ui/sections/writing-markup-with-jsx"
          element={<WritingMarkupWithJsx></WritingMarkupWithJsx>}
        />
        <Route
          path="/chapters/describing-ui/sections/passing-props-to-a-component"
          element={<PassingPropsToAComponent />}
        />
        <Route
          path="/chapters/describing-ui/sections/passing-props-to-a-component/quiz"
          element={<Quiz questions={jsQuizz.questions4}></Quiz>}
        />

        <Route
          path="/chapters/describing-ui/sections/conditional-rendering"
          element={<ConditionalRendering />}
        ></Route>
        <Route
          path="/chapters/describing-ui/sections/conditional-rendering/quiz"
          element={<Quiz questions={jsQuizz.questions5}></Quiz>}
        />
        <Route
          path="/chapters/describing-ui/sections/keep-components-pure"
          element={<KeepComponentsPure />}
        ></Route>
        <Route
          path="/chapters/describing-ui/sections/keep-components-pure/quiz"
          element={<Quiz questions={jsQuizz.questions6}></Quiz>}
        />
        <Route
          path="/chapters/describing-ui/sections/your-ui-as-a-tree"
          element={<YourUIAsATree />}
        ></Route>
        <Route
          path="/chapters/describing-ui/sections/your-ui-as-a-tree/quiz"
          element={<Quiz questions={jsQuizz.questions7}></Quiz>}
        />
      </Routes>
    </Router>
  );
}

export default App;
