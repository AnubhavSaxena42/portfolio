import React from "react";
import "./Experience.css";
function Experience({ job }) {
  return (
    <div className="experience-container">
      <div className="exp-icon-container">Briefcase Icon</div>
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
