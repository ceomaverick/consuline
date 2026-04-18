'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function HomeClient() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden rounded-b-[40px]">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/home-hero-final.webp"
            alt="Hospital executive in a modern healthcare facility representing strategic excellence"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
          {/* Overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.05] tracking-tight mb-8">
            Strategic Excellence<br />for Health Systems
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
            We partner with hospital leadership to optimize clinical operations, drive digital transformation, and ensure long-term financial sustainability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
              Speak with a Consultant <span>→</span>
            </Link>
            <Link href="#" className="text-white px-8 py-4 font-medium hover:text-gray-200 transition flex items-center gap-2">
              Our Methodology <span>→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Logos Section */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6 max-w-7xl mx-auto w-full"
      >
        <motion.p variants={fadeInUp} className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-12 text-black/40">We work together</motion.p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-70 grayscale">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div variants={fadeInUp} key={i} className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span className="font-bold text-lg tracking-tight text-black">logoipsum®</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. Section 2: About & Stats Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-heading font-medium text-black leading-[1.2] tracking-tight">
            Over 15 years, we've partnered with healthcare organizations to deliver strategic consulting that transforms care delivery, boosts operational efficiency, and ensures regulatory excellence.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-16"
          >
            <div className="flex flex-col gap-12">
              <Link href="#" className="inline-flex bg-brand-light text-brand-dark px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition items-center gap-2 self-start">
                Book a Call <span>→</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-12 md:gap-16 border-t border-gray-200 pt-8">
              <motion.div variants={fadeInUp}>
                <p className="text-5xl md:text-6xl font-heading font-medium mb-2">15+</p>
                <p className="text-sm text-gray-500 font-medium">Years of healthcare</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-5xl md:text-6xl font-heading font-medium mb-2">30%</p>
                <p className="text-sm text-gray-500 font-medium">Average Improvement</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-5xl md:text-6xl font-heading font-medium mb-2">500+</p>
                <p className="text-sm text-gray-500 font-medium">Organizations Partnered</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl lg:mt-0"
          >
            <Image src="/images/healthcare-data-analytics-dashboard.webp" alt="Consultation" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 4. Services Section - REDESIGNED */}
      <section className="bg-brand-dark text-white py-40 px-6 mt-16 w-full rounded-[60px] overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-light/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs uppercase tracking-[0.3em] font-bold text-brand-light mb-8 block"
              >
                // Expertise & Solutions
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">
                Comprehensive healthcare strategies tailored for impact.
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-sm leading-relaxed">
                We blend clinical excellence with operational strategy to deliver sustainable results for providers and patients alike.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative inline-flex items-center gap-6 cursor-pointer"
            >
              <Link href="#" className="bg-brand-light text-brand-dark w-16 h-16 rounded-full flex items-center justify-center text-2xl group-hover:bg-white transition-colors duration-500">
                →
              </Link>
              <span className="text-xl font-medium group-hover:text-brand-light transition-colors duration-500 underline underline-offset-8">Start your transformation</span>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex flex-col border-t border-white/10">
              {[
                { id: '01', title: 'Clinical Operations', desc: 'Optimizing patient throughput and hospital-wide clinical workflows for peak efficiency.' },
                { id: '02', title: 'Digital Transformation', desc: 'Enterprise-wide digital health strategy, including AI diagnostics and legacy system modernization.' },
                { id: '03', title: 'Revenue Optimization', desc: 'Comprehensive revenue cycle management to ensure long-term financial health and growth.' },
                { id: '04', title: 'Regulatory Strategy', desc: 'Ensuring audit readiness and compliance with CMS, JCI, and Magnet Status excellence standards.' },
                { id: '05', title: 'Workforce Planning', desc: 'Data-driven strategies for clinical staff retention and systemic burnout mitigation.' },
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="group py-10 border-b border-white/10 cursor-pointer relative"
                >
                  <div className="flex items-start gap-8 md:gap-16">
                    <span className="text-sm font-bold text-brand-light/40 group-hover:text-brand-light transition-colors mt-2">{service.id}</span>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                          {service.title}
                        </h3>
                        <span className="text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-[-20px] transition-all duration-500">↗</span>
                      </div>
                      <p className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-700 ease-in-out text-white/50 text-lg md:text-xl pl-0 group-hover:pl-4">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  {/* Hover Background Reveal */}
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left -z-10"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Work */}
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-20 leading-[0.9]"
        >
          Pioneering<br/>Health Excellence
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {[
            { img: 'emergency-department-patient-throughput-optimization.webp', title: 'Optimizing ED\nPatient Throughput', mt: 'md:mt-12', aspect: 'aspect-[4/3]' },
            { img: 'digital-health-system-integration.webp', title: 'Digital-First\nHealth System Integration', mt: '', aspect: 'aspect-video' },
            { img: 'hospital-readmission-reduction-program.webp', title: 'Reducing Readmission\nAcross 12 Facilities', mt: '', aspect: 'aspect-video' },
            { img: 'ai-clinical-decision-support-system.webp', title: 'AI-Enabled Clinical\nDecision Support', mt: 'md:mt-[-80px]', aspect: 'aspect-square' },
          ].map((work, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col group ${work.mt}`}
            >
              <div className={`relative w-full ${work.aspect} rounded-[40px] overflow-hidden mb-8 shadow-sm`}>
                <Image src={`/images/${work.img}`} alt={work.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="flex justify-between items-start gap-4 px-2">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight whitespace-pre-line">{work.title}</h3>
                <div className="flex gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <span>Health</span>
                  <span>•</span>
                  <span>Workshop</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Global Health */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl font-heading font-bold tracking-tight"
          >
            Global health
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-medium border border-black/20 px-6 py-2 rounded-full hidden md:block text-gray-500"
          >
            [ WE PROVIDE ]
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full h-[600px] rounded-[40px] overflow-hidden flex flex-col justify-end p-12 text-white shadow-xl"
          >
            <Image 
              src="/images/global-health.webp" 
              alt="Global healthcare strategy map and international health systems collaboration" 
              fill 
              className="object-cover absolute inset-0 z-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-0"></div>
            <Link href="#" className="absolute top-10 right-10 bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition z-10 shadow-lg">
              <span className="text-2xl">→</span>
            </Link>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight max-w-md">
                Simply want expert guidance — we're here to help you every step of the way.
              </h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-brand-light rounded-[40px] p-12 flex flex-col items-center justify-center text-center h-[600px] shadow-sm"
          >
             <span className="text-xs uppercase tracking-[0.2em] font-medium border border-black/10 px-6 py-2 rounded-full mb-12 text-brand-dark/60">[ STRATEGY SESSION ]</span>
             <h3 className="text-2xl md:text-4xl font-heading font-medium tracking-tight mb-12 max-w-md text-brand-dark leading-[1.1]">
               Schedule your executive strategy briefing
             </h3>
             <div className="flex flex-col gap-4 mb-12">
               {['Customized hospital workflows', 'Expert advice from former CMOs/CEOs', 'Strategic operational audit'].map((item, idx) => (
                 <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold text-brand-dark"
                 >
                   {item}
                 </motion.span>
               ))}
             </div>
             <Link href="#" className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold hover:opacity-95 transition flex items-center gap-3 shadow-lg">
                Request a Proposal <span className="text-xl">→</span>
             </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Testimonial */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="py-32 px-6 max-w-4xl mx-auto w-full text-center"
      >
        <div className="inline-flex items-center gap-4 bg-brand-light/20 px-3 py-3 pr-8 rounded-full mb-12">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-light">
            <Image 
              src="/images/dr-james-aris-chief-medical-officer.webp" 
              alt="Dr. James Aris, Chief Medical Officer and healthcare consultant" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold leading-tight">Dr. James Aris</p>
            <p className="text-xs text-gray-400 font-medium">Chief Medical Officer (CMO)</p>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-heading font-medium leading-[1.3] tracking-tight mb-16 text-black italic">
          "Consuline's operational audit transformed our patient throughput and reduced ED wait times by 22% within the first year. Their team speaks the language of both clinicians and administrators, bridging a critical gap in our health system."
        </h2>

        <div className="flex justify-center items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-light"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-dark"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-light"></span>
        </div>
      </motion.section>

      {/* 8. Blog */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full mb-32">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-20"
        >
          Blog & resource
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            { img: 'ai-hospital-system-strategy.webp', cat: 'Operations', date: 'June 22, 2025', title: 'Navigating the Future of AI in Large Hospital Systems' },
            { img: 'cms-policy-revenue-cycle-impact.webp', cat: 'Compliance', date: 'June 22, 2025', title: 'The Impact of New CMS Policies on Revenue Cycles' },
            { img: 'clinician-burnout-reduction-strategies.jpg', cat: 'Leadership', date: 'June 22, 2025', title: 'Evidence-Based Strategies for Reducing Clinician Burnout' },
          ].map((blog, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="flex flex-col group cursor-pointer bg-brand-bg rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-200">
                <Image src={`/images/${blog.img}`} alt={blog.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 text-sm text-gray-400 font-bold mb-6">
                  <span>{blog.cat}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-light"></span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-brand-dark transition-colors duration-300 leading-tight">{blog.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
