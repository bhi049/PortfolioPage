import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import profilePicture from '../assets/profilePicture.png';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center" >
      <div className="flex flex-col items-center justify-center">
        <motion.img
          src={profilePicture}
          alt="Nikolas Kataja"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Hello, my name is Nikolas Kataja
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-sm md:text-xl text-gray-300"
        >
          I’m a software development student eager to build, learn, and innovate.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col items-center gap-1 text-sm md:text-base text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="tel:+358401234567" className="flex items-center gap-2 hover:text-white transition">
            <MdPhone className="text-lg" />
            +358 45 238 4230
          </a>
          <a href="mailto:nikolas.kataja@gmail.com" className="flex items-center gap-2 hover:text-white transition">
            <MdEmail className="text-lg" />
            nikolas.kataja@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 animate-bounce text-gray-400"
        >
          <a href="#about">
            <FaChevronDown className="text-2xl hover:text-white transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;