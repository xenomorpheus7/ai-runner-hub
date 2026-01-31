import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#mission", label: "Mission" },
    { href: "#research", label: "Research" },
    { href: "#activities", label: "Activities" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border-2 border-primary rotate-45 transition-transform group-hover:rotate-90 duration-500" />
              <div className="absolute inset-2 border border-primary/50 rotate-45 transition-transform group-hover:rotate-90 duration-700" />
            </div>
            <span className="font-mono text-lg font-bold tracking-wider">
              AI<span className="text-muted-foreground">_</span>RUNNER
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-primary/50 mr-1">&gt;</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="hidden md:flex border-primary/30 hover:bg-primary hover:text-primary-foreground font-mono text-sm"
          >
            Join Us
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <span className="text-primary/50 mr-2">&gt;</span>
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground font-mono text-sm mt-4"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
