import React from "react";
import DescribingUI from "./DescribingUI";
import { Link } from "react-router-dom";

function Chapters() {
  return (
    <div className="homepage-container">
      <ul>
        <Link to="/chapters/describing-ui/sections">
          <li>Describing the UI</li>
        </Link>
        <Link to="/chapters/adding-interactivity">
          <li>Adding Interactivity</li>
        </Link>
        <Link to="/chapters/managing-state">
          <li>Managing State</li>
        </Link>
        <Link to="/chapters/escape-hatches">
          <li>Escape Hatches</li>
        </Link>
      </ul>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Chapters;
