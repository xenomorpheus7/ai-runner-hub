const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6">
            <span className="w-2 h-2 bg-[hsl(var(--cyan-glow))] animate-pulse" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Pogoji
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Osnovne informacije
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Končni obseg in cena se določita po kratkem povpraševanju.
          </p>
        </div>

        {/* Conditions Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative group hover:translate-y-[-4px] transition-all duration-500">
            <div className="absolute -top-6 right-10 w-32 h-32 rounded-full bg-[hsl(var(--rich-violet))] orb" />

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-background/20">
                <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-2">
                  Čas izvedbe
                </div>
                <div className="text-3xl font-semibold text-glow">7–25 dni</div>
              </div>

              <div className="p-4 rounded-2xl bg-background/20">
                <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-2">
                  Investicija
                </div>
                <div className="text-3xl font-semibold text-glow">
                  700 € – 2.500 €
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-background/20">
                <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-2">
                  Vzdrževanje
                </div>
                <div className="text-3xl font-semibold text-glow">
                  Po dogovoru
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-[0.25em] uppercase glass-panel text-foreground/80 hover:text-foreground transition-colors"
              >
                Povprašaj za ponudbo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
