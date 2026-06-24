import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="nav-actions">
          <button className="btn-chat">
            CHAT WITH RISHI
            <MessageSquare className="chat-icon" size={16} strokeWidth={2.5} />
          </button>
          
          <button 
            className={`btn-menu ${isMenuOpen ? 'menu-active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
            {!isMenuOpen && (
              <div className="menu-dots">
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            {/* When close, we can just hide the dots or use a blank placeholder to keep width */}
            {isMenuOpen && (
              <div className="menu-dots">
                 <span className="dot" style={{ opacity: 0 }}></span>
                 <span className="dot" style={{ opacity: 0 }}></span>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Menu Overlay Card */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-card">
          <nav className="menu-nav">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                className="menu-link" 
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
