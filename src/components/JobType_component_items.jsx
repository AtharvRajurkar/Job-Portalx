import React from "react";
import { useState } from "react";
const JobType_component_items = ({ Jobtype, handleJobTypeChange }) => {
  // const [jobtype, setJobType] = useState("");
  // const handleChange = (event) =>{
  //   if(event.target.checked){
  //     setJobType(Jobtype);
  //     handleJobTypeChange(Jobtype, true);
  //   }

  //   else{
  //     setJobType("");
  //     handleJobTypeChange(Jobtype, false);
  //   }

  // }
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    handleJobTypeChange(Jobtype, checked); // Notify parent of job type selection
  };
  return (
    <div className="checkboxes">
      <label for="location">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
      <span>{Jobtype}</span>
    </div>
  );
};

export default JobType_component_items;
