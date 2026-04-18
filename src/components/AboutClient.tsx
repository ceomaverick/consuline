'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Target, Zap, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const team = [
  {
    name: "Dr. Elena Vance",
    role: "Managing Partner & CEO",
    bio: "Former Chief Medical Officer with 20 years of experience in hospital operations and clinical transformation.",
    image: "/images/dr-james-aris-chief-medical-officer.webp"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Digital Health",
    bio: "Pioneer in AI-driven healthcare diagnostics and enterprise-wide digital integration strategies.",
    image: "/images/ai-hospital-system-strategy.webp"
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Regulatory Affairs",
    bio: "Expert in CMS compliance and JCI accreditation with a 100% audit pass rate across 200+ facilities.",
    image: "/images/dr-james-aris-chief-medical-officer.webp"
  }
];

export default function AboutClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section (Standard Internal) */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
              A Pedigree of <br/>
              <span className="text-brand-light italic">Clinical Excellence.</span>
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              Founded in 2011, Consuline™ provides the strategic architecture and clinical rigor required to stabilize and scale modern healthcare organizations.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
           <Image 
             src="/images/modern-hospital-architecture-innovation.webp" 
             alt="Modern hospital architectural detail representing healthcare innovation" 
             fill 
             className="object-cover" 
             fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
      </section>

      {/* 2. Our Narrative */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Bridging the Gap Between Care & Operations.</h2>
            <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed mb-12">
               <p>
                 Over 15 years, we've partnered with healthcare organizations to deliver strategic consulting that transforms care delivery and boosts operational efficiency.
               </p>
               <p>
                 We don't just provide reports; we embed ourselves with hospital leadership to implement sustainable, data-driven changes that survive the pressure of the care floor.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-12 border-t border-gray-100 pt-12">
               <div>
                  <p className="text-5xl font-heading font-bold text-brand-dark italic mb-2">15+</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Years of Expertise</p>
               </div>
               <div>
                  <p className="text-5xl font-heading font-bold text-brand-dark italic mb-2">500+</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Facilities Partnered</p>
               </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-5 relative">
             <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/healthcare-data-analytics-dashboard.webp" 
                  alt="Clinical staff collaborating on healthcare operations strategy" 
                  fill 
                  className="object-cover" 
                />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-brand-light p-10 rounded-[40px] shadow-2xl hidden md:block">
                <Award className="text-brand-dark w-12 h-12 mb-4" />
                <p className="font-bold text-brand-dark text-lg leading-tight tracking-tight">Institutional <br/> Leadership Award</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. The Philosophy (SAGE BACKGROUND BLOCK - No Giant Card) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-24">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Our Philosophy.</h2>
             <p className="text-xl text-gray-600 font-medium leading-relaxed">The principles that guide our transformation of complex healthcare systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "Data over Intuition", 
                desc: "Every strategy is backed by rigorous operational audits and multi-year financial forecasting." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Clinical Reality", 
                desc: "Our solutions are designed to reduce burnout, not increase administrative burden on clinical staff." 
              },
              { 
                icon: <CheckCircle2 className="w-8 h-8" />, 
                title: "Accountable Partnership", 
                desc: "We measure our success by the multi-year stability and clinical performance of our clients." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group"
              >
                <div className="bg-brand-dark w-16 h-16 rounded-2xl flex items-center justify-center text-brand-light mb-8 shadow-lg group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-6">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Practice Leadership.</h2>
              <p className="text-xl text-gray-500 font-medium">Former hospital executives and clinicians dedicated to your success.</p>
           </div>
           <Link href="/careers" className="text-brand-dark font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-brand-light">
              Join our team <ArrowRight size={20} />
           </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="group"
            >
               <div className="relative h-[450px] rounded-[40px] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
               </div>
               <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2 tracking-tight">{member.name}</h3>
               <p className="text-brand-light font-black uppercase tracking-[0.2em] text-[10px] mb-6">{member.role}</p>
               <p className="text-gray-500 font-medium leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Professional Footer CTA (Balanced Contrast) */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Partner with Institutional Experts.</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Discover how our methodology can transform your health system's future through data-driven operational design.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group">
            Schedule a Partner Briefing <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
