import ceoImage from "@/assets/ceo-robert.jpg";

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 mb-6">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-mono text-sm tracking-wider text-muted-foreground">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            Meet the visionaries driving AI education forward
          </p>
        </div>

        {/* CEO Card */}
        <div className="max-w-3xl mx-auto">
          <div className="border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 relative group hover:border-primary/50 transition-colors duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* CEO Image */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 border-2 border-primary/30 relative overflow-hidden">
                  <img 
                    src={ceoImage} 
                    alt="Robert Vogrinec - CEO" 
                    className="w-full h-full object-cover grayscale"
                  />
                  {/* Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
                {/* Frame decoration */}
                <div className="absolute -inset-2 border border-primary/20 -z-10" />
                <div className="absolute -inset-4 border border-primary/10 -z-20" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="font-mono text-xs text-primary mb-2 tracking-widest">
                  CHIEF EXECUTIVE OFFICER
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Robert Vogrinec
                </h3>
                <div className="w-16 h-px bg-primary mb-6 mx-auto md:mx-0" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Robert Vogrinec is the visionary founder and CEO of AI Runner Institute. 
                  With over a decade of experience in artificial intelligence and machine learning, 
                  he has dedicated his career to democratizing AI education and making cutting-edge 
                  technology accessible to learners worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under his leadership, AI Runner Institute has grown into a leading educational 
                  platform, empowering thousands of students and professionals to master AI 
                  technologies and drive innovation in their respective fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
