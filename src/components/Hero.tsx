"use client";

import { motion } from 'framer-motion';
import StarsCanvas from './Background';
import Hero3D from './Hero3D';
import TrustedBy from './TrustedBy';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const text = "I build world‑class full‑stack and on‑chain products.";
  
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <StarsCanvas />
      <Hero3D />
      <div className="text-center z-10 px-4">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-300 text-sm font-medium tracking-wide">Available for Work</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">Oluwafemi Victor</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-block bg-cyan-600 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]"
            >
              See My Work
            </a>
          </MagneticButton>
        </motion.div>
        <TrustedBy />
      </div>
    </section>
  );
};

export default Hero;
