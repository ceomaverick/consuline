'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, ShieldCheck, HeartPulse } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const stats = [
  { label: "Operational Improvement", value: "30%", icon: <TrendingUp size={24} /> },
  { label: "Wait Time Reduction", value: "22%", icon: <Clock size={24} /> },
  { label: "Audit Pass Rate", value: "100%", icon: <ShieldCheck size={24} /> },
  { label: "Patient Satisfaction", value: "15%+", icon: <HeartPulse size={24} /> },
];

const cases = [
  {
    title: "Optimizing ED Patient Throughput",
    client: "Metro Health Academic Center",
    result: "22% reduction in wait times",
    description: "Streamlined clinical workflows and implemented real-time patient tracking systems across 12 facilities to resolve systemic bottlenecks.",
    image: "/images/emergency-department-patient-throughput-optimization.webp",
    alt: "Emergency department staff utilizing real-time patient tracking systems for throughput optimization"
  },
  {
    title: "Digital-First Integration",
    client: "St. Jude Regional Network",
    result: "$12M annual savings",
    description: "Modernized legacy EHR systems and introduced AI-driven diagnostics for enhanced clinical decision support and data integrity.",
    image: "/images/digital-health-system-integration.webp",
    alt: "Medical professional using modern EHR system with AI-driven diagnostic support"
  },
  {
    title: "Reducing 30-Day Readmissions",
    client: "National Health Partners",
    result: "18% decrease in readmits",
    description: "Developed post-discharge monitoring protocols and remote patient engagement strategies across a multi-state clinical network.",
    image: "/images/hospital-readmission-reduction-program.webp",
    alt: "Patient engagement dashboard for post-discharge monitoring and readmission reduction"
  }
];

export default function ImpactClient() {
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
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
              Pioneering <span className="text-brand-light italic">Clinical Impact</span> through Data.
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mb-16">
              We measure success by the lives improved and the systems stabilized. Explore our track record of transforming complex healthcare challenges into sustainable victories.
            </p>
          </motion.div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-sm"
              >
                <div className="mb-4 text-brand-light">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden lg:block">
           <Image 
            src="/images/healthcare-data-analytics-dashboard.webp" 
            alt="Data visualization dashboard showing healthcare operational improvements and clinical metrics" 
            fill 
            className="object-cover"
            priority
            fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
      </section>

      {/* 2. Case Studies (SAGE BACKGROUND BLOCK - No Giant Card) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-24">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Success Stories.</h2>
             <p className="text-xl text-gray-600 font-medium leading-relaxed">Quantifiable transformations delivered across the care spectrum.</p>
          </div>

          <div className="space-y-0">
            {cases.map((item, idx) => (
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
                     <div className="bg-brand-light text-brand-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6 shadow-sm">
                        {item.result}
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-brand-dark tracking-tight leading-tight mb-4">{item.title}</h3>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.client}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-5">
                  <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">{item.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-3 font-black uppercase tracking-[0.2em] text-[10px] text-brand-dark group-hover:gap-5 transition-all">
                    Full Case Study <ArrowRight size={14} className="text-brand-light" />
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

      {/* 3. Executive Perspective (Clean & Authoritative) */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-12">
             <div className="w-24 h-24 rounded-[32px] overflow-hidden border-2 border-brand-light shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image src="/images/dr-james-aris-chief-medical-officer.webp" alt="Dr. James Aris, Chief Medical Officer at Metro Health" width={100} height={100} className="object-cover scale-110" />
             </div>
          </div>
          <blockquote className="text-3xl md:text-5xl font-heading font-medium text-brand-dark leading-[1.2] mb-12 tracking-tight italic">
            "Consuline's operational audit transformed our patient throughput and reduced ED wait times by 22% within the first year. They speak the language of both clinicians and administrators."
          </blockquote>
          <div>
            <cite className="not-italic font-bold text-xl text-brand-dark block mb-1 tracking-tight">Dr. James Aris</cite>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Chief Medical Officer (CMO), Metro Health</p>
          </div>
        </motion.div>
      </section>

      {/* 4. Professional Footer CTA (Balanced Contrast) */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-8 tracking-tight">Ready to see the impact?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Schedule a confidential data-modeling session to identify immediate operational growth opportunities within your system.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group font-sans">
            Schedule a Partner Briefing <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
