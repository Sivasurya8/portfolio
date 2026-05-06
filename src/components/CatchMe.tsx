import './CatchMe.css';

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
            <a href="#" className="retro-social-icon linkedin">in</a>
            <a href="#" className="retro-social-icon github">gh</a>
            <a href="#" className="retro-social-icon twitter">t</a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
