import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}