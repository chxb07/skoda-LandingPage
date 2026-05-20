import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Zap, Radio, X, ArrowRight, CheckCircle2 } from "lucide-react";

interface BentoItem {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  color: string;
  gridSpan: string;
  bullets: string[];
  desc: string;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    id: "cockpit",
    title: "Skoda Smart Cockpit",
    tagline: "Intelligent UI meets seamless tactile controls.",
    icon: Cpu,
    color: "from-emerald-500/10 to-teal-500/5",
    gridSpan: "lg:col-span-8 md:col-span-2",
    bullets: [
      "13-inch floating infotainment screen",
      "Heads-Up Display with Augmented Reality navigation",
      "Customizable Smart Dials for tactile volume/temperature feedback",
      "Laura voice control with ChatGPT integration",
    ],
    desc: "The cockpit represents a paradigm shift in human-vehicle connection. Digital screens fuse with premium materials and dynamic haptic Smart Dials, enabling distraction-free control over temperature, driver profiles, navigation zoom, and audio features.",
  },
  {
    id: "hybrid",
    title: "iV E-mobility Suite",
    tagline: "Eco-friendly cruising without performance compromises.",
    icon: Zap,
    color: "from-green-500/10 to-emerald-500/5",
    gridSpan: "lg:col-span-4 md:col-span-1",
    bullets: [
      "Up to 545km range on full electric charge",
      "Plug-In Hybrid over 100km electric-only range",
      "Plug & Charge dynamic highway standard",
      "Regenerative braking with paddle controls",
    ],
    desc: "Skoda's Modular Electrification (MEB) framework delivers instant acceleration, optimized weight distribution, and intelligent regenerative braking, combining efficiency with driving thrills.",
  },
  {
    id: "safety",
    title: "Euro NCAP 5-Star Shield",
    tagline: "Active radar & ultrasonic tracking for every angle.",
    icon: Shield,
    color: "from-blue-500/10 to-indigo-500/5",
    gridSpan: "lg:col-span-4 md:col-span-1",
    bullets: [
      "Travel Assist 2.0 with Lane Centering",
      "Predictive Pedestrian & Cyclist protection",
      "Up to 10 cabin airbags including front center",
      "Remote parking assist via smartphone application",
    ],
    desc: "Our state-of-the-art radar sensors, optical cameras, and ultrasonic trackers scan 360 degrees around your Skoda, intervening automatically to prevent collisions, correct lane departure, or aid in emergency stops.",
  },
  {
    id: "connectivity",
    title: "Simply Clever digital ecosystem",
    tagline: "Stay connected, up-to-date, and in control.",
    icon: Radio,
    color: "from-teal-500/10 to-cyan-500/5",
    gridSpan: "lg:col-span-8 md:col-span-2",
    bullets: [
      "Over-the-air system updates",
      "Skoda Connect smartphone remote climate control",
      "Digital key sharing (NFC and Bluetooth)",
      "Wireless Apple CarPlay & Android Auto",
    ],
    desc: "Your smartphone becomes the digital center of your car. Check vehicle status, schedule charging cycles, pre-heat the cabin in winter, and start the engine, all remotely and securely.",
  },
];

export default function Innovation() {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

  return (
    <section id="innovation" className="relative py-24 md:py-32 bg-luxury-bg border-t border-luxury-border">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Cpu size={12} className="text-brand-emerald" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Next-Gen Tech
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
            Innovation <span className="text-gradient-emerald">Unveiled</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Discover a digital, highly connected ecosystem designed to make every ride intuitive, effortless, and secure. Explore the tech that powers our fleet.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {BENTO_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedItem(item)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${item.gridSpan} group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.color} border border-white/5 p-8 flex flex-col justify-between min-h-[300px] hover:border-brand-emerald/30 transition-all duration-300`}
              >
                {/* Glow Spot */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-emerald/10 blur-[40px] group-hover:bg-brand-emerald/20 transition-all duration-500" />

                {/* Top Row: Icon & Trigger */}
                <div className="flex items-start justify-between">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-brand-emerald group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Bottom Row: Title & Text */}
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mb-4">
                    {item.tagline}
                  </p>
                  
                  {/* Highlight bullets */}
                  <ul className="space-y-2 mt-4">
                    {item.bullets.slice(0, 2).map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                        <CheckCircle2 size={12} className="text-brand-emerald/80 flex-shrink-0" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <span className="inline-block text-[11px] font-semibold text-brand-emerald uppercase tracking-wider mt-4">
                    Explore Details &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Overlay Drawer */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-luxury-bg border border-white/15 rounded-3xl p-8 md:p-12 z-50 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                    <selectedItem.icon size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Innovation Detail</span>
                    <h3 className="text-2xl font-display font-bold text-white">{selectedItem.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full hover:bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  {selectedItem.desc}
                </p>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Features Included</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white/5 border border-white/5 p-3 rounded-xl">
                        <CheckCircle2 size={16} className="text-brand-emerald flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-neutral-300 leading-tight">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end mt-8 border-t border-white/10 pt-6">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 rounded-full bg-brand-emerald text-black font-semibold text-xs uppercase tracking-wider hover:bg-brand-emerald/90 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
