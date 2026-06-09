import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

export default function ResultsObservations() {
  const observations = [
    {
      state: "Normal Condition",
      lightColor: "#00FFB2",
      ledState: "Green LED",
      ambient: "Quiet Environment",
      description: "Default state when noise and disturbance registers fall within comfortable baseline limits. Emits an soft autonomic calming output."
    },
    {
      state: "Study Mode",
      lightColor: "#FFFFFF",
      ledState: "White LED",
      ambient: "Adequate Ambient Light",
      description: "Triggered during periods focused on high cognitive tasks, maintaining crisp and consistent illumination levels for maximum focus."
    },
    {
      state: "Alert / High Noise",
      lightColor: "#EF4444",
      ledState: "Red LED",
      ambient: "High Disturbance Offset",
      description: "Swaps spectrum to a warning indicator when the micro-preamp detects sharp local sound spikes or high surrounding noise interruptions."
    }
  ];

  return (
    <section id="observations" className="scroll-mt-24 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          08 // RESULTS AND OBSERVATIONS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mt-1">
          Results and Observations
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The verified functional responses of the intelligent prototype system recorded across different workspace scenarios.
        </p>
      </div>

      {/* Observations Grid layout with custom glows resembling Apple style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {observations.map((obs, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative bg-[#090d1c]/80 rounded-[24px] p-6 md:p-8 border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-300 flex flex-col justify-between text-left overflow-hidden cursor-default"
          >
            {/* Ambient matching color glow in the background */}
            <div 
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10 transition-opacity duration-300 pointer-events-none group-hover:opacity-20"
              style={{ backgroundColor: obs.lightColor }}
            />

            <div className="space-y-6 relative z-10">
              {/* Dynamic light representation sphere */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-3.5 w-3.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: obs.lightColor }} />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {obs.ledState}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-500 uppercase">
                  STATUS 0{idx + 1}
                </span>
              </div>

              {/* Observation Content */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#7B61FF] uppercase font-bold block">
                  {obs.ambient}
                </span>
                <h4 className="text-lg font-extrabold text-white font-display uppercase tracking-wide group-hover:text-accent-primary transition-colors">
                  {obs.state}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans text-justify">
                  {obs.description}
                </p>
              </div>
            </div>

            {/* Bottom confirmation metric */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-slate-500 uppercase select-none">
              <span>LED RESPONSE TYPE</span>
              <span className="text-[#00FFB2]">VERIFIED BEHAVIOR</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CCDT Certification Footer info box */}
      <div className="max-w-4xl mx-auto bg-[#090d1c]/45 p-5 rounded-[20px] border border-white/5 font-mono text-[9px] text-slate-450 text-left flex items-center gap-3">
        <Info className="h-5 w-5 text-accent-primary shrink-0" />
        <p className="leading-relaxed">
          <strong>OBSERVATION PROTOCOL:</strong> All sensory triggers and LED adjustments listed were successfully reproduced locally in the laboratory. No simulated statistics or fake performance evaluations are relied upon.
        </p>
      </div>

    </section>
  );
}
