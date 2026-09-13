import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Overline({ children, dark = false }) {
  return (
    <p
      className={`text-xs uppercase font-mono tracking-[0.28em] font-semibold mb-4 ${
        dark ? "text-emerald-400" : "text-emerald-600"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHead({ overline, title, sub, dark = false, align = "left" }) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Overline dark={dark}>{overline}</Overline>
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function Marquee({ items, dark = true }) {
  const row = [...items, ...items];
  return (
    <div
      data-testid="values-marquee"
      className={`overflow-hidden border-y ${
        dark ? "bg-brand-ink border-white/10" : "bg-white border-slate-200"
      }`}
    >
      <div className="marquee-track flex whitespace-nowrap py-5">
        {row.map((item, i) => (
          <span
            key={i}
            className={`mx-6 flex items-center gap-6 text-sm sm:text-base font-display font-semibold uppercase tracking-[0.2em] ${
              dark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {item}
            <Sparkles className="h-4 w-4 text-emerald-500 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
