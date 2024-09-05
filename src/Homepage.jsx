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

  const handleShowAboutPage = () => {
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
          <div className="about-us">
            <h1>Welcome to Our React Learning Platform!</h1>

            <p>
              This page is designed specifically for beginners who have a basic
              understanding of JavaScript and are looking to take their first
              steps into the world of React.
            </p>

            <h2>Our Goal</h2>
            <p>
              Our goal is to{" "}
              <strong>simplify and explain core React concepts</strong> in a way
              that’s easy to follow, even if you’re just starting out.
            </p>

            <h2>What You'll Learn</h2>
            <p>
              You’ll find chapters that introduce you to key topics, including:
            </p>

            <ul>
              <li>Components</li>
              <li>State</li>
              <li>Props</li>
              <li>Hooks</li>
              <li>And more!</li>
            </ul>

            <p>
              Each section is structured to help you build a solid foundation
              and gain confidence in using React to create interactive, dynamic
              web applications.
            </p>

            <h2>Who Is This For?</h2>
            <p>
              Whether you’re a <em>hobbyist</em> or aiming for a career in web
              development, this page is your guide to mastering the basics of
              React.
            </p>

            <p>
              Start your journey here, and let’s build something great together!
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
