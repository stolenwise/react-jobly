import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ApiTest from "./components/apitest";
import CompanyList from "./components/Company/companylist";
import CompanyDetails from "./components/Company/companydetails";
import JobList from "./components/Jobs/joblist";
import JobDetails from "./components/Jobs/jobdetails";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path="/test" element={<ApiTest />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
