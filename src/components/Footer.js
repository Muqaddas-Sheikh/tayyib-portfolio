import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      {/* Social Icons */}
      <div className="footer-socials">
        <a href="https://github.com/tbasdev57" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tayyib-basbunar-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:basbunartayyib@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-contact">
        <p><FaPhone className="contact-icon" /> +33 7 83 07 25 40</p>
        <p><FaEnvelope className="contact-icon" /> basbunartayyib@gmail.com</p>
      </div>
      <p className="footer-copy">© 2026 Tayyib Basbunar. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
