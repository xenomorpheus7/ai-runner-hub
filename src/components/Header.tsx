import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/INSTITUTE.png";

const Header = () => {
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

  const navLinks = [
    { href: "#home", label: "Domov" },
    { href: "#mission", label: "Vizija" },
    { href: "#research", label: "Izobraževanje" },
    { href: "#ai", label: "Rešitve" },
    { href: "#activities", label: "Projekti" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="relative flex items-center">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-10 flex shrink-0 items-center gap-3 group -ml-2 md:-ml-3"
          >
            <div className="h-14 md:h-[3.65rem] w-auto overflow-visible">
              <img
                src={logo}
                alt="Logo Zavoda AI Runner"
                loading="eager"
                decoding="async"
                className="h-full w-auto object-contain scale-[3.45] origin-left"
              />
            </div>
          </a>

          {/* Desktop Navigation — centered in header */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="pointer-events-auto flex items-center gap-8 glass-panel px-6 py-3 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 ml-auto flex items-center gap-3">
            {/* WEBRUNNER link */}
            <Link
              to="/"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.2em] uppercase transition-all"
              style={{
                background: "linear-gradient(120deg, hsl(var(--electric-blue)/0.15), hsl(var(--rich-violet)/0.15))",
                border: "1px solid hsl(var(--electric-blue)/0.3)",
                color: "hsl(var(--electric-blue))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              WEBRUNNER
            </Link>

            {/* CTA Button */}
            <Button
              asChild
              variant="outline"
              className="hidden md:flex border-white/20 text-foreground/80 hover:text-foreground hover:border-white/40 bg-white/5 backdrop-blur-xl"
            >
              <a href="#contact">Povpraševanje</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-fade-in">
            <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-xs tracking-[0.2em] uppercase py-2"
                style={{ color: "hsl(var(--electric-blue))" }}
              >
                ⚡ WEBRUNNER
              </Link>
              <Button
                asChild
                variant="outline"
                className="mt-2 border-white/20 text-foreground/80 hover:text-foreground hover:border-white/40 bg-white/5 backdrop-blur-xl"
              >
                <a href="#contact">Povpraševanje</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
