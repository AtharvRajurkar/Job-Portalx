import React from "react";
import Company_component_items from "./Company_component_items";
import { jobList } from "../jobData";
const Company_component = ({ handleSelectedCompanies }) => {
  const handleCompanyChange = (company, isSelected) => {
    handleSelectedCompanies(company, isSelected);
  };
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Company</div>
      <br />
      {/* <Company_component_items
        company="Foreign MNC"
        handleCompanyChange={handleCompanyChange}
      />
      <Company_component_items
        company="Corporate"
        handleCompanyChange={handleCompanyChange}
      />
      <Company_component_items
        company="Startup"
        handleCompanyChange={handleCompanyChange}
      />
      <Company_component_items
        company="Indian MNC"
        handleCompanyChange={handleCompanyChange}
      /> */}
      {jobList.map(
        (job) =>
          job.employer_name && (
            <Company_component_items
              company={job.employer_name}
              handleCompanyChange={handleCompanyChange}
            />
          )
      )}
    </div>
  );
};

export default Company_component;
