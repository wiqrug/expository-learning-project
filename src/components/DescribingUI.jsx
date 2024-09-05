import React from "react";
import { Link } from "react-router-dom";

const DescribingUI = () => {
  return (
    <div className="homepage-container">
      <h2>Describing the UI</h2>
      <p>
        React is a JavaScript library for rendering user interfaces (UI). UI is
        built from small units like buttons, text, and images. React lets you
        combine them into reusable, nestable components. From web sites to phone
        apps, everything on the screen can be broken down into components. In
        this chapter, you’ll learn to create, customize, and conditionally
        display React components.
      </p>
      <h2>In this chapter</h2>
      <ul>
        <li>How to write your first React component</li>{" "}
        <li>When and how to create multi-component files</li>{" "}
        <li>How to add markup to JavaScript with JSX</li>{" "}
        <li>
          How to use curly braces with JSX to access JavaScript functionality
          from your components
        </li>{" "}
        <li>How to configure components with props</li>{" "}
        <li>How to conditionally render components</li>{" "}
        <li>How to render multiple components at a time</li>{" "}
        <li>How to avoid confusing bugs by keeping components pure</li>{" "}
        <li>Why understanding your UI as trees is useful</li>
      </ul>
      <div className="chapters-button-setup">
        <Link to="/chapters">
          <button>Back</button>
        </Link>
        <Link to="/chapters/describing-ui/first-component">
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default DescribingUI;
