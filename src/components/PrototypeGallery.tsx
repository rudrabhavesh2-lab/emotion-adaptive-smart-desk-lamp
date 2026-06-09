import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import prototype1 from "../../prototype1.jpg";
// @ts-ignore
import prototype2 from "../../prototype2.jpg";
// @ts-ignore
import prototype3 from "../../prototype3.jpg";
// @ts-ignore
import prototype4 from "../../prototype4.jpg";

interface PrototypeItem {
  id: string;
  phase: string;
  title: string;
  specs: string;
  description: string;
  details: string;
  dimensions: string;
  image: string;
}

export default function PrototypeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const items: PrototypeItem[] = [
    {
      id: "breadboard",
      phase: "Phase I: Circuit Design",
      title: "Breadboard Prototype",
      specs: "MAX4466 Sensor + Ambient LDR Setup",
      description: "Initial circuit layout assembled on standard breadboards to test and calibrate analog sensory inputs.",
      details: "Configured essential filtering capacitors and custom voltage dividers to ensure direct, stable sensor calibration and noise reduction.",
      dimensions: "85 mm x 55 mm Breadboard Grid",
      image: prototype1
    },
    {
      id: "controller",
      phase: "Phase II: Controller Core",
      title: "Arduino Controller",
      specs: "ATmega Platform Core Module",
      description: "Integrated the ATmega microprocessor development board running low-latency continuous sensing and output controls.",
      details: "Programmed robust input cycles and PWM pins with hardware pull-up resistors to maintain signal integrity during active sensing modes.",
      dimensions: "68.6 mm x 53.3 mm standard layout",
      image: prototype2
    },
    {
      id: "integrated",
      phase: "Phase III: Actuator Ring",
      title: "Integrated Prototype",
      specs: "RGB WS2812B Dynamic Addressable LEDs",
      description: "Physical configuration of the addressable LED module integrated into the protective ring diffuser for seamless color delivery.",
      details: "Soldered custom power distribution lines and added capacitors to handle rapid driver state switches across the LED ring.",
      dimensions: "100 mm outer chassis diameter",
      image: prototype3
    },
    {
      id: "testing",
      phase: "Phase IV: Assembly & Calibration",
      title: "Hardware Testing",
      specs: "Real-world Environment Calibration",
      description: "Comprehensive testing of the custom assembled smart device prototype to confirm automatic responsiveness to light variations.",
      details: "Validated the sensor responsiveness, peak threshold algorithms, and custom illumination feedback patterns under mixed environments.",
      dimensions: "Completed prototype desk unit",
      image: prototype4
    }
  ];

  const currentItem = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="gallery" className="scroll-mt-24 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          07 // WORKING PROTOTYPE GALLERY
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white">
          Working Prototype Gallery
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Real Hardware Development Journey
        </p>
      </div>

      {/* Modern Interactive Showcase Split Carousel */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">
        
        {/* Left Side: Detail card describing the active stage item */}
        <div className="lg:col-span-5 bg-[#090d1c]/80 backdrop-blur-md rounded-[24px] p-6 md:p-8 border border-white/5 flex flex-col justify-between text-left">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-extrabold text-[#7B61FF] uppercase tracking-widest block">
                {currentItem.phase}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white font-display uppercase tracking-wide mt-1">
                {currentItem.title}
              </h3>
              <span className="inline-block mt-1 font-mono text-xs text-[#00D4FF]">
                {currentItem.specs}
              </span>
            </div>

            <p className="text-xs text-slate-350 leading-relaxed font-sans">
              {currentItem.description}
            </p>

            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-slate-400 leading-relaxed text-left">
              <span className="text-[9px] font-mono font-black text-slate-500 uppercase block tracking-wider mb-2">DEVELOPMENT NOTES</span>
              {currentItem.details}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500 uppercase">
            <span>DIMENSIONS: {currentItem.dimensions}</span>
            <span className="text-[#00FFB2] font-semibold">STAGE 0{currentIndex + 1}</span>
          </div>
        </div>

        {/* Right Side: Visual display of actual hardware */}
        <div className="lg:col-span-7 bg-[#090d1c]/30 rounded-[24px] border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden h-[420px]">
          {/* Subtle neon shadow glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-primary/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Quick Enlarge Button */}
          <button 
            onClick={() => setLightboxOpen(true)}
            className="absolute top-6 right-6 p-2.5 bg-black/60 hover:bg-slate-900 border border-white/10 rounded-full text-slate-350 hover:text-white transition-all cursor-pointer z-20"
            title="Enlarge Image"
          >
            <Maximize2 className="h-4.5 w-4.5" />
          </button>

          {/* Core Interactive Visual display holding the image representation */}
          <div className="flex-1 flex items-center justify-center relative z-10 p-2 overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center p-2"
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Carousel Buttons Controls */}
          <div className="relative z-10 bg-black/60 px-4 py-3 rounded-full border border-white/5 flex items-center justify-between max-w-xs mx-auto mb-2">
            <button 
              onClick={handlePrev}
              className="p-2 hover:bg-white/5 rounded-full text-slate-350 hover:text-white transition cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-mono text-xs text-white">
              0{currentIndex + 1} / 0{items.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-2 hover:bg-white/5 rounded-full text-slate-350 hover:text-white transition cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Lightbox full overlay modal matching original details layout */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-4">
            {/* Close Overlay */}
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-black/60 hover:bg-slate-950 rounded-full border border-white/10 text-slate-300 hover:text-white transition cursor-pointer z-50 hover:scale-105"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left/Right controls inside fullscreen */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-slate-950 rounded-full border border-white/10 text-slate-300 hover:text-white transition hover:scale-105 z-40 hidden sm:block cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-slate-950 rounded-full border border-white/10 text-slate-300 hover:text-white transition hover:scale-105 z-40 hidden sm:block cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              >
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="max-h-[70vh] w-auto object-contain max-w-full"
                />
              </motion.div>

              {/* Text metadata */}
              <div className="mt-6 text-center space-y-2 max-w-xl">
                <span className="text-xs font-mono font-extrabold text-[#7B61FF] uppercase tracking-widest">
                  {currentItem.phase}
                </span>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-slate-350 leading-relaxed font-sans">
                  {currentItem.description}
                </p>
                <div className="flex justify-center gap-6 mt-2 text-xs font-mono text-slate-500">
                  <span>DIMENSIONS: {currentItem.dimensions}</span>
                  <span>|</span>
                  <span>{currentItem.specs}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
