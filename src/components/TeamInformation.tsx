import React from 'react';
import { Landmark, Calendar, User, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TeamInformation() {
  const members = [
  {
    name: "L. Jyothi Reddy",
    role: "Team Leader & Project Coordinator",
    dept: "Department of Information Technology",
    tasks: [
      "Led project planning and task coordination",
      "Managed project documentation and presentation",
      "Monitored project progress and team activities"
    ]
  },

  {
    name: "R. Bhavesh Kumar",
    role: "Hardware Development & Integration",
    dept: "Department of Information Technology",
    tasks: [
      "Built the Arduino prototype circuit",
      "Integrated LEDs and sensor components",
      "Performed hardware testing and troubleshooting"
    ]
  },

  {
    name: "K. Dheeraj",
    role: "Software Development & Testing",
    dept: "Department of Information Technology",
    tasks: [
      "Assisted in Arduino programming",
      "Tested system functionality and performance",
      "Verified output behavior under different conditions"
    ]
  },

  {
    name: "CH. Keerthi",
    role: "Documentation & Design Support",
    dept: "Department of Information Technology",
    tasks: [
      "Prepared project reports and documentation",
      "Assisted in website and presentation design",
      "Collected project results and feedback"
    ]
  }
];
  return (
    <section id="team" className="scroll-mt-24 space-y-12 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#00D4FF] uppercase font-black block">
          10 // PROJECT CREDENTIALS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mt-1">
          Research & Project Team
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          The brilliant student innovators and expert supervisors who coordinated this Final Year Innovation Project under national academic standards.
        </p>
      </div>

      {/* Institution Metadata Banner Card */}
      <div className="relative overflow-hidden rounded-[24px] bg-[#090d1c]/80 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-stretch justify-between gap-6 text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-2.5">
            <Landmark className="h-5 w-5 text-accent-primary" />
            <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest font-black">
              Primary Research Institution
            </span>
          </div>

          <h3 className="text-xl md:text-3xl font-extrabold text-white font-display uppercase tracking-wide">
            Vardhaman College of Engineering
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans text-left">
            Submitted as an Engineering Innovation Project for Product Design & Development, and final dissertation evaluation under autonomous university criteria.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 font-mono text-[9.5px] text-slate-350">
              <Calendar className="h-3.5 w-3.5 text-accent-primary" />
              <span>ACADEMIC YEAR: 2025 - 2026</span>
            </div>
          </div>
        </div>

        {/* Supervision Info Block */}
        <div className="md:w-72 bg-black/40 rounded-2xl border border-white/5 p-5 flex flex-col justify-between space-y-4 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">PROJECT GUIDE:</span>
            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">Mrs. Rajitha Ala</span>
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Assistant Professor,INF</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">Dr. C Padmini</span>
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Dean I & E</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 font-mono text-[9px] text-[#00FFB2] uppercase select-none">
            Approved Final Entry
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#090d1c]/80 p-6 rounded-[20px] border border-white/5 flex flex-col justify-between group hover:border-[#7B61FF]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,97,255,0.08)] text-left"
          >
            <div className="space-y-5">
              {/* Profile placeholder tag */}
              <div className="h-10 w-10 rounded-xl bg-[#7B61FF]/10 border border-[#7B61FF]/20 text-accent-secondary font-display font-black text-sm flex items-center justify-center select-none group-hover:bg-[#7B61FF]/20 transition-colors">
                {member.name.split(' ').map(n=>n[0]).join('')}
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-white font-sans">{member.name}</h4>
                <p className="text-[9px] text-accent-primary font-mono tracking-widest mt-1 uppercase font-bold">{member.role}</p>
                <p className="text-[9px] text-slate-500 font-sans mt-0.5">{member.dept}</p>
              </div>

              {/* Tasks List */}
              <div className="space-y-2 border-t border-white/5 pt-3">
                <span className="text-[9px] text-slate-500 font-mono block uppercase">Core Deliverables:</span>
                <ul className="space-y-1.5">
                  {member.tasks.map((tsk, tIdx) => (
                    <li key={tIdx} className="text-[10px] text-slate-355 flex items-start gap-1 leading-normal text-left">
                      <span className="text-accent-secondary font-mono font-bold leading-none inline-block pt-1 mr-1">&bull;</span>
                      <span>{tsk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom tag */}
            <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-slate-500 uppercase select-none">
              <span>DISCIPLINE ROLE</span>
              <span className="text-accent-success font-black">VERIFIED</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
