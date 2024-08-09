import React from "react";
import { Pagination } from "@mui/material";

const Custompagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0); // Scroll to top when the page changes
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <Pagination
        count={numOfPages}
        onChange={handlePageChange}
        color="primary"
        size="large"
      />
    </div>
  );
};

export default Custompagination;
