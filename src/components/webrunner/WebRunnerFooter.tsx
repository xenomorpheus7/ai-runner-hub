import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { icon: Github,   href: "#", label: "GitHub" },
  { icon: Twitter,  href: "#", label: "Twitter / X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail,     href: "#wr-contact", label: "Email" },
];

const WebRunnerFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14 items-start">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#wr-home" className="inline-block mb-5">
              <span
                className="font-semibold text-2xl tracking-[0.15em]"
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
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              Custom websites engineered for speed, design, and results.
              From landing pages to full-stack applications.
            </p>
            {/* AI Runner Institute link */}
            <Link
              to="/institute"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group mb-6"
            >
              <span className="w-4 h-px bg-muted-foreground group-hover:bg-foreground transition-colors" />
              <span className="font-mono tracking-[0.2em] uppercase">AI Runner Institute</span>
            </Link>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center glass-panel rounded-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Service links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
              Service
            </h4>
            <ul className="space-y-3">
              {[
                { label: "How it Works", href: "#wr-process" },
                { label: "Performance",  href: "#wr-metrics" },
                { label: "FAQ",          href: "#wr-faq" },
                { label: "Contact",      href: "#wr-contact" },
              ].map((link) => (
                <li key={link.label}>
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

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
              Tech Stack
            </h4>
            <ul className="space-y-3">
              {["React / Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map((t) => (
                <li key={t}>
                  <span className="font-mono text-xs text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Use",   href: "#" },
                { label: "Cookies",        href: "#" },
              ].map((link) => (
                <li key={link.label}>
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            © {year} WEBRUNNER. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            Engineered for performance · Deployed to the edge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WebRunnerFooter;
