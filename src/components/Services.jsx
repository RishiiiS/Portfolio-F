import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      tags: ['React', 'Next.js', 'Vite', 'UI Implementation']
    },
    {
      id: 2,
      title: 'Backend Systems',
      tags: ['Node.js', 'Java', 'Spring Boot', 'APIs']
    },
    {
      id: 3,
      title: 'Full Stack Solutions',
      tags: ['Web Applications', 'E-Commerce', 'Dashboards']
    },
    {
      id: 4,
      title: 'Database Architecture',
      tags: ['SQL', 'System Design', 'Optimization']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-row">
              <h3 className="service-row-title">{service.title}</h3>
              <div className="service-row-tags">
                {service.tags.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
