import React from "react";
import FirstPage from "./components/FirstPage";
import usePageNavigation from "../../hooks/usePageNavigation";
import Pages from "./components/Pages";
import { Link } from "react-router-dom";

const ImportingAndExportingComponents = () => {
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
          <Link
            to={
              "/chapters/describing-ui/sections/importing-and-exporting-components/quiz"
            }
          >
            <button>Go to Quiz</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImportingAndExportingComponents;
