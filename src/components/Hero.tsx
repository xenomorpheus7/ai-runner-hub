import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 animate-fade-in-up gradient-text text-glow">
          AI pismenost in digitalne rešitve za sodobna podjetja.
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 font-light animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Opolnomočamo šole in podjetja z znanjem umetne inteligence ter
          razvijamo spletne strani in AI orodja za digitalno rast.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full text-sm tracking-[0.25em] uppercase overflow-hidden transition-all text-foreground"
          >
            <span className="absolute inset-0 liquid-border opacity-80" />
            <span className="absolute inset-0 bg-background/40 backdrop-blur-xl" />
            <span className="relative z-10">Povpraševanje</span>
          </a>
          <a
            href="#mission"
            className="px-8 py-4 rounded-full glass-panel text-sm tracking-[0.25em] uppercase text-foreground/80 hover:text-foreground transition-colors"
          >
            O pristopu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#mission"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-glow-pulse"
      >
        <span className="font-mono text-xs tracking-wider">SPUSTI</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
