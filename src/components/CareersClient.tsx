'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Lightbulb, Coffee, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const perks = [
  { title: "High-Impact Projects", icon: <Globe size={24} />, desc: "Work on strategic initiatives for some of the world's most complex health systems." },
  { title: "Expert Mentorship", icon: <Users size={24} />, desc: "Learn directly from former CEOs, CMOs, and digital pioneers in healthcare." },
  { title: "Continuous Innovation", icon: <Lightbulb size={24} />, desc: "Be at the forefront of AI and digital transformation in clinical settings." },
  { title: "Elite Integration", icon: <Coffee size={24} />, desc: "A high-performance culture that respects clinical reality and institutional wellbeing." },
];

export default function CareersClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section (Standard Internal) */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tight leading-none">
              Build the <span className="text-brand-light italic">Future</span> <br/> of Care.
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              Join a team of elite strategists and clinicians dedicated to solving healthcare's most demanding operational challenges.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
           <Image 
            src="/images/digital-health-system-integration.webp" 
            alt="Healthcare professionals collaborating on strategic initiatives in a modern office environment" 
            fill 
            className="object-cover"
            priority
            fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
      </section>

      {/* 2. Culture & Narrative (SAGE BACKGROUND BLOCK) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-7">
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Clinical Excellence Starts with Our Team.</h2>
               <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed mb-12">
                  <p>
                    At Consuline™, we don't just consult; we partner. Our culture is built on the same principles we bring to our clients: precision, empathy, and long-term sustainability.
                  </p>
                  <p>
                    We are looking for individuals who speak the language of both administration and clinical care. If you are driven by making a tangible impact on health systems, you belong here.
                  </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-brand-dark/5">
                  {[
                    "Remote-first operations",
                    "Global strategic network",
                    "Clinical sabbatical programs",
                    "Continuous leadership training"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-brand-dark/70">
                       <CheckCircle2 size={18} className="text-brand-light" />
                       {item}
                    </div>
                  ))}
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-5">
               <div className="grid grid-cols-2 gap-6">
                  <div className="relative h-80 rounded-[40px] overflow-hidden shadow-2xl">
                     <Image src="/images/hospital-readmission-reduction-program.webp" alt="Consuline team members participating in a clinical excellence workshop" fill className="object-cover" />
                  </div>
                  <div className="relative h-80 rounded-[40px] overflow-hidden shadow-2xl mt-12">
                     <Image src="/images/ai-clinical-decision-support-system.webp" alt="Strategic planning session for digital health transformation projects" fill className="object-cover" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Perks Grid */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
               <div className="bg-brand-dark w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-brand-light group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500 shadow-lg">
                  {perk.icon}
               </div>
               <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 tracking-tight">{perk.title}</h3>
               <p className="text-gray-500 font-medium leading-relaxed text-sm">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Open Roles (Architectural List) */}
      <section className="bg-brand-dark text-white py-32 rounded-[60px] mx-6 md:mx-12 mb-32 relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 tracking-tight">Join the Mission.</h2>
           <div className="space-y-4 mb-16 text-left">
              {[
                { title: "Senior Healthcare Strategist", role: "Strategy • Remote (US)" },
                { title: "Digital Transformation Lead", role: "Technology • London / Remote" }
              ].map((job, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[40px] flex flex-col md:flex-row justify-between items-center hover:bg-white/10 transition-all cursor-pointer group">
                   <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-heading font-bold mb-2 tracking-tight text-white group-hover:text-brand-light transition-colors">{job.title}</h3>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{job.role}</p>
                   </div>
                   <div className="bg-brand-light text-brand-dark p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight size={20} />
                   </div>
                </div>
              ))}
           </div>
           <p className="text-white/40 font-medium">Don't see a role for you? <Link href="/contact" className="text-brand-light hover:underline font-bold">Submit an open application</Link></p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/5 blur-[80px] rounded-full"></div>
      </section>

      {/* 5. Professional Footer CTA */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Shape the Future with Us.</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Join a culture where your expertise directly translates to improved clinical outcomes and operational precision.
          </p>
          <div className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group cursor-pointer">
             <Link href="/contact">Speak with our Talent Team</Link>
             <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
