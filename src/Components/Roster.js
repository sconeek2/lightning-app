import React from "react";
import rosterData from "../Data/roster.json";
import "../CSS/Roster.css";
import image1 from '../Images/Players/player.png';
import image2 from '../Images/Players/player1.png';
import image3 from '../Images/Players/player2.png';
import image4 from '../Images/Players/player3.png';
import image5 from '../Images/Players/player4.png';
import image6 from '../Images/Players/player5.png';
import image7 from '../Images/Players/player6.png';
import image8 from '../Images/Players/player7.png';
import image9 from '../Images/Players/player8.png';
import image10 from '../Images/Players/1.png';
import image11 from '../Images/Players/2.png';
import image12 from '../Images/Players/3.png';
import image13 from '../Images/Players/4.png';
import image14 from '../Images/Players/5.png';
import image15 from '../Images/Players/6.png';
import image16 from '../Images/Players/7.png';
import image17 from '../Images/Players/8.png';
import image18 from '../Images/Players/9.png';
import image19 from '../Images/Players/10.png';
//import { Link } from "react-router-dom";

const playerImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19]

const Roster = () => {
  return (
    <div className="rosterContainer">
      <div className="player-card-container">
        {rosterData.map((item) => (
          <div className="player-container" key={item.jersey_number}>
            <div className='player_pic_container'>
              <img className='player_pic' src={playerImages[Math.floor(Math.random() * 10) + 1]} alt='soccer player'></img>
            </div>
            <div className='player_bio_container'>
              <h2 className='player_number'>#{item.jersey_number}</h2>
              <p className='player_name'>
                {item.first_name} {item.last_name}
              </p>
              <p className='player_age'>Age: {item.age}</p></div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
