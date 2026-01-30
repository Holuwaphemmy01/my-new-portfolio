"use client";

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Alex Morgan",
    role: "CTO @ DeFi Protocol",
    quote: "One of the most talented blockchain engineers I've worked with. Delivered our smart contracts two weeks ahead of schedule.",
    initials: "AM",
    color: "bg-purple-500"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager @ TechFlow",
    quote: "The attention to detail in the UI is unmatched. He didn't just build what we asked for; he improved the entire user experience.",
    initials: "SJ",
    color: "bg-cyan-500"
  },
  {
    name: "David Chen",
    role: "Founder @ StartupX",
    quote: "A true full-stack wizard. Handled everything from the database architecture to the final pixel-perfect frontend animations.",
    initials: "DC",
    color: "bg-lime-500"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 px-8 text-white relative z-10">
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
          Client Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TiltCard key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full flex flex-col relative shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:bg-white/10 transition-colors"
              >
                <FaQuoteLeft className="text-4xl text-white/10 absolute top-6 right-6" />
                
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed flex-grow">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-white text-lg shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
