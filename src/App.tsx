import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Innovation from "./components/Innovation";
import Interior from "./components/Interior";
import Performance from "./components/Performance";
import Testimonials from "./components/Testimonials";
import Configurator from "./components/Configurator";
import Footer from "./components/Footer";
import { MessageSquare, X, Send, Sparkles, ChevronDown } from "lucide-react";

interface FAQResponse {
  question: string;
  answer: string;
}

const FAQS: FAQResponse[] = [
  {
    question: "What is the real-world range of the Enyaq Coupe RS?",
    answer: "The Enyaq iV Coupe RS offers a WLTP range of up to 545 km. In real-world highway driving, it typically delivers 400-450 km depending on climate, and over 500 km in city stop-and-go traffic thanks to optimized regenerative braking.",
  },
  {
    question: "What makes Skoda's interior materials 'sustainable'?",
    answer: "Our leather upholstery is tanned using organic residues from olive leaf harvesting instead of harsh chemicals. We also utilize recycled plastics and eco-certified wools for cabin linings and carpets, saving water and carbon output.",
  },
  {
    question: "What is the charging speed of your electric cars?",
    answer: "Using a 135 kW DC fast charger, you can replenish the Skoda Enyaq's battery from 10% to 80% in approximately 29 minutes. At home, an 11 kW AC Wallbox charges the battery fully overnight in about 7.5 hours.",
  },
  {
    question: "How does the custom ordering process work?",
    answer: "Once you configure your specifications (model, paint, wheels, and interior layout) in our configurator, you can schedule a local test drive. If you decide to proceed, your configuration is locked and sent directly to the Mladá Boleslav assembly plant in Europe.",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hello! I am Laura, your Skoda virtual companion. How can I assist you with your premium configuration today?" }
  ]);
  const [faqsExpanded, setFaqsExpanded] = useState(true);
  const [configuratorModel, setConfiguratorModel] = useState("enyaq");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Simulated systems calibration loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Monitor active sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "models", "innovation", "interior", "performance", "configurator", "testimonials"];
      const scrollPosition = window.scrollY + 250; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    handleNavClick("models");
  };

  const handleBookClick = () => {
    handleNavClick("configurator");
  };

  const handleSelectModel = (modelId: string) => {
    setConfiguratorModel(modelId);
    handleNavClick("configurator");
  };

  const handleFAQClick = (faq: FAQResponse) => {
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: faq.question },
      { sender: "bot", text: faq.answer }
    ]);
    setFaqsExpanded(false);
  };

  // Auto-scroll the conversation to the latest message
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatMessages, isChatOpen]);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Skoda Arrow Emblem */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-16 h-16 text-brand-emerald fill-current"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
                  <path d="M 50 15 L 75 55 L 60 55 L 50 40 L 40 55 L 25 55 Z" />
                  <circle cx="50" cy="30" r="6" />
                  <path d="M 50 55 L 50 80" stroke="currentColor" strokeWidth="6" />
                </svg>
              </motion.div>

              {/* Title with tracking */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center"
              >
                <h1 className="font-display font-bold text-2xl tracking-[0.25em] text-white">ŠKODA</h1>
                <p className="text-[10px] text-neutral-500 font-semibold tracking-[0.2em] uppercase mt-1">Systems Calibrating...</p>
              </motion.div>

              {/* Loading progress bar */}
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 w-1/2 h-full bg-brand-emerald"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative min-h-screen bg-luxury-bg text-neutral-200">
        {/* Transparent ambient header */}
        <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} onBookClick={handleBookClick} />

        {/* Featured Models Section */}
        <Models onSelectModel={handleSelectModel} />

        {/* Innovation & Technology Bento Section */}
        <Innovation />

        {/* Interior Experience Section */}
        <Interior />

        {/* Performance / Chassis Simulator Section */}
        <Performance />

        {/* Configurator & Booking Section */}
        <Configurator initialModelId={configuratorModel} />

        {/* Testimonials / Experience Carousel Section */}
        <Testimonials />

        {/* Elegant Footer */}
        <Footer />

        {/* Floating Virtual Assistant Trigger & Window */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
          <AnimatePresence>
            {isChatOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card rounded-2xl w-[360px] sm:w-[400px] max-h-[calc(100dvh-12rem)] border border-white/10 overflow-hidden shadow-2xl flex flex-col mb-4"
              >
                {/* Header */}
                <div className="relative px-4 py-3.5 bg-luxury-card/95 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-brand-emerald to-brand-dark-green flex items-center justify-center text-black text-sm font-bold font-display ring-1 ring-brand-emerald/40">
                        L
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-brand-emerald ring-2 ring-luxury-card animate-pulse" />
                    </div>
                    <div className="leading-tight">
                      <h4 className="font-display font-semibold text-sm text-white">Laura</h4>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-[0.18em] font-semibold">
                        Škoda Concierge
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Conversation */}
                <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-black/30 flex flex-col">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-brand-emerald text-black rounded-br-sm font-medium"
                            : "bg-white/5 border border-white/10 text-neutral-200 rounded-bl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions (collapsible) */}
                <div className="border-t border-white/10 bg-black/50 shrink-0">
                  <button
                    onClick={() => setFaqsExpanded((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-[10px] font-semibold text-neutral-400 hover:text-white uppercase tracking-[0.18em] transition-colors"
                    aria-expanded={faqsExpanded}
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={11} className="text-brand-emerald" />
                      Suggested Questions
                    </span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${faqsExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {faqsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 pb-3 flex flex-col gap-1.5">
                          {FAQS.map((faq, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleFAQClick(faq)}
                              className="group w-full text-left text-[11px] text-neutral-300 hover:text-white transition-colors py-2 px-3 rounded-lg bg-white/3 hover:bg-brand-emerald/10 border border-white/5 hover:border-brand-emerald/30"
                            >
                              <span className="text-brand-emerald mr-1.5 inline-block transition-transform group-hover:translate-x-0.5">›</span>
                              {faq.question}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Input */}
                <div className="px-3 py-3 bg-black/70 border-t border-white/10 flex items-center gap-2 shrink-0">
                  <input
                    type="text"
                    disabled
                    placeholder="Pick a question above to start..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-neutral-500 placeholder:text-neutral-600 focus:outline-none cursor-not-allowed"
                  />
                  <button
                    disabled
                    aria-label="Send message"
                    className="p-2 rounded-lg bg-brand-emerald/30 text-black/60 cursor-not-allowed"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Trigger Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex items-center justify-center p-4 rounded-full bg-brand-emerald hover:bg-brand-emerald/90 text-black shadow-lg hover:shadow-[0_0_20px_rgba(0,176,80,0.5)] transition-all z-40 cursor-pointer"
            aria-label="Toggle virtual chat agent"
          >
            {isChatOpen ? <X size={20} /> : <MessageSquare size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}
