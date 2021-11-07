import React from "react";
import dibyachan from "../../assets/images/dibyachan.jpg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-about-container">
        <div className="footer-about-heading">About</div>
        <div className="footer-about-desc">
          I like to learn new tech and Iam eager to learn system design
        </div>
        <div className="footer-socials-heading">
          <u>Socials</u>
        </div>
        <div className="footer-social-icons-container">
          <img src={dibyachan} alt="dibyachan" height="30" width="30" />
          <img src={dibyachan} alt="dibyachan" height="30" width="30" />
          <img src={dibyachan} alt="dibyachan" height="30" width="30" />
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links-heading">Links</div>
        <div className="footer-link">Home</div>
        <div className="footer-link">About</div>
        <div className="footer-link">Resume</div>
        <div className="footer-link">Projects</div>
        <div className="footer-link">Contact</div>
      </div>
      <div className="footer-contact-container">
        <div className="footer-contact-heading">Have a question?</div>
        <div className="footer-contact-text">9599243067</div>
        <div className="footer-contact-text">anubhav.saxena5@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;
