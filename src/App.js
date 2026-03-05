import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/Projects";
import Certificates from "./components/certificate"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Certificates id="certificate" /> 
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
