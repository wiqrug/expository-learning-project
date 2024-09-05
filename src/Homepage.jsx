import React, { useState } from "react";
import "./Homepage.scss";
import AboutUs from "./about-us/AboutUs";
import DescribingUI from "./DescribingUI";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage-container">
      <>
        <h3>Learn React Online</h3>
        <Link to="/chapters">
          <button>Chapters</button>
        </Link>
        <Link to="/about-us">
          <button>About this page</button>
        </Link>
      </>
    </div>
  );
}

export default Homepage;
