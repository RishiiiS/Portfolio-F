import React from 'react';
import './Projects.css';

const Projects = () => {
  // Placeholder data with different aspect ratios
  const projects = [
    { id: 1, type: 'wide', color: '#e5e7eb' },
    { id: 2, type: 'tall', color: '#d1d5db' },
    { id: 3, type: 'square', color: '#9ca3af' },
    { id: 4, type: 'tall', color: '#6b7280' },
    { id: 5, type: 'wide', color: '#4b5563' },
    { id: 6, type: 'square', color: '#374151' },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header-wrapper">
          {/* <span className="projects-kicker">PROJECTS</span> */}
          <h2 className="projects-headline">
            Work
          </h2>
        </div>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {/* Duplicate the items for seamless infinite scroll animation */}
          {[...projects, ...projects].map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className={`project-image-box ${project.type}`}
              style={{ backgroundColor: project.color }}
            >
              {/* Future project images go here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
