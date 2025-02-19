"use client";
import { motion } from "framer-motion";
import WaveBackground from "./WaveBackground";

export default function Hero() {
  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16">
      <WaveBackground />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hi, {`I'm`} <span className="text-blue-600 dark:text-blue-400">Hilman Haikal</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-2xl"
      >
        A passionate frontend developer crafting modern, responsive, and user-friendly web experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        {/* View My Work Button (Smooth Scroll) */}
        <a
          href="#projects"
          onClick={handleSmoothScroll} // Call smooth scroll function
          className="px-6 py-3 !text-white bg-blue-600 dark:bg-blue-500 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition"
        >
          View My Work
        </a>

        {/* Download Resume Button */}
        <a
          href="/RESUME_MUHAMMAD HILMAN HAIKAL.pdf" // Ensure the file is inside the public/ folder
          download="Hilman_Haikal_Resume.pdf"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-lg font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {`Let’s Work Together`}
        </a>
      </motion.div>
    </section>
  );
}
