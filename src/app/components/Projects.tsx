// components/Projects.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
      title: "Mental Health Detection",
      description: "A machine learning model that detects mental health conditions using NLP.",
      image: "/projects/project1.png",
      link: "https://github.com/hilmanhaikal/MindGuard",
      tech: ["Python", "TensorFlow", "NLP"],
    },
    {
      title: "E-Commerce landing page",
      description: "A modern e-commerce landing page with a clean and minimalistic design.",
      image: "/projects/homepage.png",
      link: "https://github.com/hilmanhaikal/Homepage",
      tech: ["HTML", "CSS", "UI/UX Design"],
    },
    {
      title: "Login template",
      description: "A simple login page template.",
      image: "/projects/login.png",
      link: "https://github.com/hilmanhaikal/LoginPage",
      tech: ["HTML", "CSS", "UI/UX Design"],
    },
    {
      title: "To-Do List App",
      description: "A simple to-do list app built with React and Tailwind CSS.",
      image: "/projects/todo.png",
      link: "https://github.com/hilmanhaikal/todo-app",
      tech: ["Next.js", "Tailwind CSS", "UI/UX Design"],
    },
    {
      title: "Analytics Dashboard",
      description: "A simple analytics dashboard designed for tracking user statistics.",
      image: "/projects/dashboard.png",
      link: "https://github.com/hilmanhaikal/next-dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Business Website",
      description: "A modern business website template with a clean and minimalistic design.",
      image: "/projects/business.png",
      link: "https://github.com/hilmanhaikal/next-business-demo",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    }
  ];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-10"
        >
          Projects
        </motion.h3>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg shadow-lg group border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300"></div>

              {/* Project Details */}
              <div className="absolute bottom-0 p-5 w-full text-left bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
