import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Project.css";
function Project({ project }) {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <div className="project-header-icon">
            <IoMdArrowRoundBack size={30} color={"white"} /> Back
          </div>
          <div className="project-header-heading">{project.name}</div>
        </div>
        <div className="project-content-container">
          <div className="project-info-container">
            <div className="project-info-heading">Description</div>
            <div className="project-info-text">{project.description}</div>
            <div className="project-info-heading">Technologies Used</div>
            <div className="project-tech-container">
              {project.skills.map((skill) => {
                return (
                  <img
                    className="skill-image"
                    src={skill}
                    height="60"
                    width="60"
                    alt="skillimage"
                  />
                );
              })}
            </div>
            <div className="project-info-heading">Links</div>
            <div className="project-links">Links daal vai</div>
          </div>
          <div className="project-screens-container">
            <div className="project-screen-container">
              <img
                src={project.screens[0]}
                height="411"
                width="200"
                alt="dibyachan"
              />
            </div>
            <div className="project-screen-container">
              <img
                src={project.screens[1]}
                height="411"
                width="200"
                alt="dibyachan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
