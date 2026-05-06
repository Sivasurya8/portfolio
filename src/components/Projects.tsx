import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Image as ImageIcon } from 'lucide-react';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  description: string;
  features: string[];
  techStack: string[];
  imagePlaceholders: number;
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ancient Indian Market VR Simulator',
      role: 'UE5 & Blender',
      year: 'VR',
      description: 'Developing an immersive VR experience that recreates an ancient Indian marketplace with interactive shops, AI-driven NPC vendors, and real-time trading mechanics.',
      features: [
        'Built in Unreal Engine 5 focusing on cultural storytelling and user immersion.',
        'Designed custom 3D assets in Blender.',
        'Optimized performance to consistently achieve ~60 FPS.'
      ],
      techStack: ['Unreal Engine 5', 'Blender', 'VR'],
      imagePlaceholders: 3
    },
    {
      id: 4,
      title: 'JARVIS-Inspired AR Assistant',
      role: 'UE5 & Gemini API',
      year: 'AR / AI',
      description: 'Developed an AR assistant in Unreal Engine with a holographic HUD for real-time voice interaction and scene understanding.',
      features: [
        'Integrated Gemini API, speech processing, and computer vision for hands-free commands and smart responses.',
        'Optimized performance to maintain ~60 FPS.',
        'Successfully reduced latency by ~30%.'
      ],
      techStack: ['Unreal Engine', 'Gemini API', 'AR'],
      imagePlaceholders: 2
    },
    {
      id: 2,
      title: 'VR Coronary Artery Surgery Training',
      role: 'UE5 Blueprints',
      year: 'Medical VR',
      description: 'Developed a VR-based coronary surgery training simulator delivering real-time interaction at ~60 FPS.',
      features: [
        'Built using Unreal Engine 5 and Blueprints.',
        'Created optimized high-detail 3D anatomical models in Blender.',
        'Reduced load time by ~30%.',
        'Cut dependency on physical training resources by ~40%.'
      ],
      techStack: ['Unreal Engine 5', 'Blueprints', 'Blender'],
      imagePlaceholders: 2
    },
    {
      id: 3,
      title: 'Exploring Extinct Species Through VR',
      role: 'UE5 & Blender',
      year: 'EdTech VR',
      description: 'Developed an immersive VR-based educational application in Unreal Engine to explore extinct species with real-time interaction and guided learning.',
      features: [
        'Designed and optimized custom 3D assets using Blender.',
        'Achieved ~60 FPS performance and reduced load times by 25%.',
        'Improved user engagement and understanding by ~35%.'
      ],
      techStack: ['Unreal Engine', 'Blender', 'VR'],
      imagePlaceholders: 3
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    if (container && scrollWrapper) {
      // Calculate how far to scroll horizontally
      const scrollWidth = scrollWrapper.scrollWidth - window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(scrollWrapper, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }, container);

      return () => ctx.revert();
    }
  }, []);

  // Handle body scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <section className="projects-container" ref={containerRef} id="projects">
      <div className="projects-header container">
        <h2>Featured <span className="accent-text">Works</span></h2>
        <p>Scroll to explore</p>
      </div>

      <div className="projects-scroll-wrapper" ref={scrollWrapperRef}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-panel"
            data-cursor="Open"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-content">
              <div className="project-meta">
                <span>0{index + 1}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-image-placeholder">
                <div className="placeholder-text">Click to View Details</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal-content"
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <button className="close-modal-btn" onClick={() => setActiveProject(null)}>
              <X size={24} />
            </button>

            <div className="project-modal-header">
              <h2>{activeProject.title}</h2>
              <div className="project-tags">
                <span className="tag">{activeProject.year}</span>
                <span className="tag">{activeProject.role}</span>
              </div>
            </div>

            <div className="project-modal-body">
              <p className="project-modal-desc">{activeProject.description}</p>

              <div className="project-modal-grid">
                <div className="project-details-col">
                  <h4>What I Did</h4>
                  <ul className="project-features">
                    {activeProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <h4>Tech Stack</h4>
                  <div className="tech-stack-container">
                    {activeProject.techStack.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-images-col">
                  <h4>Project Gallery</h4>
                  <div className="image-placeholders-grid">
                    {Array.from({ length: activeProject.imagePlaceholders }).map((_, i) => (
                      <div key={i} className="gallery-placeholder">
                        <ImageIcon size={32} opacity={0.5} />
                        <span>Upload Image {i + 1} Here</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
