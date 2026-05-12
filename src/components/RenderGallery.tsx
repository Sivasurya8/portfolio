import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RenderGallery.css';

gsap.registerPlugin(ScrollTrigger);

interface RenderItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

export default function RenderGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const renders: RenderItem[] = [];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = gsap.utils.toArray('.render-card');
    const videos = gsap.utils.toArray<HTMLVideoElement>('.render-video');

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
        }
      });

      // Cards animation - use staggered animation for efficiency
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.render-grid',
          start: 'top 85%',
        }
      });

      // Video playback control - Only play when visible
      videos.forEach((video) => {
        ScrollTrigger.create({
          trigger: video,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
        });
      });
    }, section || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section render-gallery-section" id="renders" ref={sectionRef}>
      <div className="container">
        <h2 ref={titleRef}>3D <span className="accent-text">Masterpieces</span></h2>
        
        <div className="render-grid">
          {renders.map((item) => (
            <div key={item.id} className={`render-card ${item.type}`}>
              <div className="render-media-wrapper">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.title} className="render-media" loading="lazy" />
                ) : (
                  <video 
                    src={item.url} 
                    className="render-media render-video" 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                  />
                )}
                <div className="render-overlay">
                  <div className="render-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
