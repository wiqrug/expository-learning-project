import React from "react";
import "../Homepage.scss";

import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage-container">
      <>
        <h3>Learn React Online</h3>
        <div className="button-setup">
          <Link to="/chapters">
            <button>Chapters</button>
          </Link>
          <Link to="/about-us">
            <button>About this page</button>
          </Link>
        </div>
      </>
    </div>
  );
}

export default Homepage;
