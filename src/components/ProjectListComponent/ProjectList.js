import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectList.css";
function ProjectList({ projectObj, projectRef }) {
  console.log("Object:" + JSON.stringify(projectObj.projects));
  return (
    <div className="project-list-container" ref={projectRef}>
      <div className="project-type-text">{projectObj.type}</div>
      <div className="project-type-desc">{projectObj.desc}</div>
      <div className="project-cards-container">
        {projectObj.projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
