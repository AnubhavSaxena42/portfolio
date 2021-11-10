import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFillTelephoneFill,
  BsMailbox2,
} from "react-icons/bs";
import { RiArrowRightLine } from "react-icons/ri";
import "./Footer.css";
function Footer({
  homeRef,
  aboutRef,
  resRef,
  projectRef,
  contactRef,
  scrollto,
}) {
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
          <div style={{ marginRight: 10 }}>
            <a
              href="https://github.com/AnubhavSaxena42"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub size={30} color={"white"} />
            </a>
          </div>
          <div style={{ marginRight: 10 }}>
            <a
              href="https://www.linkedin.com/in/anubhav-s-71b687114/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <BsLinkedin size={30} color={"white"} />
            </a>
          </div>
          <div style={{ marginRight: 10 }}>
            <a
              href="https://twitter.com/Anniikun"
              rel="noreferrer"
              target="_blank"
            >
              <BsTwitter size={30} color={"white"} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links-heading">Links</div>
        <div
          className="footer-link"
          onClick={() => {
            scrollto(homeRef.current);
            console.log(homeRef.current);
          }}
        >
          <div style={{ marginRight: 5, marginTop: 4 }}>
            <RiArrowRightLine size={20} color={"white"} />
          </div>
          Home
        </div>
        <div
          className="footer-link"
          onClick={() => {
            scrollto(aboutRef.current);
            console.log(aboutRef.current);
          }}
        >
          <div style={{ marginRight: 5, marginTop: 4 }}>
            <RiArrowRightLine size={20} color={"white"} />
          </div>
          About
        </div>
        <div
          className="footer-link"
          onClick={() => {
            scrollto(resRef.current);
          }}
        >
          <div style={{ marginRight: 5, marginTop: 4 }}>
            <RiArrowRightLine size={20} color={"white"} />
          </div>
          Resume
        </div>
        <div
          className="footer-link"
          onClick={() => {
            scrollto(projectRef.current);
          }}
        >
          <div style={{ marginRight: 5, marginTop: 4 }}>
            <RiArrowRightLine size={20} color={"white"} />
          </div>
          Projects
        </div>
        <div
          className="footer-link"
          onClick={() => {
            scrollto(contactRef.current);
          }}
        >
          <div style={{ marginRight: 5, marginTop: 4 }}>
            <RiArrowRightLine size={20} color={"white"} />
          </div>
          Contact
        </div>
      </div>
      <div className="footer-contact-container">
        <div className="footer-contact-heading">Have a question?</div>
        <div className="footer-contact-text">
          <div style={{ marginRight: 10, marginTop: 4 }}>
            <BsFillTelephoneFill size={20} color={"white"} />
          </div>
          9599243067
        </div>
        <div className="footer-contact-text">
          {" "}
          <div style={{ marginRight: 10, marginTop: 4 }}>
            <BsMailbox2 size={20} color={"white"} />
          </div>
          anubhav.saxena5@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Footer;
