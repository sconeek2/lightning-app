import React from "react";
import game_data from "../Data/combined_game_data.json";
import "../CSS/CreateTable.css";

const createTable = (props) => {

  return (
    <div className='main-table-container'>
      <h2>Game {props.num}</h2>
      <table id={`game${props.num}`} className="game-stats">
        <thead>
          <tr>
            <th>Player</th>
            <th>Minutes</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {game_data[`game${props.num}`].map((item) => (
            <tr>
              <td>{item.Name}</td>
              <td>{item.Play_Time}</td>
              <td>{item.Goal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default createTable;