import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Filtercomponent from "./components/Filtercomponent";
import Job_component from "./components/Job_component";
import Detailed_component from "./components/Detailed_component";
import trial from "./components/trial";
import Home_component from "./components/Home_component";
import axios from "axios";
import "./App.css";
import "./images/searchIcon.svg";
import { jobList } from "./jobData";
const App = () => {
 
  // const fetchData = async () => {
  //   console.log(jobList);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_component />}></Route>
        <Route path="`/${job_id}`" element={<trial />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
