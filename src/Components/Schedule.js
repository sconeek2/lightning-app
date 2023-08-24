import React from "react";
import game_schedule from "../Data/schedule-game.json";

const Schedule = () => {
  // custom function to sory the json by date
  function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
  }

  game_schedule.sort(custom_sort);

  const formatDate = (inputDate) => {
    const dateParts = inputDate.split("/");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const formattedDate = new Date(year, month - 1, day);

    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return formattedDate.toLocaleDateString(undefined, options);
  };

  return (
    <div className="rosterContainer">
      <table id="roster">
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
