import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';


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

        <motion.div
          className="text-sm text-gray-400 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="flex items-center justify-center gap-2 group">
            <MdEmail className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
            <a
              href="mailto:nikolas.kataja@gmail.com"
              className="!text-white no-underline hover:text-blue-400 transition"
            >
              nikolas.kataja@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2 group">
            <MdPhone className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
            <a
              href="tel:+358452884230"
              className="!text-white no-underline hover:text-blue-400 transition"
            >
              +358 45 288 4230
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
