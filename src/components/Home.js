// src/components/Home.js
import "./Home.css";
import React from "react";
import AboutMe from "./AboutMe"; // Import your other components
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills"; // Import the Skills component

const Home = () => {
  return (
    <div className="homepage">
      <img className="foto" src="foto1.png"></img>
      <div className="section-wrapper">
        <section className="home-section" id="aboutMe">
          <AboutMe /> {/* Include your AboutMe component here */}
        </section>
        <section className="home-section" id="skills">
          <Skills /> {/* Include your Skills component here */}
        </section>
        <section className="home-section" id="workExperience">
          <WorkExperience /> {/* Include your WorkExperience component here */}
        </section>
        <section className="home-section" id="education">
          <Education /> {/* Include your Education component here */}
        </section>
      </div>
    </div>
  );
};

export default Home;
