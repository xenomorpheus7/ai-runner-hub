import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What technologies do you use for the frontend?",
    a: "We primarily use React with TypeScript, built with Vite for lightning-fast development. For projects requiring SSR or SSG, we use Next.js 14+. Styling is done with Tailwind CSS and a custom design system. For CMS-backed sites, we integrate Sanity, Contentful, or WordPress as a headless CMS.",
  },
  {
    q: "Where will my website be hosted?",
    a: "We deploy to Vercel (edge network, 99.99% uptime SLA) for React/Next.js projects, or to Netlify, Cloudflare Pages, or a custom VPS depending on your needs. Domain setup, SSL certificates (via Let's Encrypt or Cloudflare), and CDN configuration are all handled as part of the launch process.",
  },
  {
    q: "Will I be able to edit the content myself?",
    a: "Yes. Business and Enterprise packages include CMS integration. You'll have a user-friendly dashboard (e.g., Sanity Studio or WordPress admin) to manage pages, text, images, and blog posts without touching any code. Starter sites can be set up with a lightweight CMS on request.",
  },
  {
    q: "How do you ensure website performance?",
    a: "We audit against Core Web Vitals (LCP, FID, CLS) at every milestone. We use code splitting, lazy loading, image optimization (WebP + next/image), minimal JS bundles, and edge caching. Target is Lighthouse 95+ for Business and 100 for Enterprise tier.",
  },
  {
    q: "Do you provide SEO optimization?",
    a: "Yes — all packages include technical SEO: semantic HTML structure, proper heading hierarchy, meta tags, Open Graph tags, canonical URLs, robots.txt, sitemap.xml, and Google Search Console setup. Enterprise also includes structured data (JSON-LD schema) and performance-oriented SEO analysis.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter: 1 revision round. Business: 2 revision rounds. Enterprise: 3 revision rounds. A revision round is a consolidated batch of feedback. Structural changes after development begins may require a scope adjustment.",
  },
  {
    q: "Can you integrate AI features into my website?",
    a: "Yes — this is one of our core competencies through AI Runner Institute. We can integrate AI-powered chat assistants (GPT-4, Claude, custom fine-tuned models), smart search, automated content personalization, AI form processing, and analytics-driven recommendations. Enterprise tier includes AI feature planning by default.",
  },
  {
    q: "What happens after the project is launched?",
    a: "Business tier includes 30 days of post-launch support (bug fixes, content tweaks, minor adjustments). Enterprise includes 60 days. After that, we offer optional monthly maintenance retainers. All projects are handed over with full code access, documentation, and environment credentials.",
  },
];

const WebRunnerFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="wr-faq" className="relative py-32">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              FAQ
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Technical questions answered
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know before starting a project with us.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start gap-4 p-6 text-left group"
              >
                <span className="font-mono text-xs text-primary tracking-[0.3em] mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`flex-1 text-sm font-medium leading-relaxed transition-colors ${open === i ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}>
                  {faq.q}
                </span>
                <span className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6 pl-16">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebRunnerFAQ;
