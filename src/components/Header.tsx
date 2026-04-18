import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
      <Link href="/" className="text-2xl font-bold font-heading tracking-tight text-white">
        Consuline™
      </Link>
      <nav className="hidden md:flex items-center space-x-8 bg-white text-brand-dark px-10 py-5 rounded-full text-sm font-bold border border-gray-100 shadow-2xl">
        <Link href="/solutions" className="hover:text-brand-light transition-colors">Solutions</Link>
        <Link href="/impact" className="hover:text-brand-light transition-colors">Impact</Link>
        <Link href="/insights" className="hover:text-brand-light transition-colors">Insights</Link>
        <Link href="/about" className="hover:text-brand-light transition-colors">About</Link>
        <Link href="/industries" className="hover:text-brand-light transition-colors">Industries</Link>
      </nav>
      <Link href="/contact" className="bg-brand-light text-brand-dark px-8 py-4 rounded-full text-sm font-bold hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-xl group">
        Executive Briefing <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </header>
  );
}