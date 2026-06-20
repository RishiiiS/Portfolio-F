import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable modern web applications using cutting-edge technologies.'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Crafting intuitive, user-centric interfaces with a focus on premium aesthetics and engaging user experiences.'
    },
    {
      id: 3,
      title: 'Interactive Experiences',
      description: 'Integrating stunning 3D objects and animations into the browser to make your digital presence truly unforgettable.'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">What I can do for you.</p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
