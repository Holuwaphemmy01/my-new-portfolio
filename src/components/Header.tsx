"use client";

import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaCode, FaEnvelope, FaFileAlt, FaBars, FaTimes, FaLayerGroup } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-6 right-6 z-[60] text-white text-3xl md:hidden p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Header (Vertical Right Dock) */}
      <header className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <nav className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <ul className="flex flex-col space-y-8 text-white">
            <li>
              <a href="#home" title="Home" className="text-2xl hover:text-cyan-400 transition-colors">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="#about" title="About" className="text-xl hover:text-cyan-400 transition-colors">
                <FaUser />
              </a>
            </li>
            <li>
              <a href="#skills" title="Skills" className="text-xl hover:text-cyan-400 transition-colors">
                <FaTools />
              </a>
            </li>
            <li>
              <a href="#services" title="Services" className="text-xl hover:text-cyan-400 transition-colors">
                <FaLayerGroup />
              </a>
            </li>
            <li>
              <a href="#projects" title="Projects" className="text-xl hover:text-cyan-400 transition-colors">
                <FaCode />
              </a>
            </li>
            <li>
              <a href="#resume" title="Resume" className="text-xl hover:text-cyan-400 transition-colors">
                <FaFileAlt />
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact" className="text-xl hover:text-cyan-400 transition-colors">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-20 right-6 z-50 md:hidden">
          <nav className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.25)] min-w-[200px]">
            <ul className="flex flex-col space-y-4 text-white">
              <li>
                <a href="#home" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaHome className="text-xl" /> Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaUser className="text-xl" /> About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaTools className="text-xl" /> Skills
                </a>
              </li>
              <li>
                <a href="#services" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaLayerGroup className="text-xl" /> Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaCode className="text-xl" /> Projects
                </a>
              </li>
              <li>
                <a href="#resume" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaFileAlt className="text-xl" /> Resume
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu} className="text-lg hover:text-cyan-400 transition-colors flex items-center gap-3">
                  <FaEnvelope className="text-xl" /> Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
