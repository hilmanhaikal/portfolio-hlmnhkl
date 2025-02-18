"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-center px-6">
      {/* Animated 404 Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-extrabold"
      >
        404
      </motion.h1>

      {/* Funny Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl mt-4"
      >
        Oops! Looks like you got lost in the void. 🚀  
        <br />
        (And no, {`I'm`} not uploading this code to my GitHub.)
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition"
        >
          Go Home
        </Link>
      </motion.div>

      {/* Funny Astronaut Animation */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: -20 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mt-10"
      >
        🚀
      </motion.div>
    </div>
  );
}
