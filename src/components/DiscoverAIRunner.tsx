import { ExternalLink, Zap, Cpu, Network } from "lucide-react";

const DiscoverAIRunner = () => {
  const features = [
    { icon: Zap, label: "Lightning Fast" },
    { icon: Cpu, label: "AI-Powered" },
    { icon: Network, label: "Connected" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-card/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="font-mono text-xs tracking-wider">
              DISCOVER_AI_RUNNER
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover{" "}
            <span className="text-glow relative">
              AI Runner
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the next generation of AI-powered tools and automation.
            AI Runner brings cutting-edge artificial intelligence capabilities
            to streamline your workflow and accelerate innovation.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 border border-border/30 bg-card/20"
              >
                <feature.icon size={20} className="text-primary" />
                <span className="font-mono text-sm">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://airunner2033.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span>EXPLORE AI RUNNER</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>

          {/* Terminal-style Decoration */}
          <div className="mt-16 p-6 border border-border/30 bg-card/10 text-left font-mono text-sm max-w-xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full border border-primary/50" />
              <span className="w-3 h-3 rounded-full border border-primary/30" />
              <span className="w-3 h-3 rounded-full border border-primary/20" />
              <span className="ml-4 text-muted-foreground">terminal</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="text-primary">$</span> ai-runner --init
              </p>
              <p className="text-primary/70">
                ✓ Initializing AI Runner engine...
              </p>
              <p className="text-primary/70">✓ Loading neural networks...</p>
              <p className="text-primary/70">
                ✓ Ready.{" "}
                <span className="animate-glow-pulse inline-block">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAIRunner;
