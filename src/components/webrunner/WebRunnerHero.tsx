import { useEffect, useRef, useState } from "react";
import { ArrowRight, Code2, Zap, Globe } from "lucide-react";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function useGlitchText(target: string, speed = 40) {
  const [display, setDisplay] = useState("WEBRUNNER");
  const rafRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    let iteration = 0;
    clearInterval(rafRef.current);
    rafRef.current = setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return target[idx];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      if (iteration >= target.length) clearInterval(rafRef.current);
      iteration += 1 / 3;
    }, speed);
    return () => clearInterval(rafRef.current);
  }, [target, speed]);

  return display;
}

const floatingSnippets = [
  { code: "npm run build", delay: "0s", x: "8%", y: "22%" },
  { code: "Lighthouse: 100", delay: "0.6s", x: "78%", y: "15%" },
  { code: "const app = <App />", delay: "1.2s", x: "5%", y: "72%" },
  { code: "gzip: 12.4 kB", delay: "0.3s", x: "82%", y: "68%" },
  { code: "FCP < 0.8s", delay: "0.9s", x: "60%", y: "82%" },
  { code: "✓ deployed to edge", delay: "1.5s", x: "18%", y: "88%" },
];

const WebRunnerHero = () => {
  const title = useGlitchText("WEBRUNNER", 38);

  return (
    <section
      id="wr-home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating code snippets */}
      {floatingSnippets.map((s, i) => (
        <div
          key={i}
          className="pointer-events-none absolute hidden md:block"
          style={{
            left: s.x,
            top: s.y,
            opacity: 0,
            animation: `wr-fadein 0.8s ease forwards ${s.delay}`,
          }}
        >
          <div className="glass-panel px-3 py-1.5 rounded-lg font-mono text-[11px] text-primary/80 tracking-wide">
            {s.code}
          </div>
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Brand tag */}
        <div className="inline-flex items-center gap-2 mb-8 glass-panel px-5 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-primary">
            Izdelava spletnih strani · Dizajn · Inženiring
          </span>
        </div>

        {/* Main glitch title */}
        <h1
          className="text-[clamp(3.5rem,13vw,9.5rem)] font-semibold leading-none tracking-tighter mb-4 select-none"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(var(--rich-violet)) 45%, hsl(var(--soft-pink)) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 60px hsl(var(--electric-blue)/0.3))",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm md:text-base tracking-[0.25em] uppercase text-muted-foreground mb-6">
          Spletni inženiring &middot; Hitrost & zmogljivost &middot; Dizajn sistemi
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-foreground/80 mb-12 leading-relaxed">
          Spletne strani po meri, ustvarjene za{" "}
          <span className="gradient-text font-medium">hitrost</span>,{" "}
          <span className="gradient-text font-medium">vrhunski dizajn</span> in{" "}
          <span className="gradient-text font-medium">rezultate</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#wr-contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm tracking-[0.2em] uppercase overflow-hidden text-foreground transition-all"
          >
            <span className="absolute inset-0 liquid-border opacity-90" />
            <span className="absolute inset-0 bg-background/50" />
            <span className="relative z-10 flex items-center gap-2">
              Začnite projekt
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#wr-process"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition-colors"
          >
            <Code2 size={16} />
            Kako deluje
          </a>
        </div>

        {/* Quick stats bar */}
        <div className="inline-flex flex-wrap justify-center gap-x-10 gap-y-4 glass-panel px-10 py-5 rounded-2xl">
          {[
            { icon: Zap, label: "FCP hitrost", value: "< 0.9s" },
            { icon: Globe, label: "Lighthouse ocena", value: "100" },
            { icon: Code2, label: "Hitra izvedba", value: "7–25 dni" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={16} className="text-primary" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                {label}
              </span>
              <span className="font-semibold text-foreground text-sm">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerHero;
