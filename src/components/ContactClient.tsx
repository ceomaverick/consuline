'use client';

import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

export default function ContactClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section (Standard Internal) */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-24 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <span className="text-brand-light font-black uppercase tracking-[0.3em] text-xs mb-6 block">Direct Access</span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-none">
                Request an <br/> <span className="text-brand-light italic">Executive Briefing.</span>
              </h1>
              <p className="text-xl text-white/60 font-medium leading-relaxed max-w-lg">
                Schedule a confidential operational audit preview with one of our senior partners.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 flex flex-col gap-8 pb-4"
            >
               <div className="flex gap-6 items-center">
                  <div className="bg-white/10 p-4 rounded-2xl text-brand-light">
                     <Mail size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Briefing Inquiries</p>
                     <p className="text-xl font-bold text-white tracking-tight">briefing@consuline.com</p>
                  </div>
               </div>
               <div className="flex gap-6 items-center">
                  <div className="bg-white/10 p-4 rounded-2xl text-brand-light">
                     <Phone size={24} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Direct Line</p>
                     <p className="text-xl font-bold text-white tracking-tight">+1 (888) CONS-ULINE</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Image 
             src="/images/modern-hospital-architecture-innovation.webp" 
             alt="Professional healthcare consulting environment for executive strategy briefings" 
             fill 
             className="object-cover grayscale" 
             priority
             fetchPriority="high"
           />
        </div>
      </section>

      {/* 2. Contact Form (SAGE BACKGROUND BLOCK) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-5">
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Start the Transformation.</h2>
               <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                 Our partners are available for urgent strategic response, operational diagnostics, and regulatory response advisory.
               </p>
               <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                  <div className="flex gap-6 items-start mb-8">
                     <div className="bg-brand-dark p-3 rounded-xl text-brand-light">
                        <MapPin size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Global HQ</p>
                        <p className="font-bold text-brand-dark leading-relaxed">One Enterprise Plaza, Strategic District, Chicago, IL 60601, USA</p>
                     </div>
                  </div>
                  <div className="pt-8 border-t border-gray-100">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Recognized by</p>
                     <div className="grid grid-cols-2 gap-8 opacity-30 grayscale">
                        <div className="h-8 bg-gray-200 rounded animate-pulse" />
                        <div className="h-8 bg-gray-200 rounded animate-pulse" />
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-7">
               <div className="bg-white p-12 rounded-[60px] shadow-2xl border border-gray-100 relative overflow-hidden text-brand-dark">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <CheckCircle2 size={120} className="text-brand-dark" />
                  </div>
                  <form className="relative z-10 space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                           <input type="text" placeholder="Dr. James Aris" className="bg-gray-50 px-6 py-4 rounded-full outline-none focus:ring-4 ring-brand-light/20 transition-all font-medium border border-transparent focus:border-brand-light/30" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Work Email</label>
                           <input type="email" placeholder="aris@hospital.org" className="bg-gray-50 px-6 py-4 rounded-full outline-none focus:ring-4 ring-brand-light/20 transition-all font-medium border border-transparent focus:border-brand-light/30" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Hospital System Size</label>
                        <select className="bg-gray-50 px-6 py-4 rounded-full outline-none focus:ring-4 ring-brand-light/20 transition-all font-medium border border-transparent focus:border-brand-light/30 appearance-none cursor-pointer">
                           <option>Single Facility</option>
                           <option>Regional Network (2-10 Facilities)</option>
                           <option>Enterprise (10+ Facilities)</option>
                           <option>Academic Medical Center</option>
                        </select>
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Primary Strategic Concern</label>
                        <textarea rows={4} placeholder="Describe your current operational or clinical challenges..." className="bg-gray-50 px-8 py-6 rounded-[32px] outline-none focus:ring-4 ring-brand-light/20 transition-all font-medium resize-none border border-transparent focus:border-brand-light/30"></textarea>
                     </div>
                     <button className="w-full bg-brand-dark text-white py-6 rounded-full font-bold text-lg hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-3 group">
                        Submit Briefing Request <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                     </button>
                     <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
                        Consuline is HIPAA compliant. Your strategic data is encrypted and secure.
                     </p>
                  </form>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Professional Footer CTA */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Prefer a Direct Consultation?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Our senior partners are available for urgent response and institutional diagnostics.
          </p>
          <Link href="tel:+18882667854" className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group">
            Call +1 (888) CONS-ULINE <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
