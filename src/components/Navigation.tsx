import { Home, Cpu, Briefcase, Layers, Mail } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const navItems = [
    { id: 'home', icon: <Home size={22} />, label: 'Home' },
    { id: 'skills', icon: <Cpu size={22} />, label: 'Skills' },
    { id: 'projects', icon: <Briefcase size={22} />, label: 'Projects' },
    { id: 'services', icon: <Layers size={22} />, label: 'Services' },
    { id: 'catchme', icon: <Mail size={22} />, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-nav">
      {navItems.map((item) => (
        <div 
          key={item.id} 
          className="nav-item" 
          onClick={() => scrollToSection(item.id)}
        >
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
