import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profilePicture.png';



const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-900 to-gray-900 text-white relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10">
        <motion.img
          src={profilePicture}
          alt="Nikolas Kataja"
          style={{ width: '350px', height: '350px', borderRadius: '50%' }}
          className="mb-6 object-cover border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hello, my name is Nikolas Kataja
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          I’m, a software development student eager to build, learn, and innovate.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;
