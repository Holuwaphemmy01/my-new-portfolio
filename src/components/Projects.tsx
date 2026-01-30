"use client";

import ProjectCard, { Project } from './ProjectCard';
import { useState } from 'react';

const blockchainProjects: Project[] = [
  {
    image: "",
    title: "DeFi Lending Platform",
    description: "A decentralized lending and borrowing platform on the Ethereum blockchain, allowing users to earn interest or take out collateralized loans.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "React", "Next.js"],
    caseStudyUrl: "/case-studies/defi-lending",
    liveUrl: "https://defi-lending-demo.com",
    sourceUrl: "https://github.com/username/defi-lending",
  },
  {
    image: "",
    title: "NFT Marketplace",
    description: "A full-featured marketplace for minting, buying, and selling non-fungible tokens (NFTs), complete with auction capabilities.",
    tags: ["ERC-721", "IPFS", "Next.js", "Tailwind CSS", "Solidity"],
    caseStudyUrl: "/case-studies/nft-marketplace",
    liveUrl: "https://nft-marketplace-demo.com",
    sourceUrl: "https://github.com/username/nft-marketplace",
  },
];

const fullStackProjects: Project[] = [
  {
    image: "",
    title: "Real-time Chat App",
    description: "A full-stack chat application using WebSockets for instant messaging, with features like private rooms and user authentication.",
    tags: ["Node.js", "Express", "Socket.IO", "React", "MongoDB"],
    liveUrl: "https://chat-app-demo.com",
    sourceUrl: "https://github.com/username/chat-app",
  },
];

const backendProjects: Project[] = [
  {
    image: "",
    title: "RESTful API for E-commerce",
    description: "A comprehensive backend API for an e-commerce platform, managing products, users, orders, and payments with a secure and scalable architecture.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    sourceUrl: "https://github.com/username/ecommerce-api",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "blockchain" | "fullstack" | "backend">("all");
  return (
    <section id="projects" className="w-full py-20 px-8 bg-transparent text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Work</h2>
        <div className="flex justify-center gap-3 mb-10">
          {[
            { key: "all", label: "All" },
            { key: "blockchain", label: "Blockchain" },
            { key: "fullstack", label: "Full‑Stack" },
            { key: "backend", label: "Backend" },
          ].map((b) => (
            <button
              key={b.key}
              onClick={() => setFilter(b.key as any)}
              className={`px-4 py-2 rounded-full border ${filter === b.key ? "bg-cyan-600 border-cyan-500 text-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {(filter === "all" || filter === "blockchain") && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8">Blockchain Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {blockchainProjects.map((p, i) => <ProjectCard key={`bc-${i}`} project={p} />)}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "fullstack") && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8">Full‑Stack Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {fullStackProjects.map((p, i) => <ProjectCard key={`fs-${i}`} project={p} />)}
            </div>
          </div>
        )}

        {(filter === "all" || filter === "backend") && (
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8">Backend‑Only Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {backendProjects.map((p, i) => <ProjectCard key={`be-${i}`} project={p} />)}
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;
