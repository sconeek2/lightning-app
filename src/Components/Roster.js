import React from "react";
import rosterData from "../Data/roster.json";
import "../CSS/Roster.css";
//import { Link } from "react-router-dom";

const Roster = () => {
  return (
    <div className="rosterContainer">
      <table id="roster">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Jersey #</th>
          </tr>
        </thead>
        <tbody>
        {rosterData.map((item) => (
          <tr key={item.jersey_number}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.age}</td>
            <td>{item.jersey_number}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Roster;
