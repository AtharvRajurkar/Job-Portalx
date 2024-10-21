import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { jobList } from "../jobData";

const Detailed_component = () => {
  const { id } = useParams(); // Extract job id from the URL

  // Find the job by id (parse job_id to integer if necessary)
  const Foundjob = jobList.find((job) => job.job_id === id);

  const {
    job_title,
    employer_name,
    job_min_salary,
    job_max_salary,
    job_city,
    job_required_experience: { required_experience_in_months },
    job_highlights: { Benefits },
    job_description,
    employer_logo,
    job_posted_at_datetime_utc,
  } = Foundjob; // Destructure job properties

  const logoUrl = employer_logo;

  return (
    <div className="Detailed_component">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          justifyItems: "center",
          position: "relative",
          // marginTop: "70px"
          top: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div
            className="Job_component"
            style={{ width: "600px", height: "250px", flexBasis: 0 }}
          >
            <div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {job_title}
                </div>
                <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  {employer_name}
                </div>
                <div>
                  {required_experience_in_months != null ? (
                    <span>{required_experience_in_months}</span>
                  ) : (
                    <span>None</span>
                  )}
                  {/* <span>{required_experience_in_months}</span> */}
                  <span class="vertical-bar-text">
                    {" "}
                    &nbsp;&nbsp;|&nbsp; &nbsp;
                  </span>

                  <span>{job_min_salary + "-" + job_max_salary}</span>
                  <span class="vertical-bar-text">
                    &nbsp; &nbsp;|&nbsp;&nbsp;{" "}
                  </span>

                  <span>{job_city}</span>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>Posted at: {job_posted_at_datetime_utc}</div>
                <button
                  className="roundedButton"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
            {/* <div>
              <img src="{logoUrl}" alt="logo" />
            </div> */}
          </div>
          <div
            className="description"
            style={{ width: "600px", height: "auto", marginBottom: "50px" }}
          >
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Job Summary
            </div>
            <br />
            {job_description}
          </div>
        </div>
        <div className="Benefits" style={{ marginTop: "15px" }}>
          <div style={{ fontWeight: "bold" }}>Key Benefits</div>
          {Benefits ? (
            <ul>
              {Benefits.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ) : (
            <div>None</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detailed_component;
