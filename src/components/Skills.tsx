import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink } from 'lucide-react';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

interface ProjectUsage {
  projectName: string;
  purpose: string;
}

interface Skill {
  name: string;
  icon: string;
  description: string;
  knowledge: string[];
  projectsUsed?: ProjectUsage[];
  url: string;
}

export default function Skills() {
  const skillsContainerRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    { 
      name: 'Blender', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
      description: "Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline.",
      knowledge: ["High-poly & Low-poly modeling", "Realistic PBR texturing and materials", "Advanced rigging and character animation", "Geometry nodes for procedural generation"],
      projectsUsed: [
        { projectName: "Ancient Indian Market VR Simulator", purpose: "Designed highly detailed, historically accurate 3D market assets." },
        { projectName: "VR Coronary Artery Surgery Training", purpose: "Created optimized high-detail 3D anatomical models." },
        { projectName: "Exploring Extinct Species Through VR", purpose: "Designed and optimized custom 3D extinct animal assets." }
      ],
      url: "https://www.blender.org/"
    },
    { 
      name: 'Unreal Engine', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg',
      description: "Unreal Engine is the world's most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences.",
      knowledge: ["Visual scripting with Blueprints", "Environment lighting and Lumen", "Creating interactive VR/AR mechanics", "Performance optimization for standalone headsets"],
      projectsUsed: [
        { projectName: "Ancient Indian Market VR Simulator", purpose: "Developed the core VR experience, interactive shops, and AI-driven NPCs." },
        { projectName: "VR Coronary Artery Surgery Training", purpose: "Programmed the real-time interactive surgery simulator using Blueprints." },
        { projectName: "JARVIS-Inspired AR Assistant", purpose: "Developed holographic HUD and integrated AR interaction systems." }
      ],
      url: "https://www.unrealengine.com/"
    },
    { 
      name: 'Unity', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
      description: "Unity is a cross-platform game engine used to create interactive 3D, 2D, VR, and AR experiences.",
      knowledge: ["C# gameplay programming", "Building optimized mobile AR apps", "Custom shaders with Shader Graph", "Physics and collision systems"],
      projectsUsed: [
        { projectName: "VR Foundations Workshop", purpose: "Facilitated a hands-on workshop guiding peers in Unity real-time XR development." }
      ],
      url: "https://unity.com/"
    },
    { 
      name: 'C++', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
      description: "C++ is a high-performance programming language widely used in systems programming and game development.",
      knowledge: ["Memory management and pointers", "Object-oriented programming", "Unreal Engine C++ classes", "Performance-critical algorithms"],
      projectsUsed: [
        { projectName: "JARVIS-Inspired AR Assistant", purpose: "Optimized performance-critical AR tracking and API integrations." }
      ],
      url: "https://isocpp.org/"
    },
    { 
      name: 'Java', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      description: "Java is a popular, class-based, object-oriented programming language known for its portability.",
      knowledge: ["Backend systems architecture", "Android native development", "Multi-threading", "REST API integration"],
      url: "https://www.java.com/"
    },
    { 
      name: 'Houdini', 
      icon: 'https://cdn.simpleicons.org/houdini/ffffff',
      description: "Houdini is a 3D animation software application developed by SideFX, notable for its procedural generation workflow.",
      knowledge: ["Procedural asset generation", "Particle simulations", "VEX programming", "Destruction and rigid body dynamics"],
      url: "https://www.sidefx.com/"
    },
    { 
      name: 'Figma', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      description: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications.",
      knowledge: ["Wireframing and high-fidelity mockups", "Interactive prototyping", "Spatial UI design for XR", "Design systems and components"],
      projectsUsed: [
        { projectName: "Fiverr Freelance", purpose: "Provide professional UI design for mobile applications." }
      ],
      url: "https://www.figma.com/"
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      description: "Git is a distributed version control system that tracks changes in any set of computer files.",
      knowledge: ["Branching and merging workflows", "Resolving complex merge conflicts", "Collaborating on large Unreal projects", "CI/CD integration"],
      projectsUsed: [
        { projectName: "All Projects", purpose: "Maintained version control and collaborated effectively across all XR development projects." }
      ],
      url: "https://git-scm.com/"
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      description: "Firebase is a platform developed by Google for creating mobile and web applications.",
      knowledge: ["Real-time NoSQL databases", "User authentication flows", "Cloud functions", "Analytics integration"],
      url: "https://firebase.google.com/"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-icon-wrapper', 
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsContainerRef.current,
            start: "top 70%",
          }
        }
      );
    }, skillsContainerRef);

    return () => ctx.revert();
  }, []);

  // Handle body scrolling when modal is open
  useEffect(() => {
    if (activeSkill) {
      document.body.style.overflow = 'hidden';

      // On mobile, if the page somehow scrolls, close the modal automatically
      let initialScroll = window.scrollY;
      const handleScroll = () => {
        if (Math.abs(window.scrollY - initialScroll) > 50) {
          setActiveSkill(null);
        }
      };

      const timer = setTimeout(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
      }, 300);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeSkill]);

  return (
    <section className="skills-section container" id="skills" ref={skillsContainerRef}>
      <div className="section-header">
        <h2>Technical <span className="accent-text">Arsenal</span></h2>
        <p>Tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="logo-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-icon-wrapper"
            onClick={() => setActiveSkill(skill)}
          >
            <div className="icon-box">
              <img src={skill.icon} alt={skill.name} className="skill-logo" />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* SKILL MODAL */}
      {activeSkill && (
        <div className="skill-modal-overlay" onClick={() => setActiveSkill(null)}>
          <div 
            className="skill-modal-content" 
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <button className="close-modal-btn" onClick={() => setActiveSkill(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">
                <img src={activeSkill.icon} alt={activeSkill.name} />
              </div>
              <h3>{activeSkill.name}</h3>
            </div>
            
            <div className="modal-body">
              <p className="skill-description">{activeSkill.description}</p>
              
              <div className="skill-modal-grid">
                <div className="skill-knowledge">
                  <h4>What I Know</h4>
                  <ul>
                    {activeSkill.knowledge.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {activeSkill.projectsUsed && activeSkill.projectsUsed.length > 0 && (
                  <div className="skill-projects">
                    <h4>Where I've Used It</h4>
                    <div className="skill-project-list">
                      {activeSkill.projectsUsed.map((usage, i) => (
                        <div key={i} className="skill-project-item">
                          <span className="project-name-badge">{usage.projectName}</span>
                          <p>{usage.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-footer">
              <a href={activeSkill.url} target="_blank" rel="noopener noreferrer" className="official-link">
                <span>Official Website</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
