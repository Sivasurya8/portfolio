import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");
    
    const moveCursor = (e: MouseEvent) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('[data-cursor]');
      
      if (interactable) {
        setIsHovering(true);
        const text = interactable.getAttribute('data-cursor') || '';
        setCursorText(text);
        gsap.to(cursor, {
          scale: 3,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          mixBlendMode: 'difference',
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      } else {
        setIsHovering(false);
        setCursorText('');
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className={`custom-cursor ${isHovering ? 'hover' : ''}`} ref={cursorRef}>
      <span ref={textRef} className="cursor-text">{cursorText}</span>
    </div>
  );
}
