import React from "react";
import "../App.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <h2>CONTACT</h2>
        <span></span>
        <p>
          N'hésitez pas à me contacter pour des projets de développement web, des collaborations ou toute demande de renseignements. 
Je suis toujours ouverte à discuter de nouvelles idées, améliorer des sites existants et aider les entreprises 
à créer des solutions web modernes, responsives et conviviales.
        </p>
      </div>

      <div className="contact-form-box">
        <form
          action="https://formspree.io/f/mgoapydl"
          method="POST"
        >
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Entrez votre message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">
            ENVOYER
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
