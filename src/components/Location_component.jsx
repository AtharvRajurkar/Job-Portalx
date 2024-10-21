import React from "react";
import { useState } from "react";
import Location_component_items from "./Location_component_items";
import { jobList } from "../jobData";
const Location_component = ({ handleSelectedLocations }) => {
  const handleLocationChange = (city, isSelected) => {
    handleSelectedLocations(city, isSelected); // Pass up the location state
  };
  // const uniqueCities = [...new Set(jobList.map((job) => job.job_city))];
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Location</div>
      <br />

      {jobList.map(
        (job) =>
          job.job_city && (
            <Location_component_items
              city={job.job_city}
              handleLocationChange={handleLocationChange}
            />
          )
      )}
    </div>
  );
};

export default Location_component;
