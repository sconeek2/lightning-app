import "bootstrap/dist/css/bootstrap.css";
import "./CSS/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Roster from "./Components/Roster";
import "bootstrap/dist/css/bootstrap.min.css";
import Schedule from "./Components/Schedule";
import Stats from "./Components/Stats";
import SnackForm from "./Components/SnackForm";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="home-body">
      <Router className="router">
        {/* <Navbar /> */}
        <Hero />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Roster" element={<Roster />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/SnackForm" element={<SnackForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
