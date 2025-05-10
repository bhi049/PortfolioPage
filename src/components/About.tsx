import React from "react";
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
  id="about"
  className="max-w-3xl mx-auto px-4 py-16 text-white text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold mb-6">About Me</h2>
  <p className="text-lg leading-relaxed mb-8 text-gray-300">
    I’m a software development student passionate about building meaningful digital experiences.
    I enjoy creating user-friendly web applications with clean, maintainable code –
    whether it’s frontend interfaces or backend logic. In every project, I value simplicity, scalability,
    and great UX. I love learning new technologies, solving real-world problems, and collaborating
    with others to bring ideas to life.
  </p>

  <div className="mt-10">
    <h3 className="text-xl font-semibold mb-4 text-gray-200">🧰 Tech Stack</h3>
    <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-300">
      <span className="bg-gray-700 px-3 py-1 rounded-full">React</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">TypeScript</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">JavaScript</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">React Native</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Expo</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Java (Spring Boot)</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Python</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">PostgreSQL</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Firebase</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Supabase</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">REST APIs</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">JWT</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Git</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">GitHub</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Vite</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Pygame</span>
      <span className="bg-gray-700 px-3 py-1 rounded-full">Docker</span>
    </div>
  </div>
</motion.section>
);
export default About;
