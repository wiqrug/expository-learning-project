import React from "react";
import DescribingUI from "./DescribingUI";
import { Link } from "react-router-dom";

function Chapters() {
  return (
    <div className="homepage-container">
      <ul>
        <li>
          Describing the UI<DescribingUI></DescribingUI>
        </li>
        <li>Adding interactivity</li>
        <li>Managing State</li>
        <li>Escape Hatches</li>
      </ul>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Chapters;
