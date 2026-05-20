import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  vehicle: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Vance",
    location: "Copenhagen, Denmark",
    vehicle: "Enyaq iV Coupe RS Owner",
    quote: "The Enyaq RS Coupe exceeded my expectations. The over-the-air updates make the car feel brand new every month. The physical Smart Dials combine digital flexibility with solid, premium craftsmanship that is rarely seen in modern EVs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150&q=80",
  },
  {
    id: 2,
    name: "Elena Rossini",
    location: "Munich, Germany",
    vehicle: "Kodiaq Sportline Owner",
    quote: "As a family, active safety features are non-negotiable. Skoda's 5-star Euro NCAP safety shield and predictive collision sensors have already assisted us in heavy highway traffic. The cabin feels like a private luxury lounge.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150&q=80",
  },
  {
    id: 3,
    name: "Lucas Benda",
    location: "Prague, Czech Republic",
    vehicle: "Octavia RS Owner",
    quote: "The Octavia RS strikes an unmatched balance. One day I'm commuting in comfortable silent cruise, the next I'm on mountain roads in Sport RS mode exploiting the front differential lock. A masterpiece of chassis tuning.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150&q=80",
  },
  {
    id: 4,
    name: "Sophia Lehner",
    location: "Vienna, Austria",
    vehicle: "Superb L&K Owner",
    quote: "Flagship executive space, massage chairs, and an incredible Canton sound system. The Plug-in Hybrid is brilliant: I drive all my daily city commutes on pure electric charge, saving gasoline for long weekend business trips.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-luxury-bg border-t border-luxury-border overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-emerald/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <MessageSquareQuote size={12} className="text-brand-emerald" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Owner Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
            The Skoda <span className="text-gradient-emerald">Community</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Read what luxury car owners, executives, and families experience behind the wheel of their Skoda vehicles.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 md:pb-16 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
            >
              {/* Background watermark quote */}
              <div className="absolute -bottom-10 right-6 text-[150px] font-bold text-white/[0.02] font-display pointer-events-none select-none">
                “
              </div>

              {/* Left Column: Avatar & Vehicle Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-shrink-0 w-full md:w-48">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand-emerald shadow-lg"
                />
                <div>
                  <h4 className="font-display font-bold text-white">{current.name}</h4>
                  <p className="text-[10px] text-brand-emerald font-semibold uppercase tracking-wider mt-0.5">
                    {current.location}
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    {current.vehicle}
                  </p>
                </div>
              </div>

              {/* Right Column: Quote & Stars */}
              <div className="flex-1 flex flex-col gap-6 justify-between h-full">
                
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-emerald text-brand-emerald" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-neutral-300 font-light leading-relaxed italic">
                  "{current.quote}"
                </blockquote>

                {/* Bottom decorative branding */}
                <div className="h-[1px] bg-white/10 w-24 mt-4" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === idx ? "w-8 bg-brand-emerald" : "w-2 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
