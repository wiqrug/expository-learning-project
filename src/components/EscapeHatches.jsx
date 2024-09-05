import React from "react";
import { Link } from "react-router-dom";

const EscapeHatches = () => {
  return (
    <div className="homepage-container">
      <p></p>
      <Link to="/chapters">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default EscapeHatches;
