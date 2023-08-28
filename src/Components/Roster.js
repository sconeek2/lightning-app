import React from "react";
import rosterData from "../Data/roster.json";
import "../CSS/Roster.css";
//import { Link } from "react-router-dom";

const Roster = () => {
  return (
    <div className="rosterContainer">
      <div className="player-card-container">
        {rosterData.map((item) => (
          <div className="player-container" key={item.jersey_number}>
            <p>
              {item.first_name} {item.last_name}
            </p>
            <p>Age: {item.age}</p>
            <p>#{item.jersey_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
