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
            <p className='player_number'>#{item.jersey_number}</p>
            <p className='player_name'>
              {item.first_name} {item.last_name}
            </p>
            <p className='player_age'>Age: {item.age}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
