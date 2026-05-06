import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const { progress, active } = useProgress();
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // When progress hits 100 or is no longer active, start fade out
    if (progress === 100 || (!active && progress > 0)) {
      setFadeOut(true);
      // Wait for CSS transition (0.8s) before removing from DOM
      const timeout = setTimeout(() => {
        setHidden(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, active]);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="scanner-container">
          <div className="scanner"></div>
          <h2 className="loading-title">INITIALIZING XR SPACE</h2>
        </div>
        
        <div className="progress-wrapper">
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-glow" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="progress-stats">
          <span className="loading-status">
            {progress < 100 ? 'LOADING ASSETS...' : 'SYSTEM READY'}
          </span>
          <span className="loading-percentage">{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
