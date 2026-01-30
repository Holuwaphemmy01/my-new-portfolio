"use client";

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 px-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
        <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <p className="text-lg text-gray-300 mb-8">
            Check out my resume to see my full experience and qualifications.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
