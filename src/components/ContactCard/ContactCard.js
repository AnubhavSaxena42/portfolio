import React from "react";
import "./ContactCard.css";
function ContactCard({ contact }) {
  console.log('here:'+contact.Icon)
  return (
    <div className="contact-card-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 66,
          width: 66,
          borderRadius: 33,
          backgroundColor: "#feab26",
          marginTop: 10,
          marginBottom:15,
        }}
      >
        {contact.Icon()}
      </div>
      <div className="contact-type-heading"> {contact.type} </div>
      <div className="contact-value-text">{contact.value}</div>
    </div>
  );
}

export default ContactCard;
