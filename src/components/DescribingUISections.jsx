import React from "react";
import { Link } from "react-router-dom";

const DescribingUISections = () => {
  return (
    <div className="homepage-container">
      <ul>
        <Link to={"/chapters/describing-ui/sections/your-fist-component"}>
          <li>Your First Component</li>
        </Link>
        <li>Importing and Exporting Components</li>
        <li>Writing Markup with JSX</li>
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
