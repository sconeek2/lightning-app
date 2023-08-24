import React from "react";
import "../CSS/Home.css";
import AboutUs from "./AboutUs"
import NewsAndUpdates from "./NewsAndUpdates";
import ImportantDates from "./ImportantDates";
//import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-header">
      <AboutUs />      

      <hr class="solid"></hr>

      <NewsAndUpdates />

      <hr class="solid"></hr>

      <ImportantDates />

      <footer></footer>
    </div>
  );
};

export default Home;
