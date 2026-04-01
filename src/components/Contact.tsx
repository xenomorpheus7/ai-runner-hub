import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4 glass-panel px-4 py-2 rounded-full">
                <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
                  Povpraševanje
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Posvet brez obveznosti
              </h2>
              <p className="text-muted-foreground text-lg">
                Če razmišljate o prenovi ali vzpostavitvi spletne strani, se
                dogovorimo za kratek posvet. Skupaj pregledamo možnosti in
                pripravimo osnovni predlog.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center glass-panel rounded-2xl">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">E-mail</h4>
                  <p className="text-muted-foreground text-sm">
                    contact@airunner.institute
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                V sporočilu na kratko opišite namen strani, približen obseg
                (koliko podstrani) in časovni okvir.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative p-8 glass-card rounded-3xl">
            <div className="absolute -top-3 left-8 px-4 py-1 glass-panel rounded-full text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
              Povpraševanje
            </div>

            <form className="space-y-6 mt-4">
              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Ime
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Janez Novak"
                  className="w-full px-4 py-3 rounded-2xl glass-input text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ime@podjetje.si"
                  className="w-full px-4 py-3 rounded-2xl glass-input text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Kaj potrebujete
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Kratko opišite obseg, cilj in vsebine..."
                  className="w-full px-4 py-3 rounded-2xl glass-input text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 rounded-full text-sm tracking-[0.25em] uppercase overflow-hidden relative text-foreground"
              >
                <span className="absolute inset-0 liquid-border opacity-90" />
                <span className="absolute inset-0 bg-background/50" />
                <span className="relative z-10">Pošlji povpraševanje</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
