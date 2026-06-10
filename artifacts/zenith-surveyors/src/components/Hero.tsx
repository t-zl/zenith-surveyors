import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function scrollToSection(href: string) {
  window.history.pushState(null, "", window.location.pathname);
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Professional architectural background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-semibold tracking-wide mb-6">
              EXPERT BUILDING SURVEYORS IN IRELAND
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Clarity and Confidence in Every <span className="text-accent relative inline-block">
              Structure
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-10 transform -rotate-1"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Professional building surveying services for residential and commercial properties across the Republic of Ireland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Survey
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 font-semibold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("#services"); }} aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
