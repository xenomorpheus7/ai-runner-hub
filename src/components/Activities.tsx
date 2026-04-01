const Activities = () => {
  const steps = [
    {
      title: "Uvodni pogovor",
      description:
        "Opredelimo cilj spletne strani in osnovno strukturo.",
    },
    {
      title: "Zasnova in priprava vsebine",
      description:
        "Skupaj oblikujemo osnovno strukturo in komunikacijski ton.",
    },
    {
      title: "Razvoj in oblikovanje",
      description:
        "Izvedba projekta v roku 7–25 dni (odvisno od obsega).",
    },
    {
      title: "Pregled in objava",
      description:
        "Testiranje, končne prilagoditve in priprava na objavo.",
    },
  ];

  return (
    <section id="activities" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 glass-panel px-4 py-2 rounded-full">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Čas in potek
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Potek sodelovanja
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Od ideje do objave: jasen proces, brez nepotrebnih zapletov.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border border-white/30 bg-background group-hover:bg-white/50 transition-colors" />

              {/* Content Card */}
              <div className="ml-6 p-6 glass-card rounded-2xl hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-[0.35em] uppercase text-muted-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold group-hover:text-glow transition-all">
                    {step.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
