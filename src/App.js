import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';  
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import the Hero section
import './App.css';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About /> 
      <Projects/>
      <Skills />
      <Contact /> 
      <Footer/>
      {/* Add other sections like About, Projects, etc., as you go */}
    </div>
  );
}

export default App;
