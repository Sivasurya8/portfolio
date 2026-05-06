import './CatchMe.css';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FiverrIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.16 11.23h-2.12v-1.74c0-.98.71-1.24 1.25-1.24.4 0 .86.13 1.15.3l.56-1.57a3.42 3.42 0 0 0-2.02-.57c-2.01 0-3.03 1.1-3.03 3.08v1.74h-1.52v1.94h1.52v5.18h2.09v-5.18h2.12v-1.94zm-6.17.02h-1.6c-.16-.39-.42-.58-.72-.58-.57 0-.96.65-.96 1.84v4.85H7.62v-7.1h1.99v1.27c.4-.85 1.1-1.4 1.87-1.4.3 0 .58.07.78.2l-.27 1.9a1.86 1.86 0 0 0-.66-.12c-.52 0-.96.4-1.17 1.14zm-4.7 0H6.2v7.1H4.11v-7.1H2.02v-1.94h2.09V7.77c0-1.84 1.16-3 3-3 .75 0 1.54.2 1.86.44l-.65 1.76c-.2-.14-.58-.3-.98-.3-.83 0-1.23.47-1.23 1.34v1.28h2.18v1.94z"/>
  </svg>
);

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
              <LinkedinIcon />
            </a>
            <a href="https://github.com/Sivasurya8" target="_blank" rel="noopener noreferrer" className="retro-social-icon github" title="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.instagram.com/m_siva_surya/" target="_blank" rel="noopener noreferrer" className="retro-social-icon instagram" title="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.fiverr.com/sivsurya/" target="_blank" rel="noopener noreferrer" className="retro-social-icon fiverr" title="Fiverr">
              <FiverrIcon />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
