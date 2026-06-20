import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-stack e-commerce solution with seamless checkout and a modern, responsive UI.'
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      category: 'UI/UX Design',
      description: 'A data-heavy financial dashboard designed for clarity, data visualization, and ease of use.'
    },
    {
      id: 3,
      title: 'Immersive Portfolio',
      category: '3D Experience',
      description: 'An interactive 3D web experience built with React Three Fiber to showcase creative work.'
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Featured Work</h2>
        <p className="projects-subtitle">Some of my recent projects.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-placeholder"></div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
