const Partners = () => {
  const partners = [
    { name: "TechVentures", initials: "TV" },
    { name: "Academia Global", initials: "AG" },
    { name: "VIST Labs", initials: "VL" },
    { name: "Isola Research", initials: "IR" },
    { name: "Future AI", initials: "FA" },
    { name: "Digital Minds", initials: "DM" },
  ];

  return (
    <section className="relative py-20 border-y border-border/30">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            // TRUSTED BY LEADING INSTITUTIONS
          </span>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 border border-border/20 bg-card/10 hover:border-primary/30 hover:bg-card/30 transition-all duration-300"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-colors mb-3">
                <span className="font-mono text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.initials}
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
