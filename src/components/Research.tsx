import research1 from "@/assets/research-1.jpg";
import research2 from "@/assets/research-2.jpg";
import research3 from "@/assets/research-3.jpg";
import research4 from "@/assets/research-4.jpg";

const Research = () => {
  const researchAreas = [
    {
      image: research1,
      title: "How To Communicate With AI",
      description:
        "Advancing our understanding of how AI works and how to most effectively manage and interact with AI tools.",
      tags: ["NLP", "Prompting", "UX"],
    },
    {
      image: research2,
      title: "Education",
      description:
        "Actively teaching students and teachers at academic institutions to foster AI literacy across generations.",
      tags: ["Learning", "Curriculum", "EdTech"],
    },
    {
      image: research3,
      title: "Innovation",
      description:
        "Pushing boundaries in AI research and development of next-generation AI applications and tools.",
      tags: ["R&D", "Applications", "Tools"],
    },
    {
      image: research4,
      title: "Path to Utopia",
      description:
        "Building partnerships across academia, industry, and individuals to create a better AI-powered future.",
      tags: ["Ethics", "Policy", "Society"],
    },
  ];

  return (
    <section id="research" className="relative py-32 bg-card/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              02 // RESEARCH
            </span>
            <span className="w-8 h-px bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Research Areas
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We are actively exploring cutting-edge research areas to push the
            boundaries of AI and digital literacy.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-border/30 bg-background hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Index Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center border border-primary/30 bg-background/80 backdrop-blur-sm">
                  <span className="font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground border border-border/50 bg-card/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-glow transition-all">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>

                {/* Read More Link */}
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-primary/70 group-hover:text-primary transition-colors">
                  <span>&gt;</span>
                  <span>Learn more</span>
                  <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
