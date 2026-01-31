import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 border-t border-border/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-primary/50" />
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  04 // CONTACT
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get Involved
              </h2>
              <p className="text-muted-foreground text-lg">
                Join our community of researchers, students, and industry
                professionals to collaborate on cutting-edge projects.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border/50 bg-card/30">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    contact@airunner.institute
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border/50 bg-card/30">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Global Research Network
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-border/50 bg-card/30">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">Discord</h4>
                  <p className="text-muted-foreground text-sm">
                    Join our community
                  </p>
                </div>
              </div>
            </div>

            {/* Community CTA */}
            <a
              href="https://discord.com/invite/HMzv8GE4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary/30 text-foreground font-mono text-sm tracking-wider hover:bg-primary/10 transition-colors"
            >
              <MessageCircle size={18} />
              <span>JOIN OUR COMMUNITY</span>
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="relative p-8 border border-border/30 bg-card/20 backdrop-blur-sm">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30" />

            <div className="absolute -top-3 left-8 px-4 bg-background font-mono text-xs tracking-widest text-muted-foreground">
              CONTACT_FORM
            </div>

            <form className="space-y-6 mt-4">
              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-muted-foreground">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
