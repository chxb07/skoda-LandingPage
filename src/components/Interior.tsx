import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Sliders, Music, Info, Eye } from "lucide-react";

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    top: "30%",
    left: "40%",
    title: "Virtual Cockpit Display",
    subtitle: "Customizable 10-inch digital dashboard",
    description: "Features custom view modes, digital maps integration, and speed limit assistance info direct in the driver's eye level.",
    icon: Eye,
  },
  {
    id: 2,
    top: "45%",
    left: "58%",
    title: "13\" Smart Touchscreen",
    subtitle: "Intuitive infotainment center",
    description: "Sleek glass-fronted screen with responsive navigation, digital widgets, over-the-air updates, and full smartphone syncing.",
    icon: Sliders,
  },
  {
    id: 3,
    top: "65%",
    left: "22%",
    title: "Sustainably Tanned Leather Seats",
    subtitle: "Eco-friendly luxury seating comfort",
    description: "Premium cognac or black leather tanned using organic residues from olive leaves, featuring ventilating fans and 10-point massage programs.",
    icon: Layers,
  },
  {
    id: 4,
    top: "55%",
    left: "82%",
    title: "Canton Sound System",
    subtitle: "Audiophile 14-speaker sound signature",
    description: "Specifically calibrated sound profile featuring a central speaker, a subwoofer in the trunk, and active noise-canceling technology.",
    icon: Music,
  },
];

export default function Interior() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <section id="interior" className="relative py-24 md:py-32 bg-luxury-bg border-t border-luxury-border">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles size={12} className="text-brand-emerald" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Interior Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
            Crafted for <span className="text-gradient-emerald">Human Comfort</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Step inside a sanctuary of refined materials, acoustic insulation, and thoughtful ergonomical detailing. Tap the hotspots below to explore the dashboard.
          </p>
        </div>

        {/* Interior Interactive Map & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Image */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] aspect-[16/10]">
              <img
                src="/images/skoda-interior.jpg"
                alt="Skoda premium smart cockpit interior"
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay shading */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* Hotspot Points */}
              {HOTSPOTS.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ top: hotspot.top, left: hotspot.left }}
                >
                  <button
                    onClick={() => setActiveHotspot(hotspot)}
                    className="relative w-8 h-8 flex items-center justify-center group focus:outline-none"
                    aria-label={`Inspect ${hotspot.title}`}
                  >
                    {/* Ring animation */}
                    <span className="absolute w-full h-full rounded-full bg-brand-emerald opacity-60 animate-ping" />
                    {/* Inner core */}
                    <span className="relative w-4.5 h-4.5 rounded-full bg-brand-emerald border-2 border-white shadow-md flex items-center justify-center text-[10px] text-black font-bold group-hover:scale-110 transition-transform">
                      +
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hotspot details panel */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeHotspot ? (
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 md:p-8 rounded-2xl border border-brand-emerald/30 bg-brand-emerald/[0.02] shadow-[0_0_30px_rgba(0,176,80,0.05)] flex flex-col gap-4 relative overflow-hidden"
                  >
                    {/* Subtle aesthetic lines */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-emerald/10 rounded-bl-3xl border-l border-b border-brand-emerald/20 pointer-events-none" />

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                        <activeHotspot.icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-brand-emerald uppercase tracking-widest">Premium Detail</span>
                        <h3 className="text-xl font-display font-bold text-white">{activeHotspot.title}</h3>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 font-semibold tracking-wide uppercase">
                      {activeHotspot.subtitle}
                    </p>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {activeHotspot.description}
                    </p>

                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-xs text-neutral-500 hover:text-white transition-colors mt-2 text-left underline"
                    >
                      Clear Selection
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col gap-6 items-center text-center justify-center py-16"
                  >
                    <div className="p-4 rounded-full bg-white/5 text-neutral-500 border border-white/10 animate-bounce">
                      <Info size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-white mb-2">Explore the Dashboard</h3>
                      <p className="text-xs md:text-sm text-neutral-400 font-light max-w-[280px]">
                        Click on the glowing plus (+) icons on the cockpit image to inspect materials, navigation systems, and acoustics.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
