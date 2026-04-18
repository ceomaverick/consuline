'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Filter, Mail } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
};

const articles = [
  {
    title: "Navigating the Future of AI in Large Hospital Systems",
    category: "Technology",
    date: "March 2026",
    image: "/images/ai-hospital-system-strategy.webp",
    alt: "Digital representation of AI integration in hospital clinical decision support systems",
    excerpt: "How generative AI is moving from back-office automation to front-line clinical decision support."
  },
  {
    title: "The Impact of New CMS Policies on Revenue Cycles",
    category: "Regulatory",
    date: "Feb 2026",
    image: "/images/cms-policy-revenue-cycle-impact.webp",
    alt: "Healthcare administrator reviewing regulatory documents and CMS policy updates",
    excerpt: "A deep dive into the recent regulatory shifts and how health systems can remain compliant and profitable."
  },
  {
    title: "Evidence-Based Strategies for Reducing Clinician Burnout",
    category: "Workforce",
    date: "Jan 2026",
    image: "/images/clinician-burnout-reduction-strategies.jpg",
    alt: "Healthcare professional in a supportive workspace environment promoting well-being",
    excerpt: "Moving beyond wellness apps to structural changes that preserve the clinical workforce."
  },
  {
    title: "Maximizing ROI in Academic Medical Centers",
    category: "Strategy",
    date: "Dec 2025",
    image: "/images/global-health.webp",
    alt: "Academic medical center exterior representing strategic operational growth and ROI",
    excerpt: "Strategic operational audits for complex teaching hospitals requiring multifaceted solutions."
  }
];

export default function InsightsClient() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section (Standard Internal) */}
      <section className="bg-brand-dark text-white pt-48 pb-32 px-6 md:px-12 rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
              Strategic <span className="text-brand-light italic">Perspectives.</span>
            </h1>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-xl">
              In-depth analysis and executive briefings from the front lines of healthcare transformation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 bg-white/10 p-2 rounded-full shadow-sm border border-white/10 backdrop-blur-md"
          >
             <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full text-gray-400">
               <Search size={18} />
               <input type="text" placeholder="Search insights..." className="bg-transparent outline-none text-sm font-medium w-48 text-white placeholder:text-gray-500" />
             </div>
             <button className="bg-brand-light text-brand-dark p-3 rounded-full hover:bg-white transition-all">
               <Filter size={18} />
             </button>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Image 
            src="/images/ai-hospital-system-strategy.webp" 
            alt="Modern healthcare facility corridor representing the depth of clinical insights" 
            fill 
            className="object-cover grayscale"
            priority
            fetchPriority="high"
           />
        </div>
      </section>

      {/* 2. Featured Report (SAGE BACKGROUND BLOCK) */}
      <section className="bg-[#F1F5F1] py-32 w-full border-y border-brand-dark/5 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="relative rounded-[60px] overflow-hidden bg-white text-brand-dark p-12 md:p-24 flex flex-col md:flex-row gap-16 items-center group shadow-2xl border border-gray-100"
          >
            <div className="absolute inset-0 opacity-5 bg-[url('/images/modern-hospital-architecture-innovation.webp')] bg-cover bg-center" />
            <div className="relative z-10 md:w-1/2">
              <span className="bg-brand-dark text-brand-light px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
                Featured Report
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight tracking-tight">The 2026 State of Hospital Operational Excellence</h2>
              <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
                Our comprehensive audit of 50+ health systems reveals the critical gap between digital investment and clinical outcomes.
              </p>
              <Link href="#" className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-xl">
                Download Full Report <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative z-10 md:w-1/2 flex justify-center">
               <div className="w-64 h-80 bg-brand-dark rounded-[32px] border border-white/20 p-8 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 flex flex-col justify-between">
                  <div className="w-12 h-1 bg-brand-light" />
                  <p className="text-2xl font-heading font-bold text-white/90 leading-tight tracking-tight">Bridging Clinical & Operational Gaps</p>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Consuline Research</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Article Grid */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-[40px] overflow-hidden mb-8 shadow-sm">
                <Image src={article.image} alt={article.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-dark">
                  {article.category}
                </div>
              </div>
              <div className="px-4">
                <div className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">{article.date}</div>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-6 leading-tight group-hover:text-brand-light transition-colors tracking-tight">{article.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">{article.excerpt}</p>
                <Link href="#" className="inline-flex items-center gap-3 font-black uppercase tracking-[0.2em] text-[10px] text-brand-dark group-hover:gap-5 transition-all">
                  Read Analysis <ArrowRight size={14} className="text-brand-light" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Newsletter Section (Light Background for Contrast) */}
      <section className="bg-brand-bg py-40 rounded-t-[60px] text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
             <div className="bg-brand-dark p-4 rounded-[32px] w-fit mx-auto mb-8 shadow-lg text-brand-light">
                <Mail size={32} />
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark mb-6 tracking-tight">The Executive Briefing.</h2>
             <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">Join 5,000+ healthcare leaders receiving weekly strategic insights directly to their inbox.</p>
             
             <div className="max-w-md mx-auto relative group">
                <input type="email" placeholder="Enter work email" className="w-full bg-white border border-gray-200 px-8 py-6 rounded-full outline-none focus:ring-4 ring-brand-light/20 transition-all font-medium pr-40 shadow-sm hover:shadow-md" />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-dark text-white px-8 rounded-full font-bold hover:bg-brand-light hover:text-brand-dark transition-all">
                  Join Now
                </button>
             </div>
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-8">No spam. Only strategic value.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
