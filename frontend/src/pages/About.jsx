import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, SectionHead } from "@/components/Bits";
import { BigCallButton } from "@/components/CallButtons";
import { IMAGES, LOGO_URL } from "@/data/site";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Fiabilité absolue",
    text: "Ponctualité, constance et parole tenue. Vous savez toujours qui vient, quand, et pour quel résultat.",
  },
  {
    icon: Leaf,
    title: "Écologie active",
    text: "Des produits éco-certifiés et biodégradables, parce qu'un espace propre ne doit jamais coûter la santé de personne.",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    text: "Des professionnels formés, assurés et passionnés par le travail bien fait — jusque dans les détails invisibles.",
  },
  {
    icon: BadgeCheck,
    title: "Transparence totale",
    text: "Des prix clairs, des ententes simples et une communication directe. Aucun frais caché, jamais.",
  },
];

const ECO_POINTS = [
  "Produits biodégradables et éco-certifiés",
  "Sécuritaire pour les enfants et les animaux",
  "Zéro agent chimique agressif ou parfum entêtant",
  "Meilleure qualité de l'air intérieur, durablement",
];

export default function About() {
  return (
    <main data-testid="about-page">
      <section className="dot-grid-dark relative overflow-hidden bg-brand-ink pb-24 pt-40">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.28em] text-emerald-400">
              À propos
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              L'exigence du propre, portée par des humains
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              LUSAVONZO est née d'une conviction simple : un espace propre change tout. L'humeur,
              la santé, la productivité, la fierté d'accueillir. Depuis nos débuts, nous servons les
              résidences, les commerces et les sites industriels du Grand Montréal avec la même
              obsession — un résultat impeccable, obtenu dans le respect des gens et de
              l'environnement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Notre promesse tient en une phrase :{" "}
              <span className="font-display font-bold text-emerald-400">
                des espaces plus propres, une vie meilleure.
              </span>
            </p>
            <div className="mt-9">
              <BigCallButton testid="about-call-button" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/40">
                <img
                  src={LOGO_URL}
                  alt="L'identité LUSAVONZO : nettoyage résidentiel et commercial"
                  className="w-full object-cover"
                />
              </div>
              <div className="float-soft absolute -bottom-6 -left-4 flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-white shadow-xl sm:-left-8">
                <Sparkles className="h-5 w-5" />
                <p className="text-sm font-bold">Propreté garantie, sourire inclus</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24" data-testid="pillars-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            overline="Nos piliers"
            title="Quatre engagements, zéro compromis"
            sub="Ce qui fait de LUSAVONZO un partenaire de confiance, à la maison comme au travail."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24" data-testid="eco-section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={IMAGES.eco}
                alt="Produits de nettoyage éco-responsables utilisés par Lusavonzo"
                className="h-80 w-full object-cover sm:h-96"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHead
              overline="Éco-responsabilité"
              title="Propre pour vous, doux pour la planète"
              sub="Nos produits sont choisis avec le même soin que nos méthodes : puissants contre la saleté, inoffensifs pour votre entourage."
            />
            <ul className="mt-8 space-y-3">
              {ECO_POINTS.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Leaf className="h-3.5 w-3.5 text-emerald-600" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24" data-testid="zone-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-brand-ink p-8 text-white sm:p-10">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-emerald-400" />
                <h3 className="font-display text-2xl font-bold">Zone desservie</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Nous intervenons partout dans le Grand Montréal et les environs :
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Montréal", "Laval", "Rive-Nord", "Rive-Sud", "Longueuil", "Brossard", "Terrebonne", "Repentigny"].map(
                  (city) => (
                    <span
                      key={city}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-slate-200"
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
              <p className="mt-6 text-sm text-slate-400">
                Votre secteur n'y figure pas ? Appelez-nous — on s'arrange.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-emerald-600" />
                <h3 className="font-display text-2xl font-bold text-slate-900">Disponibilités</h3>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm sm:text-base">
                {[
                  ["Lundi — Vendredi", "7 h à 21 h"],
                  ["Samedi — Dimanche", "8 h à 20 h"],
                  ["Urgences & imprévus", "Sur appel, 24/7"],
                ].map(([d, h]) => (
                  <li
                    key={d}
                    className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
                  >
                    <span className="font-semibold text-slate-700">{d}</span>
                    <span className="font-display font-bold text-emerald-600">{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                data-testid="about-contact-link"
                className="group mt-8 inline-flex items-center gap-2 font-display font-bold text-brand-teal transition-colors hover:text-emerald-600"
              >
                Planifier ma première visite
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
