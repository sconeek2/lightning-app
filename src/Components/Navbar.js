import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='body'>
      <Link className="nav-links" to="/home">
        Home
      </Link>
      <Link className="nav-links" to="/Roster">
        Roster
      </Link>
      <Link className="nav-links" to="/Schedule">
        Schedule
      </Link>
      <Link className="nav-links" to="/Stats">
        Stats
      </Link>
      <Link className="nav-links" to="/SnackForm">
        Snack Signups
      </Link>
    </div>
  );
};

export default Navbar;
