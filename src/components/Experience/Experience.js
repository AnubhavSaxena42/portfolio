import React from "react";
import "./Experience.css";
function Experience({ job }) {
  return (
    <div className="experience-container">
      <div className="exp-icon-container">Briefcase Icon</div>
      <div className="exp-info-container">
        <div>{job.position}</div>
        <div>{job.company}</div>
        <div>{job.timeline}</div>
        <div>{job.pointers}</div>
      </div>
    </div>
  );
}

export default Experience;
