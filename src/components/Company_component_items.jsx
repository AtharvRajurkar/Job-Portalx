import React from "react";
import { useState } from "react";
const Company_component_items = ({ company, handleCompanyChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    handleCompanyChange(company, checked); // Notify parent of job type selection
  };
  return (
    <div className="checkboxes">
      <label for="location">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
      <span>{company}</span>
    </div>
  );
};

export default Company_component_items;
