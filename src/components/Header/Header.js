import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">LOGO</div>
      <div className="links-container">
        <div style={{ color: "#E5E5E5" }}>Home </div>
        <div style={{ color: "#E5E5E5" }}>About </div>
        <div style={{ color: "#E5E5E5" }}>Resume </div>
        <div style={{ color: "#E5E5E5" }}>Projects </div>
        <div style={{ color: "#E5E5E5" }}>Contact </div>
      </div>
    </div>
  );
}
