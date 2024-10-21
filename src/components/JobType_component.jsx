import React from "react";
import JobType_component_items from "./JobType_component_items";
const JobType_component = ({ handleSelectedJobTypes }) => {
  const handleJobTypeChange = (Jobtype, isSelected) => {
    handleSelectedJobTypes(Jobtype, isSelected); // Notify parent of the job type selection
  };
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Job Type</div>
      <br />
      <JobType_component_items
        Jobtype="FULLTIME"
        handleJobTypeChange={handleJobTypeChange}
      />
      <JobType_component_items
        Jobtype="CONTRACTOR"
        handleJobTypeChange={handleJobTypeChange}
      />
      <JobType_component_items
        Jobtype="PARTTIME"
        handleJobTypeChange={handleJobTypeChange}
      />
      <JobType_component_items
        Jobtype="Work From Home"
        handleJobTypeChange={handleJobTypeChange}
      />
    </div>
  );
};

export default JobType_component;
