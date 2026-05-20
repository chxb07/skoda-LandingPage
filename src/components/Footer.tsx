import React, { useState } from "react";
import { ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-luxury-bg border-t border-luxury-border pt-20 pb-12 overflow-hidden">
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-16">
        
        {/* Top Section: Brand Info & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-emerald fill-current">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
                <path d="M 50 15 L 75 55 L 60 55 L 50 40 L 40 55 L 25 55 Z" />
                <circle cx="50" cy="30" r="6" />
                <path d="M 50 55 L 50 80" stroke="currentColor" strokeWidth="6" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-widest text-white">ŠKODA</span>
                <span className="text-[9px] text-brand-emerald font-semibold uppercase tracking-[0.25em] -mt-1">Simply Clever</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Crafting premium European vehicles designed for performance, comfort, and sustainable mobility. Experience the Skoda difference.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-emerald hover:text-brand-emerald transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-emerald hover:text-brand-emerald transition-colors" aria-label="Youtube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.099-2.099C19.544 3.5 12 3.5 12 3.5s-7.544 0-9.399.564C1.576 4.337.774 5.141.502 6.163.003 8.01.003 12 .003 12s0 3.99.499 5.837c.272 1.022 1.074 1.826 2.099 2.099C4.456 20.5 12 20.5 12 20.5s7.544 0 9.399-.564c1.025-.273 1.827-1.077 2.099-2.099.499-1.847.499-5.837.499-5.837s0-3.99-.499-5.837zm-13.498 9.337V8.5l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-emerald hover:text-brand-emerald transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-emerald hover:text-brand-emerald transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">Vehicles</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Enyaq iV Coupe RS</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Octavia RS Sport</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Kodiaq Luxury SUV</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Superb L&K Flagship</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">Technology</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Smart Cockpit</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">iV Electric Suite</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Euro NCAP Safety</a></li>
                <li><a href="#" className="hover:text-brand-emerald transition-colors">Connectivity App</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest">Stay Updated</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Subscribe to receive updates on model releases, performance upgrades, and exclusive events.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 p-2 rounded-lg bg-brand-emerald hover:bg-brand-emerald/90 text-black transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-brand-emerald font-semibold uppercase tracking-wider animate-pulse">
                Subscription successful. Thank you!
              </span>
            )}
          </div>

        </div>

        {/* Bottom Section: Legal & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-4 text-[10px] text-neutral-500 font-medium">
            <span>© {new Date().getFullYear()} ŠKODA Auto. All rights reserved.</span>
            <div className="hidden sm:inline text-neutral-700">|</div>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-brand-emerald/30 px-4 py-2.5 rounded-full bg-white/5 cursor-pointer"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
