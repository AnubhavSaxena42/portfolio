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
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={css}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={javascript}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={react}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={linux}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={cplusplus}
        height="60"
        width="60"
        alt="html"
      />
      <img className="skill-image" src={c} height="60" width="60" alt="html" />
      <img
        className="skill-image"
        src={csharp}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={firebase}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={java}
        height="60"
        width="60"
        alt="html"
      />
      <img
        className="skill-image"
        src={mongo}
        height="60"
        width="60"
        alt="html"
      />
    </div>
  );
}

export default Skills;
