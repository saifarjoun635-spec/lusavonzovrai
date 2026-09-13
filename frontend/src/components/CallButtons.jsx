import { Phone } from "lucide-react";
import { PHONE_PRETTY, PHONE_TEL } from "@/data/site";

export function BigCallButton({ testid, className = "", compact = false }) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      data-testid={testid}
      className={`pulse-ring inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 font-display font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 ${
        compact ? "px-5 py-2.5 text-sm" : "px-8 py-4 text-base sm:text-lg"
      } ${className}`}
    >
      <Phone className={compact ? "h-4 w-4" : "h-5 w-5"} />
      Appeler {PHONE_PRETTY}
    </a>
  );
}

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      data-testid="floating-mobile-call-button"
      aria-label={`Appeler ${PHONE_PRETTY}`}
      className="pulse-ring fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 transition-transform duration-300 hover:scale-110 md:hidden"
    >
      <Phone className="h-7 w-7" />
    </a>
  );
}
