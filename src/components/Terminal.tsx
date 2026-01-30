"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaMinus } from 'react-icons/fa';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: 'info', content: 'Welcome to [Your Name] OS v1.0.0' },
    { type: 'info', content: 'Type "help" to see available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', content: cmd }];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push({ type: 'response', content: 'Available commands: help, about, skills, projects, contact, clear, exit' });
        break;
      case 'about':
        newHistory.push({ type: 'response', content: 'I am a Gen Z Full Stack Engineer passionate about blockchain, AI, and building the future of the web.' });
        break;
      case 'skills':
        newHistory.push({ type: 'response', content: 'Frontend: React, Next.js, Tailwind\nBackend: Node.js, Rust, Go\nBlockchain: Solidity, Hardhat' });
        break;
      case 'projects':
        newHistory.push({ type: 'response', content: 'Check out my "Projects" section to see my DeFi dashboard and NFT marketplace!' });
        break;
      case 'contact':
        newHistory.push({ type: 'response', content: 'Email me at: hello@example.com or DM on Twitter.' });
        break;
      case 'clear':
        setHistory([]);
        setInput("");
        return;
      case 'exit':
        setIsOpen(false);
        break;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for a list of commands.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <>
      {/* Floating Action Button to Open Terminal */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-black/80 backdrop-blur-md border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 group"
        >
          <FaTerminal className="text-xl group-hover:animate-pulse" />
          <span className="absolute -top-10 right-0 bg-cyan-900 text-cyan-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Open Terminal
          </span>
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-[90vw] md:w-[600px] h-[400px] bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm flex flex-col"
          >
            {/* Terminal Header */}
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FaTerminal className="text-cyan-500" />
                <span className="text-gray-400">guest@portfolio:~</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors"><FaMinus /></button>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors"><FaTimes /></button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto text-green-400 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className="mb-1 whitespace-pre-wrap">
                  {line.type === 'input' && <span className="text-cyan-400 mr-2">$</span>}
                  <span className={line.type === 'error' ? 'text-red-400' : line.type === 'input' ? 'text-white' : 'text-green-400'}>
                    {line.content}
                  </span>
                </div>
              ))}
              
              {/* Input Line */}
              <div className="flex items-center mt-2">
                <span className="text-cyan-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
