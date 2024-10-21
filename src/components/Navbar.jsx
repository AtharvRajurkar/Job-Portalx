import React from "react";
import Navbar_component from "./Navbar_component";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div style={{ display: "flex", gap: "40px" }}>
        <Navbar_component thing={"Jobs"} />
        <Navbar_component thing={"Companies"} />
        <Navbar_component thing={"Services"} />
      </div>

      <div className="TextInput">
        <input type="text" placeholder="Search jobs here" className="input" />

        <button className="search-button">
          <img className="search-icon" src="Group 1.svg" alt="searchIcon" />
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="roundedButton">Login</button>
        <button className="roundedButton">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
