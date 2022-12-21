import { useEffect, useState } from "react";

const Pagination = ({
  page,
  setCurrentPage,
  showingEmployee,
  totalEmployee,
}) => {
  const [currentButton, setCurrentButton] = useState(1);
  const pages = page;
  const numberOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentButton]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{showingEmployee}</b> out of <b>{totalEmployee}</b> entries
      </div>
      <ul className="pagination">
        <li
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a href="#!" className="page-link">
            Previous
          </a>
        </li>
        {numberOfPages.map((page, index) => {
          return (
            <li
              key={index}
              onClick={() => setCurrentButton(page)}
              className={`${
                currentButton === page ? "page-item active" : "page-item "
              }`}
            >
              <a href="#!" className="page-link">
                {page}
              </a>
            </li>
          );
        })}
        <li
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
          className={`${
            currentButton === numberOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a href="#!" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;

