"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center"
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
            {`I'm a`} <strong>frontend developer</strong> and <strong>UI/UX Designer</strong> passionate about crafting modern, user-friendly interfaces.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {`I specialize in `} <strong>Next.js, Tailwind CSS, and UI/UX design</strong>, {`creating digital experiences that are both `} 
            <strong>functional and visually appealing</strong>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {`I love`} <strong>learning new things</strong>, {`whether it's exploring new technologies or discovering creative ways to solve problems.`} 
            {`Music is also a big part of my life—it keeps me inspired and motivated.`}
          </p>

          {/* Play Button with Smooth Transition */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden mt-6 inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            <FaSpotify className="w-6 h-6" />
            <AnimatePresence mode="wait">
              <motion.span
                key={isPlaying ? "hide" : "play"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isPlaying ? "Hide Player" : "Play My Favorite Song"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Spotify Embed (Smooth Appear/Disappear) */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-6"
              >
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/2bdVgAQgosGUJoViVDNeOV?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
