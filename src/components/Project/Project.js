import React from "react";
import dibyachan from "../../assets/images/dibyachan.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Project.css";
function Project() {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <div className="project-header-icon">
            <IoMdArrowRoundBack size={30} color={"white"} /> Back
          </div>
          <div className="project-header-heading">Project Name</div>
        </div>
        <div className="project-content-container">
          <div className="project-info-container">
            <div className="project-info-heading">Description</div>
            <div className="project-info-text">
              A web based application that allows user to view Campgrounds and
              add their own. Used Node JS along with Express to make the
              application. MongoDB for the database.
            </div>
            <div className="project-info-heading">Technologies Used</div>
            <div className="project-tech-container">Technologies daal vai</div>
            <div className="project-info-heading">Links</div>
            <div className="project-links">Links daal vai</div>
          </div>
          <div className="project-screens-container">
            <div className="project-screen-container">
              <img src={dibyachan} height="411" width="200" alt="dibyachan" />
            </div>
            <div className="project-screen-container">
              <img src={dibyachan} height="411" width="200" alt="dibyachan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
