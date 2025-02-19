"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 md:px-16 py-4 flex justify-between items-center 
      transition-all duration-300 backdrop-blur-md z-50 
      ${scrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-lg py-3" : "bg-transparent"}`}
    >
      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Image src="/logo.svg" alt="Logo" width={120} height={40} className="h-10 w-auto" />
      </motion.div>

      {/* Desktop Navigation with Dark Mode Toggle */}
      <nav className="hidden md:flex gap-8 items-center">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative group text-gray-800 dark:text-white transition ${
              pathname === `#${item.toLowerCase()}` ? "text-blue-500" : "hover:text-blue-500"
            }`}
          >
            {item}
            <span
              className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 
              scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            />
          </Link>
        ))}

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700 
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu Button */}
      <button className="text-gray-800 dark:text-white md:hidden" onClick={toggleNav}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: navOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </motion.div>
      </button>

      {/* Mobile Navigation with Dark Mode Toggle */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden z-40"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 text-gray-800 dark:text-white hover:text-blue-500 transition"
                  onClick={toggleNav}
                >
                  {item}
                </Link>
              ))}
              {/* Dark Mode Toggle in Mobile Menu */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700 
                  hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
              >
                {darkMode ? (
                  <SunIcon className="w-6 h-6 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-gray-800" />
                )}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}