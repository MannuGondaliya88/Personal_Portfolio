import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:mann.gondaliya88@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
