"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-8 text-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-600 to-lime-500 flex-shrink-0 shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            {/* Placeholder for a profile picture */}
          </div>
          <p className="text-lg text-center md:text-left text-gray-300">
            I'm a Gen Z full‑stack and on‑chain engineer crafting high‑impact products with React, Next.js, Node, and Solidity. I ship fast, design clean, and optimize for performance, security, and vibe. If you're building something ambitious, I'm your guy.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
