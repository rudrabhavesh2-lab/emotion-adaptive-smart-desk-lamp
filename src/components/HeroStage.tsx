import React, { useState, useEffect } from 'react';
import { Play, Layers, Cpu, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroStageProps {
  onExploreClick: () => void;
}

export default function HeroStage({ onExploreClick }: HeroStageProps) {
  const lampStates = [
    { name: "Focus Light", color: "#FFFFFF", text: "White LED Study Mode", description: "Enhances cognitive focus" },
    { name: "Adaptive Calm", color: "#00D4FF", text: "Blue LED Ambient Mode", description: "Ocular relief and comfort" },
    { name: "Autonomic Balance", color: "#00FFB2", text: "Green LED Relax Mode", description: "Reduces neurological strain" },
    { name: "Comfort Warmth", color: "#FFA629", text: "Warm White Passive Mode", description: "Late-night ambient comfort" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically transition the lamp color through the 4 states index
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lampStates.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentState = lampStates[activeIndex];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 overflow-hidden py-10 lg:py-16">
      {/* Floating particles in background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent-primary/10"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-drift ${Math.random() * 12 + 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}

        {/* Ambient background soft glow reacting to current lamp colors */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-[1200ms] pointer-events-none"
          style={{
            backgroundColor: currentState.color
          }}
        />

        {/* Grid Overlay mapping the modern tech studio */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      {/* Main Grid: Info Text and 3D Lamp Visualizer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6 lg:mt-12">
        
        {/* Left column: Text Information */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          <div className="space-y-4">
            {/* Soft border tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono text-accent-primary tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-success animate-ping" />
              INNOVATION EXHIBITION 2026
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.1] text-[#FFFFFF]">
              Emotion-Adaptive <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-[#9B89FF] to-accent-secondary drop-shadow-lg">
                Smart Desk Lamp
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg lg:text-xl font-sans font-normal leading-relaxed text-left max-w-2xl">
              An intelligent lighting system that adapts illumination based on environmental and user conditions.
            </p>

            <span className="inline-block text-slate-400 text-sm font-mono tracking-wide border-l-2 border-accent-secondary pl-3">
              Built using Arduino, sensors and adaptive LED control.
            </span>
          </div>

          <p className="text-accent-primary/80 font-mono text-xs uppercase tracking-widest font-semibold pt-1">
            Project submitted for CCDT & AICTE Innovation Evaluation.
          </p>

          {/* Call to actions - Apple/Tesla design style */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('prototype-demo')}
              className="px-6 py-3.5 rounded-full bg-[#00D4FF] hover:bg-[#00B9DF] font-sans text-xs font-bold uppercase tracking-widest text-slate-950 shadow-[0_4px_20px_rgba(0,212,255,0.3)] hover:shadow-[0_4px_25px_rgba(0,212,255,0.45)] transition-all ease-out duration-300 transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Play className="h-3.5 w-3.5 fill-slate-950" />
              Watch Prototype Video
            </button>
            <button
              onClick={() => handleScrollTo('architecture')}
              className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-white/20 hover:border-accent-primary/40 text-white font-sans text-xs font-bold uppercase tracking-widest transition-all ease-out duration-300 transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              View Architecture
            </button>
          </div>
        </div>

        {/* Right column: Interactive 3D adaptive lamp visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[380px]">
          {/* Base Stand Ring (Glow mapping) */}
          <div className="absolute bottom-[20px] w-56 h-12 bg-slate-950/90 rounded-full border border-white/10 shadow-[inset_0_1px_5px_rgba(255,255,255,0.1)] flex items-center justify-center z-10">
            <div className="w-48 h-8 rounded-full border border-dashed border-accent-primary/10 animate-spin" style={{ animationDuration: '24s' }} />
          </div>

          {/* Volumetric ambient space reflection behind lamp */}
          <div 
            className="absolute top-1/4 rounded-full blur-[70px] transition-all duration-1000 ease-in-out pointer-events-none z-0"
            style={{
              backgroundColor: currentState.color,
              width: '160px',
              height: '160px',
              opacity: 0.35
            }}
          />

          {/* Floating Lamp Assembly */}
          <div className="animate-float relative z-20 flex flex-col items-center">
            
            {/* Mini HUD bubble projecting current active state */}
            <div className="absolute -top-6 -left-16 bg-[#090d1c]/90 border border-white/10 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md z-30 select-none max-w-[160px] text-left">
              <span className="text-[9px] font-mono text-[#00D4FF] tracking-wider block font-bold">EMISSION MODE</span>
              <span className="text-xs font-bold text-white block mt-0.5 uppercase tracking-tight">
                {currentState.name}
              </span>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="h-2 w-2 rounded-full transition-colors duration-1000" style={{ backgroundColor: currentState.color }} />
                <span className="text-[9px] text-slate-400 font-mono">
                  {currentState.description}
                </span>
              </div>
            </div>

            {/* Smart Lamp structural rendering */}
            <div className="relative">
              {/* Diffuser Light projection cone */}
              <div 
                className="absolute top-[28px] left-[15px] w-36 h-40 rounded-b-[100px] blur-[32px] mix-blend-screen opacity-55 transition-all duration-1000 ease-in-out pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${currentState.color} 0%, transparent 65%)`
                }}
              />
              
              {/* Outer Shell LED Ring Dome */}
              <div 
                className="w-40 h-8 rounded-t-full transition-all duration-[1000ms] border border-white/10 select-none relative z-20"
                style={{
                  backgroundColor: currentState.color,
                  boxShadow: `0 12px 60px 4px ${currentState.color}`
                }}
              />
              
              {/* LED Ring base border */}
              <div className="w-36 h-2.5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-white/10 mx-auto rounded-b flex justify-around px-2 relative z-20">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="w-1 h-1 rounded-full bg-white/30" />
              </div>
            </div>

            {/* Structural aluminum components */}
            <div className="w-2.5 h-24 bg-gradient-to-b from-slate-800 to-slate-900 border-x border-white/10 mt-[-1px]" />
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/20 flex items-center justify-center shadow">
              <div className="w-2 h-2 rounded-full bg-slate-950" />
            </div>
            
            {/* Metal stand support and anchor */}
            <div className="w-20 h-10 bg-gradient-to-r from-slate-900 to-slate-950 border-x border-white/10 rotate-[20deg] origin-top shadow-inner mt-[-1px]" />
            <div className="w-16 h-3 bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 rounded shadow-2xl mt-1" />
          </div>

        </div>
      </div>

      {/* Down indicators */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 mt-8 select-none">
        <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
          CCDT &amp; AICTE INNOVATION EXHIBITION // SCROLL DOWN
        </span>
        <button 
          onClick={onExploreClick}
          className="text-accent-primary hover:text-white transition-colors duration-300 mt-1"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </div>
  );
}
