import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className = "nav-links" to="/home">Home</Link>
      <Link className = "nav-links" to="/Roster">Roster</Link>
      <Link className = "nav-links" to="/Schedule">Schedule</Link>
      {/* <Link className = "nav-links" to="/home">Schedule</Link>
      <Link className = "nav-links" to="/home">Snack Signups</Link> */}
    </div>
  );
};

export default Navbar;
