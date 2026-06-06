import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import './index.css';
import './App.css';

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });

    // Refresh AOS on every page interaction
    window.addEventListener('load', () => AOS.refresh());

    return () => {
      window.removeEventListener('load', () => AOS.refresh());
    };
  }, []);

  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;