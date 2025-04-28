import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'contrast(150%) brightness(200%) hue-rotate(45deg)',
    transform: 'scale(1.02) translateY(10px)',
  },
  in: {
    opacity: 1,
    filter: 'none',
    transform: 'scale(1) translateY(0px)',
  },
  out: {
    opacity: 0,
    filter: 'contrast(80%) brightness(120%) hue-rotate(-20deg)',
    transform: 'scale(0.98) translateY(-10px)',
  },
};

const pageTransition = {
  duration: 0.35,
  ease: 'easeInOut',
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ willChange: 'opacity, transform, filter' }}
    >
      {children}
    </motion.div>
  );
}
