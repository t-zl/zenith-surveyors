import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Christy Thomas",
    rating: 5,
    text: "We consulted Mike for a snagging to be done for our house last week. He was very prompt, transparent on his rates, punctual in his timings and strong attention to detail. We are happy with his service and strongly recommend his for better reach.",
    source: "Google",
  },
  // {
  //   name: "Sara English",
  //   rating: 5,
  //   source: "Google",
  // },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-5 h-5 flex-shrink-0"
      aria-label="Google"
    >
      <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.08-6.08C34.46 3.1 29.51 1 24 1 14.82 1 7.07 6.52 3.73 14.27l7.08 5.5C12.58 13.58 17.84 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.72c-.57 3.07-2.28 5.67-4.83 7.4l7.44 5.78c4.34-4.01 6.92-9.92 6.92-17.43z" />
      <path fill="#FBBC05" d="M10.81 28.23A14.55 14.55 0 0 1 9.5 24c0-1.48.25-2.91.69-4.23l-7.08-5.5A23.93 23.93 0 0 0 .5 24c0 3.87.93 7.52 2.56 10.73l7.75-6.5z" />
      <path fill="#34A853" d="M24 47c6.48 0 11.93-2.15 15.9-5.83l-7.44-5.78c-2.18 1.46-4.97 2.33-8.46 2.33-6.16 0-11.42-4.08-13.19-9.77l-7.75 6.5C7.07 41.48 14.82 47 24 47z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
          </motion.p>
        </div>

        <div className={`pb-4 mb-10 gap-6 ${reviews.length === 1 ? "flex justify-center" : "flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"}`}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0 snap-start flex flex-col ${reviews.length === 1 ? "w-full max-w-2xl" : "w-[min(400px,80vw)]"}`}
            >
              {/* Decorative quote icon — only shown when there is review text */}
              {"text" in review && review.text && (
                <div className="absolute top-6 right-8 opacity-10">
                  <Quote className="w-16 h-16 text-primary fill-primary" />
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <GoogleLogo />
                  <span>Google Review</span>
                </div>
              </div>

              {"text" in review && review.text && (
                <p className="text-foreground text-base leading-relaxed mb-6 relative z-10 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              )}

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-display flex-shrink-0">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Customer</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="https://share.google/VwlP1r6Q2Q0bHuwF2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <GoogleLogo />
            See all Google Reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
