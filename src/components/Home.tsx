import { useEffect } from 'react';
import gsap from 'gsap';
import Scene from './Scene';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const roles = ["DEVELOPER", "DESIGNER"];
    let currentIndex = 0;
    const roleEls = document.querySelectorAll('.role-text');

    const interval = setInterval(() => {
      if (roleEls.length === 0) return;
      
      gsap.to(roleEls, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % roles.length;
          roleEls.forEach(el => {
            el.textContent = roles[currentIndex];
          });
          gsap.fromTo(roleEls, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section home-section" id="home">

      {/* LAYER 1: 3D MODEL (Background) */}
      <Scene />

      {/* LAYER 2: FRONT (Solid Text & Interactive UI) */}
      <div className="home-layer home-layer-front">
        <div className="container hero-container">
          <header className="hero-header" style={{ justifyContent: 'flex-end' }}>
            <div className="availability">● AVAILABLE FOR WORK</div>
          </header>

          <div className="home-content centered">
            <div className="hero-info centered-info">
              {/* Solid version of the name */}
              <h1 className="massive-name solid-name">SIVASURYA M</h1>
              
              <h2 className="hero-title">
                XR <span className="role-wrapper"><span className="accent-text role-text">DEVELOPER</span></span>
              </h2>
              
              <p className="objective" data-cursor="Read">
                Aspiring XR & Software Developer skilled in Blender, Unreal Engine, Unity, Java, and C++. Passionate about building real-time 3D and AR/VR applications, pushing the boundaries of interactive digital reality.
              </p>
            </div>
            
            <div className="scroll-indicator" data-cursor="Scroll">
              <span>SCROLL TO EXPLORE</span>
              <div className="line-indicator"></div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
