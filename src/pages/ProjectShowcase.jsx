import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { projectsData } from '../data/projects';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="project-not-found">Project not found</div>;

  return (
    <div className="project-showcase-page">
      <div className="project-modal-content">
        {/* Top Navigation */}
        <div className="project-modal-nav">
          <button className="close-button" onClick={() => navigate('/#work')} aria-label="Back to work section">
            <X size={24} />
          </button>
          <div className="lang-toggle">
            <span className="active">EN</span> <span className="inactive">JA</span>
          </div>
        </div>

        <div className="project-modal-body">
          {/* Left Column: Details */}
          <div className="project-details">
            <span className="project-index">{project.index}</span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-column">
                <span className="meta-label">CATEGORY</span>
                <span className="meta-value">{project.category}</span>
              </div>
              <div className="meta-column">
                <span className="meta-label">ROLE</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>

            {project.siteUrl && (
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="view-site-btn">
                VIEW SITE
              </a>
            )}
          </div>

          {/* Right Column: Visuals */}
          <div className="project-visuals">
            <div className="main-image-container" style={{ backgroundColor: project.color }}>
              {project.image ? (
                <img src={project.image} alt={project.title} className="main-image" />
              ) : (
                <div className="placeholder-image"></div>
              )}
            </div>
            
            {/* Gallery Thumbnails */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="gallery-thumbnails">
                {project.gallery.map((img, i) => (
                  <div key={i} className="thumbnail" style={{ backgroundColor: img.color || '#e5e7eb' }}>
                    {img.src && <img src={img.src} alt={`${project.title} thumbnail ${i}`} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
