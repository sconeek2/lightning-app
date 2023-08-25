import React from "react";
import game_schedule from "../Data/schedule-game.json";
import "../CSS/SnackForm.css";

const SnackForm = () => {
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
    <div className="snack-page-container">
      {game_schedule.map((item) => (
        <div className="snack-date-container">
          <p className="snack-date">{formatDate(item.Date)}</p>
          <input type="text"></input>
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
};

export default SnackForm;
