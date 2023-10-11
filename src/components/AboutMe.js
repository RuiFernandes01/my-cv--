import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-text">
        <div className="title">About Me</div>
        <div className="subtitle">Front-end Developer</div>
        <div className="text">
          <p>
            My name is Rui Fernandes. I'm a junior programmer with 8 months of
            experience. Over this time I've had the opportunity to work with
            technologies such as React, HTML5, C# and CSS.
          </p>
          <p>
            I have experience working remotely and on site, alone or in a team
            and possess a good study and research method making me autonomous on
            my work.
          </p>{" "}
          <p>
            My native language is Portuguese, but I also speak English fluently.
          </p>
          I'm eager for a new challenge where I can learn and improve my
          programming skills.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
