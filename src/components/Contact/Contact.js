import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-heading-text">Contact Me</div>
      <div className="contact-cards-container">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
