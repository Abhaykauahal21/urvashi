import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#8b5cf6' : '#ec4899',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1, // Hide inner dot on hover
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      />
      {/* Glow effect */}
      <motion.div
         className="fixed top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none z-0 hidden md:block"
         animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
         }}
         transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;