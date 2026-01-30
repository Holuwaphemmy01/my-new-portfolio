"use client";

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { FaCode, FaEthereum, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    title: "Full-Stack Dev",
    description: "Building scalable, high-performance web applications using modern technologies like React, Next.js, and Node.js.",
    icon: <FaCode className="text-4xl text-cyan-400 mb-4" />
  },
  {
    title: "Blockchain Solutions",
    description: "Developing secure smart contracts, DApps, and integrating Web3 features into traditional applications.",
    icon: <FaEthereum className="text-4xl text-lime-400 mb-4" />
  },
 
];

const Services = () => {
  return (
    <section id="services" className="w-full py-20 px-8 text-white relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <TiltCard key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full flex flex-col items-center text-center hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                <div className="p-4 bg-white/5 rounded-full mb-6 ring-1 ring-white/20">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
