import React from "react";
import "./ProjectCard.css";
import dibyachan from "../../assets/images/dibyachan.jpg";
function ProjectCard() {
  return (
    <div className="project-card-container">
      <div className="project-logo-container">
        <img src={dibyachan} alt="dibyachan" width="50" height="50" />
      </div>
      <div className="project-name-text">WALK-IN</div>
      <div className="project-tech-container-text">NodeJs.Express.React</div>
      <div className="project-description">
        A web based application that allows user to view Campgrounds and add
        their own. Used Node JS along with Express to make the application.
        MongoDB for the database.
      </div>
    </div>
  );
}

export default ProjectCard;
