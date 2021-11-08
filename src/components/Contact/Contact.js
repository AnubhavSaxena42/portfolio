import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { BsFillTelephoneFill, BsMailbox2, BsTwitter } from "react-icons/bs";
import "./Contact.css";
const phone = {
  type: "Contact Number",
  value: "9599243067",
  Icon: () => {
    return <BsFillTelephoneFill size={30} color={"black"} />;
  },
};
const email = {
  type: "E-mail address",
  value: "anubhav.saxena5@gmail.com",
  Icon: () => {
    return <BsMailbox2 size={30} color={"black"} />;
  },
};
const twitter = {
  type: "Twitter",
  value: "@anniikun",
  Icon: () => {
    return <BsTwitter size={30} color={"black"} />;
  },
};
function Contact({ contactRef }) {
  return (
    <div className="contact-container" ref={contactRef}>
      <div className="contact-heading-text">Contact Me</div>
      <div className="contact-cards-container">
        <ContactCard contact={phone} />
        <ContactCard contact={email} />
        <ContactCard contact={twitter} />
      </div>
    </div>
  );
}

export default Contact;
