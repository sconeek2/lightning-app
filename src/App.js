import "./CSS/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Roster from "./Components/Roster";
import "bootstrap/dist/css/bootstrap.min.css";
import Schedule from "./Components/Schedule";

function App() {
  return (
    <div className="home-body">
      <Router className="router">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Roster" element={<Roster />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;