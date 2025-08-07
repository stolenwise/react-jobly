import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";
import CompanyCard from "./companycard"; // ✅ Don't forget this!
import "./companylist.css";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("CompanyList mounted");
    async function fetchCompanies() {
      try {
        const result = await JoblyApi.getCompanies();
        console.log("Fetched companies:", result);
        setCompanies(result);         
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Companies</h1>
      <div className="company-list">
        {companies.map(c => (
          <CompanyCard
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
