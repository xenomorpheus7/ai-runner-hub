import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Katere tehnologije uporabljate za izdelavo spletnih strani?",
    a: "Primarno razvijamo z Reactom in TypeScriptom v okolju Vite za izjemno hitrost in čistost kode. Za projekte s potrebo po strežniškem upodabljanju (SSR) ali statičnem generiranju (SSG) uporabljamo Next.js. Oblikovanje temelji na Tailwind CSS in namenskem dizajn sistemu. Za urejanje vsebin integriramo sodobne CMS rešitve (kot so Sanity, Strapi ali WordPress).",
  },
  {
    q: "Kje bo moja spletna stran gostovala?",
    a: "Strani nameščamo na sodobna globalna edge omrežja, kot sta Cloudflare Pages in Vercel (z 99,99 % zanesljivostjo delovanja), ali na vaš strežnik po meri. Nastavitev domene, SSL certifikatov za varno povezavo (HTTPS) in predpomnjenja CDN je v celoti del postopka lansiranja.",
  },
  {
    q: "Ali bom lahko samostojno urejal vsebino?",
    a: "Da. Po dogovoru vključimo uporabniku prijazen CMS sistem. Prejeli boste pregledno nadzorno ploščo, prek katere lahko preprosto spreminjate besedila, slike, novice in izdelke brez programerskega znanja.",
  },
  {
    q: "Kako zagotavljate visoko hitrost in zmogljivost?",
    a: "Ob vsaki razvojni fazi preverjamo parametre Core Web Vitals (LCP, FID, CLS). Uporabljamo razdeljevanje kode (code-splitting), leno nalaganje (lazy loading), napredno stiskanje slik v sodobnih formatih (WebP) ter predpomnjenje na robu omrežja. Cilj je Lighthouse ocena nad 95+.",
  },
  {
    q: "Ali poskrbite za SEO optimizacijo?",
    a: "Vsekakor. Vsaka spletna stran vključuje celovito tehnično SEO pripravo: semantično HTML strukturo, pravilno hierarhijo naslovov, meta oznake, Open Graph kartice za družbena omrežja, kanonične povezave, datoteko robots.txt, sitemap.xml zemljevid strani ter povezavo z orodjem Google Search Console.",
  },
  {
    q: "Koliko krogov usklajevanja in popravkov je vključenih?",
    a: "Običajno sodelovanje vključuje od 2 do 3 strukturirane kroge usklajevanja in popravkov. Vsak krog temelji na zbranih povratnih informacijah, kar zagotavlja učinkovito izvedbo brez nepotrebnih zamud.",
  },
  {
    q: "Ali lahko v spletno stran vključite umetno inteligenco (AI)?",
    a: "Vsekakor – to je ena naših osrednjih prednosti prek Zavoda AI Runner. V vašo stran lahko integriramo pametne AI asistente in klepetalne bote (GPT, Claude ali modele po meri), pametno iskanje, avtomatizirano obdelavo povpraševanj ter napredne rešitve za podporo strankam.",
  },
  {
    q: "Kaj se zgodi po zaključku in objavi spletne strani?",
    a: "Po lansiranju zagotavljamo obdobje tehnične podpore (odprava morebitnih napak, manjše prilagoditve in uvajanje v uporabo). Po želji nudimo tudi mesečno vzdrževanje, varnostne posodobitve in nadaljnji razvoj. Po zaključku prejmete vso izvorno kodo in dostope.",
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
              Pogosta vprašanja
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Vse, kar morate vedeti
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Odgovori na ključna tehnična in organizacijska vprašanja pred začetkom projekta.
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
