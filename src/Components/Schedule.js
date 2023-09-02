import React from "react";
import "../CSS/Schedule.css";
import game_schedule from "../Data/schedule-game.json";
import { formatDate } from "./dateUtils";

const Schedule = () => {
  // custom function to sory the json by date
  function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
  }

  game_schedule.sort(custom_sort);

  return (
    <div className="rosterContainer">
      <table id="schedule">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {game_schedule.map((item) => (
            <tr key={item.Date}>
              <td>{formatDate(item.Date)}</td>
              <td>{item.Time}</td>
              <td>{item.City}</td>
              <td>{item.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
