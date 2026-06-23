import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Auto-scroll and infinite loop logic
  useEffect(() => {
    let animationId;
    const scrollNode = scrollRef.current;
    const trackNode = trackRef.current;
    
    if (!scrollNode || !trackNode) return;

    const scroll = () => {
      // 32 is the gap: 2rem (32px)
      const trackWidth = trackNode.offsetWidth + 32;

      // Auto scroll forward
      if (!isHovered && !isDragging) {
        scrollNode.scrollLeft += 1.2; // scroll speed
      }
      
      // Loop forward
      if (scrollNode.scrollLeft >= trackWidth) {
        scrollNode.scrollLeft -= trackWidth;
      }
      // Loop backward (if dragged backward past 0)
      else if (scrollNode.scrollLeft <= 0) {
        scrollNode.scrollLeft += trackWidth;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  // Mouse Drag Logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragDistance(0);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    setDragDistance(Math.abs(walk));
  };

  const handleProjectClick = (projectId) => {
    if (dragDistance > 10) return; // Prevent click if the user was dragging
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="projects-section" id="work">
      <div className="projects-container">
        <div className="projects-header-wrapper">
          <h2 className="projects-headline">Work</h2>
        </div>
      </div>
      
      <div className="marquee-wrapper">
        <div 
          className={`marquee-scroll-container ${isDragging ? 'dragging' : ''}`}
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Track 1 */}
          <div className="marquee-track" ref={trackRef}>
            {projectsData.map((project) => (
              <div 
                key={`a-${project.id}`} 
                className={`project-image-box ${project.type}`}
                style={{ backgroundColor: project.color }}
                onClick={() => handleProjectClick(project.id)}
              ></div>
            ))}
          </div>
          {/* Track 2 for infinite looping */}
          <div className="marquee-track">
            {projectsData.map((project) => (
              <div 
                key={`b-${project.id}`} 
                className={`project-image-box ${project.type}`}
                style={{ backgroundColor: project.color }}
                onClick={() => handleProjectClick(project.id)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
