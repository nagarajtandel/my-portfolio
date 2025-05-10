import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid" data-aos="fade-up">
        <div className="skill-card"data-aos="flip-left">HTML</div>
        <div className="skill-card"data-aos="flip-left">CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">Python</div>
        <div className="skill-card">Django</div>
        <div className="skill-card"data-aos="flip-left">SQL</div>
        <div className="skill-card"data-aos="flip-left">Git & GitHub</div>
      </div>
    </section>
  );
};

export default Skills;
