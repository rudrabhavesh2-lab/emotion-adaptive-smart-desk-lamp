import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Radio, Sun, Zap, Info } from 'lucide-react';

export default function HardwareArchitecture() {
  const [pulseLine, setPulseLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseLine((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="architecture" className="scroll-mt-24 space-y-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          05 // SYSTEM INFRASTRUCTURE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
          Hardware Architecture
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Clean schematic representation of hardware communication links. Control, signals, and power distribution channels.
        </p>
      </div>

      {/* Interactive Architecture Schema Board */}
      <div className="relative bg-[#090d1c]/80 backdrop-blur-md rounded-[24px] p-6 md:p-10 border border-white/5 shadow-[0_0_40px_rgba(123,97,255,0.1)] overflow-hidden">
        
        {/* Glowing background highlights */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7B61FF]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* The visual connection mapping (SVG-based links with glowing paths) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
          
          {/* Inputs Section (Left column) */}
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="text-xs font-mono font-extrabold uppercase text-[#7B61FF] tracking-wider text-left border-l-2 border-[#7B61FF] pl-2">
              Power &amp; Sensory Inputs
            </h4>
            
            {/* Input Node 1: Power Supply */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/5 text-left flex items-start gap-3">
              <div className="p-2 bg-[#7B61FF]/15 text-[#7B61FF] rounded-lg border border-[#7B61FF]/20">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase font-bold block">Source Power</span>
                <span className="text-sm font-bold text-white block">Power Supply // USB 5V</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">High efficiency feed to controller-bus</span>
              </div>
            </div>

            {/* Input Node 2: Microphone Sensor */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/5 text-left flex items-start gap-3">
              <div className="p-2 bg-[#00D4FF]/15 text-[#00D4FF] rounded-lg border border-[#00D4FF]/20">
                <Radio className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase font-bold block">Acoustic Feed</span>
                <span className="text-sm font-bold text-white block">Microphone Sensor</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Captures ambient sound fluctuations</span>
              </div>
            </div>

            {/* Input Node 3: Light Sensor */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/5 text-left flex items-start gap-3">
              <div className="p-2 bg-[#00FFB2]/15 text-[#00FFB2] rounded-lg border border-[#00FFB2]/20">
                <Sun className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-500 uppercase font-bold block">Lumen Input</span>
                <span className="text-sm font-bold text-white block">Light Sensor // LDR</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Measures localized workspace levels</span>
              </div>
            </div>
          </div>

          {/* Central Controller (Middle column) */}
          <div className="flex flex-col justify-center items-center py-6 md:py-0">
            
            {/* Connection Link Indicators (SVG Lines shown on Desktop) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" fill="none" strokeWidth="2">
                {/* Inputs to Controller */}
                <path d="M 285 140 L 390 230" stroke="rgba(0, 212, 255, 0.4)" strokeDasharray="5,5" />
                <path d="M 285 240 L 390 240" stroke="rgba(123, 97, 255, 0.4)" />
                <path d="M 285 340 L 390 250" stroke="rgba(0, 255, 178, 0.4)" strokeDasharray="5,5" />

                {/* Controller to Output */}
                <path d="M 590 240 L 695 240" stroke="rgba(0, 211, 255, 0.55)" strokeDasharray={pulseLine === 3 ? "0" : "4,4"} />
              </svg>
            </div>

            {/* The Unified Microcontroller Core block */}
            <div className="bg-gradient-to-br from-[#090d1c] to-[#0e163d] p-6 lg:p-8 rounded-3xl border-2 border-[#7B61FF]/40 shadow-[0_0_30px_rgba(123,97,255,0.25)] text-center relative z-10 w-full max-w-[280px]">
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="h-2 w-2 rounded-full bg-accent-success animate-ping" />
              </div>

              <div className="h-14 w-14 rounded-2xl bg-[#7B61FF]/10 border border-[#7B61FF]/30 text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(123,97,255,0.2)]">
                <Cpu className="h-7 w-7 text-white" />
              </div>

              <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-widest font-black block">SYSTEM CORE</span>
              <h4 className="text-lg font-extrabold text-white font-display uppercase tracking-wide mt-1">
                Arduino Uno / ESP32
              </h4>
              <p className="text-[11px] text-slate-300 font-sans mt-3 leading-relaxed text-center">
                Runs state execution routines. Collects analog sensory outputs and computes fast RGB PWM adjustments.
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 flex justify-center gap-1.5">
                <span className="text-[8px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-white/5">I2C</span>
                <span className="text-[8px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-white/5">SPI</span>
                <span className="text-[8px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-white/5">GPIO</span>
              </div>
            </div>
          </div>

          {/* Outputs Section (Right column) */}
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="text-xs font-mono font-extrabold uppercase text-[#00FFB2] tracking-wider text-left border-l-2 border-[#00FFB2] pl-2">
              Adaptive Lighting Outputs
            </h4>

            {/* Output Node: RGB LEDs */}
            <div className="bg-gradient-to-br from-[#090d1c] to-[#0a122e] p-6 rounded-2xl border-2 border-[#00D4FF]/30 shadow-[0_0_20px_rgba(0,212,255,0.1)] text-left flex items-start gap-4 h-full flex-col justify-between">
              
              <div className="space-y-4">
                <div className="p-2.5 bg-[#00D4FF]/10 text-[#00D4FF] rounded-lg border border-[#00D4FF]/20 w-fit">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#00D4FF] uppercase font-bold block">Actuators Output</span>
                  <span className="text-base font-extrabold text-white block">RGB LEDs // WS2812B</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans mt-2">
                    Addressable multicolored glowing nodes configured along the top diffuser segment. Provides smooth, high-diffusion, continuous adaptive spectral emissions.
                  </p>
                </div>
              </div>

              <div className="w-full bg-slate-950 p-2.5 rounded-lg border border-white/5 font-mono text-[9px] text-[#00FFB2] flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 shrink-0" />
                <span>DYNAMIC STATE CALIBRATION ACTIVE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
