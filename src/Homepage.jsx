import React, { useState } from "react";
import "./Homepage.scss";
import AboutUs from "./about-us/AboutUs";
function Homepage() {
  //If Chapter is clicked, Learn react online and about this page should not be visible
  //If About this page is clicked, Learn react online and Chapters should not be visible
  const [showChapters, setShowChapters] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  const handleShowChapters = () => {
    setShowChapters(true);
    setShowAboutPage(false);
  };

  const handleShowAboutPage = () => {
    setShowChapters(false);
    setShowAboutPage(true);
  };

  const handleReset = () => {
    setShowChapters(false);
    setShowAboutPage(false);
  };
  console.log(showChapters);
  console.log(showAboutPage);

  return (
    <div className="homepage-container">
      {!showChapters && !showAboutPage && (
        <>
          <h3>Learn React Online</h3>
          <button onClick={handleShowChapters}>Chapters</button>
          <button onClick={handleShowAboutPage}>About this page</button>
        </>
      )}

      {showChapters && (
        <>
          <h1>Describing the UI</h1>
          <h1>Adding interactivity</h1>
          <h1>Managing State</h1>
          <h1>Escape Hatches</h1>
        </>
      )}
      {showAboutPage && (
        <>
          <AboutUs></AboutUs>
          <button onClick={handleReset}>Back</button>
        </>
      )}
    </div>
  );
}

export default Homepage;
