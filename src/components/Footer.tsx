import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/INSTITUTE.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    institute: [
      { label: "O pristopu", href: "#mission" },
      { label: "Kaj vključuje", href: "#research" },
      { label: "Čas in potek", href: "#activities" },
      { label: "Povpraševanje", href: "#contact" },
    ],
    resources: [
      { label: "Objave", href: "#" },
      { label: "Delavnice", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Zaposlitve", href: "#" },
    ],
    legal: [
      { label: "Zasebnost", href: "#" },
      { label: "Pogoji uporabe", href: "#" },
      { label: "Piškotki", href: "#" },
    ],
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative py-16">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Logo Zavoda AI Runner"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Jasne spletne strani, tehnična optimizacija in osnovna SEO
              priprava. Razvoj v okviru Zavoda AI Runner.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center glass-panel rounded-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              ZAVOD
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
            <h4 className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              VIRI
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
            <h4 className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
              PRAVILA
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            © {currentYear} Zavod AI Runner. Vse pravice pridržane.
          </p>
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Gradimo prihodnost jasne digitalne prisotnosti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
