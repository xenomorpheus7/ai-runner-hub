import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#wr-home",    label: "Home" },
  { href: "#wr-process", label: "Process" },
  { href: "#wr-metrics", label: "Performance" },
  { href: "#wr-faq",    label: "FAQ" },
];

const WebRunnerHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/75 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">

          {/* Brand wordmark */}
          <a
            href="#wr-home"
            className="flex items-center gap-3 group"
            aria-label="WEBRUNNER home"
          >
            {/* Animated dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span
              className="font-semibold text-lg tracking-[0.18em]"
              style={{
                background:
                  "linear-gradient(120deg, hsl(var(--electric-blue)), hsl(var(--rich-violet)), hsl(var(--soft-pink)))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              WEBRUNNER
            </span>
          </a>

          {/* Desktop nav — centred */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-8 glass-panel px-6 py-3 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#wr-contact"
              className="relative inline-flex items-center px-5 py-2 rounded-full text-xs tracking-[0.22em] uppercase overflow-hidden text-foreground"
            >
              <span className="absolute inset-0 liquid-border opacity-80" />
              <span className="absolute inset-0 bg-background/50" />
              <span className="relative z-10">Start a Project</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel mt-3 rounded-2xl px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-xs tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors text-center py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#wr-contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center font-mono text-xs tracking-[0.22em] uppercase text-primary hover:text-foreground transition-colors mt-1"
            >
              Start a Project →
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default WebRunnerHeader;
