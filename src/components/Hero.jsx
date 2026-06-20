import React from 'react';

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

      {/* Small supporting line describing what I do */}
      <div className="hero-description">
        Freelance Digital Designer & Developer
      </div>
    </main>
  );
};

export default Hero;
