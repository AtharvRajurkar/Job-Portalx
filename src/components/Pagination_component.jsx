import React from "react";
import Job_component from "./Job_component";

const Pagination_component = ({ filteredJobs, number }) => {
  const slicedArray = filteredJobs.slice((number - 1) * 10, number * 10);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
        height: "fit-content",
        width: "1200px",
      }}
    >
      {slicedArray.map((job) => (
        <Job_component job={job} />
      ))}
    </div>
  );
};

export default Pagination_component;
