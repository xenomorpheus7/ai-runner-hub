import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 100, suffix: "", prefix: "", label: "Lighthouse ocena", sub: "Hitrost / SEO / Dostopnost" },
  { value: 0.9, suffix: "s", prefix: "< ", label: "First Contentful Paint", sub: "Povprečje izvedenih strani" },
  { value: 99.9, suffix: "%", prefix: "", label: "Uptime zanesljivost", sub: "Cloudflare Edge & CDN" },
  { value: 50, suffix: "kb", prefix: "< ", label: "CSS paket (gzip)", sub: "Čista, optimizirana koda" },
  { value: 25, suffix: " dni", prefix: "< ", label: "Hitra izvedba", sub: "Od ideje do objave" },
  { value: 100, suffix: "%", prefix: "", label: "Mobilna prilagojenost", sub: "Brezhibno na vseh napravah" },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const startTime = performance.now();
    const isDecimal = target % 1 !== 0;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCount(isDecimal ? Math.round(val * 10) / 10 : Math.round(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function MetricCard({ metric, started }: { metric: typeof metrics[0]; started: boolean }) {
  const count = useCountUp(metric.value, 1600, started);
  return (
    <div className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group hover:translate-y-[-4px] transition-all duration-500">
      <div className="text-4xl md:text-5xl font-semibold text-glow mb-2 font-mono">
        {metric.prefix}
        {count}
        {metric.suffix}
      </div>
      <h3 className="text-sm font-semibold mb-1 tracking-wide">{metric.label}</h3>
      <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">{metric.sub}</p>
    </div>
  );
}

const WebRunnerMetrics = () => {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="wr-metrics" className="relative py-32 overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full orb pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--rich-violet)/0.12), transparent 70%)" }} />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              V številkah
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Zmogljivost in hitrost brez kompromisov
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vsaka spletna stran, ki jo izdelamo, je optimizirana po strogih industrijskih standardih za
            takojšnje nalaganje in odlično uporabniško izkušnjo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {metrics.map((m) => (
            <MetricCard key={m.label} metric={m} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerMetrics;
