import Link from 'next/link';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 px-6 md:px-12 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mb-24 gap-16">
        <div className="md:w-1/3">
          <Link href="/" className="text-4xl md:text-5xl font-heading font-bold mb-12 block tracking-tight">Consuline™</Link>
          <div className="space-y-8 text-sm text-gray-300 font-medium">
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-wider text-[10px] font-bold">Inquiries</p>
              <p className="hover:text-brand-light cursor-pointer transition text-base">briefing@consuline.com</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-wider text-[10px] font-bold">Direct</p>
              <p className="hover:text-brand-light cursor-pointer transition text-base">+1 (888) CONS-ULINE</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-wider text-[10px] font-bold">Global HQ</p>
              <p className="text-base leading-relaxed text-gray-400">One Enterprise Plaza, Strategic District,<br/>Chicago, IL 60601, USA</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-black">Expertise</h3>
          <nav className="flex flex-col space-y-4 text-sm font-semibold">
            <Link href="/solutions" className="hover:text-brand-light transition-colors">Solutions</Link>
            <Link href="/impact" className="hover:text-brand-light transition-colors">Client Impact</Link>
            <Link href="/industries" className="hover:text-brand-light transition-colors">Industries</Link>
            <Link href="/insights" className="hover:text-brand-light transition-colors">Insights</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-black">Company</h3>
          <nav className="flex flex-col space-y-4 text-sm font-semibold">
            <Link href="/about" className="hover:text-brand-light transition-colors">About Us</Link>
            <Link href="/careers" className="hover:text-brand-light transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-brand-light transition-colors">Contact</Link>
            <Link href="#" className="hover:text-brand-light transition-colors">Press Kit</Link>
          </nav>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-black mb-8">Socials</h3>
            <div className="flex space-x-5">
               <Link href="#" className="bg-white/5 hover:bg-brand-light hover:text-brand-dark p-3 rounded-full transition-all duration-300 group">
                 <Linkedin size={20} strokeWidth={1.5} />
               </Link>
               <Link href="#" className="bg-white/5 hover:bg-brand-light hover:text-brand-dark p-3 rounded-full transition-all duration-300 group">
                 <Instagram size={20} strokeWidth={1.5} />
               </Link>
               <Link href="#" className="bg-white/5 hover:bg-brand-light hover:text-brand-dark p-3 rounded-full transition-all duration-300 group">
                 <Twitter size={20} strokeWidth={1.5} />
               </Link>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-4xl font-heading mb-8 tracking-tight font-medium">Ready to transform?</h3>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-light text-brand-dark px-10 py-4 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 shadow-xl group">
              Request a Proposal <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-[11px] text-gray-500 flex flex-col md:flex-row justify-between items-center font-bold tracking-widest uppercase">
        <p>© 2026 Consuline Enterprise Strategy. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Clinical Excellence through Operational Precision</p>
      </div>
    </footer>
  );
}