import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Let's talk</h2>
        <p className="contact-text">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Drop me a message and I'll get back to you as soon as possible.
        </p>
        <a href="mailto:hello@example.com" className="contact-button">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
