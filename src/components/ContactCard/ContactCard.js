import React from "react";
import "./ContactCard.css";
import dibyachan from "../../assets/images/dibyachan.jpg";
function ContactCard() {
  return (
    <div className="contact-card-container">
      <div className="contact-image-container">
        <img src={dibyachan} alt="dibyachan" height="50" width="50" />
      </div>
      <div className="contact-type-heading"> Contact Number </div>
      <div className="contact-value-text">9599243067</div>
    </div>
  );
}

export default ContactCard;
