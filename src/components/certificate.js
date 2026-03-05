import React, { useEffect, useState } from "react";
import "../App.css";

import cert1 from "../assets/certificate-1.jpg";
import cert2 from "../assets/certificate2.jpg";
import cert3 from "../assets/certificate3.jpg";

function Certificates() {
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

  const certificates = [
    {
      title: "Certificat C#",
      img: cert2,
      link: cert2,
    },
    {
      title: "Développement d'applications Front-End avec React",
      img: cert1,
      link: cert1,
    },
    {
      title: "Commandes Linux et Scripting Shell Essentiel V2",
      img: cert3,
      link: cert3,
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-heading" style={iosStyle(0)}>
        <h2>CERTIFICATS</h2>
        <span></span>
        <p>
          Certains de mes certificats professionnels mettant en valeur mes compétences et ma formation.
        </p>
      </div>

      <div className="certificates-row">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            style={iosStyle(index * 0.1)}
          >
            <div className="certificate-img">
              <img src={cert.img} alt={cert.title} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                Voir le certificat
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;