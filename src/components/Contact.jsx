import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column: Text & Socials */}
        <div className="contact-info">
          <div>
            <h2 className="contact-title">Let's talk.</h2>
            <p className="contact-text">
              Have a project or need help? Fill out the form, and we'll get back to you soon.
            </p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></a>
            <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={20} strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="project">Your Project</label>
              <textarea id="project" placeholder="Tell us about your project" rows="5"></textarea>
            </div>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
