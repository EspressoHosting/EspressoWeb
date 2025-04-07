import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Update state for animation
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Direct DOM manipulation for perfect sync
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0) scale(${clicked ? 0.5 : linkHovered ? 0 : 1})`;
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 1,
    },
    clicked: {
      scale: 0.8,
    },
    hovered: {
      scale: 1.5,
    },
  };

  const dotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 1,
    },
    clicked: {
      scale: 0.5,
    },
    hovered: {
      scale: 0,
    },
  };

  // Only render the cursor elements if position has been initialized
  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        variants={variants}
        initial="default"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          backgroundColor: '#d2bab0',
          opacity: 0.6,
          borderRadius: '50%'
        }}
      />
      <motion.div
        ref={dotRef}
        className="custom-cursor-dot"
        variants={dotVariants}
        initial="default"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : linkHovered ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{
          backgroundColor: '#d2bab0',
          opacity: 0.9
        }}
      />
    </>
  )
}