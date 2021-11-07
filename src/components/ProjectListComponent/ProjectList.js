import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectList.css";
function ProjectList({ projectTypeInfo, projectRef }) {
  return (
    <div className="project-list-container" ref={projectRef}>
      <div className="project-type-text">{projectTypeInfo.type}</div>
      <div className="project-type-desc">{projectTypeInfo.desc}</div>
      <div className="project-cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectList;
