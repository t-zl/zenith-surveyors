import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Independent & Impartial Advice",
    "Registered Building Surveyor",
    "Nationwide Coverage. Local Expertise.",
    "Comprehensive & Clear Reporting"
  ];

  return (
    <section id="about" className="py-24 bg-muted/50 overflow-hidden scroll-mt-36">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            className="relative"
          >
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] transform -rotate-3 -z-10" />
            <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] transform rotate-3 -z-10" />
            
            <img
              src={`${import.meta.env.BASE_URL}images/about-team.jpeg`}
              alt="Zenith Building Surveyors team at work"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover relative z-0"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[200px] hidden md:block">
              <div className="text-4xl font-display font-bold text-primary mb-1">10+</div>
              <div className="text-sm font-semibold text-muted-foreground">Years of Local Expertise</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Your Trusted Partners in <span className="text-primary">Property</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in County Mayo with a dedicated Dublin presence, Zenith Building Surveyors provides comprehensive technical expertise across the Republic of Ireland. We understand that buying, building, or managing property is one of life's most significant investments.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to provide absolute clarity regarding the condition and potential of your building. We combine advanced surveying techniques with deep local knowledge to deliver reports you can truly rely on.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, "", window.location.pathname);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
            >
              Book My Survey
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
