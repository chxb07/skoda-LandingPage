import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Compass, Cpu } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onExploreClick, onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-bg pt-20">
      {/* Background Cinematic Image with Zoom/Parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-luxury-bg/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/40 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src="/images/hero-skoda.jpg"
          alt="Skoda Vision Premium Electric Concept"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Premium Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-emerald/10 blur-[120px] mix-blend-screen pointer-events-none animate-glow-1 z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-900/10 blur-[150px] mix-blend-screen pointer-events-none animate-glow-2 z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-50 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex flex-col justify-between min-h-[80vh]">
        {/* Main Text Content */}
        <div className="max-w-3xl mt-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Introducing The Next Era of Motion
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Engineered <br />
            <span className="text-gradient-emerald">for Modern Driving.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-8 max-w-xl"
          >
            Experience a masterclass in modern European craftsmanship, whisper-quiet electric speed, and visionary safety features. Designed to empower every mile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onExploreClick}
              className="group flex items-center justify-center gap-3 bg-brand-emerald text-black font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-emerald/90 hover:shadow-[0_0_30px_rgba(0,176,80,0.4)]"
            >
              Explore Models
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-full border border-white/10 transition-all duration-300"
            >
              <Play size={14} className="fill-white" />
              Book Test Drive
            </button>
          </motion.div>
        </div>

        {/* Quick Highlights / Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-auto"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
              <Cpu size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-white">545 km</p>
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">WLTP Electric Range</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-white">5-Star Safety</p>
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Euro NCAP Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
              <Compass size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-white">29 Mins</p>
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">10-80% Ultra-Fast Charge</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10 hidden md:flex">
        <span className="text-[10px] text-neutral-500 font-semibold tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-[1.5px] h-12 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-emerald"
          />
        </div>
      </div>
    </section>
  );
}
