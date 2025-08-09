// src/components/Jobs/JobCard.js
import React from "react";
import "./jobcards.css";
import { Link } from "react-router-dom";

function JobCard({ id, title, salary, equity, companyName }) {
  return (
    <div className="JobCard">
      <div className="JobCard-main">
        <h3>
           <Link to={`/jobs/${id}`}> {title}</Link>
            </h3>
        {companyName && <p className="JobCard-company">{companyName}</p>}
      </div>
      <div className="JobCard-meta">
        <p>Salary: {salary ?? "—"}</p>
        <p>Equity: {equity ?? "—"}</p>
      </div>
    </div>
  );
}

export default JobCard;
