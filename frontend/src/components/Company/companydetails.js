import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import JobCard from "../Jobs/jobcards";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyDetails() {
      try {
        const result = await JoblyApi.getCompany(handle);
        console.log("fetched company:", result);  //  already seeing this
        setCompany(result);
      } catch (err) {
        console.error("Error loading company details:", err);
      }
    }

    getCompanyDetails();
  }, [handle]);

  if (!company) return <p>Loading...</p>;

  return (
    <div className="CompanyDetail">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <p>Number of Employees: {company.numEmployees}</p>
  
      <h3>Jobs:</h3>
      {company.jobs && company.jobs.length > 0 ? (
  <ul>
   {company.jobs.map(j => (
  <JobCard
    key={j.id}
    id={j.id}                // <-- IMPORTANT
    title={j.title}
    salary={j.salary}
    equity={j.equity}
  />
))}
  </ul>
) : (
  <p>No jobs available.</p>
)}


    </div>
  );
  
}

export default CompanyDetail;


