import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FirstPage from "./first-component-subcomps/FirstPage";
import SecondPage from "./first-component-subcomps/SecondPage";
import ThirdPage from "./first-component-subcomps/ThirdPage";

const YourFirstComponent = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handlePage = () => {
    //react passes current value of page as an argument to that function
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
      {page === 0 && <FirstPage></FirstPage>}
      {page === 1 && <SecondPage></SecondPage>}
      {page === 2 && <ThirdPage></ThirdPage>}

      <div className="chapters-button-setup">
        {" "}
        <button onClick={handleBack}>Back</button>
        <button onClick={handlePage}>Continue</button>
      </div>
    </div>
  );
};

export default YourFirstComponent;
