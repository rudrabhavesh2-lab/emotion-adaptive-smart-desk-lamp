import React, { useState, useEffect } from 'react';
import { Radio, Cpu, Settings, Sun, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProposedSolution() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto cyclic activation highlight for the flowchart sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const pipeline = [
    {
      id: 0,
      title: "Sensor Input",
      subtitle: "Environmental Mapping",
      icon: <Radio className="h-6 w-6 text-accent-primary" />,
      tag: "Sensors Active",
      details: "Real-time tracking of workspace volume and ambient light status continuously capturing desk environmental metrics."
    },
    {
      id: 1,
      title: "Arduino Processing",
      subtitle: "Signal Digitization",
      icon: <Cpu className="h-6 w-6 text-accent-secondary" />,
      tag: "16MHz Clock",
      details: "Processes sensory values, filtering out brief transient signals and mapping them directly to standardized operational arrays."
    },
    {
      id: 2,
      title: "Adaptive Decision Logic",
      subtitle: "Atmosphere Scaling",
      icon: <Settings className="h-6 w-6 text-[#9B89FF]" />,
      tag: "Threshold Match",
      details: "Translates measured sound and light values into custom target LED profiles based on user-defined bounds."
    },
    {
      id: 3,
      title: "LED Output",
      subtitle: "Dynamic Lighting Output",
      icon: <Sun className="h-6 w-6 text-accent-success" />,
      tag: "PWM Emission",
      details: "WS2812B smart pixels emit targeted custom color bands with localized blue filtration and warm comforts."
    }
  ];

  return (
    <section id="solution" className="scroll-mt-24 space-y-12">
      {/* Redesigned Clean Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-accent-primary uppercase font-black block">
          02 // PROPOSED SOLUTION
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mt-1">
          The Intel Closed-Loop System Architecture
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The system operates seamlessly under a modular, fast signal flow from raw physical inputs to adaptive optical emissions.
        </p>
      </div>

      {/* Main Flow diagram block with responsive layout (Horizontal on wide, vertical on mobile) */}
      <div className="max-w-6xl mx-auto bg-[#090d1c]/55 backdrop-blur-md rounded-[24px] p-6 md:p-10 border border-white/5 relative overflow-hidden">
        
        {/* Soft back glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-accent-primary/5 rounded-full blur-[110px] pointer-events-none" />

        {/* 4 Pipeline Glassmorphic Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-7 items-center justify-between gap-6 relative z-10">
          {pipeline.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div 
                  onClick={() => setActiveStep(step.id)}
                  className={`lg:col-span-1 min-h-[220px] rounded-2xl p-5 border text-left flex flex-col justify-between transition-all duration-300 transform cursor-pointer select-none relative ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#090d1c] to-[#0d1430] border-accent-primary/40 shadow-[0_0_25px_rgba(0,212,255,0.15)] scale-[1.03]' 
                      : 'bg-black/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Icon block */}
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-accent-primary/10 border border-accent-primary/25 text-white' : 'bg-white/5 text-slate-500'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Step description headers */}
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#7B61FF] font-bold block uppercase">
                        STAGE 0{step.id + 1}
                      </span>
                      <h4 className="text-sm font-extrabold text-white font-sans mt-0.5">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Micro label metadata */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500 uppercase">
                    <span>{step.tag}</span>
                    {isActive && <span className="text-accent-success font-black animate-pulse">ACTIVE</span>}
                  </div>
                </div>

                {/* Arrow connectors between cards (Only if not last step) */}
                {idx < 3 && (
                  <div className="lg:col-span-1 flex items-center justify-center select-none py-2 lg:py-0">
                    {/* Horizontal arrow for tablet/desktop */}
                    <ArrowRight className="h-5 w-5 text-accent-primary hidden lg:block animate-pulse shrink-0" />
                    {/* Downward arrow for phone portrait */}
                    <ArrowDown className="h-5 w-5 text-accent-primary lg:hidden animate-bounce shrink-0" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detailed Explanation Screen of currently selected active workflow stage */}
        <div className="mt-8 pt-8 border-t border-white/5 text-left relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 text-left">
              <span className="text-[9px] font-mono text-accent-primary uppercase tracking-widest block font-bold">SYSTEM STATUS UPDATE</span>
              <h5 className="font-extrabold text-lg text-white font-display uppercase tracking-wide mt-1">
                {pipeline[activeStep].title}
              </h5>
              <span className="inline-block mt-1 font-mono text-xs text-accent-success uppercase font-semibold">
                &gt; PROCESSING PIPELINE OK
              </span>
            </div>
            <div className="md:col-span-9 bg-black/40 p-5 rounded-xl border border-white/5">
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {pipeline[activeStep].details}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
