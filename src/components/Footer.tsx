import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/Holuwaphemmy01", label: "GitHub" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://x.com/FemiWire3", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/holuwaphemmy_001?igsh=NThsejlqYm04ZjQy", label: "Instagram" },
  ];

  return (
    <footer className="w-full py-10 text-center bg-transparent text-gray-400 relative z-10 flex flex-col items-center justify-center gap-6">
      
      {/* Social Icons */}
      <div className="flex items-center gap-6">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl text-gray-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-cyan-500 font-bold">Oluwafemi Victor</span>. 
        <span className="hidden md:inline"> Built with <span className="text-cyan-500">Next.js</span> & <span className="text-cyan-500">Three.js</span>.</span>
      </p>
    </footer>
  );
};

export default Footer;
