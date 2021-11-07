import React from "react";
import "./Skills.css";
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import javascript from "../../assets/images/skills/javascript.png";
import react from "../../assets/images/skills/react.png";
import linux from "../../assets/images/skills/linux.png";
import cplusplus from "../../assets/images/skills/cplusplus.png";
import c from "../../assets/images/skills/c.png";
import csharp from "../../assets/images/skills/csharp.png";
import firebase from "../../assets/images/skills/firebase.png";
import java from "../../assets/images/skills/java.png";
import mongo from "../../assets/images/skills/mongo.png";
function Skills() {
  return (
    <div className="skills-container">
      <img
        className="skill-image"
        src={html}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={css}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={javascript}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={react}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={linux}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={cplusplus}
        height="40"
        width="40"
        alt="html"
      />
      <img className="skill-image" src={c} height="40" width="40" alt="html" />
      <img
        className="skill-image"
        src={csharp}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={firebase}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={java}
        height="40"
        width="40"
        alt="html"
      />
      <img
        className="skill-image"
        src={mongo}
        height="40"
        width="40"
        alt="html"
      />
    </div>
  );
}

export default Skills;
