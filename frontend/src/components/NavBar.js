import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({ username, logout }) {
  return (
    <nav className="Navbar">
      <div className="Navbar-left">
        <Link to="/" className="Navbar-logo">Jobly</Link>
      </div>

      <div className="Navbar-right">
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>

        {username ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={logout}>
              Log out {username}
            </Link>
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


