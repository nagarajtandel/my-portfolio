import React from 'react';
import './Hero.css';  // We will create this CSS file soon.

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Hi, I'm Nagaraj Ishwar Tandel</h1>
        <p>I am a Python Full-Stack Developer</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
