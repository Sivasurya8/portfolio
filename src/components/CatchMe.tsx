import './CatchMe.css';

import { Linkedin, Github, Instagram } from 'lucide-react';

export default function CatchMe() {
  return (
    <section className="section catchme-section" id="catchme">
      <div className="container contact-retro-container">
        
        <div className="retro-header-row">
          <div className="title-wrapper">
            <span className="badge">TOP</span>
            <h2 className="retro-title">CATCH ME</h2>
          </div>
        </div>

        <form className="retro-form" onSubmit={(e) => e.preventDefault()}>
          <div className="retro-form-left">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Your e-mail address*" required />
            <input type="text" placeholder="Subject" />
          </div>
          
          <div className="retro-form-right">
            <textarea placeholder="Type here your message...*" required></textarea>
            <div className="submit-wrapper">
              <button type="submit">SEND!</button>
            </div>
          </div>
        </form>

        <div className="retro-footer">
          <div className="rss-feed">
            <span className="rss-icon"></span>
            Updates // <span className="rss-highlight">Subscribe RSS feed</span> to receive updates.
          </div>
          
          <div className="retro-socials">
            <a href="https://www.linkedin.com/in/sivasurya-m-13452528b/" target="_blank" rel="noopener noreferrer" className="retro-social-icon linkedin" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Sivasurya8" target="_blank" rel="noopener noreferrer" className="retro-social-icon github" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/m_siva_surya/" target="_blank" rel="noopener noreferrer" className="retro-social-icon instagram" title="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.fiverr.com/sivsurya/" target="_blank" rel="noopener noreferrer" className="retro-social-icon fiverr" title="Fiverr">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 11V7a4 4 0 0 0-8 0v4M4 11h16v10H4z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
