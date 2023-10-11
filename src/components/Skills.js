import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <div className="aboutme-text">
      <div className="title">Skills</div>
      <div className="text">
        <div className="prog-skills">
          <p>
            Programming Skills :<img className="logo" src="react.png"></img>
            <img className="logo" src="html.png"></img>
            <img className="logo" src="css.png"></img>
            <img className="logo" src="python.png"></img>
            <img className="logo" src="c.png"></img>
            <img className="logo" src="sql.png"></img>
          </p>
        </div>
        Software used :<img className="logo" src="vscode.png"></img>
        <img className="logo" src="git.png"></img>
        <img className="logo" src="sqlserver.png"></img>
      </div>
    </div>
  );
};

export default Skills;
