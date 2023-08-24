import React from "react";
import "../CSS/Home.css";
import gameData from "../Data/schedule-game.json";
//import { Link } from "react-router-dom";

const ImportantDates = () => {
  const daysDifferences = [];

  // find out which game object in array gameData is the closest to the current date
  const gameDay = () => {
    const currentDate = new Date();

    gameData.forEach((game) => {
      const gameDate = new Date(game.Date);

      const timeDifference = gameDate.getTime() - currentDate.getTime(); // difference in milliseconds
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert to days

      return daysDifferences.push(daysDifference); // creating an array that contains the difference in days between the current date and the date of each object.  This array should be in the same order as array gameData
    });
  };

  gameDay();

  let smallestPositive = Infinity; // Initialize with a large value

  for (let i = 0; i < daysDifferences.length; i++) {
    if (daysDifferences[i] > 0 && daysDifferences[i] < smallestPositive) {
      smallestPositive = daysDifferences[i];
    }
  }

  const gameIndex = daysDifferences.indexOf(smallestPositive); //returning the index of whichever element has the smallest difference in days.  This will be used to look up the game data from array gameData.

  return (
    <div>

      <h2>Important Dates</h2>
      <div className="dates-container">
        <div className="card-container">
          <p id="card-title">Next Game</p>
          <p>Date: {gameData[gameIndex].Date}</p>
          <p>Time: {gameData[gameIndex].Time}</p>
          <p>
            Location: {gameData[gameIndex].City}, {gameData[gameIndex].State}
          </p>
        </div>

        <div className="card-container">
          <p id="card-title">Lorem Ipsum</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
