import { ExternalLink, Globe, Sparkles } from "lucide-react";

interface Project {
  title: string;
  domain: string;
  url: string;
  tag: string;
  category: string;
  description: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "WoodWeGo",
    domain: "woodwego.com",
    url: "https://woodwego.com",
    tag: "E-commerce",
    category: "Leseni izdelki & Trgovina",
    description: "Sodobna spletna trgovina z unikatnimi lesenimi izdelki in trajnostnim oblikovanjem.",
    accent: "from-blue-500/20 via-violet-500/20 to-transparent",
  },
  {
    title: "Agencija Lotos",
    domain: "agencijalotos.net",
    url: "https://agencijalotos.net",
    tag: "Agencija",
    category: "Poslovne storitve",
    description: "Pregledna poslovna spletna stran za agencijo s poudarkom na storitvah in hitrem kontaktu.",
    accent: "from-violet-500/20 via-pink-500/20 to-transparent",
  },
  {
    title: "Quantum Meta Health",
    domain: "quantummetahealth.com",
    url: "https://quantummetahealth.com",
    tag: "HealthTech",
    category: "Zdravje & Kvantna tehnologija",
    description: "Inovativna digitalna platforma za napredne holistične in kvantne zdravstvene rešitve.",
    accent: "from-cyan-500/20 via-blue-500/20 to-transparent",
  },
  {
    title: "AI Runner 2033",
    domain: "airunner2033.com",
    url: "https://airunner2033.com",
    tag: "AI Portal",
    category: "Umetna inteligenca",
    description: "Futurističen portal posvečen naprednim rešitvam umetne inteligence in digitalni rasti.",
    accent: "from-purple-500/20 via-indigo-500/20 to-transparent",
  },
  {
    title: "Kmetija Markovo",
    domain: "kmetijamarkovo.si",
    url: "https://project-woolly.pages.dev/",
    tag: "Lokalno",
    category: "Lokalna pridelava & Kmetijstvo",
    description: "Avtentična predstavitvena stran domače kmetije z naravnimi pridelki in tradicijo.",
    accent: "from-emerald-500/20 via-teal-500/20 to-transparent",
  },
  {
    title: "SloWoodLife",
    domain: "slowoodlife.com",
    url: "https://slowoodlife.com",
    tag: "Les & Dizajn",
    category: "Lesna dediščina & Lifestyle",
    description: "Estetska spletna stran, ki združuje slovensko lesno ustvarjalnost z modernim slogom.",
    accent: "from-amber-500/20 via-orange-500/20 to-transparent",
  },
  {
    title: "ABV Ptuj",
    domain: "abvptuj.si",
    url: "https://abvptuj.si",
    tag: "Inženiring",
    category: "Gradbeništvo & Inštalacije",
    description: "Profesionalna predstavitvena stran za gradbena, vodovodna in montažna dela na Ptuju.",
    accent: "from-blue-600/20 via-violet-600/20 to-transparent",
  },
  {
    title: "Silvester Vogrinec",
    domain: "silvestervogrinec.si",
    url: "https://silvestervogrinec.si",
    tag: "Avtor & Pisatelj",
    category: "Osebna stran & Bibliografija",
    description: "Predstavitvena stran priznanega avtorja, športnika in strokovnjaka s pregledom del.",
    accent: "from-pink-500/20 via-rose-500/20 to-transparent",
  },
];

const WebRunnerProjects = () => {
  return (
    <section id="wr-projects" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full orb pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--rich-violet)/0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-7 sm:px-8 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Reference & Izdelani projekti
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Spletne strani, ki smo jih ustvarili
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Oglejte si izbor hitrih, modernih in prilagojenih spletnih mest, ki smo jih uspešno zasnovali in lansirali.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((p) => (
            <a
              key={p.domain}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Top bar: browser icon & tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-muted-foreground">
                    <Globe size={11} className="text-primary" />
                    <span className="truncate max-w-[140px]">{p.domain}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                    {p.tag}
                  </span>
                </div>

                {/* Title & Category */}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-glow transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] text-muted-foreground/80 tracking-wide uppercase mb-3">
                  {p.category}
                </p>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Bottom footer button link */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="tracking-wider uppercase">Odpri stran</span>
                <span className="w-7 h-7 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerProjects;
