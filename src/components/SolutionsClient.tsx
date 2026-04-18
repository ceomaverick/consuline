'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Cpu, CircleDollarSign, ShieldCheck, BarChart3, Target } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const solutions = [
  {
    title: "Clinical Operations",
    desc: "We optimize the entire patient journey to eliminate bottlenecks and maximize facility throughput.",
    features: [
      "Wait time reduction & bed management",
      "Interdisciplinary care coordination",
      "ED throughput optimization",
      "Operating room efficiency audits"
    ],
    icon: <Activity className="w-6 h-6" />,
    image: "/images/clinical-operations-efficiency.jpg",
    alt: "Healthcare team coordinating patient care in a clinical setting to optimize throughput"
  },
  {
    title: "Digital Transformation",
    desc: "Modernizing healthcare infrastructure with a focus on clinician experience and data integrity.",
    features: [
      "AI-driven diagnostic integration",
      "Legacy EHR modernization",
      "Patient engagement strategy",
      "Interoperability & data architecture"
    ],
    icon: <Cpu className="w-6 h-6" />,
    image: "/images/digital-health-system-integration.webp",
    alt: "Digital health dashboard showing real-time patient data analytics and diagnostic integration"
  },
  {
    title: "Revenue Optimization",
    desc: "Fixing the systemic leakages in the revenue cycle to ensure long-term financial stability.",
    features: [
      "Denial management & prevention",
      "Charge capture & coding precision",
      "Supply chain analytics",
      "Value-based care financial modeling"
    ],
    icon: <CircleDollarSign className="w-6 h-6" />,
    image: "/images/hospital-revenue-cycle-optimization.jpg",
    alt: "Professional analyzing financial data for healthcare revenue cycle management and optimization"
  },
  {
    title: "Regulatory & Quality",
    desc: "Moving beyond simple compliance to achieve institutional excellence and accreditation.",
    features: [
      "CMS & JCI audit readiness",
      "Magnet Status preparation",
      "Risk mitigation frameworks",
      "Continuous quality monitoring"
    ],
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/images/healthcare-regulatory-compliance.jpg",
    alt: "Healthcare administrators reviewing compliance and quality standards documentation for accreditation"
  }
];

export default function SolutionsClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
              Enterprise Solutions for <br/>
              <span className="text-brand-light italic">Complex Health Systems.</span>
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mb-12">
              Consuline™ provides the strategic architecture and clinical rigor required to stabilize and scale modern healthcare organizations.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
           <Image 
            src="/images/healthcare-enterprise-solutions-strategy.jpg" 
            alt="Modern healthcare facility interior with medical professionals discussing strategy" 
            fill 
            className="object-cover"
            priority
            fetchPriority="high"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent"></div>
        </div>
      </section>

      {/* 2. Strategy & Impact */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight leading-tight">Engineered for Institutional Impact.</h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
              Unlike generic consultancies, we don't just provide reports. We provide the architecture for sustainable transformation. Our methodology bridges the gap between boardroom strategy and front-line clinical reality.
            </p>
            <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-100">
               <div>
                  <p className="text-4xl font-heading font-bold text-brand-dark mb-1 italic">30%</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Avg. Operational ROI</p>
               </div>
               <div>
                  <p className="text-4xl font-heading font-bold text-brand-dark mb-1 italic">$1.2B</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">Savings Generated</p>
               </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="lg:col-span-5 grid grid-cols-1 gap-6">
             <div className="bg-brand-bg p-8 rounded-[40px] border border-gray-100 shadow-sm flex gap-6">
                <div className="bg-brand-dark p-4 rounded-2xl h-fit text-brand-light shadow-lg">
                   <Target size={24} />
                </div>
                <div>
                   <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">Data Precision</h4>
                   <p className="text-sm text-gray-500 font-medium">Proprietary analytics and financial modeling.</p>
                </div>
             </div>
             <div className="bg-brand-bg p-8 rounded-[40px] border border-gray-100 shadow-sm flex gap-6">
                <div className="bg-brand-dark p-4 rounded-2xl h-fit text-brand-light shadow-lg">
                   <BarChart3 size={24} />
                </div>
                <div>
                   <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">Managed Execution</h4>
                   <p className="text-sm text-gray-500 font-medium">Implementation support that stays until it works.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Practice Areas (SAGE BACKGROUND BLOCK) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-24">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Practice Areas.</h2>
             <p className="text-xl text-gray-600 font-medium leading-relaxed">Specialized support designed for the specific mandates of modern healthcare leadership.</p>
          </div>

          <div className="space-y-0">
            {solutions.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group py-20 border-b border-brand-dark/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
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
                  <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">{item.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {item.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-dark/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
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

      {/* 4. Methodology */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight">The Consuline <br/>Methodology.</h2>
             <p className="text-xl text-gray-500 font-medium leading-relaxed">Our 3-phase approach ensures strategy moves effectively from the boardroom to the care floor.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { id: "01", title: "Diagnostic Audit", desc: "Forensic analysis of clinical ecosystems to identify inefficiencies." },
               { id: "02", title: "Strategic Roadmap", desc: "Customized designs built for institutional alignment." },
               { id: "03", title: "Managed Execution", desc: "Embedded expertise ensuring long-term institutional stability." }
             ].map((m, i) => (
               <motion.div key={i} variants={fadeInUp} initial="initial" whileInView="whileInView" className="relative group">
                  <span className="text-6xl font-heading font-bold text-brand-dark/5 block mb-6 group-hover:text-brand-light transition-colors duration-500">{m.id}</span>
                  <h4 className="text-xl font-heading font-bold text-brand-dark mb-4 tracking-tight">{m.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm">{m.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Professional Footer CTA */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-8 tracking-tight">Ready for a Strategic Audit?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            Schedule an executive strategy briefing with our senior consultants to identify immediate institutional growth opportunities.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-dark text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl group">
            Schedule a Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
