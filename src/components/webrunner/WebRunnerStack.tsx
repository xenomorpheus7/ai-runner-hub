const techStack = [
  { name: "React", desc: "UI knjižnica" },
  { name: "Next.js", desc: "Full-stack ogrodje" },
  { name: "TypeScript", desc: "Tipna varnost" },
  { name: "Tailwind CSS", desc: "Sodobno oblikovanje" },
  { name: "Vite", desc: "Bliskovit gradnik" },
  { name: "Node.js", desc: "Strežniško okolje" },
  { name: "Supabase", desc: "Baza & zaledje" },
  { name: "Vercel", desc: "Edge gostovanje" },
  { name: "Cloudflare", desc: "CDN & varnost" },
  { name: "WordPress", desc: "CMS platforma" },
  { name: "Framer", desc: "Animacije & gibanje" },
  { name: "Figma", desc: "UI/UX oblikovanje" },
];

const WebRunnerStack = () => {
  const doubled = [...techStack, ...techStack];

  return (
    <section id="wr-stack" className="relative py-20 overflow-hidden">
      {/* Section label */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
          <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
            Tehnološki nabor
          </span>
          <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Zgrajeno z vrhunskimi orodji</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Za vsak projekt izberemo optimalno tehnologijo – od bliskovito hitrih pristajalnih strani
          do celovitih spletnih aplikacij.
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div className="flex" style={{ animation: "wr-ticker 28s linear infinite" }}>
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="group flex-shrink-0 mx-3 glass-card rounded-2xl px-7 py-5 flex flex-col items-center gap-2 min-w-[140px] cursor-default hover:translate-y-[-4px] transition-all duration-300"
            >
              <span className="font-semibold text-sm tracking-wide text-foreground group-hover:text-glow transition-all">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                {tech.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second ticker row, reversed */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div className="flex" style={{ animation: "wr-ticker-rev 32s linear infinite" }}>
          {[...doubled].reverse().map((tech, i) => (
            <div
              key={i}
              className="group flex-shrink-0 mx-3 glass-panel rounded-2xl px-6 py-4 flex flex-col items-center gap-1.5 min-w-[130px] cursor-default"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground/70 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerStack;
