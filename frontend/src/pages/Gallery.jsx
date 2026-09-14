import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, Expand, X } from "lucide-react";
import { Marquee, Reveal } from "@/components/Bits";
import { BigCallButton } from "@/components/CallButtons";
import { GALLERY_ITEMS, MARQUEE_ITEMS } from "@/data/site";

const FILTERS = ["Tous", "Interventions réelles", "Résidentiel", "Commercial", "Industriel"];

function Tag({ tag }) {
  if (!tag) return null;
  const isBefore = tag === "Avant";
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur ${
        isBefore ? "bg-amber-500/90 text-white" : "bg-emerald-500/90 text-white"
      }`}
    >
      {tag}
    </span>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("Tous");
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    if (filter === "Tous") return GALLERY_ITEMS;
    if (filter === "Interventions réelles") return GALLERY_ITEMS.filter((g) => g.real);
    return GALLERY_ITEMS.filter((g) => g.cat === filter);
  }, [filter]);

  return (
    <main data-testid="gallery-page">
      <section className="dot-grid-dark relative overflow-hidden bg-brand-ink pb-20 pt-40">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Galerie
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              La preuve par l'image
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Des photos prises sur le terrain par notre équipe, avant et après nos passages.
              Parce qu'un espace impeccable ne se promet pas — il se montre.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
              <Camera className="h-4 w-4 text-emerald-400" />
              Les photos estampillées « Intervention réelle » proviennent de nos chantiers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2" data-testid="gallery-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                data-testid={`gallery-filter-${f.toLowerCase().replace(/[^a-z]/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  filter === f
                    ? "bg-brand-teal text-white shadow-md shadow-brand-teal/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.figure
                  layout
                  key={g.src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
                  className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    data-testid={`gallery-item-${i}`}
                    onClick={() => setActive(g)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Agrandir : ${g.title}`}
                  >
                    <img
                      src={g.src}
                      alt={g.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink/70 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <Expand className="h-5 w-5" />
                    </span>
                  </button>
                  <figcaption className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <p className="font-display text-base font-bold text-slate-900">{g.title}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {g.cat}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      <Tag tag={g.tag} />
                      {g.real && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                          <Camera className="h-3 w-3" /> Intervention réelle
                        </span>
                      )}
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" data-testid="gallery-cta-section">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Votre espace mérite le même traitement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Envoyez-nous une photo de votre espace par SMS et recevez une estimation rapide.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BigCallButton testid="gallery-call-button" />
              <Link
                to="/contact"
                data-testid="gallery-contact-link"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-7 py-4 font-display font-bold text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:text-emerald-700"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} dark={false} />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-ink/95 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.figure
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-bold text-white">{active.title}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {active.cat}
                    {active.real ? " · Intervention réelle" : ""}
                  </p>
                </div>
                <Tag tag={active.tag} />
              </figcaption>
              <button
                type="button"
                data-testid="gallery-lightbox-close"
                onClick={() => setActive(null)}
                aria-label="Fermer"
                className="absolute -right-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-200 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
