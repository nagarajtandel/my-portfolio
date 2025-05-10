import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card" data-aos="zoom-in">
          <h3>Food Ordering Chatbot</h3>
          <p>MERN Stack chatbot to automate food ordering and track orders in real time.</p>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <h3>Student Result Management</h3>
          <p>Web app using JavaScript, PHP & MySQL to manage student results efficiently.</p>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <h3>Loan Tracking System</h3>
          <p>Built with PHP & MySQL to track and manage customer loan details and EMIs.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
