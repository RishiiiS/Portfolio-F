import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo">rishi</div> */}
      
      <div className="nav-actions">
        <button className="btn-chat">
          CHAT WITH RISHI
          <MessageSquare className="chat-icon" size={16} strokeWidth={2.5} />
        </button>
        
        <button className="btn-menu">
          MENU
          <div className="menu-dots">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
