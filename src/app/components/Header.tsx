"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-16 py-4 flex justify-between items-center 
      bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md z-50 transition-all">
      
      {/* Logo Image */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/logo.svg" // Ensure logo.svg is inside the /public folder
          alt="Logo"
          width={120} // Adjust size as needed
          height={40}
          className="h-10 w-auto" // Adjust styling if necessary
        />
      </motion.div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg transition bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-800" />
        )}
      </button>
    </header>
  );
}
