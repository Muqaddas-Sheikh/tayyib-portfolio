import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo-circle">
          <img src={logo} alt="Logo du client" />
        </div>
        <div className="navbar-name">Tayyib Basbunar</div>
      </div>

      <div className={`navbar-right ${open ? "open" : ""}`}>
        <button className="navbar-btn" onClick={() => handleScroll("home")}>
          Accueil
        </button>

        <button className="navbar-btn" onClick={() => handleScroll("about")}>
          À propos
        </button>

        <button className="navbar-btn" onClick={() => handleScroll("projects")}>
          Projets
        </button>

        <button className="navbar-btn" onClick={() => handleScroll("certificates")}>
          Certificats
        </button>

        <button className="navbar-btn" onClick={() => handleScroll("contact")}>
          Contact
        </button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
