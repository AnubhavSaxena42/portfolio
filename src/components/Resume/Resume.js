import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import "./Resume.css";
const college = {
  instituteName: "Chandigarh University",
  degree: "Bachelor of Engineering",
  degreeDesc: "Computer Science Engineering",
  location: "Chandigarh, India",
  timeline: "2018-2022(July)",
};
const intermediate = {
  instituteName: "St.Georges School",
  degree: "High Schooling",
  degreeDesc: "Science",
  location: "New Delhi, India",
  timeline: "2015-2017",
};
const matriculation = {
  instituteName: "St Georges School",
  degree: "Matriculation",
  degreeDesc: "Science",
  location: "Chandigarh, India",
  timeline: "2015-2016",
};

const Kayan = {
  position: "React Native Intern",
  company: "Kayan Healthcare",
  timeline: "Aug 2021-Present",
  pointers: "Mera yashu yashu",
};
const AmrawLabs = {
  position: "React Native Intern",
  company: "Amraw Labs",
  timeline: "Mar 2021-Aug-2021",
  pointers: "Mera yashu yashu",
};
const NurtureLabs = {
  position: "React Native Intern",
  company: "Nurture Labs",
  timeline: "Jan 2021-Mar 2021",
  pointers: "Mera yashu yashu",
};
function Resume() {
  return (
    <div className="resume-container">
      <div className="resu-links-container">LINKS</div>
      <div className="resu-info-container">
        <div className="resu-edu-container">
          <div
            style={{
              color: "rgb(255,172,38)",
              fontWeight: "700",
              fontSize: 40,
            }}
          >
            Education
          </div>
          <Education education={college} />
          <Education education={intermediate} />
          <Education education={matriculation} />
        </div>
        <div className="resu-exp-container">
          <div
            style={{
              color: "rgb(255,172,38)",
              fontWeight: "700",
              fontSize: 40,
            }}
          >
            Experience
          </div>
          <Experience job={Kayan} />
          <Experience job={AmrawLabs} />
          <Experience job={NurtureLabs} />
        </div>
        <div className="resu-skills-container">
        <div
            style={{
              color: "rgb(255,172,38)",
              fontWeight: "700",
              fontSize: 40,
            }}
          >
            Skills
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Resume;
