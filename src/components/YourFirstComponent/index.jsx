import React from "react";
import { Link } from "react-router-dom";
import Pages from "./components/Pages";
import usePageNavigation from "../../hooks/usePageNavigation";

const YourFirstComponent = () => {
  // Use the custom hook
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
        {page < 2 ? (
          <button onClick={nextPage}>Continue</button>
        ) : (
          <Link to="/chapters/describing-ui/sections/your-first-component/quiz">
            <button>Go to Quiz</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default YourFirstComponent;
