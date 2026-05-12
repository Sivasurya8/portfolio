import './Marquee.css';

export default function Marquee() {
  const row1 = [
    "LEVEL DESIGN", "3D MODELING", "TEXTURING", "RETOPOLOGY", "RIGGING", 
    "LIGHTING", "ANIMATION", "GAME LOGIC", "UI/UX DESIGN", "SHADERS",
    "LEVEL DESIGN", "3D MODELING", "TEXTURING", "RETOPOLOGY", "RIGGING"
  ];
  
  const row2 = [
    "OPTIMIZATION", "PROCEDURAL GENERATION", "ENVIRONMENT ART", "CHARACTER DESIGN", "RENDERING",
    "VR SIMULATIONS", "AR EXPERIENCES", "BLUEPRINTS", "C++", "UNITY C#",
    "OPTIMIZATION", "PROCEDURAL GENERATION", "ENVIRONMENT ART", "CHARACTER DESIGN", "RENDERING"
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {row1.map((item, index) => (
              <span key={index} className="marquee-item">
                {item} <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {row1.map((item, index) => (
              <span key={`dup-${index}`} className="marquee-item">
                {item} <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-right">
          <div className="marquee-content marquee-content-reverse">
            {row2.map((item, index) => (
              <span key={index} className="marquee-item outline">
                {item} <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
          <div className="marquee-content marquee-content-reverse" aria-hidden="true">
            {row2.map((item, index) => (
              <span key={`dup-${index}`} className="marquee-item outline">
                {item} <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
