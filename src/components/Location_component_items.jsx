import React from "react";
import { useState } from "react";
const Location_component_items = ({ city, handleLocationChange }) => {
  const [location, setlocation] = useState("");
  const handleChange = (event) => {
    if (event.target.checked) {
      setlocation(city);
      handleLocationChange(city, true);
    } else {
      setlocation("");
      handleLocationChange(city, false);
    }
  };
  return (
    <div className="checkboxes">
      <label>
        <input type="checkbox" onChange={handleChange} />
      </label>
      <span>{city}</span>
    </div>
  );
};

export default Location_component_items;
