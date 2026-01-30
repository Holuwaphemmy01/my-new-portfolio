"use client";

import { motion } from 'framer-motion';
import { 
  DiJavascript1, DiReact, DiNodejsSmall, DiPython, DiJava, DiRuby, DiGo, DiRust 
} from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql, SiDocker, SiKubernetes, SiAmazonwebservices, SiGooglecloud } from 'react-icons/si';

const techs = [
  { name: "React", icon: <DiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <DiNodejsSmall /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Rust", icon: <DiRust /> },
  { name: "Go", icon: <DiGo /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <SiAmazonwebservices /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Python", icon: <DiPython /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
];

const TechMarquee = () => {
  return (
    <div className="w-full py-10 bg-black/20 backdrop-blur-sm border-y border-white/5 overflow-hidden relative z-10">
      <div className="flex w-fit">
        {/* First copy */}
        <motion.div 
          className="flex gap-16 px-8 items-center"
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
              <span className="text-4xl">{tech.icon}</span>
              <span className="text-lg font-bold uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Second copy for seamless loop */}
        <motion.div 
          className="flex gap-16 px-8 items-center"
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {techs.map((tech, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
              <span className="text-4xl">{tech.icon}</span>
              <span className="text-lg font-bold uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
