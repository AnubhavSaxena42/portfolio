import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";
function Education({ education }) {
  return (
    <div className="education-container">
      <div className="icon-container">
        {" "}
        <div
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height: 66,
            width: 66,
            borderRadius: 33,
            backgroundColor: "#feab26",
            marginTop:10,
          }}
        >
          <FaGraduationCap color="black" size={35}/>
        </div>
      </div>
      <div className="edu-info-container">
        <div style={{ color: "white", fontWeight: "700", fontSize: 30 }}>
          {education.instituteName}
        </div>
        <div
          style={{
            color: "#6DC4B7",
            fontWeight: "600",
            fontSize: 24,
            marginTop: 10,
          }}
        >
          {education.degree}
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 22,
            marginTop: 5,
          }}
        >
          {education.degreeDesc}
        </div>
        <div style={{ color: "#E4E4E4", fontSize: 16, marginTop: 20 }}>
          {education.location}
        </div>
        <div
          style={{
            color: "#F3A525",
            fontWeight: "500",
            fontSize: 22,
            marginTop: 15,
          }}
        >
          {education.timeline}
        </div>
      </div>
    </div>
  );
}

export default Education;
