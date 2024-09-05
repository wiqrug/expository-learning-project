import React from "react";
import { Link } from "react-router-dom";

const DescribingUISections = () => {
  return (
    <div className="homepage-container">
      <ul>
        <Link to={"/chapters/describing-ui/sections/your-first-component"}>
          <li>Your First Component</li>
        </Link>
        <Link
          to={
            "/chapters/describing-ui/sections/importing-and-exporting-components"
          }
        >
          <li>Importing and Exporting Components</li>
        </Link>
        <Link to={"/chapters/describing-ui/sections/writing-markup-with-jsx"}>
          <li>Writing Markup with JSX</li>
        </Link>
        <li>Passing Props To Component</li>
        <li>Conditional Rendering</li>
        <li>Keep Components Pure</li>
        <li>Your UI as a Tree</li>
      </ul>
      <Link to={"/chapters/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default DescribingUISections;
