"use client";

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <TiltCard className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden h-full flex flex-col"
      >
        <div className="w-full h-32 bg-gray-700 shrink-0">
          {/* Placeholder for project image */}
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-0.5 bg-cyan-600/40 text-white text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition flex items-center gap-2">
                <FaExternalLinkAlt className="text-xs" /> Live
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition flex items-center gap-2">
                <FaGithub className="text-sm" /> GitHub
              </a>
            )}
            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl} className="px-3 py-1.5 text-sm rounded-full bg-lime-500 text-black hover:bg-lime-400 transition">
                Study
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

export default ProjectCard;
