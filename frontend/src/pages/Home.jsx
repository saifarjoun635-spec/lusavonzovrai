import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Leaf,
  MessageSquare,
  ShieldCheck,
  Star,
} from "lucide-react";
import { BigCallButton } from "@/components/CallButtons";
import { Marquee, Reveal, SectionHead } from "@/components/Bits";
import { CHAPTERS, IMAGES, MARQUEE_ITEMS, SERVICES, TESTIMONIALS, PHONE_TEL } from "@/data/site";
import { Estimator } from "@/components/Estimator";

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const lineVariant = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="dot-grid-dark relative overflow-hidden bg-brand-ink" data-testid="hero-section">
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"
      />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-32 lg:pt-44">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300"
            data-testid="hero-badge"
          >
            <Leaf className="h-3.5 w-3.5" /> Lusavonzo · Nettoyage d'exception
          </motion.div>

          <motion.h1
            variants={lineContainer}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {["Des espaces", "plus propres,", "une vie meilleure."].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineVariant}
                  className={`block ${i === 2 ? "text-emerald-400" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Nettoyage résidentiel, commercial et industriel dans le Grand Montréal.
            Produits éco-responsables, équipe fiable et résultat impeccable — à chaque visite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <BigCallButton testid="hero-call-button" />
            <Link
              to="/contact"
              data-testid="hero-quote-button"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-4 font-display font-bold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-300"
            >
              Demander un devis rapide <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { icon: ShieldCheck, label: "100 % satisfaction" },
              { icon: Leaf, label: "Produits éco-certifiés" },
              { icon: Clock, label: "Intervention 24/7" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur"
              >
                <b.icon className="h-4 w-4 text-emerald-400" /> {b.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: imgY }} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={IMAGES.hero}
                alt="Intérieur résidentiel impeccable après un nettoyage Lusavonzo"
                className="h-[26rem] w-full object-cover sm:h-[30rem]"
              />
            </div>
            <div className="float-soft absolute -left-4 top-8 rounded-2xl border border-white/15 bg-brand-inklight/90 px-5 py-3 backdrop-blur-xl sm:-left-8">
              <p className="font-display text-2xl font-extrabold text-white">500+</p>
              <p className="text-xs text-slate-300">espaces nettoyés</p>
            </div>
            <div className="float-soft-delayed absolute -right-3 bottom-10 flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/90 px-5 py-3 text-white backdrop-blur-xl sm:-right-6">
              <BadgeCheck className="h-5 w-5" />
              <p className="text-sm font-bold">Équipe vérifiée &amp; assurée</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesBento() {
  const featured = SERVICES.slice(0, 3);
  return (
    <section className="bg-white py-24 sm:py-28" data-testid="services-bento-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            overline="Nos expertises"
            title="Trois mondes, un même standard d'excellence"
            sub="Du salon familial à l'usine, nous adaptons méthodes, produits et fréquences à chaque environnement."
          />
          <Reveal delay={0.15}>
            <Link
              to="/services"
              data-testid="bento-all-services-link"
              className="group inline-flex items-center gap-2 font-display font-bold text-brand-teal transition-colors hover:text-emerald-600"
            >
              Tous nos services
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <Link
                to={`/services#${s.id}`}
                data-testid={`service-card-${s.id}`}
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur">
                    {s.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-brand-ink py-24 sm:py-28" data-testid="manifesto-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          dark
          overline="Le manifeste Lusavonzo"
          title="Notre méthode, en quatre chapitres"
          sub="La propreté n'est pas un coup de chance. C'est une discipline, appliquée avec rigueur à chaque intervention."
        />
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <div className="group grid items-start gap-4 py-8 transition-colors duration-300 sm:grid-cols-[7rem_1fr] sm:gap-10 lg:grid-cols-[10rem_1fr_2fr]">
                <span className="font-display text-5xl font-extrabold text-white/15 transition-colors duration-300 group-hover:text-emerald-400/60 sm:text-6xl">
                  {c.num}
                </span>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{c.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28" data-testid="testimonials-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          align="center"
          overline="Ils nous font confiance"
          title="Des clients qui reviennent, semaine après semaine"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-display font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-emerald-600 px-8 py-8 text-center text-white sm:flex-row sm:gap-5">
            <ShieldCheck className="h-10 w-10 shrink-0" />
            <p className="font-display text-lg font-bold sm:text-xl">
              Garantie 100 % satisfaction — si un détail vous échappe, on revient. Gratuitement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="dot-grid relative overflow-hidden bg-white py-24" data-testid="cta-banner-section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="dot-grid-dark relative overflow-hidden rounded-[2.5rem] bg-brand-ink px-6 py-14 text-center sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
            <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Prêt pour un espace impeccable ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
              Un appel suffit. Parlez-nous de votre espace et recevez une estimation claire,
              rapide et sans engagement.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BigCallButton testid="cta-call-button" />
              <a
                href={`sms:${PHONE_TEL}?body=${encodeURIComponent("Bonjour LUSAVONZO, j'aimerais obtenir une estimation pour un service de nettoyage.")}`}
                data-testid="cta-sms-link"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-4 font-display font-bold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="h-5 w-5" /> Envoyer un SMS
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee items={MARQUEE_ITEMS} dark={false} />
      <ServicesBento />
      <Manifesto />
      <Estimator />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
