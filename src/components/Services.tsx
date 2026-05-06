import './Services.css';
import { ExternalLink, MapPin, MessageCircle, Star } from 'lucide-react';

export default function Services() {
  const fiverrProfileUrl = "https://www.fiverr.com/sellers/sivsurya";

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <h2>Freelance <span className="accent-text" style={{color: '#1dbf73'}}>Fiverr</span></h2>
        
        {/* Fiverr Profile Header */}
        <div className="fiverr-profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={`${import.meta.env.BASE_URL}images/profil.png`} alt="Sivasurya M" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
            </div>
            <div className="profile-info">
              <div className="profile-name-row">
                <h3>Sivasurya M</h3>
                <span className="profile-handle">@sivsurya</span>
              </div>
              <div className="profile-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
                <div className="meta-item">
                  <MessageCircle size={16} />
                  <span>Speaks Tamil, English</span>
                </div>
              </div>
            </div>
            <a href={fiverrProfileUrl} target="_blank" rel="noopener noreferrer" className="fiverr-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* Gigs & Portfolio */}
        <div className="gigs-layout">
          
          {/* GIG 1: 3D Modeling (Includes Portfolio underneath) */}
          <div className="gig-column">
            <a href={fiverrProfileUrl} target="_blank" rel="noopener noreferrer" className="gig-card" data-cursor="Open">
              <div className="gig-image-wrapper">
                <img src={`${import.meta.env.BASE_URL}images/gig_3d.png`} alt="3D Modeling Gig" className="gig-image" />
                <div className="gig-overlay">
                  <ExternalLink size={32} color="#fff" />
                </div>
              </div>
              <div className="gig-content">
                <p className="gig-title">create stunning 3d models and realistic renders in blender</p>
                <div className="gig-footer">
                  <div className="rating">
                    <Star size={16} fill="#ffb33e" color="#ffb33e" />
                    <span>5.0</span>
                  </div>
                  <span className="impressions">38 Impressions</span>
                </div>
              </div>
            </a>

            {/* Sub-portfolio for 3D Models */}
            <div className="gig-portfolio">
              <h4 className="portfolio-title">Recent Work</h4>
              <div className="portfolio-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="portfolio-item">
                  <img src={`${import.meta.env.BASE_URL}images/3D_Work_1.1.png`} alt="3D Work 1" />
                </div>
                <div className="portfolio-item">
                  <img src={`${import.meta.env.BASE_URL}images/3D_Work_1.2.png`} alt="3D Work 2" />
                </div>
                <div className="portfolio-item">
                  <img src={`${import.meta.env.BASE_URL}images/3D_Work_2.png`} alt="3D Work 3" />
                </div>
              </div>
            </div>
          </div>

          {/* GIG 2: UI Design */}
          <div className="gig-column">
            <a href={fiverrProfileUrl} target="_blank" rel="noopener noreferrer" className="gig-card" data-cursor="Open">
              <div className="gig-image-wrapper">
                <img src={`${import.meta.env.BASE_URL}images/gig_UI.png`} alt="UI Design Gig" className="gig-image" />
                <div className="gig-overlay">
                  <ExternalLink size={32} color="#fff" />
                </div>
              </div>
              <div className="gig-content">
                <p className="gig-title">do professional UI design for mobile applications in figma</p>
                <div className="gig-footer">
                  <div className="rating">
                    <Star size={16} fill="#ffb33e" color="#ffb33e" />
                    <span>5.0</span>
                  </div>
                  <span className="impressions">10 Impressions</span>
                </div>
              </div>
            </a>

            {/* Sub-portfolio for UI */}
            <div className="gig-portfolio">
              <h4 className="portfolio-title">Recent Work</h4>
              <div className="portfolio-grid" style={{gridTemplateColumns: '1fr'}}>
                <div className="portfolio-item" style={{height: '200px'}}>
                  <img src={`${import.meta.env.BASE_URL}images/UI_work.png`} alt="UI Work" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
