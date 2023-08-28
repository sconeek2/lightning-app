import React from "react";
import game_schedule from "../Data/schedule-game.json";
import { formatDate } from "./dateUtils";
import "../CSS/SnackForm.css";

const SnackForm = () => {
  // custom function to sory the json by date
  function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
  }

  game_schedule.sort(custom_sort);

  return (
    <div className="snack-page-container">
      <form className="form-container">
        {game_schedule.map((item) => (
          <div className="snack-date-container">
            <label>
              Game Date: {formatDate(item.Date)}
              <input type="text" name={item.Date} placeholder="enter name" />
            </label>
            <input type="button" value="Submit" />

            <input type="text" name={item.Date} disabled="true" />
          </div>
        ))}
      </form>
    </div>
  );
};

export default SnackForm;
