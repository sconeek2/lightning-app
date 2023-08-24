import "./CSS/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Roster from "./Components/Roster";
import "bootstrap/dist/css/bootstrap.min.css";
import Schedule from "./Components/Schedule";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="home-body">
      <Router className="router">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Roster" element={<Roster />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
