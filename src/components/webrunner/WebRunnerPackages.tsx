import { Check, Star } from "lucide-react";

const packages = [
  {
    tier: "01",
    name: "Starter",
    tagline: "Landing page that converts",
    price: "700 € – 950 €",
    delivery: "7–12 days",
    stack: "Vite + React + Tailwind",
    recommended: false,
    features: [
      "Single-page landing design",
      "Mobile-first, responsive layout",
      "Core Web Vitals optimized",
      "Contact form integration",
      "Basic SEO meta + OG tags",
      "Google Analytics setup",
      "Vercel / Netlify deployment",
      "1 revision round",
    ],
    technicalBadges: ["React", "Tailwind", "Vite", "Vercel"],
  },
  {
    tier: "02",
    name: "Business",
    tagline: "Multi-page professional site",
    price: "1.200 € – 1.800 €",
    delivery: "14–20 days",
    stack: "Next.js + CMS + Analytics",
    recommended: true,
    features: [
      "Up to 8 pages / sections",
      "CMS integration (Sanity / Contentful)",
      "Custom component design system",
      "Advanced SEO + sitemap",
      "Performance: Lighthouse 95+",
      "Custom animations & transitions",
      "Multi-language ready structure",
      "2 revision rounds",
      "30-day post-launch support",
    ],
    technicalBadges: ["Next.js", "TypeScript", "CMS", "Cloudflare"],
  },
  {
    tier: "03",
    name: "Enterprise",
    tagline: "Full-stack digital platform",
    price: "2.000 € – 2.500 €+",
    delivery: "20–25 days",
    stack: "Next.js + Supabase + AI",
    recommended: false,
    features: [
      "Full-stack application (SSR + API)",
      "Database design & Supabase backend",
      "Authentication & user dashboard",
      "AI feature integration (LLM, chatbot)",
      "Custom REST / GraphQL API",
      "Lighthouse 100 performance target",
      "E2E testing + CI/CD pipeline",
      "3 revision rounds",
      "60-day post-launch support",
      "Scalability & growth planning",
    ],
    technicalBadges: ["Next.js", "Supabase", "AI", "TypeScript", "CI/CD"],
  },
];

const WebRunnerPackages = () => {
  return (
    <section id="wr-packages" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Packages
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Choose your tier</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing with full technical specification. Every project starts with a
            free discovery call.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`relative glass-card rounded-3xl flex flex-col h-full ${
                pkg.recommended
                  ? "ring-1 ring-primary/40 shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
                  : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-semibold"
                  style={{ background: "linear-gradient(120deg, hsl(var(--electric-blue)), hsl(var(--rich-violet)))", color: "white" }}>
                  <Star size={10} fill="currentColor" />
                  Recommended
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Tier + name */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-primary tracking-[0.3em]">
                      {pkg.tier}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6 p-4 glass-panel rounded-2xl">
                  <div className="text-2xl font-semibold text-glow mb-1">{pkg.price}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                      Investment
                    </span>
                    <span className="font-mono text-[10px] text-primary tracking-wider">
                      ⏱ {pkg.delivery}
                    </span>
                  </div>
                </div>

                {/* Stack badge */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em] uppercase block mb-2">
                    Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pkg.technicalBadges.map((b) => (
                      <span key={b}
                        className="px-2.5 py-1 glass-panel rounded-full font-mono text-[10px] tracking-wider text-primary/80">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#wr-contact"
                  className={`group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm tracking-[0.2em] uppercase overflow-hidden transition-all ${
                    pkg.recommended
                      ? "text-foreground"
                      : "glass-panel text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {pkg.recommended && (
                    <>
                      <span className="absolute inset-0 liquid-border opacity-80" />
                      <span className="absolute inset-0 bg-background/40" />
                    </>
                  )}
                  <span className="relative z-10">Get a Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-10 tracking-[0.2em] uppercase">
          All prices are starting points. Final cost is confirmed after a free discovery call.
        </p>
      </div>
    </section>
  );
};

export default WebRunnerPackages;
