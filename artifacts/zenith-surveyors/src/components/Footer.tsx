function handleFooterNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  window.history.pushState(null, "", window.location.pathname);
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.querySelector(href);
  if (!target) return;
  const header = document.querySelector("header");
  const offset = header ? header.offsetHeight : 80;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-muted py-12 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/zenith_logo_full_white.png`}
                alt="Zenith Building Surveyors"
                className="h-24 w-auto max-w-[360px]"
              />
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Independent, expert building surveying services across Ireland, providing clarity and confidence in property decisions.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleFooterNavClick(e, "#")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterNavClick(e, "#services")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleFooterNavClick(e, "#about")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleFooterNavClick(e, "#testimonials")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleFooterNavClick(e, "#contact")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                Pre-Purchase Surveys
              </li>
              <li className="text-muted-foreground text-sm">
                Condition Reports
              </li>
              <li className="text-muted-foreground text-sm">Snag Lists</li>
              <li className="text-muted-foreground text-sm">
                Opinions on Compliance
              </li>
              <li className="text-muted-foreground text-sm">
                Schedule of Condition
              </li>
              <li className="text-muted-foreground text-sm">
                Building Reinstatement Cost Assessment
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Zenith Building Surveyors. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground/60">
          Website designed by{" "}
          <a
            href="https://github.com/t-zl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold animated-gradient-text"
          >
            TZ
          </a>
        </div>
      </div>
    </footer>
  );
}
