import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename="ruifernandes01.github.io">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
