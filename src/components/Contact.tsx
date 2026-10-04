import { useState } from "react";
import { Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email) {
      toast.error("Prosimo, vnesite svoje ime in e-mail naslov.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/robert.vogrinec7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ime: name,
          email: email,
          sporocilo: message || "Brez opisa",
          _subject: `AI Runner povpraševanje: ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        toast.success("Povpraševanje je bilo uspešno poslano!");
      } else {
        throw new Error("Napaka pri pošiljanju");
      }
    } catch (err) {
      console.error(err);
      toast.error("Prišlo je do napake. Pišite neposredno na robert.vogrinec7@gmail.com");
    } finally {
      setLoading(false);
    }
  };

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
                  <a
                    href="mailto:robert.vogrinec7@gmail.com"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    robert.vogrinec7@gmail.com
                  </a>
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
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-semibold">Povpraševanje oddano!</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                  Hvala za vaše sporočilo. Uspešno je bilo poslano. Odgovorili vam bomo v najkrajšem možnem času.
                </p>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full mt-4 text-xs font-mono uppercase tracking-widest"
                >
                  Pošlji novo sporočilo
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Ime in priimek
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    required
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
                    required
                    placeholder="Kratko opišite obseg, cilj in vsebine..."
                    className="w-full px-4 py-3 rounded-2xl glass-input text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full text-sm tracking-[0.25em] uppercase overflow-hidden relative text-foreground disabled:opacity-50"
                >
                  <span className="absolute inset-0 liquid-border opacity-90" />
                  <span className="absolute inset-0 bg-background/50" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Pošiljanje...
                      </>
                    ) : (
                      <>
                        Pošlji povpraševanje
                        <ArrowRight size={15} />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
