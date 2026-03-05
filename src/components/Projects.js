import React, { useEffect, useState } from "react";
import "../App.css";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-4.png";
import img4 from "../assets/img-3.png";
import img5 from "../assets/img-5.png";
import img6 from "../assets/img-6.png";
import img7 from "../assets/img-7.png";

function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const iosStyle = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(25px)",
    transition: `all 0.6s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`,
  });

  const projects = [
    {
      title: "Banker App",
      description: "Une application bancaire simple pour débutants.",
      img: img1,
      link: "https://banker-app-starter.vercel.app/"
    },
    {
      title: "Pig Game",
      description: "Jeu de dés Pig classique développé en JavaScript.",
      img: img2,
      link: "https://pig-game-brown-omega.vercel.app/"
    },
    {
      title: "Générateur de repas aléatoires",
      description: "Génère des repas aléatoires à partir de données d’API.",
      img: img3,
      link: "https://radom-meal2.vercel.app/"
    },
    {
      title: "Défi Frontend Mentor",
      description: "Solution de défi frontend avec HTML, CSS et JavaScript.",
      img: img4,
      link: "https://frontend-mentor-1-seven.vercel.app/"
    },
    {
      title: "Application Countries API",
      description: "Affiche des informations sur les pays via une API.",
      img: img5,
      link: "https://countries-api-dusky-nu.vercel.app/"
    },
    {
      title: "Projet Bootstrap pour débutants",
      description: "Projet de pratique Bootstrap pour les débutants.",
      img: img6,
      link: "https://brindahtj.github.io/bootstrapBeginner/bootstrap.html"
    },
    {
      title: "Application Moviz",
      description: "Application de films développée avec React.js.",
      img: img7,
      link: "https://moviz-nine.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading" style={iosStyle(0)}>
        <h2>PROJETS</h2>
        <span></span>
        <p>
          Quelques-uns de mes travaux. Cliquez sur « ÉTUDE DE CAS » pour voir les projets en ligne.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          className="project-row"
          key={index}
          style={iosStyle(index * 0.08)}
        >
          <div className="project-img">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              ÉTUDE DE CAS
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
