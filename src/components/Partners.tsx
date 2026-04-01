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
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
            Zaupanje vodilnih institucij
          </span>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:translate-y-[-4px] transition-all duration-300"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl liquid-border mb-3 relative overflow-hidden">
                <div className="absolute inset-1 rounded-2xl bg-background/60" />
                <span className="relative z-10 text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.initials}
                </span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors text-center tracking-[0.2em] uppercase">
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
