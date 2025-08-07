import { Link, useParams } from 'react-router-dom';
import React, {useState, useEffect } from "react";
import JoblyApi from "../../api";




function CompanyCard() {
    const { handle } = useParams();
    const [company, setCompany ] = useState(null);
    const [loading, setLoading ] = useState(true);


useEffect(() => {
    async function fetchCompany() {
        const result = await JoblyApi.getCompany(handle);
        setCompany(result);
        setLoading(false);
    }
    fetchCompany();

}, [handle]);

if (loading) return <div>Loading</div>;

return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>

      <h2>Jobs</h2>
      <ul>
        {company.jobs.map(job => (
          <li key={job.id}>
            {job.title} — Salary: {job.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyCard;