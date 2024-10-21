import React from "react";
import Location_component from "./Location_component";
import Company_component from "./Company_component";
import JobType_component from "./JobType_component";
const Filtercomponent = ({
  handleSelectedLocations,
  handleSelectedJobTypes,
  handleSelectedCompanies,
}) => {
  return (
    <div className="Filter_component">
      <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>All Filters</div>
      <hr />
      <Location_component handleSelectedLocations={handleSelectedLocations} />
      <hr />
      <Company_component handleSelectedCompanies={handleSelectedCompanies} />
      <hr />
      <JobType_component handleSelectedJobTypes={handleSelectedJobTypes} />
    </div>
  );
};

export default Filtercomponent;
