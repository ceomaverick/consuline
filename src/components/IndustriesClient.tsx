'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, GraduationCap, Laptop2, Landmark } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const sectors = [
  {
    title: "Health Systems & Networks",
    icon: <Building2 className="w-8 h-8" />,
    description: "Multi-facility optimization for large-scale health systems focusing on standardized care and centralized revenue cycle management.",
    features: ["Network-wide throughput", "Centralized RCM", "Unified clinical protocols"],
    image: "/images/emergency-department-patient-throughput-optimization.webp",
    alt: "Large-scale hospital facility representing a unified healthcare network"
  },
  {
    title: "Academic Medical Centers",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Complex operational audits for teaching hospitals that balance clinical excellence with research and educational mandates.",
    features: ["Research integration", "Faculty alignment", "Complex diagnostic scaling"],
    image: "/images/surgeon.webp",
    alt: "Surgical team in an academic medical center representing clinical and educational excellence"
  },
  {
    title: "Digital Health Directors",
    icon: <Laptop2 className="w-8 h-8" />,
    description: "Strategic advisory for leaders overseeing enterprise-wide digital transformation and AI-driven clinical innovation.",
    features: ["AI diagnostic integration", "Legacy modernization", "Virtual care strategy"],
    image: "/images/digital-health-system-integration.webp",
    alt: "Digital health innovation hub with focus on AI-driven clinical transformation"
  }
];

export default function IndustriesClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section (Standard Internal) */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-light font-black uppercase tracking-[0.3em] text-xs mb-6 block">Industry Expertise</span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tight leading-none">
              Tailored for <span className="italic text-brand-light">Complexity.</span>
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
              We specialize in the most demanding healthcare environments, where operational precision is the difference between stagnation and leadership.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
           <Image 
            src="/images/global-health.webp" 
            alt="Global healthcare network visualization representing interconnected health systems" 
            fill 
            className="object-cover"
            priority
            fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
      </section>

      {/* 2. Sector Deep Dive (SAGE BACKGROUND BLOCK) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-24">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Our Sectors.</h2>
             <p className="text-xl text-gray-600 font-medium leading-relaxed">Quantifiable expertise across specialized healthcare ecosystems.</p>
          </div>

          <div className="space-y-0">
            {sectors.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group py-20 border-b border-brand-dark/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start last:border-0"
              >
                <div className="lg:col-span-4 flex gap-8 items-start">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-dark/30 mt-2">0{idx + 1}</span>
                  <div>
                     <div className="bg-brand-dark w-14 h-14 rounded-2xl flex items-center justify-center text-brand-light mb-6 shadow-lg">
                        {item.icon}
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-brand-dark tracking-tight leading-tight">{item.title}</h3>
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">{item.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {item.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-dark/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-3 font-black uppercase tracking-[0.2em] text-[10px] text-brand-dark group-hover:gap-5 transition-all">
                    Request Sector Audit <ArrowRight size={14} className="text-brand-light" />
                  </Link>
                </div>

                <div className="lg:col-span-3 lg:flex lg:justify-end">
                  <div className="relative w-full aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                     <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust Quote */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="max-w-4xl mx-auto text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
              <Landmark size={400} className="text-brand-dark" />
           </div>
           <blockquote className="text-3xl md:text-5xl font-heading font-medium text-brand-dark leading-[1.2] mb-12 tracking-tight italic relative z-10">
             "Their understanding of the AMC landscape is unmatched. They balanced our research mission with clinical efficiency perfectly."
           </blockquote>
           <div className="relative z-10">
             <cite className="not-italic font-bold text-xl text-brand-dark block mb-1">CEO, Northern Academic Medical Center</cite>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Institutional Partner since 2018</p>
           </div>
        </motion.div>
      </section>

      {/* 4. Professional Footer CTA */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Ready for a Strategic Audit?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Contact our industry-specific consultants to schedule a deep-dive briefing on your sector's unique challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group">
            Speak with an Industry Expert <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
