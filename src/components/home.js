import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div
          className="home-left"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          <div className="social-icons">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=basbunartayyib@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/tbasdev57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tayyib-basbunar-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div
          className="home-center"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          <h1>Bonjour, je m'appelle Tayyib Basbunar</h1>
          <p>
            Je suis développeur web junior. Je crée des sites web beaux et
            responsives pour des clients du monde entier.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projets
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
