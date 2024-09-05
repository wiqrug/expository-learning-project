import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const usePageNavigation = (initialPage = 0) => {
  const [page, setPage] = useState(initialPage);
  const previousPage = useRef(page);
  const navigate = useNavigate();

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

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPageHandler = (redirectPath = "/") => {
    if (page === 0) {
      navigate(redirectPath);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return { page, nextPage, previousPageHandler };
};

export default usePageNavigation;
