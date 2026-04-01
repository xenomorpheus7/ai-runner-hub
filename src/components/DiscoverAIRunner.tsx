import { Zap, Cpu, Network } from "lucide-react";

const DiscoverAIRunner = () => {
  const features = [
    { icon: Zap, label: "Pogovorni asistent" },
    { icon: Cpu, label: "Pametna avtomatizacija" },
    { icon: Network, label: "Podpora uporabnikom" },
  ];

  return (
    <section id="ai" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel mb-8">
            <span className="w-2 h-2 bg-[hsl(var(--soft-pink))] rounded-full animate-glow-pulse" />
            <span className="text-[11px] tracking-[0.35em] uppercase">
              UMETNA INTELIGENCA
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Nadgradnja z umetno inteligenco
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Po potrebi lahko vključimo funkcionalnosti, ki naredijo vašo
            spletno stran bolj uporabno in odzivno.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 glass-panel rounded-full"
              >
                <feature.icon size={20} className="text-primary" />
                <span className="text-sm tracking-[0.2em] uppercase">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 glass-card rounded-3xl p-6 md:p-8 max-w-xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Funkcionalnosti vključimo le, ko imajo smisel za vaš projekt.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-[0.25em] uppercase overflow-hidden transition-all text-foreground"
            >
              <span className="absolute inset-0 liquid-border opacity-90" />
              <span className="absolute inset-0 bg-background/50" />
              <span className="relative z-10">Povprašaj po funkcionalnosti</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAIRunner;
