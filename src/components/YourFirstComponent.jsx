import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import FirstPage from "./first-component-subcomps/FirstPage";
import SecondPage from "./first-component-subcomps/SecondPage";
import ThirdPage from "./first-component-subcomps/ThirdPage";

const YourFirstComponent = () => {
  const [page, setPage] = useState(0);
  const previousPage = useRef(0); // To track the previous page
  const navigate = useNavigate();

  // Scroll the container to the top when page changes, but only when going forward
  useEffect(() => {
    if (page > previousPage.current) {
      const container = document.querySelector(".homepage-container");
      if (container) {
        container.scrollTo({
          top: 0,
          behavior: "smooth", // Optional for smooth scrolling
        });
      }
    }

    // Update the previous page to the current page after the effect runs
    previousPage.current = page;
  }, [page]);

  const handlePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    if (page === 0) {
      navigate("/");
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="homepage-container">
      {page === 0 && <FirstPage />}
      {page === 1 && <SecondPage />}
      {page === 2 && <ThirdPage />}

      <div className="chapters-button-setup">
        <button onClick={handleBack}>Back</button>
        <button onClick={handlePage}>Continue</button>
      </div>
    </div>
  );
};

export default YourFirstComponent;
