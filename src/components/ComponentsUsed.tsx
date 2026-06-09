import React from 'react';
import { Cpu, Lightbulb, Grid, ToggleLeft, Activity, Layers, Shuffle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComponentsUsed() {
  const componentsList = [
    {
      name: "Arduino Uno",
      purpose: "System Controller Core",
      specs: "ATmega328P 16MHz Microcontroller",
      qty: "1 Unit",
      icon: <Cpu className="h-5 w-5 text-accent-primary" />,
      description: "Acts as the principal device responsible for executing light-modulation command routines, processing sensor readings, and stabilizing outputs."
    },
    {
      name: "ESP32 Module",
      purpose: "High Speed Multi-Core Processor",
      specs: "Tensilica Dual-Core 240MHz SoC",
      qty: "1 Unit",
      icon: <Cpu className="h-5 w-5 text-accent-secondary" />,
      description: "Coordinates high-speed sensory scanning algorithms, multi-threaded task allocation, and active calibration loops."
    },
    {
      name: "LEDs Array",
      purpose: "Multicolor Smart Diodes",
      specs: "WS2812B Addressable RGB Smart Rings",
      qty: "1 Module",
      icon: <Lightbulb className="h-5 w-5 text-accent-success" />,
      description: "Generates custom lighting values on demand. Fully adjustable spectrum range to provide complete high-CRI color coverage."
    },
    {
      name: "Breadboard",
      purpose: "Engineering Prototype Base",
      specs: "830 Point Solderless Prototype Grid",
      qty: "1 Board",
      icon: <Grid className="h-5 w-5 text-slate-350" />,
      description: "Serves as the central high-stress breakout platform where sensory modules are temporary arranged and linked for debugging."
    },
    {
      name: "Core Resistors",
      purpose: "Circuit Electrical Guarding",
      specs: "Metal Film Pullups (10kΩ & 330Ω)",
      qty: "1 Pack",
      icon: <Layers className="h-5 w-5 text-[#9B89FF]" />,
      description: "Provides noise insulation along data buses to isolate digital command signals from stray electromagnetic background waves."
    },
    {
      name: "Sensors Stack",
      purpose: "Workspace State Capture",
      specs: "High sensitivity light (LDR) & sound modules",
      qty: "1 Set",
      icon: <Activity className="h-5 w-5 text-accent-primary" />,
      description: "Continually tracks visual study-area brightness metrics and background volume to feed the closed-loop system."
    },
    {
      name: "Jumper Wires",
      purpose: "Hardware Signal Traces",
      specs: "Multi-color Dupont Connectors (M-t-M, M-t-F)",
      qty: "1 Set",
      icon: <Shuffle className="h-5 w-5 text-accent-secondary" />,
      description: "Delivers low-impedance connection traces between the breakout breadboard, sensors, and primary microcontroller terminals."
    }
  ];

  return (
    <section id="components" className="scroll-mt-24 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          06 // COMPONENTS USED
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
          Components Used
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The following list catalogs the key physical components and sensors integrated into the functioning prototype.
        </p>
      </div>

      {/* Glass cards deck */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {componentsList.map((comp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative bg-[#090d1c]/70 backdrop-blur-md rounded-[20px] p-6 border border-white/5 hover:border-[#00D4FF]/25 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)] transition-all duration-300 flex flex-col justify-between text-left h-[290px]"
          >
            {/* Hover ambient backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 via-accent-primary/0 to-accent-primary/3 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-4">
              {/* Card Header metadata */}
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="p-2.5 bg-black/45 rounded-xl border border-white/10 group-hover:text-white transition-colors">
                  {comp.icon}
                </span>
                <span className="text-[9px] font-mono text-[#00FFB2] bg-[#00FFB2]/10 border border-[#00FFB2]/20 px-2 py-0.5 rounded-full font-bold">
                  {comp.qty}
                </span>
              </div>

              {/* Title Content */}
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-[#7B61FF] uppercase block tracking-wider font-extrabold">
                  {comp.purpose}
                </span>
                <h3 className="text-base font-extrabold text-white font-display uppercase tracking-wide group-hover:text-accent-primary transition-colors">
                  {comp.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block pt-0.5 border-b border-dashed border-white/5 pb-1">
                  {comp.specs}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed font-sans text-left mt-1">
                {comp.description}
              </p>
            </div>

            {/* Bottom bar label */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500 uppercase select-none">
              <span>EXHIBIT HARDWARE</span>
              <span className="text-accent-primary font-bold">VERIFIED PIECE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
