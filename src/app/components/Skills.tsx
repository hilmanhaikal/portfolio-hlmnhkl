// components/Skills.tsx
"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiFirebase, SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML", level: "Experienced" },
  { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS", level: "Experienced" },
  { icon: <FaJs className="text-4xl text-yellow-500" />, name: "JavaScript", level: "Experienced" },
  { icon: <FaReact className="text-4xl text-blue-400" />, name: "React", level: "Intermediate" },
  { icon: <SiNextdotjs className="text-4xl text-gray-900 dark:text-white" />, name: "Next.js", level: "Intermediate" },
  { icon: <SiTailwindcss className="text-4xl text-teal-400" />, name: "Tailwind CSS", level: "Experienced" },
  { icon: <FaNodeJs className="text-4xl text-green-500" />, name: "Node.js", level: "Beginner" },
  { icon: <SiMysql className="text-4xl text-blue-600" />, name: "MySQL", level: "Intermediate" },
  { icon: <SiFirebase className="text-4xl text-orange-400" />, name: "Firebase", level: "Intermediate" },
  { icon: <FaGitAlt className="text-4xl text-red-500" />, name: "Git", level: "Experienced" },
  { icon: <FaVuejs className="text-4xl text-green-400" />, name: "Vue.js", level: "Intermediate" },
  { icon: <SiFlutter className="text-4xl text-blue-500" />, name: "Flutter", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Skills
        </motion.h3>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
              {skill.icon}
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skill.level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
