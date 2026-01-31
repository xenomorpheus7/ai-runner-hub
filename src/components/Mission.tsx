import { Lightbulb, Users, GraduationCap } from "lucide-react";
import missionBg from "@/assets/mission-bg.jpg";

const Mission = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries in AI research and development of cutting-edge AI tools and applications.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building partnerships across academia, industry, and individual researchers worldwide.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Actively teaching students and teachers at academic institutions to advance AI literacy.",
    },
  ];

  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={missionBg}
          alt="Neural Network"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              01 // MISSION
            </span>
            <span className="w-8 h-px bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Our research focuses on developing innovative solutions that drive
            progress in educational technology through academia.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative p-8 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500" />

              {/* Icon */}
              <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary/20 rotate-45" />
                <pillar.icon
                  size={28}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 font-mono tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Index */}
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/30">
                [{String(index + 1).padStart(2, "0")}]
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 p-8 md:p-12 border border-border/30 bg-card/20 backdrop-blur-sm relative">
          <div className="absolute -top-3 left-8 px-4 bg-background font-mono text-xs tracking-widest text-muted-foreground">
            MISSION_STATEMENT
          </div>
          <blockquote className="text-xl md:text-2xl font-light text-center leading-relaxed">
            "We are committed to creating cutting-edge solutions that transform
            industries and improve lives through{" "}
            <span className="text-glow font-medium">
              artificial intelligence
            </span>
            ."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Mission;
