import React, { useState } from "react";
import game_schedule from "../Data/schedule-game.json";
// import { formatDate } from "./dateUtils";
import "../CSS/SnackForm.css";

const SnackForm = () => {
  // custom function to sory the json by date
  function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
  }

  game_schedule.sort(custom_sort);
  //setting up state to handle collecting and displaying the entered text
  const [inputText1, setInputText1] = useState("");
  const [displayText1, setDisplayText1] = useState("");

  const handleInputChange1 = (event) => {
    setInputText1(event.target.value);
  };

  const handleButtonClick1 = () => {
    setDisplayText1(inputText1);
    setDisable1(true);
  };

  //round 2
  const [inputText2, setInputText2] = useState("");
  const [displayText2, setDisplayText2] = useState("");

  const handleInputChange2 = (event) => {
    setInputText2(event.target.value);
  };

  const handleButtonClick2 = () => {
    setDisplayText2(inputText1);
    setDisable2(true);
  };

  //setting up state to disable the input field
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);

  return (
    <div className="snack-page-container">
      <p>
        Please enter your name in one of the text boxes and then click 'submit'
      </p>
      <form className="form-container">
        {/* {game_schedule.map((item) => ( */}
        <div className="snack-date-container">
          <label >
            {/* Game Date: {formatDate(item.Date)} */}
            <p className='game-day'>Sept 1, 2023</p>
            <input
              type="text"
              placeholder="enter name"
              value={inputText1}
              onChange={handleInputChange1}
              disabled={disable1}
            />
          </label>
          <input
            type="button"
            value="Submit"
            onClick={handleButtonClick1}
            disabled={disable1}
          />
        </div>
        <div className="snack-date-container">
          <label >
            {/* Game Date: {formatDate(item.Date)} */}
            <p className='game-day'>Sept 10, 2023</p>
            <input
              type="text"
              placeholder="enter name"
              value={inputText2}
              onChange={handleInputChange2}
              disabled={disable2}
            />
          </label>
          <input
            type="button"
            value="Submit"
            onClick={handleButtonClick2}
            disabled={disable2}
          />
        </div>

        {/* ))} */}
      </form>
    </div>
  );
};

export default SnackForm;
