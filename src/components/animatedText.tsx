import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Animated Headings (H1-H6)
export const AnimatedH1: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h1>
);

export const AnimatedH2: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h2>
);

export const AnimatedH3: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h3>
);

export const AnimatedH4: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h4
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h4>
);

export const AnimatedH5: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h5
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h5>
);

export const AnimatedH6: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.h6
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h6>
);

// Animated Paragraph
export const AnimatedP: React.FC<AnimatedProps> = ({ children, className = "", delay = 0 }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.p>
);

// Animated Link
interface AnimatedLinkProps extends AnimatedProps {
  href: string;
  target?: string;
  rel?: string;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  href,
  target,
  rel
}) => (
  <motion.a
    href={href}
    target={target}
    rel={rel}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ x: 5, transition: { duration: 0.2 } }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.a>
);

export const AnimatedButton: React.FC<AnimatedProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);