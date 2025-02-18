// components/About.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center md:justify"
        >
          <Image
            src="/aboutme.jpg"
            alt="About Me"
            width={280}
            height={280}
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg shadow-lg border dark:border-gray-700 object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left md:max-w-lg lg:max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
            I'm a <strong>frontend developer</strong> and <strong>UI/UX Designer</strong> passionate about crafting modern, user-friendly interfaces.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            I specialize in <strong>Next.js, Tailwind CSS, and UI/UX design</strong>, creating digital experiences that are both <strong>functional and visually appealing</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
