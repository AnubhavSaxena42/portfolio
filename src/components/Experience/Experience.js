import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import "./Experience.css";
function Experience({ job }) {
  return (
    <div className="experience-container">
      <div className="exp-icon-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 66,
            width: 66,
            borderRadius: 33,
            backgroundColor: "#feab26",
            marginTop: 10,
          }}
        >
          <BsBriefcaseFill color="black" size={30} />
        </div>
      </div>
      <div className="exp-info-container">
        <div className="job-pos-text">{job.position}</div>
        <div className="job-company-text">{job.company}</div>
        <div className="job-timeline-text">{job.timeline}</div>
        <div>{job.pointers}</div>
      </div>
    </div>
  );
}

export default Experience;
