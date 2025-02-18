// components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-10"
        >
          Get in Touch
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-6"
        >
          Feel free to reach out for collaborations, job opportunities, or just to say hi!
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/hilmanhaikal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/hilmanhaikal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:hilmanhaikal7@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
