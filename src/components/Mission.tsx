import { Lightbulb, GraduationCap, LayoutTemplate } from "lucide-react";

const Mission = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Jasna komunikacija",
      description:
        "Znanje umetne inteligence prevajamo v razumljive, uporabne in takoj aplikativne vsebine — brez nepotrebne kompleksnosti.",
    },
    {
      icon: GraduationCap,
      title: "AI izobraževanje in usposabljanje",
      description:
        "Izvajamo delavnice za šole ter praktična usposabljanja za podjetja, kjer se AI uporablja na realnih primerih in vsakodnevnih procesih.",
    },
    {
      icon: LayoutTemplate,
      title: "Digitalne rešitve",
      description:
        "Razvijamo sodobne spletne strani, ki niso le vizualna predstavitev, ampak orodje za rast, prepoznavnost in učinkovito komunikacijo.",
    },
  ];

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 glass-panel px-4 py-2 rounded-full">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              O PRISTOPU
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            AI kot nova pismenost
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Umetna inteligenca ni več prihodnost, temveč osnovno orodje sedanjosti. V Zavodu
            AI Runner gradimo most med razumevanjem in praktično uporabo AI — za šole, podjetja
            in širšo družbo. Naš pristop združuje izobraževanje, implementacijo in razvoj
            konkretnih digitalnih rešitev.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 glass-card rounded-3xl hover:translate-y-[-4px] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl liquid-border opacity-60" />
                <div className="absolute inset-1 rounded-xl bg-background/40" />
                <pillar.icon
                  size={28}
                  className="text-foreground group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
