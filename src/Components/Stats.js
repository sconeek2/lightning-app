import React from "react";
import player_stats from "../Data/player_stats.json";

const Stats = () => {
  return (
    <div className="rosterContainer">
      <table id="roster">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
            <th>MPG</th>
          </tr>
        </thead>
        <tbody>
          {player_stats.map((item) => (
            <tr key={item.player_id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.position}</td>
              <td>{item.goals_scored}</td>
              <td>{item.assists}</td>
              <td>{item.yellow_cards}</td>
              <td>{item.red_cards}</td>
              <td>{item.minutes_played}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
