import React from "react";
import { Link } from "react-router-dom";

const Job_component = ({ job }) => {
  const {
    job_id,
    employer_name,
    employer_logo,
    job_publisher,
    job_employment_type,
    job_title,
    job_description,
    job_city,
    job_is_remote,
    job_max_salary,
    job_min_salary,
    job_required_experience: { required_experience_in_months },
  } = job;

  const description = job_description.slice(0, 60);

  return (
    <Link to={`/${job_id}`}>
      <div className="Job_component">
        <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
          {job_title}
        </div>
        <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
          {employer_name}
        </div>
        <div>
          <span>
            {/* <img src="../briefcase-business.png" alt=""/> */}
            {required_experience_in_months}
          </span>
          <span class="vertical-bar-text"> &nbsp;&nbsp;|&nbsp; &nbsp;</span>

          <span>{job_min_salary + "-" + job_max_salary}</span>
          <span class="vertical-bar-text">&nbsp; &nbsp;|&nbsp;&nbsp; </span>

          <span>{job_city}</span>
        </div>
        <div>{description + "..."}</div>
      </div>
    </Link>
  );
};

export default Job_component;
