import React from "react";
import "./Contact.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div  id="contact" className="contact">
      <div className="contact-title">
        <p>Have an idea?</p>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            contact me.
          </p>
        </div>
        <div className="contact-details">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <SiGmail size={30} color="#D44638" />
            <a
              href="mailto:roka7362@gmail.com"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              roka7362@gmail.com
            </a>
          </div>

          <ul className="contact-list">
            <li>
              <a
                href="https://www.linkedin.com/in/suman-roka-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/suman.roka.9421/"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaFacebook/> 
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rokasuman"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaGithub/>          
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
