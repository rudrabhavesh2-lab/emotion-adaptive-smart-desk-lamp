import React from 'react';
import { Smartphone, BrainCircuit, Mic, Wifi, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function FutureScope() {
  const scopes = [
    {
      title: "Mobile App Integration",
      icon: <Smartphone className="h-5 w-5 text-accent-primary" />,
      tag: "BLE Connection",
      description: "Developing a dedicated mobile companion app connected over Bluetooth Low Energy to customize colors, adjust sensitivity, and schedule illumination timers."
    },
    {
      title: "Machine Learning Emotion Detection",
      icon: <BrainCircuit className="h-5 w-5 text-accent-secondary" />,
      tag: "On-Chip TinyML",
      description: "Deploying quantized neural networks directly onto optimized dual-core controller architectures to continuously track emotional shifts and expressions."
    },
    {
      title: "Voice Control",
      icon: <Mic className="h-5 w-5 text-accent-success" />,
      tag: "Hands-Free Commands",
      description: "Integrating smart audio capture libraries to recognize key voice triggers and seamlessly adjust brightness or swap light channels on demand."
    },
    {
      title: "IoT Connectivity",
      icon: <Wifi className="h-5 w-5 text-accent-primary" />,
      tag: "Smart Home Sync",
      description: "Establishing local network channels to link workspace outputs with general room light frameworks or smart home ecosystems for balanced rooms."
    },
    {
      title: "Cloud Analytics",
      icon: <BarChart3 className="h-5 w-5 text-[#9B89FF]" />,
      tag: "Trend Logging",
      description: "Transmitting encrypted, anonymous usage logs to custom cloud storage panels to review personal lifestyle and focus statistics over long periods."
    }
  ];

  return (
    <section id="roadmap" className="scroll-mt-24 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          09 // FUTURE SCOPE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
          Future Scope
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The scaling timeline designed to transform our standalone hardware prototype into an fully integrated, smart workspace ecosystem.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {scopes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative bg-[#090d1c]/80 rounded-[20px] p-6 border border-white/5 hover:border-accent-primary/25 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300 flex flex-col justify-between text-left h-[260px] cursor-default"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/0 to-[#7B61FF]/3 rounded-[20px]" />

            <div className="space-y-4 relative z-10 w-full">
              {/* Icon Block */}
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent-primary/10 group-hover:border-accent-primary/20 transition-all">
                {item.icon}
              </div>

              {/* Scope Content */}
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-[#7B61FF] uppercase font-black block">
                  {item.tag}
                </span>
                <h4 className="text-sm font-extrabold text-white font-display uppercase tracking-wide group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans text-left mt-1 overflow-hidden">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom arrow footer element */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-slate-500 uppercase select-none">
              <span>DEVELOPMENT TRACK</span>
              <ChevronRight className="h-3.5 w-3.5 text-accent-primary group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
