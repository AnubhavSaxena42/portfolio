import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const Icon = project.icon;
  //const navigate = useNavigate();
  /*const navigateToProject = () => {
    navigate(`/projects/${project.id}`, {
      state: {
        project: project,
      }
    });
  };*/
  return (
    <div className="project-card-container" >
      <div className="project-logo-container">
        <Icon id="icon" color={"black"} />
      </div>
      <div className="project-name-text">{project.name}</div>
      <div className="project-tech-container-text">{project.tags}</div>
      <div className="project-description">{project.description}</div>
    </div>
  );
}

export default ProjectCard;
