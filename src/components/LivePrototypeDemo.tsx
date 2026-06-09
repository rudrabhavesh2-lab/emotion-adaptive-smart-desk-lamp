import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, HeartPulse, Play } from 'lucide-react';
// @ts-ignore
import prototypeVideo from '../assets/prototype-demo.mp4';

export default function LivePrototypeDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented, showing play overlay:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error(err));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.section
      id="prototype-demo"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-24 space-y-10 max-w-6xl mx-auto px-4"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[11px] tracking-[0.3em] text-[#00D4FF] uppercase font-mono font-bold block">
          04 // LIVE PROTOTYPE DEMONSTRATION
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
          Working Prototype Demonstration
        </h2>

        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Real Hardware Implementation and Testing
        </p>

        <p className="text-slate-400 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
          Watch our custom-built Emotion-Adaptive Smart Desk Lamp prototype adjust its dynamic ring lights based on micro-sensor inputs, demonstrating immediate logic execution from the onboard microcontroller.
        </p>
      </div>

      {/* Main Glassmorphism Media Container with Neon Blue Ambient Shadow Glow */}
      <div className="relative bg-slate-950/40 backdrop-blur-md rounded-[28px] p-4 md:p-6 border border-white/5 shadow-[0_0_50px_rgba(0,212,255,0.12)] max-w-5xl mx-auto">
        {/* Neon blue radial mesh glowing behind the player */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Dashboard Header decoration for that ultra-premium engineering vibe */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-white/5 relative z-10 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75 font-sans"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
            </span>
            <span className="font-semibold tracking-wider text-slate-300">SYSTEM FEED: DEVICE_PROTOTYPE_V1</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">RESOLUTION: 1080P // 60 FPS</span>
            <span className="bg-[#00D4FF]/10 text-[#00D4FF] px-2 py-0.5 rounded-md border border-[#00D4FF]/20 text-[10px] uppercase font-bold tracking-wide">
              LIVE PREVIEW
            </span>
          </div>
        </div>

        {/* Video Player Display */}
        <div 
          onClick={handlePlayPause}
          className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(0,212,255,0.15)] bg-black aspect-video w-full group transition-all duration-300 hover:border-cyan-500/40 cursor-pointer"
        >
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-2xl"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/prototype-demo.mp4" type="video/mp4" />
            <source src={prototypeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Elegant Custom Play Overlay if paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 group-hover:bg-black/50 z-20">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-5 bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)] backdrop-blur-md"
              >
                <Play className="h-8 w-8 fill-current" />
              </motion.div>
            </div>
          )}
        </div>

        {/* Dynamic Diagnostics / Spec Overview Footer */}
        <div className="mt-6 pt-5 border-t border-white/5 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <HeartPulse className="h-4 w-4 text-red-400" />
              <span className="text-xs font-mono uppercase tracking-wider">Dynamic Diagnostics</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Onboard photodetector registers changes in environment illumination and face proximity, automatically translating microvolt readings into active driver parameters.
            </p>
          </div>

          <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Cpu className="h-4 w-4 text-[#00D4FF]" />
              <span className="text-xs font-mono uppercase tracking-wider">Hardware Logic Core</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Custom programming registers precise duty cycle schedules, avoiding state-change flicker across the Neopixel ring.
            </p>
          </div>

          <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider">Atmospheric Modulation</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Optimized for three distinct micro-environments: dynamic focus-lock, stress dampening warm glow, and standard cool daylight illumination.
            </p>
          </div>
        </div>
      </div>

      {/* Mode Selectors Demonstration Badge Block */}
      <div className="flex flex-col items-center gap-3 pt-4">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-black">
          Demonstrated Dynamic Environmental States
        </span>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/20 border border-red-500/20 text-xs text-red-350 font-mono font-bold shadow-lg shadow-red-950/10 hover:bg-red-950/40 transition-all">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
            Stress Relief Mode (Warm Amber)
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-350 font-mono font-bold shadow-lg shadow-emerald-950/10 hover:bg-emerald-950/40 transition-all">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Relax Mode (Soft Emerald)
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-350 font-mono font-bold shadow-lg shadow-cyan-950/10 hover:bg-cyan-950/40 transition-all">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            Focus Lock Mode (Pure Daylight)
          </div>
        </div>
      </div>
    </motion.section>
  );
}