import react from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/Profile">Profile</Link>
        </div>
    )
}
