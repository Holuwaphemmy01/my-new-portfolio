"use client";

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { 
  DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiPostgresql, DiDocker, DiRust, DiGo, DiJava, DiPython 
} from 'react-icons/di';
import { 
  SiTypescript, SiNextdotjs, SiSolidity, SiExpress, SiTailwindcss, SiFramer, SiLinux, SiFastapi, SiSpringboot, SiDotnet 
} from 'react-icons/si';
import { FaEthereum, FaTools, FaLaptopCode, FaServer, FaCube, FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FaLaptopCode />,
    description: "Building immersive, responsive, and high-performance user interfaces.",
    skills: [
      { name: "React", icon: <DiReact />, level: 95 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
      { name: "Framer Motion", icon: <SiFramer />, level: 80 },
      { name: "JavaScript", icon: <DiJavascript1 />, level: 90 },
    ],
    color: "cyan",
    accent: "from-cyan-400 to-blue-400"
  },
  {
    title: "Backend & Cloud",
    icon: <FaServer />,
    description: "Architecting scalable servers, databases, and deploying on the cloud.",
    skills: [
      { name: "Node.js", icon: <DiNodejsSmall />, level: 90 },
      { name: "Python", icon: <DiPython />, level: 85 },
      { name: "Java", icon: <DiJava />, level: 80 },
      { name: "C#", icon: <SiDotnet />, level: 80 },
      { name: ".NET", icon: <SiDotnet />, level: 75 },
      { name: "FastAPI", icon: <SiFastapi />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 75 },
      { name: "PostgreSQL", icon: <DiPostgresql />, level: 80 },
      { name: "MongoDB", icon: <DiMongodb />, level: 85 },
      { name: "Docker", icon: <DiDocker />, level: 75 },
      { name: "AWS", icon: <FaAws />, level: 70 },
    ],
    color: "lime",
    accent: "from-lime-400 to-green-400"
  },
  {
    title: "Blockchain & Web3",
    icon: <FaCube />,
    description: "Developing decentralized applications and smart contracts.",
    skills: [
      { name: "Solidity", icon: <SiSolidity />, level: 85 },
      { name: "Hardhat", icon: <FaTools />, level: 80 },
      { name: "Ethers.js", icon: <FaEthereum />, level: 85 },
      { name: "Rust", icon: <DiRust />, level: 60 },
      { name: "Go", icon: <DiGo />, level: 65 },
      { name: "Linux", icon: <SiLinux />, level: 70 },
    ],
    color: "blue", // Changed from purple to blue as requested
    accent: "from-blue-400 to-indigo-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 md:px-8 text-white relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      
      {/* Background Orbs (Static for Performance) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[80px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-lime-400">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated stack of advanced technologies I use to architect digital realities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <TiltCard key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-lg group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-lg group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-lg group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-lg group-hover:border-cyan-400 transition-colors" />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] w-full translate-y-[-100%] group-hover:animate-scan pointer-events-none" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.accent} bg-opacity-10 shadow-lg shadow-${category.color}-500/20`}>
                    <div className="text-2xl text-black/80">{category.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
                    <div className="h-1 w-12 rounded-full mt-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50" />
                  </div>
                </div>

                <p className="text-gray-400 mb-8 min-h-[3rem] text-sm leading-relaxed">{category.description}</p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/skill">
                      <div className={`text-2xl text-gray-500 group-hover/skill:text-${category.color === 'blue' ? 'indigo' : category.color}-400 transition-colors`}>
                        {skill.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                          <span className="text-[10px] text-gray-600 group-hover/skill:text-cyan-400 transition-colors">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.accent}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
