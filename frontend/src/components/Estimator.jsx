import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Bits";

const RATES = {
  residentiel: { label: "Résidentiel", per: 80 },
  commercial: { label: "Commercial", per: 130 },
  industriel: { label: "Industriel", per: 180 },
};

export function Estimator() {
  const [type, setType] = useState("residentiel");
  const [surface, setSurface] = useState(150);

  const hours = useMemo(
    () => Math.max(1, Math.round((surface / RATES[type].per) * 2) / 2),
    [type, surface]
  );

  return (
    <section className="bg-white py-24" data-testid="estimator-section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHead
          align="center"
          overline="Estimation éclair"
          title="Combien de temps pour votre espace ?"
          sub="Une idée en dix secondes. Pour un devis précis, un appel ou un SMS suffit."
        />
        <Reveal delay={0.15} className="mt-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 ring-1 ring-emerald-500/20 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Type d'espace
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {Object.entries(RATES).map(([key, r]) => (
                    <button
                      key={key}
                      type="button"
                      data-testid={`quote-type-${key}`}
                      onClick={() => setType(key)}
                      className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                        type === key
                          ? "bg-brand-teal text-white shadow-md shadow-brand-teal/30"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
                <label
                  htmlFor="surface-range"
                  className="mt-8 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
                >
                  Superficie approximative
                </label>
                <input
                  id="surface-range"
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={surface}
                  data-testid="quote-surface-slider"
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="mt-4 w-full accent-emerald-500"
                />
                <div className="mt-2 flex justify-between text-xs font-semibold text-slate-400">
                  <span>50 m²</span>
                  <span className="font-display text-base font-extrabold text-brand-teal">
                    {surface} m²
                  </span>
                  <span>2 000 m²</span>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-3xl bg-brand-ink p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Estimation
                </p>
                <p className="mt-3 font-display text-4xl font-extrabold" data-testid="quote-result">
                  ≈ {hours} h
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  d'intervention pour {surface} m² en mode {RATES[type].label.toLowerCase()}.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {["Produits et équipement inclus", "Devis gratuit et sans engagement"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/contact?service=${encodeURIComponent(RATES[type].label)}`}
                  data-testid="quote-contact-button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-display font-bold text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5"
                >
                  Discuter de mon projet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
