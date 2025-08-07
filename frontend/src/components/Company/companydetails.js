import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyDetails() {
      try {
        const result = await JoblyApi.getCompany(handle);
        console.log("fetched company:", result);  // ✅ you’re already seeing this
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
    {company.jobs.map(job => (
      <li key={job.id}>
        {job.title} — Salary: {job.salary} — Equity: {job.equity}
      </li>
    ))}
  </ul>
) : (
  <p>No jobs available.</p>
)}


    </div>
  );
  
}

export default CompanyDetail;


