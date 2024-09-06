import React from "react";
import usePageNavigation from "../../hooks/usePageNavigation";
import { Link } from "react-router-dom";
import Pages from "./components/Pages";

const KeepComponentsPure = () => {
  const { page, nextPage, previousPageHandler } = usePageNavigation();

  return (
    <div className="homepage-container">
      {Pages[page]()}
      <div className="chapters-button-setup">
        <button
          onClick={() =>
            previousPageHandler("/chapters/describing-ui/sections/")
          }
        >
          Back
        </button>
        {page < 1 ? (
          <button onClick={nextPage}>Continue</button>
        ) : (
          <Link to="/chapters/describing-ui/sections/keep-components-pure/quiz">
            <button>Go to Quiz</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default KeepComponentsPure;
