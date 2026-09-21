import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Odkrivanje & analiza",
    subtitle: "Brezplačen 30-min posvet",
    desc: "Opredelimo vaše poslovne cilje, ciljno občinstvo, strukturo strani in tehnične zahteve. Pripravimo jasen načrt sodelovanja.",
    tags: ["Cilji", "Časovnica", "Načrt"],
  },
  {
    num: "02",
    icon: PenTool,
    title: "Oblikovanje (UI/UX)",
    subtitle: "Žični model → Končni dizajn",
    desc: "Najprej uskladimo strukturo z žičnimi modeli, nato izdelamo moderen vizualni dizajn v Figmi z usklajeno barvno paleto in tipografijo.",
    tags: ["Figma", "Žični modeli", "Dizajn sistem"],
  },
  {
    num: "03",
    icon: Code,
    title: "Razvoj & programiranje",
    subtitle: "Koda → Predogled v živo",
    desc: "Izvedba z najsodobnejšo tehnologijo. Koda je urejena v repozitoriju na GitHubu, vi pa imate vpogled v delujočo stran ob vsakem koraku.",
    tags: ["GitHub", "Predogled v živo", "TypeScript"],
  },
  {
    num: "04",
    icon: Rocket,
    title: "Testiranje & objava",
    subtitle: "Preverjanje → Objava",
    desc: "Natančno testiranje na mobilnih napravah, optimizacija Core Web Vitals, osnovna SEO nastavitev ter zanesljivo lansiranje na strežnik.",
    tags: ["Lighthouse", "SEO", "Cloudflare / Edge"],
  },
];

const WebRunnerProcess = () => {
  return (
    <section id="wr-process" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Postopek dela
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Kako poteka sodelovanje</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jasen, strukturiran in transparenten proces brez ugibanj – od prvega klica do objave na spletu.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative max-w-6xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(to right, hsl(var(--electric-blue)/0.3), hsl(var(--rich-violet)/0.4), hsl(var(--soft-pink)/0.3))" }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative p-6 flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.15), transparent 70%)" }} />
                  {/* Liquid border ring */}
                  <div className="absolute inset-2 rounded-full liquid-border opacity-50 group-hover:opacity-90 transition-opacity" />
                  {/* Inner glass circle */}
                  <div className="absolute inset-3 rounded-full glass-panel flex items-center justify-center">
                    <Icon size={28} className="text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, hsl(var(--electric-blue)), hsl(var(--rich-violet)))" }}>
                    <span className="font-mono text-[10px] font-bold text-white">{i + 1}</span>
                  </div>
                </div>

                <div className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-1">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-glow transition-all">{step.title}</h3>
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mb-3">
                  {step.subtitle}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {step.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 glass-panel rounded-full font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerProcess;
