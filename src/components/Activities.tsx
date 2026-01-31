import { ArrowRight } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      date: "December 2025",
      title: "New Research Partnership Announced",
      description:
        "We are excited to announce a new partnership with leading European institutions to advance AI research in digital literacy and education.",
      tag: "Partnership",
    },
    {
      date: "November 28, 2025",
      title: "AI Workshop Series",
      description:
        "Join our upcoming workshop series exploring the creative and ethical implications of artificial intelligence and developing responsible AI systems.",
      tag: "Workshop",
    },
    {
      date: "April 2024",
      title: "Digital Literacy Initiative Launch",
      description:
        "Our new digital literacy program aims to educate communities about AI technologies and their impact on society.",
      tag: "Initiative",
    },
  ];

  return (
    <section id="activities" className="relative py-32 bg-foreground">
      {/* Background - White */}
      <div className="absolute inset-0" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-background/50" />
            <span className="font-mono text-xs tracking-widest text-background/60">
              03 // ACTIVITIES
            </span>
            <span className="w-8 h-px bg-background/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-background">Activities</h2>
          <p className="max-w-2xl mx-auto text-background/70 text-lg">
            Stay informed about the latest developments in AI research and our
            contributions to the field.
          </p>
        </div>

        {/* Activities Timeline */}
        <div className="max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-12 last:pb-0 border-l border-background/20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 border border-background bg-foreground group-hover:bg-background transition-colors" />

              {/* Content Card */}
              <div className="ml-6 p-6 border border-background/20 bg-background/10 hover:border-background/40 hover:bg-background/20 transition-all duration-300">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-background/60">
                    {activity.date}
                  </span>
                  <span className="px-2 py-1 text-xs font-mono border border-background/30 text-background">
                    {activity.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-background group-hover:opacity-80 transition-all">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-background/70 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Read More */}
                <button className="flex items-center gap-2 font-mono text-xs text-background/60 hover:text-background transition-colors group/btn">
                  <span>Read more</span>
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
