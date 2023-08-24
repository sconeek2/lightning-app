import React from "react";
import "../CSS/Home.css";
import team from "../Images/team.jpg";
//import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="home-header">
      <h1>TSC Lightning</h1>

      <div className="home-image">
        <img src={team} alt="soccer team"></img>
      </div>

      <p>
        Welcome to the exhilarating world of TSC Lightning! We are a passionate
        U11 youth soccer team dedicated to fostering both sportsmanship and
        skill development in our young players. With lightning speed and
        boundless enthusiasm, we charge onto the field, ready to take on every
        challenge that comes our way. As a united team, we value the spirit of
        teamwork, discipline, and unwavering determination. Join us in
        celebrating the joy of the game as we embark on a journey filled with
        camaraderie, growth, and the electrifying thrill of victory. Go
        Lightning!
      </p>
    </div>
  );
};

export default AboutUs;
