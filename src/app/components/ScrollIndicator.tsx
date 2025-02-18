// components/ScrollIndicator.tsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll(); // Tracks scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{ scaleX: smoothProgress }}
      className="fixed top-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 origin-left z-50"
    />
  );
}