import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI Education"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Terminal-style Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-border/50 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">
            INSTITUTE_STATUS: ACTIVE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          <span className="block">Empowering Innovation</span>
          <span className="block mt-2">
            through{" "}
            <span className="text-glow relative">
              AI Education
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 font-light animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Accelerating breakthroughs in artificial intelligence and digital
          literacy through world-class research and education.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#research"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">EXPLORE RESEARCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary/30 text-foreground font-mono text-sm tracking-wider hover:bg-primary/10 transition-colors"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "50+", label: "Research Projects" },
            { value: "1000+", label: "Students Trained" },
            { value: "25+", label: "Partners" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-glow">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#mission"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-glow-pulse"
      >
        <span className="font-mono text-xs tracking-wider">SCROLL</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
