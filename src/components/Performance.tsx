import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Zap, Wind, Sliders } from "lucide-react";

type DriveMode = "eco" | "comfort" | "sport" | "individual";

interface ModeData {
  name: string;
  desc: string;
  horsepower: number;
  range: number;
  acceleration: string;
  efficiency: string;
  colorClass: string;
  dccSetting: string;
}

const MODES: Record<DriveMode, ModeData> = {
  eco: {
    name: "Eco Mode",
    desc: "Maximizes energy recovery, limits power draw, and softens heating to ensure maximum possible battery range.",
    horsepower: 180,
    range: 545,
    acceleration: "8.2s",
    efficiency: "96%",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    dccSetting: "Eco / Efficiency Comfort",
  },
  comfort: {
    name: "Comfort Mode",
    desc: "Smooth acceleration curves, feather-light steering, and adaptive damping (DCC Plus) configured for relaxed travel.",
    horsepower: 260,
    range: 490,
    acceleration: "6.8s",
    efficiency: "88%",
    colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    dccSetting: "Ultra-Soft Floating",
  },
  sport: {
    name: "Sport RS Mode",
    desc: "Stiffens chassis, shortens steering gear ratio, primes dual motors for instant torque delivery, and opens cooling valves.",
    horsepower: 340,
    range: 410,
    acceleration: "5.5s",
    efficiency: "74%",
    colorClass: "text-red-400 bg-red-500/10 border-red-500/30",
    dccSetting: "DCC Plus Stiff / Low",
  },
  individual: {
    name: "Individual Settings",
    desc: "Fine-tune power, steering stiffness, and suspension damping to create your perfect personalized driving setup.",
    horsepower: 280,
    range: 460,
    acceleration: "6.2s",
    efficiency: "83%",
    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    dccSetting: "User Defined Custom",
  },
};

export default function Performance() {
  const [activeMode, setActiveMode] = useState<DriveMode>("sport");
  const [customSteering, setCustomSteering] = useState(50); // 0 to 100
  const [customSuspension, setCustomSuspension] = useState(60); // 0 to 100
  const [customPower, setCustomPower] = useState(75); // 0 to 100

  // Calculate dynamic stats for individual mode based on user's sliders
  const getDynamicStats = (): ModeData => {
    if (activeMode !== "individual") return MODES[activeMode];

    // Power affects HP & Accel & Range & Efficiency
    const hp = Math.round(180 + (160 * customPower) / 100);
    const range = Math.round(545 - (135 * customPower) / 100);
    const accelSec = (8.2 - (2.7 * customPower) / 100).toFixed(1) + "s";
    const efficiency = Math.round(96 - (22 * customPower) / 100) + "%";

    return {
      name: "Individual Settings",
      desc: "Fine-tune power, steering stiffness, and suspension damping to create your perfect personalized driving setup.",
      horsepower: hp,
      range: range,
      acceleration: accelSec,
      efficiency: efficiency,
      colorClass: MODES.individual.colorClass,
      dccSetting: `Custom Damping (${customSuspension}%)`,
    };
  };

  const currentStats = getDynamicStats();

  return (
    <section id="performance" className="relative py-24 md:py-32 bg-luxury-bg border-t border-luxury-border">
      {/* Dynamic light reflection representing drive mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-emerald/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Gauge size={12} className="text-brand-emerald" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Dynamic Chassis Control
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
            Interactive <span className="text-gradient-emerald">Performance Simulator</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Select a drive mode to modify battery distribution, electronic dampening, steering resistance, and active aerodynamics. Observe the instant telemetry impact below.
          </p>
        </div>

        {/* Simulator Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Mode selector and description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {(Object.keys(MODES) as DriveMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    activeMode === mode
                      ? "border-brand-emerald bg-brand-emerald/[0.03] shadow-[0_0_20px_rgba(0,176,80,0.05)]"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-lg text-white">
                      {mode === "eco"
                        ? "Eco Mode"
                        : mode === "comfort"
                        ? "Comfort Damping"
                        : mode === "sport"
                        ? "Sport RS"
                        : "Individual Custom"}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${MODES[mode].colorClass}`}>
                      {mode.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {MODES[mode].desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Individual Mode Sliders */}
            <AnimatePresence>
              {activeMode === "individual" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col gap-6 overflow-hidden"
                >
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                    <Sliders size={14} className="text-brand-emerald" />
                    Fine-tune Controls
                  </h4>

                  {/* Power Slider */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-neutral-400">Motor Power Output</span>
                      <span className="text-brand-emerald">{customPower}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={customPower}
                      onChange={(e) => setCustomPower(Number(e.target.value))}
                      className="w-full accent-brand-emerald h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Steering Slider */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-neutral-400">Steering Stiffness</span>
                      <span className="text-brand-emerald">{customSteering}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={customSteering}
                      onChange={(e) => setCustomSteering(Number(e.target.value))}
                      className="w-full accent-brand-emerald h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Suspension Damping */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-neutral-400">Suspension Stiffness</span>
                      <span className="text-brand-emerald">{customSuspension}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={customSuspension}
                      onChange={(e) => setCustomSuspension(Number(e.target.value))}
                      className="w-full accent-brand-emerald h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Panel: Telemetry stats */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent relative overflow-hidden flex flex-col gap-10">
              
              {/* Glowing decorative indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 blur-[50px] pointer-events-none" />

              <div>
                <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest">Active Telemetry</span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">Driving Diagnostics</h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Stat 1: Power */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                    <Zap size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Horsepower</span>
                    <motion.p
                      key={currentStats.horsepower}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-display font-extrabold text-white"
                    >
                      {currentStats.horsepower} HP
                    </motion.p>
                  </div>
                </div>

                {/* Stat 2: Range */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                    <Wind size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">WLTP Range</span>
                    <motion.p
                      key={currentStats.range}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-display font-extrabold text-white"
                    >
                      {currentStats.range} km
                    </motion.p>
                  </div>
                </div>

                {/* Stat 3: Acceleration */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                    <Gauge size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">0 - 100 km/h</span>
                    <motion.p
                      key={currentStats.acceleration}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-display font-extrabold text-white"
                    >
                      {currentStats.acceleration}
                    </motion.p>
                  </div>
                </div>

                {/* Stat 4: Efficiency */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-brand-emerald">
                    <Sliders size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">Dampers</span>
                    <motion.p
                      key={currentStats.dccSetting}
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-lg font-display font-bold text-white truncate max-w-[160px]"
                    >
                      {currentStats.dccSetting}
                    </motion.p>
                  </div>
                </div>

              </div>

              {/* Dynamic bar indicators */}
              <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                <div className="flex justify-between items-center text-xs font-semibold text-neutral-400">
                  <span>Power efficiency:</span>
                  <span className="text-brand-emerald">{currentStats.efficiency}</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: currentStats.efficiency }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="h-full bg-brand-emerald rounded-full"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
