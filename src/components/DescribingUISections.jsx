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
        <Link
          to={"/chapters/describing-ui/sections/passing-props-to-a-component"}
        >
          <li>Passing Props To Component</li>
        </Link>
        <Link to={"/chapters/describing-ui/sections/conditional-rendering"}>
          <li>Conditional Rendering</li>
        </Link>
        <Link to={"/chapters/describing-ui/sections/keep-components-pure"}>
          <li>Keep Components Pure</li>
        </Link>
        <Link to={"/chapters/describing-ui/sections/your-ui-as-a-tree"}>
          <li>Your UI As A Tree</li>
        </Link>
      </ul>
      <Link to={"/chapters/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default DescribingUISections;
