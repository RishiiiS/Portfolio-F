import React from 'react';
import heroImage from '../../spider-man-removebg-preview.png';

const Hero = () => {
  return (
    <main className="hero-section">
      {/* Massive Background Text */}
      <div className="giant-text">
        RISHI
      </div>

      {/* 3D Object Container - Placeholder for future */}
      <div className="canvas-container" id="3d-canvas-container">
        {/* Future 3D object will be mounted here */}
      </div>

      {/* Hero Image Embed */}
      <div className="hero-image-embed">
        <img src={heroImage} alt="Spider-Man" />
      </div>

      {/* Small supporting line describing what I do */}
      <div className="hero-description">
        Freelance Digital Designer & Developer
      </div>
    </main>
  );
};

export default Hero;
