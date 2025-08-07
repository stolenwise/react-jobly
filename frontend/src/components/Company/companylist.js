import { Link } from 'react-router-dom';
import React, {useState, useEffect } from "react";
import JoblyApi from "../../api";
import "./companylist.css";


function CompanyList() {
   const [companies, setCompanies] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    console.log("CompanyList mounted");
    async function fetchCompanies() {
        try {
            const result = await JoblyApi.getCompanies()
            console.log("Fetched companies:", result)
            setCompanies(result);         
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    

    fetchCompanies();
    
   }, []); // Empty dependency array means this runs once on mount

   if (loading) {
    return <div>Loading data...</div>;
   }


   return(
    <div>

      {/* Company List */}
      <h1>Companies</h1>
      <ul className="company-list">
        {companies.map(c => (
          <li key={c.handle}>
            <Link to={`/companies/${c.handle}`}>{c.name}</Link>
          </li>
      ))}
    </ul>
    </div>  
   )
}

export default CompanyList;