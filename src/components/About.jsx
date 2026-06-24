import React from 'react';
import { Database } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Column: Text Content */}
        <div className="about-text-content">
          <div className="about-kicker-wrapper">
            <span className="about-kicker">ABOUT ME</span>
            <div className="kicker-line"></div>
          </div>
          
          <h2 className="about-headline">
            I turn ideas into scalable digital products
          </h2>
          
          <p className="about-description">
            With a strong foundation in development and a problem-solving mindset, I build web applications that are fast, reliable, and user-focused.
          </p>
        </div>

        {/* Right Column: Skills Diagram */}
        <div className="about-skills-diagram">
          {/* Subtle connecting path background */}
          <svg className="skills-path-svg" width="100%" height="100%" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
            <path 
               d="M 120,80 C 250,60 300,160 200,200 C 80,240 100,350 350,350 C 450,350 480,250 400,200" 
               fill="none" 
               stroke="#e5e7eb" 
               strokeWidth="2" 
               strokeDasharray="6 6" 
             />
             <circle cx="280" cy="115" r="4" fill="#d1d5db" />
             <circle cx="70" cy="220" r="4" fill="#d1d5db" />
             <circle cx="450" cy="250" r="4" fill="#d1d5db" />
             <circle cx="390" cy="330" r="4" fill="#d1d5db" />
          </svg>

          {/* Skill Nodes */}
          <div className="skill-node node-react">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" />
            <span>React</span>
          </div>
          
          <div className="skill-node node-next">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-icon" />
            <span>Next.js</span>
          </div>
          
          <div className="skill-node node-node">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-icon" />
            <span>Node.js</span>
          </div>
          
          <div className="skill-node node-java">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-icon" />
            <span>Java</span>
          </div>
          
          <div className="skill-node node-spring">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="skill-icon" />
            <span>Spring Boot</span>
          </div>
          
          <div className="skill-node node-sql">
            <Database size={24} color="#111827" strokeWidth={1.5} className="skill-icon" />
            <span>SQL</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
