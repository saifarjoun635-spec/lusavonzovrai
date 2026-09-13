import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Bits";
import { BigCallButton } from "@/components/CallButtons";
import { FAQ_ITEMS, SERVICES } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TABS = ["Tous", "Résidentiel", "Commercial", "Industriel", "Grand Nettoyage", "Éco-responsable"];

const COMPARISON = [
  { label: "Dépoussiérage complet des surfaces", reg: true, deep: true, com: true },
  { label: "Cuisine, sanitaires et planchers", reg: true, deep: true, com: true },
  { label: "Produits éco-certifiés inclus", reg: true, deep: true, com: true },
  { label: "Intérieur des électroménagers", reg: false, deep: true, com: false },
  { label: "Murs, plinthes, hottes et joints", reg: false, deep: true, com: false },
  { label: "Désinfection en profondeur", reg: false, deep: true, com: true },
  { label: "Dégraissage industriel & après-chantier", reg: false, deep: false, com: true },
  { label: "Passages hors heures d'ouverture", reg: false, deep: false, com: true },
  { label: "Contrat d'entretien récurrent", reg: true, deep: false, com: true },
];

function CompareMark({ value }) {
  return value ? (
    <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
      <Check className="h-4 w-4 text-emerald-600" />
    </span>
  ) : (
    <Minus className="mx-auto h-4 w-4 text-slate-300" />
  );
}

export default function Services() {
  const [tab, setTab] = useState("Tous");
  const filtered = useMemo(
    () => (tab === "Tous" ? SERVICES : SERVICES.filter((s) => s.category === tab)),
    [tab]
  );

  return (
    <main data-testid="services-page">
      <section className="dot-grid-dark relative overflow-hidden bg-brand-ink pb-20 pt-40">
        <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Services
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des solutions de nettoyage sur mesure
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Résidentiel, commercial, industriel ou grand nettoyage : chaque mandat reçoit un plan
              précis, des produits éco-certifiés et une équipe qui tient ses promesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2" data-testid="services-filter-tabs">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                data-testid={`filter-tab-${t.toLowerCase().replace(/[^a-z]/g, "-")}`}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  tab === t
                    ? "bg-brand-teal text-white shadow-md shadow-brand-teal/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((s) => (
                <motion.article
                  layout
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`detailed-service-${s.id}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur">
                      {s.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-bold text-slate-900">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/contact?service=${encodeURIComponent(s.title)}`}
                      data-testid={`service-quote-link-${s.id}`}
                      className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-brand-teal transition-colors hover:text-emerald-600"
                    >
                      Demander ce service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" data-testid="comparison-section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            align="center"
            overline="Comparer"
            title="Ce qui est inclus, en toute transparence"
          />
          <Reveal delay={0.15} className="mt-12">
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm" data-testid="comparison-table">
                <thead>
                  <tr className="border-b border-slate-200 bg-brand-ink text-white">
                    <th className="px-6 py-5 font-display font-bold">Prestation</th>
                    <th className="px-4 py-5 text-center font-display font-bold">Régulier</th>
                    <th className="px-4 py-5 text-center font-display font-bold">Grand nettoyage</th>
                    <th className="px-4 py-5 text-center font-display font-bold">Commercial</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-700">{row.label}</td>
                      <td className="px-4 py-4 text-center"><CompareMark value={row.reg} /></td>
                      <td className="px-4 py-4 text-center"><CompareMark value={row.deep} /></td>
                      <td className="px-4 py-4 text-center"><CompareMark value={row.com} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20" data-testid="faq-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHead
            align="center"
            overline="Questions fréquentes"
            title="Tout ce qu'il faut savoir avant de réserver"
          />
          <Reveal delay={0.15} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}>
                  <AccordionTrigger
                    data-testid={`faq-trigger-${i}`}
                    className="text-left font-display text-base font-bold text-slate-900"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.25} className="mt-12 text-center">
            <p className="text-sm text-slate-500">Une autre question ? Le plus simple :</p>
            <div className="mt-4 flex justify-center">
              <BigCallButton testid="services-call-button" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
