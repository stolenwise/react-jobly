import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ currentUser, logout }) {
  return (
    <nav className="Navbar">
      <div className="Navbar-left">
        <Link to="/" className="Navbar-logo">Jobly</Link>
      </div>

      <div className="Navbar-right">
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>

        {currentUser ? (
        <>
          <span className="Navbar-greeting">Hi, {currentUser.username}</span>
          <button className="Navbar-logout" onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;


