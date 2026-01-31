import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    institute: [
      { label: "About", href: "#mission" },
      { label: "Research", href: "#research" },
      { label: "Activities", href: "#activities" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Publications", href: "#" },
      { label: "Workshops", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/30 bg-card/20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 border-2 border-primary rotate-45" />
                <div className="absolute inset-2 border border-primary/50 rotate-45" />
              </div>
              <span className="font-mono text-lg font-bold tracking-wider">
                AI<span className="text-muted-foreground">_</span>RUNNER
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Empowering innovation through AI education. Accelerating
              breakthroughs in artificial intelligence and digital literacy.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              INSTITUTE
            </h4>
            <ul className="space-y-3">
              {links.institute.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-muted-foreground mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} AI Runner Institute. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary/50">&gt;</span> Building the future of
            AI education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
