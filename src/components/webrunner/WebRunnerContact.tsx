import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "Pristajalne strani",
  "Poslovne spletne strani",
  "Spletne trgovine",
  "Aplikacije po meri",
  "AI integracije",
  "CMS rešitve",
];

const WebRunnerContact = () => {
  return (
    <section id="wr-contact" className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] orb pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--electric-blue)/0.1), transparent 70%)" }} />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Začnite projekt
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Zgradimo vašo novo spletno stran
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Brezplačen 30-minutni uvodni posvet. Brez obveznosti. Skupaj opredelimo cilje in pripravimo ponudbo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="flex flex-col justify-between gap-10">
            {/* Contact info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center glass-panel rounded-2xl">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">E-pošta</h4>
                <p className="text-muted-foreground text-sm">contact@airunner.institute</p>
                <p className="text-muted-foreground text-xs mt-1">Odgovorimo v roku 24 ur.</p>
              </div>
            </div>

            {/* Project type grid */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Kaj lahko izdelamo za vas?
              </p>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map((t) => (
                  <div key={t} className="flex items-center gap-2 glass-panel px-4 py-2.5 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout */}
            <div className="glass-card rounded-2xl p-6">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                Brezplačen uvodni posvet
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vsak projekt začnemo s pogovorom, kjer natančno spoznamo vaše zahteve, predlagamo optimalno
                strukturo in tehnologijo ter določimo realne časovne in finančne okvirje.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="relative glass-card rounded-3xl p-8 md:p-10">
            <div className="absolute -top-3 left-8 px-4 py-1 glass-panel rounded-full font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Povpraševanje WEBRUNNER
            </div>

            <form className="space-y-5 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    Ime in priimek
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Janez Novak"
                    className="w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    E-poštni naslov
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ime@podjetje.si"
                    className="w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Vrsta projekta
                </label>
                <select
                  name="type"
                  className="w-full px-4 py-3 rounded-xl glass-input text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" style={{ background: "hsl(226 48% 10%)" }}>Izberite vrsto strani...</option>
                  <option value="landing" style={{ background: "hsl(226 48% 10%)" }}>Pristajalna stran (Landing page)</option>
                  <option value="business" style={{ background: "hsl(226 48% 10%)" }}>Poslovna spletna stran</option>
                  <option value="ecommerce" style={{ background: "hsl(226 48% 10%)" }}>Spletna trgovina</option>
                  <option value="custom" style={{ background: "hsl(226 48% 10%)" }}>Aplikacija po meri</option>
                  <option value="ai" style={{ background: "hsl(226 48% 10%)" }}>Umetna inteligenca (AI integracija)</option>
                  <option value="other" style={{ background: "hsl(226 48% 10%)" }}>Drugo / Po dogovoru</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Opis projekta
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Opišite vašo dejavnost, cilje nove strani, želene funkcije ali obstoječe gradivo..."
                  className="w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Časovni okvir / Želeni rok
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="npr. v roku enega meseca / po dogovoru"
                  className="w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/40 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="group w-full py-4 rounded-full text-sm tracking-[0.2em] uppercase overflow-hidden relative text-foreground"
              >
                <span className="absolute inset-0 liquid-border opacity-90" />
                <span className="absolute inset-0 bg-background/40" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Pošlji povpraševanje
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebRunnerContact;
