import React, { useState } from "react";
import "./Homepage.scss";
function Homepage() {
  //If Chapter is clicked, Learn react online and about this page should not be visible
  //If About this page is clicked, Learn react online and Chapters should not be visible
  const [showChapters, setShowChapters] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  const handleShowChapters = () => {
    setShowChapters(true);
    setShowAboutPage(false);
  };

  const handleShowABoutPage = () => {
    setShowChapters(false);
    setShowAboutPage(true);
  };

  console.log(showChapters);
  console.log(showAboutPage);

  return (
    <div className="homepage-container">
      {!showChapters && !showAboutPage && (
        <>
          <h3>Learn React Online</h3>
          <button onClick={handleShowChapters}>Chapters</button>
          <button>About this page</button>
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
    </div>
  );
}

export default Homepage;
