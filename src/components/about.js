import React, { useEffect, useState } from "react";
import "../App.css";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const iosStyle = {
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.9s cubic-bezier(0.25, 1, 0.5, 1)",
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-heading" style={iosStyle}>
        <h2>À PROPOS DE MOI</h2>
        <span></span>
        <p>
          Je suis un développeur web passionné qui aime créer des sites web
          modernes, responsives et conviviaux.
          Je me concentre sur un design épuré, une fonctionnalité fluide et
          la livraison d’expériences numériques de qualité.
        </p>
      </div>

      <div className="about-content">
        <div className="about-left" style={iosStyle}>
          <h3>Faites connaissance avec moi !</h3>
          <p>
            Salut ! Je m'appelle <strong>Tayyib Basbunar</strong> et je suis{" "}
            <strong>développeur web</strong>.
            Je crée des sites web responsives et faciles à utiliser en utilisant
            des technologies modernes.
          </p>
          <p>
            J’ai de l’expérience avec des outils de <strong>design</strong> comme
            Figma et Bootstrap, des technologies <strong>front-end</strong> telles
            que React, React Native, HTML, CSS, Sass et JavaScript,
            ainsi que le <strong>back-end</strong> avec PHP, Symfony et Angular.
            Je travaille également avec des plateformes comme WordPress,
            GitHub et Vercel.
          </p>
          <p>
            J’aime collaborer avec des startups et des clients pour créer des
            produits numériques propres et professionnels.
            N’hésitez pas à me contacter à tout moment.
          </p>

          {/* Updated Contact Button */}
          <button className="about-btn" onClick={scrollToContact}>
            CONTACT
          </button>
        </div>

        <div className="about-right" style={iosStyle}>
          <h3>Mes compétences</h3>

          <div className="skills-block">
            <h4>Design</h4>
            <div className="skills">
              <span>Figma</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="skills-block">
            <h4>Front-end</h4>
            <div className="skills">
              <span>React</span>
              <span>React Native</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skills-block">
            <h4>Back-end</h4>
            <div className="skills">
              <span>PHP</span>
              <span>Symfony</span>
              <span>Angular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
