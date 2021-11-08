import React from "react";
import "./About.css";
import image from "../../assets/images/dibyachan.jpg";
function About({aboutRef}) {
  return (
    <div className="about-container" ref={aboutRef}>
      <div className="image-container">
        <img src={image} alt="dibya-chan  ^-^" width="100%" height="100%" />
      </div>
      <div className="info-container">
        <div className="about-text">
          About Me
        </div>
        <div
          style={{
            fontSize: 18,
            color: "white",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          I like exploring new tech and am eager to master the full stack and
          sytem design
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 18, color: "#5CA096" }}>Name: </span>
          <span style={{ fontSize: 18, color: "white" }}>Anubhav Saxena</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 18, color: "#5CA096" }}>Email:</span>
          <span style={{ fontSize: 18, color: "white" }}>
            anubhav.saxena5@gmail.com
          </span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 18, color: "#5CA096" }}>Phone:</span>
          <span style={{ fontSize: 18, color: "white" }}>9599243067</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 18, color: "#5CA096" }}>Country:</span>
          <span style={{ fontSize: 18, color: "white" }}>India</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 18, color: "#5CA096" }}>City:</span>
          <span style={{ fontSize: 18, color: "white" }}>New Delhi</span>
        </div>
      </div>
    </div>
  );
}

export default About;
