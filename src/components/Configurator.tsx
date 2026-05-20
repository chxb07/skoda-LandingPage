import React, { useState } from "react";
import { Check, CheckCircle2, Shield, Calendar, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfiguratorProps {
  initialModelId?: string;
}

interface ColorOption {
  name: string;
  hex: string;
  extraCost: number;
}

interface WheelOption {
  name: string;
  size: string;
  extraCost: number;
}

interface InteriorOption {
  name: string;
  material: string;
  extraCost: number;
}

const COLORS: ColorOption[] = [
  { name: "Signature Emerald Green", hex: "#00401b", extraCost: 0 },
  { name: "Stealth Matte Black", hex: "#121212", extraCost: 890 },
  { name: "Quartz Metallic Gray", hex: "#3e4244", extraCost: 650 },
  { name: "Moon Glacier White", hex: "#ebebeb", extraCost: 550 },
];

const WHEELS: WheelOption[] = [
  { name: "Aero Proteus", size: "19-inch", extraCost: 0 },
  { name: "Taurus Sport Alloy", size: "20-inch", extraCost: 1200 },
  { name: "Supernova Premium Gloss", size: "21-inch", extraCost: 2400 },
];

const INTERIORS: InteriorOption[] = [
  { name: "Lounge Slate Grey", material: "Sustainably Tanned Leather", extraCost: 0 },
  { name: "RS Sport Suite", material: "Black Perforated Alcantara", extraCost: 1800 },
  { name: "Laurin & Klement Cognac", material: "Nappa Leather", extraCost: 2900 },
];

const MODELS = [
  { id: "enyaq", name: "Enyaq iV Coupe RS", basePrice: 54900, image: "/images/skoda-enyaq.jpg" },
  { id: "octavia", name: "Octavia RS", basePrice: 41200, image: "/images/skoda-octavia.jpg" },
  { id: "kodiaq", name: "Kodiaq Sportline", basePrice: 45600, image: "/images/skoda-kodiaq.jpg" },
  { id: "superb", name: "Superb L&K Flagship", basePrice: 48900, image: "/images/skoda-superb.jpg" },
];

export default function Configurator({ initialModelId = "enyaq" }: ConfiguratorProps) {
  const [selectedModelId, setSelectedModelId] = useState(initialModelId);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedWheel, setSelectedWheel] = useState(WHEELS[0]);
  const [selectedInterior, setSelectedInterior] = useState(INTERIORS[0]);

  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeModel = MODELS.find((m) => m.id === selectedModelId) || MODELS[0];
  const totalPrice = activeModel.basePrice + selectedColor.extraCost + selectedWheel.extraCost + selectedInterior.extraCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setDate("");
    setSubmitted(false);
  };

  return (
    <section id="configurator" className="relative py-24 md:py-32 bg-luxury-bg border-t border-luxury-border">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-emerald/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Shield size={12} className="text-brand-emerald" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Studio & Scheduling
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
            Configure <span className="text-gradient-emerald">Your Journey</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Customize your exterior aesthetics, select premium wheel sizes, choose hand-finished leather packages, and secure an exclusive priority test drive.
          </p>
        </div>

        {/* Configurator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Showcase & Active Specs */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent aspect-[16/10] flex items-center justify-center">
              {/* Dynamic Overlay Color Filter (simulating car body paint) */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color transition-colors duration-500" 
                style={{ backgroundColor: selectedColor.hex }}
              />

              {/* Glowing shadow outline */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-brand-emerald/10 blur-[20px] rounded-full" />

              <img
                src={activeModel.image}
                alt={activeModel.name}
                className="w-full h-full object-cover object-center relative z-10 transition-all duration-500"
              />

              {/* Price Tag Overlay */}
              <div className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-xl bg-black/85 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Total Cost Est.</span>
                <p className="text-2xl font-bold font-display text-brand-emerald">
                  €{totalPrice.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Active Configuration Summary */}
            <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">Paint</span>
                <span className="text-xs font-semibold text-white truncate">{selectedColor.name}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">Wheels</span>
                <span className="text-xs font-semibold text-white truncate">{selectedWheel.name} ({selectedWheel.size})</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">Interior</span>
                <span className="text-xs font-semibold text-white truncate">{selectedInterior.name}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer Options & Booking Form */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Customization Tabs */}
            <div className="space-y-6">
              
              {/* Step 1: Model Selection */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">1. Select Model</h3>
                <div className="grid grid-cols-2 gap-3">
                  {MODELS.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModelId(model.id)}
                      className={`p-3 text-left rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedModelId === model.id
                          ? "border-brand-emerald bg-brand-emerald/[0.04] text-white"
                          : "border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/10 hover:text-white"
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Color Options */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">2. Paint Option</h3>
                  <span className="text-[10px] text-brand-emerald font-semibold">
                    {selectedColor.extraCost === 0 ? "Standard" : `+€${selectedColor.extraCost}`}
                  </span>
                </div>
                <div className="flex gap-4">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-10 h-10 rounded-full border transition-all ${
                        selectedColor.name === color.name ? "border-brand-emerald scale-110" : "border-white/10"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <Check size={16} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color.hex === "#ebebeb" ? "text-black" : "text-white"}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Wheels Options */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">3. Premium Wheels</h3>
                <div className="flex flex-col gap-2">
                  {WHEELS.map((wheel) => (
                    <button
                      key={wheel.name}
                      onClick={() => setSelectedWheel(wheel)}
                      className={`flex justify-between items-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedWheel.name === wheel.name
                          ? "border-brand-emerald bg-brand-emerald/[0.03] text-white"
                          : "border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{wheel.name}</span>
                        <span className="text-[10px] text-neutral-500">{wheel.size}</span>
                      </div>
                      <span>{wheel.extraCost === 0 ? "Standard" : `+€${wheel.extraCost}`}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Interior Options */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">4. Custom Cabin Suite</h3>
                <div className="flex flex-col gap-2">
                  {INTERIORS.map((interior) => (
                    <button
                      key={interior.name}
                      onClick={() => setSelectedInterior(interior)}
                      className={`flex justify-between items-center p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedInterior.name === interior.name
                          ? "border-brand-emerald bg-brand-emerald/[0.03] text-white"
                          : "border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{interior.name}</span>
                        <span className="text-[10px] text-neutral-500">{interior.material}</span>
                      </div>
                      <span>{interior.extraCost === 0 ? "Standard" : `+€${interior.extraCost}`}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Test Drive Scheduling Form */}
            <div className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.01]">
              <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                <Calendar size={18} className="text-brand-emerald" />
                Schedule Your Drive
              </h3>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="johndoe@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+31 6 12345678"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Preferred Dealer Location</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City or Postcode"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors"
                          />
                          <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-emerald transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-brand-emerald text-black font-semibold uppercase tracking-wider text-xs py-4 rounded-xl hover:bg-brand-emerald/90 transition-colors mt-4 disabled:opacity-50"
                    >
                      {isSubmitting ? "Processing..." : "Submit Application"}
                      {!isSubmitting && <Send size={14} />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center justify-center py-8 gap-4"
                  >
                    <div className="p-4 rounded-full bg-brand-emerald/10 border border-brand-emerald text-brand-emerald animate-pulse">
                      <CheckCircle2 size={36} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-2">Configuration Submitted</h4>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-[320px]">
                        Thank you, {fullName}. Your custom configuration and priority test drive request have been recorded. Our luxury dealer agent will contact you at {phone} within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-brand-emerald font-semibold uppercase tracking-wider hover:underline mt-4"
                    >
                      Configure Another Model
                    </button>
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
