/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import NavigationHeader from './components/NavigationHeader';
import HeroStage from './components/HeroStage';
import ProblemStatement from './components/ProblemStatement';
import ProposedSolution from './components/ProposedSolution';
import LivePrototypeDemo from './components/LivePrototypeDemo';
import HardwareArchitecture from './components/HardwareArchitecture';
import ComponentsUsed from './components/ComponentsUsed';
import PrototypeGallery from './components/PrototypeGallery';
import ResultsObservations from './components/ResultsObservations';
import FutureScope from './components/FutureScope';
import TeamInformation from './components/TeamInformation';
import FeedbackSuggestions from './components/FeedbackSuggestions';
import { LampState } from './types';
import { Terminal, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [lamp, setLamp] = useState<LampState>({
    kelvin: 4000,
    brightness: 60,
    soundSensitivity: 30,
    isAmbientAuto: false,
    activeMode: 'manual',
    colorHex: '#ffffff'
  });

  const [isCodeLoopRunning, setIsCodeLoopRunning] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [tickerLog, setTickerLog] = useState<string[]>([
    'SYS: [READY] Boot sequence complete. Micro-kernels mounted.',
    'SYS: [ACTIVE] Local pin registers calibrated on SPI bus.',
    'SYS: [STABLE] Optical lux calibration loops functioning normally.'
  ]);

  const loopIndexRef = useRef(0);
  const loopModes: Array<{
    mode: LampState['activeMode'];
    kelvin: number;
    brightness: number;
    color: string;
    log: string;
  }> = [
    { mode: 'focus', kelvin: 6000, brightness: 90, color: '#ffffff', log: 'LOGIC: [CYCLE_FOCUS] Initializing crisp white focus spectrum state.' },
    { mode: 'relax', kelvin: 2800, brightness: 45, color: '#ef4444', log: 'LOGIC: [CYCLE_CALM] Shifting spectrum array to warm comfortable red wavelength limits.' },
    { mode: 'soothing', kelvin: 4200, brightness: 70, color: '#00FFB2', log: 'LOGIC: [CYCLE_REST] Activating gentle calming ambient green profiles.' }
  ];

  // Dynamic title initialization on mount
  useEffect(() => {
    document.title = "Emotion-Adaptive Smart Desk Lamp";
  }, []);

  // System continuous Code Loop running simulations
  useEffect(() => {
    let modeInterval: number | null = null;
    let textTickerInterval: number | null = null;

    if (isCodeLoopRunning) {
      modeInterval = window.setInterval(() => {
        const nextIdx = (loopIndexRef.current + 1) % loopModes.length;
        loopIndexRef.current = nextIdx;
        const target = loopModes[nextIdx];

        setLamp((prev) => ({
          ...prev,
          activeMode: target.mode,
          kelvin: target.kelvin,
          brightness: target.brightness,
          colorHex: target.color,
          isAmbientAuto: true
        }));

        setTickerLog((prev) => [
          target.log,
          `SYS: Live Output -> TEMP: ${target.kelvin}K // PWM Duty: ${target.brightness}% // CALIB_OK`,
          ...prev.slice(0, 4)
        ]);
      }, 3500);

      textTickerInterval = window.setInterval(() => {
        const randomOutputs = [
          'ADC: Read ambient brightness pin value -> mapped successfully.',
          'RMT: WS2812B pixel array colors written smoothly.',
          'POWER: CC filtering class limits verified locally in workspace.',
          'SENSOR: Micro-preamp registers updated successfully.',
          'HEATSINK: Structural temperature stable at 36.8°C.'
        ];
        const randomText = randomOutputs[Math.floor(Math.random() * randomOutputs.length)];
        setTickerLog((prev) => [randomText, ...prev.slice(0, 4)]);
      }, 1500);

    } else {
      if (modeInterval) clearInterval(modeInterval);
      if (textTickerInterval) clearInterval(textTickerInterval);
    }

    return () => {
      if (modeInterval) clearInterval(modeInterval);
      if (textTickerInterval) clearInterval(textTickerInterval);
    };
  }, [isCodeLoopRunning]);

  // Set up intersection tracking of viewport sections
  useEffect(() => {
    const sections = [
      'hero',
      'problem',
      'solution',
      'prototype-demo',
      'architecture',
      'components',
      'gallery',
      'observations',
      'roadmap',
      'team',
      'feedback'
    ];
    const handleViewportScroll = () => {
      let currentSection = 'hero';
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleViewportScroll);
    return () => window.removeEventListener('scroll', handleViewportScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 font-sans antialiased selection:bg-[#00D4FF]/30 selection:text-white pb-12">
      {/* Background glowing particles context */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accent-primary/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/2 rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky Navigation Header bar */}
      <NavigationHeader 
        isCodeLoopRunning={isCodeLoopRunning}
        onToggleCodeLoop={() => setIsCodeLoopRunning(!isCodeLoopRunning)}
        activeSection={activeSection}
      />

      {/* Main Structural Showcase Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24 relative z-10 text-center">

        {/* Global simulation indicator overlay */}
        <AnimatePresence>
          {isCodeLoopRunning && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div id="cycle-alert-bar" className="bg-[#00D4FF]/5 border border-[#00D4FF]/25 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-accent-primary shadow-[0_0_15px_rgba(0,212,255,0.05)] gap-3 text-left">
                <div className="flex items-center gap-3">
                  <Activity className="h-4.5 w-4.5 text-[#00FFB2] animate-spin" />
                  <span>
                    <strong>SYSTEM SIMULATION RUNNING:</strong> Automatically cycling through different study conditions and LED responses. Standard controls are automated.
                  </span>
                </div>
                <button 
                  onClick={() => setIsCodeLoopRunning(false)}
                  className="px-3.5 py-1.5 rounded-full bg-black border border-accent-primary/40 hover:bg-slate-900 text-[10px] uppercase font-bold cursor-pointer transition-all shrink-0"
                >
                  Return Manual controls
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. Hero Section */}
        <section id="hero" className="scroll-mt-24">
          <HeroStage 
            onExploreClick={() => {
              const el = document.getElementById('problem');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          />
        </section>

        {/* 2. Problem Statement Section */}
        <section id="problem" className="scroll-mt-24">
          <ProblemStatement />
        </section>

        {/* 3. Proposed Solution Section */}
        <section id="solution" className="scroll-mt-24">
          <ProposedSolution />
        </section>

        {/* 4. Live Prototype Demonstration Section */}
        <section id="prototype-demo" className="scroll-mt-24">
          <LivePrototypeDemo />
        </section>

        {/* Live Electronics Ticker Terminal */}
        <section className="max-w-4xl mx-auto bg-black/60 p-4 rounded-2xl border border-white/5 font-mono text-[11px] grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[#00D4FF]/2 pointer-events-none" />
          <div className="md:col-span-3 flex items-center gap-2.5 border-r border-white/5 pr-4 text-left">
            <Terminal className="h-4.5 w-4.5 text-accent-secondary" />
            <span className="font-extrabold uppercase tracking-wider text-white">Firmware Stream</span>
          </div>
          <div className="md:col-span-9 h-12 overflow-y-auto pr-2 space-y-1 text-left text-slate-450 scroll-smooth">
            {tickerLog.map((log, idx) => (
              <div 
                key={idx} 
                className={`truncate ${idx === 0 ? 'text-[#00D4FF] font-semibold' : 'opacity-55'}`}
              >
                &gt; {log}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Hardware Architecture Diagram */}
        <section id="architecture" className="scroll-mt-24">
          <HardwareArchitecture />
        </section>

        {/* 6. Components Used Section */}
        <section id="components" className="scroll-mt-24">
          <ComponentsUsed />
        </section>

        {/* 7. Prototype Assembly Gallery Section */}
        <section id="gallery" className="scroll-mt-24">
          <PrototypeGallery />
        </section>

        {/* 8. Results & Observations Section */}
        <section id="observations" className="scroll-mt-24">
          <ResultsObservations />
        </section>

        {/* 9. Future Scope Section */}
        <section id="roadmap" className="scroll-mt-24">
          <FutureScope />
        </section>

        {/* 10. Research & Academic Team Section */}
        <section id="team" className="scroll-mt-24">
          <TeamInformation />
        </section>

        {/* 11. Feedback & Suggestions Section */}
        <section id="feedback" className="scroll-mt-24">
          <FeedbackSuggestions />
        </section>

      </main>

      {/* Styled Academic Innovation Footer */}
      <footer className="border-t border-white/5 bg-black/65 py-12 px-6 mt-24 text-center font-mono">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#00D4FF] uppercase font-bold block">
            EXHIBITION DESIGN PORTFOLIO
          </span>
          <p className="text-xs uppercase text-slate-350 tracking-wider font-extrabold">
            Autonomous Curricular Hardware Presentation // Vardhaman College Group
          </p>
          <p className="text-[10px] text-slate-550 leading-relaxed max-w-2xl mx-auto font-sans">
            Developed in strict alignment with Product Design &amp; Development criteria for academic validation and CCDT evaluation. No simulated medical outcomes are implied.
          </p>
          <div className="pt-6 text-[10.5px] text-slate-550 border-t border-white/5">
            &copy; {new Date().getFullYear()} Vardhaman Group Innovation Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
