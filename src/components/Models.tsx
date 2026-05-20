import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Eye } from "lucide-react";

interface ModelSpec {
  label: string;
  value: string;
  detail: string;
}

interface ModelData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  price: string;
  specs: ModelSpec[];
  highlights: string[];
  powerType: "EV" | "PHEV" | "ICE";
}

const MODELS_DATA: ModelData[] = [
  {
    id: "enyaq",
    name: "Enyaq iV Coupe RS",
    tagline: "Electric design language combined with performance DNA.",
    category: "Electric",
    image: "/images/skoda-enyaq.jpg",
    price: "€54,900",
    powerType: "EV",
    specs: [
      { label: "Power Output", value: "340 HP", detail: "Dual Motor AWD" },
      { label: "Electric Range", value: "545 km", detail: "WLTP cycle" },
      { label: "0 - 100 km/h", value: "5.5s", detail: "Instant torque" },
      { label: "Battery Capacity", value: "82 kWh", detail: "80% in 29 min" },
    ],
    highlights: ["Crystal Face illuminated grill", "Aerodynamic drag coeff 0.23", "RS Alcantara sport seats"],
  },
  {
    id: "octavia",
    name: "Octavia RS",
    tagline: "A masterclass in modern agility, utility, and race track pedigree.",
    category: "Performance",
    image: "/images/skoda-octavia.jpg",
    price: "€41,200",
    powerType: "ICE",
    specs: [
      { label: "Power Output", value: "265 HP", detail: "2.0 TSI Engine" },
      { label: "Top Speed", value: "250 km/h", detail: "Electronically limited" },
      { label: "0 - 100 km/h", value: "6.4s", detail: "Front differential lock" },
      { label: "Cargo Volume", value: "640 Liters", detail: "Class-leading utility" },
    ],
    highlights: ["VAQ electronic limited-slip differential", "Matrix LED high-beam assist", "Dynamic Chassis Control (DCC)"],
  },
  {
    id: "kodiaq",
    name: "Kodiaq Sportline",
    tagline: "Unparalleled space and command, reinvented with luxury plug-in hybrid drive.",
    category: "SUV",
    image: "/images/skoda-kodiaq.jpg",
    price: "€45,600",
    powerType: "PHEV",
    specs: [
      { label: "Power Output", value: "204 HP", detail: "1.5 TSI iV PHEV" },
      { label: "EV Range Only", value: "100+ km", detail: "Perfect for city drives" },
      { label: "0 - 100 km/h", value: "8.4s", detail: "Smooth hybrid switch" },
      { label: "Cargo Volume", value: "910 Liters", detail: "Expands to 2,105L" },
    ],
    highlights: ["13-inch infotainment display", "DCC Plus dual-valve suspension", "7-Seater flexibility"],
  },
  {
    id: "superb",
    name: "Superb L&K Flagship",
    tagline: "Elegant design, unparalleled comfort, and executive intelligence.",
    category: "Flagship",
    image: "/images/skoda-superb.jpg",
    price: "€48,900",
    powerType: "PHEV",
    specs: [
      { label: "Power Output", value: "272 HP", detail: "Executive drivetrain" },
      { label: "EV Range Only", value: "100 km", detail: "Plug-in utility" },
      { label: "0 - 100 km/h", value: "5.6s", detail: "Effortless cruising" },
      { label: "Luxury Accents", value: "Laurin & Klement", detail: "Premium executive package" },
    ],
    highlights: ["Ergonomic massage leather seats", "Canton 14-speaker sound system", "Virtual cockpit display"],
  },
];

interface ModelsProps {
  onSelectModel: (modelId: string) => void;
}

export default function Models({ onSelectModel }: ModelsProps) {
  const [activeModelId, setActiveModelId] = useState<string>("enyaq");
  const activeModel = MODELS_DATA.find((m) => m.id === activeModelId) || MODELS_DATA[0];

  return (
    <section id="models" className="relative py-24 md:py-32 bg-luxury-bg overflow-hidden border-t border-luxury-border">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-emerald/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Zap size={12} className="text-brand-emerald" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                The Fleet
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              Featured <span className="text-gradient-emerald">Models</span>
            </h2>
          </div>

          {/* Model selection tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {MODELS_DATA.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModelId(model.id)}
                className={`relative px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeModelId === model.id
                    ? "text-black font-bold z-10"
                    : "text-neutral-400 hover:text-white border border-white/5 bg-white/5 hover:bg-white/10"
                }`}
              >
                {activeModelId === model.id && (
                  <motion.div
                    layoutId="activeModelPill"
                    className="absolute inset-0 bg-brand-emerald rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* Major Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Media & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent aspect-[16/10] flex items-center justify-center">
              {/* Power type badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-brand-emerald">
                {activeModel.powerType}
              </div>

              {/* Large vehicle image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeModel.id}
                  initial={{ opacity: 0, scale: 0.96, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={activeModel.image}
                  alt={activeModel.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                />
              </AnimatePresence>

              {/* Holographic detail glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
            </div>

            {/* Quick highlights bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeModel.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald flex-shrink-0" />
                  <span className="text-xs text-neutral-300 font-medium leading-tight">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Specs & Call to action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-emerald">
                    Starting from {activeModel.price}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mt-1 mb-3">
                    {activeModel.name}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {activeModel.tagline}
                  </p>
                </div>

                {/* Grid of specs */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
                  {activeModel.specs.map((spec, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-2xl font-bold font-display text-white">
                        {spec.value}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {spec.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA elements */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <button
                    onClick={() => onSelectModel(activeModel.id)}
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-brand-emerald text-black font-semibold uppercase tracking-wider text-xs px-6 py-4 rounded-full transition-all duration-300 hover:bg-brand-emerald/90"
                  >
                    Configure Custom Order
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("configurator");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold uppercase tracking-wider text-xs px-6 py-4 rounded-full border border-white/10 transition-all duration-300"
                  >
                    <Eye size={14} />
                    View Colors & Options
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
