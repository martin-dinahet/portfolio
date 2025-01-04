import { useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="fixed w-4 h-4 rounded-full pointer-events-none mix-blend-difference bg-white z-50 transition-transform duration-100 ease-out"
      style={{ 
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    />
  );
}