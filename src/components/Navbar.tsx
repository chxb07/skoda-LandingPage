import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Models", id: "models" },
    { name: "Innovation", id: "innovation" },
    { name: "Interior", id: "interior" },
    { name: "Performance", id: "performance" },
    { name: "Configurator", id: "configurator" },
    { name: "Experience", id: "testimonials" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-luxury-bg/85 backdrop-blur-xl border-b border-luxury-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("hero");
            }}
            className="flex items-center gap-3 group relative"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Custom SVG Skoda Arrow and Wing style */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-brand-emerald fill-current transition-transform duration-500 group-hover:rotate-12"
              >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
                <path d="M 50 15 L 75 55 L 60 55 L 50 40 L 40 55 L 25 55 Z" />
                <circle cx="50" cy="30" r="6" />
                <path d="M 50 55 L 50 80" stroke="currentColor" strokeWidth="6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-widest text-white">
                ŠKODA
              </span>
              <span className="text-[9px] text-brand-emerald font-semibold uppercase tracking-[0.25em] -mt-1">
                Simply Clever
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.id);
                }}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-brand-emerald"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-emerald rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => onNavClick("configurator")}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-brand-emerald text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,176,80,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black transition-colors duration-300">
                Configure Yours
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-brand-emerald translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-emerald focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-luxury-bg/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-between p-8 border-t border-luxury-border"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    onNavClick(link.id);
                  }}
                  className={`text-xl font-display font-medium tracking-wide transition-colors ${
                    activeSection === link.id ? "text-brand-emerald" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavClick("configurator");
                }}
                className="w-full text-center py-4 bg-brand-emerald text-black font-semibold uppercase tracking-wider rounded-xl hover:bg-brand-emerald/90 transition-colors"
              >
                Configure Yours
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
