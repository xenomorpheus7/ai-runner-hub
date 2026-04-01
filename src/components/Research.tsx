const Research = () => {
  const includes = [
    "strukturirano zasnovo vsebine",
    "sodoben in pregleden dizajn",
    "optimizacijo za mobilne naprave",
    "tehnično optimizacijo (hitrost, dostopnost)",
    "osnovno SEO pripravo",
    "možnost enostavnega urejanja vsebin",
    "integracijo osnovnih funkcionalnosti (kontaktni obrazci ipd.)",
    "po potrebi: nadgradnje z umetno inteligenco",
  ];

  return (
    <section id="research" className="relative py-32">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 glass-panel px-4 py-2 rounded-full">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Kaj vključuje
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Kaj vključuje izdelava spletne strani
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Od jasne strukture do objave—hitro, pregledno in pripravljeno za
            rast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-4">Kaj dobite</h3>
            <ul className="space-y-3">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-4">Tehnologija</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Uporabljamo preverjene tehnologije:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">→</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  React / Next.js za napredne in skalabilne rešitve
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">→</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  WordPress za enostavnejše in hitro upravljive strani
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                Izbiro tehnologije prilagodimo glede na namen, obseg in dolgoročno
                uporabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
