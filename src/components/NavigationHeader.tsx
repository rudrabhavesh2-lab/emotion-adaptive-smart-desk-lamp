import React from 'react';
import { Cpu, Play, Square, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationHeaderProps {
  isCodeLoopRunning: boolean;
  onToggleCodeLoop: () => void;
  activeSection: string;
}

export default function NavigationHeader({
  isCodeLoopRunning,
  onToggleCodeLoop,
  activeSection
}: NavigationHeaderProps) {
  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'prototype-demo', label: 'Live Demo' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'components', label: 'Components' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'observations', label: 'Observations' },
    { id: 'roadmap', label: 'Future Scope' },
    { id: 'team', label: 'Team' },
    { id: 'feedback', label: 'Feedback' }
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050816]/85 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-4">
      {/* Brand Header */}
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-black/65 border border-accent-primary/45 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
          <Cpu className="h-5 w-5 text-accent-primary" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-success"></span>
          </span>
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <h1 className="text-xs md:text-sm font-extrabold tracking-wider text-white font-display uppercase">
              Smart Desk Lamp
            </h1>
            <span className="text-[8.5px] bg-[#00D4FF]/10 text-[#00D4FF] font-mono px-2 py-0.5 rounded border border-[#00D4FF]/20 font-bold select-none uppercase tracking-wider">
              CCDT / AICTE EVALUATION
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-sans tracking-tight">
            First Year Engineering Innovation Project Showcase
          </p>
        </div>
      </div>

      {/* Navigation list */}
      <nav className="flex flex-wrap items-center justify-center gap-1 bg-black/50 p-1 rounded-full border border-white/5 shadow-inner">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold font-sans tracking-wide transition-all duration-300 cursor-pointer ${
              activeSection === item.id
                ? 'bg-accent-primary text-slate-950 shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Dynamic Simulation trigger */}
      <div className="flex items-center gap-3">
        <motion.button
          onClick={onToggleCodeLoop}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative overflow-hidden flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
            isCodeLoopRunning
              ? 'bg-red-550/20 text-red-200 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
              : 'bg-black/60 text-accent-primary border border-accent-primary/30 shadow-[0_0_15px_rgba(0,212,255,0.05)]'
          }`}
        >
          {isCodeLoopRunning ? (
            <>
              <Square className="h-3.5 w-3.5 text-red-400 fill-red-400" />
              <span>Halt Simulator</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 text-[#00D4FF] fill-[#00D4FF]" />
              <span>Simulate System</span>
            </>
          )}
        </motion.button>
      </div>
    </header>
  );
}
