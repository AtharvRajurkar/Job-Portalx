import React from "react";
import Navbar_component from "./Navbar_component";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Navbar_component thing={"Jobs"} />
      <Navbar_component thing={"Companies"} />
      <Navbar_component thing={"Services"} />
      <div className="TextInput" style={{ display: "flex", padding: "5px" }}>
        <form>
          <input type="text" placeholder="Search jobs here" className="input" />
        </form>
        <button>
          {/* <img src="search-outline.png" alt="searchIcon" /> */}
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <button>Login</button>
      <button>Register</button>
    </div>
  );
};

export default Navbar;
