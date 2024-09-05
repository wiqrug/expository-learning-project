import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Pages from "./components/Pages";

const YourFirstComponent = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const previousPage = useRef(0);

  useEffect(() => {
    if (page > previousPage.current) {
      const container = document.querySelector(".homepage-container");
      if (container) {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }

    previousPage.current = page;
  }, [page]);

  const handlePage = () => {
    if (page === 2) {
      return;
    }
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
      {Pages[page]()}
      <div className="chapters-button-setup">
        <button onClick={handleBack}>Back</button>
        <button onClick={handlePage}>Continue</button>
      </div>
    </div>
  );
};

export default YourFirstComponent;
