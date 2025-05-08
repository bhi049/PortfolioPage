import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-900 to-gray-900 text-white relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10">
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hei, olen Nikolas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          Ohjelmistokehittäjä opiskelija ja intohimoinen koodari
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
