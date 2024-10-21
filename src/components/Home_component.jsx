import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Filtercomponent from "./Filtercomponent";
import Job_component from "./Job_component";
import Pagination_component from "./Pagination_component";
import { jobList } from "../jobData";
const Home_component = () => {
  const [abc] = useState(jobList);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleSelectedLocations = (city, isSelected) => {
    setSelectedLocations((prevSelectedLocations) => {
      if (isSelected) {
        return [...prevSelectedLocations, city]; // Add the selected city
      } else {
        return prevSelectedLocations.filter((location) => location !== city); // Remove unchecked city
      }
    });
  };

  const handleSelectedJobTypes = (jobType, isSelected) => {
    setSelectedJobTypes((prevSelectedJobTypes) => {
      if (isSelected) {
        return [...prevSelectedJobTypes, jobType]; // Add the selected job type
      } else {
        return prevSelectedJobTypes.filter((type) => type !== jobType); // Remove the unselected job type
      }
    });
  };

  const handleSelectedCompanies = (company, isSelected) => {
    setSelectedCompanies((prevSelectedCompanies) => {
      if (isSelected) {
        return [...prevSelectedCompanies, company]; // Add the selected company
      } else {
        return prevSelectedCompanies.filter((Company) => Company !== company); // Remove the unselected company
      }
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < 10) setCurrentPage(currentPage + 1);
  };

  const filteredJobs = jobList.filter((job) => {
    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.job_city);
    const matchesJobType =
      selectedJobTypes.length === 0 ||
      selectedJobTypes.includes(job.job_employment_type); // Assuming job_type field in jobList
    const matchesCompanies =
      selectedCompanies.length === 0 ||
      selectedCompanies.includes(job.employer_name);
    return matchesLocation && matchesJobType && matchesCompanies;
  });

  return (
    <div className="body">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="hero">
        <div style={{ width: "250px", overflowY: "auto", height: "100vh" }}>
          <Filtercomponent
            handleSelectedLocations={handleSelectedLocations}
            handleSelectedJobTypes={handleSelectedJobTypes}
            handleSelectedCompanies={handleSelectedCompanies}
          />
        </div>
        <div>
          <Pagination_component
            filteredJobs={filteredJobs}
            number={currentPage}
          />
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              style={{ padding: "15px", width: "100px" }}
              className="roundedButton"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <button
              style={{ padding: "15px", width: "100px" }}
              className="roundedButton"
              onClick={handleNextPage}
              disabled={currentPage === 10}
            >
              Next
            </button>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Home_component;
