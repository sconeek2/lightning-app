import React from "react";
import "../CSS/Hero.css";
import backgroundVid from '../Images/video1.mp4';



export default function BgImageWithNavbar() {
  return (
    <div className='video_container'>

      <video autoPlay loop muted id='video'>
        <source src={backgroundVid} type='video/mp4' />
      </video>
      <h1>TSC Lightning</h1>

    </div>
  );
}
