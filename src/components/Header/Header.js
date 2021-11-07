import React from "react";
import "./Header.css";
export default function Header({
  scrollto,
  homeRef,
  aboutRef,
  resRef,
  contactRef,
  projectRef,
  headerRef,
}) {
  console.log(homeRef);
  return (
    <div className="header-container" ref={headerRef}>
      <div className="logo-container">ANUBHAV SAXENA</div>
      <div className="links-container">
        <div
          className="header-link"
          onClick={() => {
            scrollto(homeRef.current);
            console.log(homeRef.current);
          }}
        >
          Home
        </div>
        <div
          className="header-link"
          onClick={() => {
            scrollto(aboutRef.current);
            console.log(aboutRef.current);
          }}
        >
          About{" "}
        </div>
        <div
          className="header-link"
          onClick={() => {
            scrollto(resRef.current);
          }}
        >
          Resume{" "}
        </div>
        <div
          className="header-link"
          onClick={() => {
            scrollto(projectRef.current);
          }}
        >
          Projects{" "}
        </div>
        <div
          className="header-link"
          onClick={() => {
            scrollto(contactRef.current);
          }}
        >
          Contact{" "}
        </div>
      </div>
    </div>
  );
}
