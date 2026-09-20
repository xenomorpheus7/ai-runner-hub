const Ekipa = () => {
  const members = [
    { name: "Ime Priimek", position: "Direktor / Razvijalec", image: "/placeholder.svg" },
    { name: "Ime Priimek", position: "Oblikovalka / UI/UX", image: "/placeholder.svg" },
    { name: "Ime Priimek", position: "AI Inženir", image: "/placeholder.svg" },
  ];

  return (
    <section id="ekipa" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6">
            <span className="w-2 h-2 bg-[hsl(var(--electric-blue))] rounded-full animate-glow-pulse" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Ekipa
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Kdo ustvarja rešitve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ekipa strokovnjakov, ki združuje znanje programiranja, dizajna in umetne inteligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="glass-card rounded-3xl p-8 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity duration-700 z-10" />
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                 />
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-glow transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground/70 transition-colors">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ekipa;
