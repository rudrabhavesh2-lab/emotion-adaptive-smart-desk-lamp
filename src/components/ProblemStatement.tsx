import React from 'react';
import { Clock, EyeOff, Activity, HelpCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProblemStatement() {
  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-accent-primary" />,
      title: "Static, Harsh Exposure",
      highlight: "Long Study Hours",
      description: "Students spend hours studying under static, unchanging fluorescent or standard LED sources, which disrupt natural daily rhythms."
    },
    {
      icon: <EyeOff className="h-6 w-6 text-accent-secondary" />,
      title: "Ocular Exhaustion",
      highlight: "Severe Eye Strain",
      description: "Excessive exposure to flat, high-glare light causes major discomfort, leading to dry eyes, visual fatigue, and persistent headaches."
    },
    {
      icon: <Activity className="h-6 w-6 text-accent-success" />,
      title: "Reduced Cognitive Drive",
      highlight: "Comfort & Productivity Loss",
      description: "Working under mismatched color temperatures or levels dampens mental focus and accelerates exhaustion during peak study hours."
    }
  ];

  return (
    <section id="problem" className="scroll-mt-24 space-y-12">
      {/* Redesigned Clean Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          01 // PROBLEM STATEMENT
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mt-1">
          The Limitations of Traditional Workspace Lighting
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Standard desk lamps offer stationary, non-adaptive illumination that directly impacts students during intensive sessions.
        </p>
      </div>

      {/* Grid of clean problem cards with hover zoom and glowing shadows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative bg-[#090d1c]/85 rounded-[20px] p-6 md:p-8 border border-white/5 hover:border-accent-primary/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] flex flex-col justify-between text-left cursor-default overflow-hidden"
          >
            {/* Visual glow element on background hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Icon Block */}
              <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent-primary/10 group-hover:border-accent-primary/20 transition-all duration-350">
                {prob.icon}
              </div>

              {/* Problem Content */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-accent-secondary uppercase font-extrabold block">
                  {prob.highlight}
                </span>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-[#00D4FF] transition-colors">
                  {prob.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed text-left font-sans">
                  {prob.description}
                </p>
              </div>
            </div>

            {/* Micro decorative bar */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[8.5px] text-slate-500 uppercase select-none">
              <span>CRITICAL CONTEXT</span>
              <span className="text-accent-secondary">STUDY AREA ISSUES</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clean high contrast card summarizing the core challenge */}
      <div className="max-w-4xl mx-auto rounded-[20px] p-5 md:p-6 bg-[#090d1c] border border-[#7B61FF]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#7B61FF]/10 rounded-xl border border-[#7B61FF]/20 text-accent-secondary">
            <ShieldAlert className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <p className="font-extrabold text-white text-xs uppercase tracking-wider font-mono">CCDT CURRICULAR CRITERIA</p>
            <p className="text-xs text-slate-400 font-sans mt-0.5">Designed to offer customizable comfort spectrums and dynamic responses to local environments.</p>
          </div>
        </div>
        <span className="text-[9px] font-mono text-accent-success uppercase tracking-widest bg-accent-success/10 border border-accent-success/20 px-3 py-1.5 rounded-full select-none font-bold">
          COMPLIANT DESIGN TARGETS
        </span>
      </div>
    </section>
  );
}
