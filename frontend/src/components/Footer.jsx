import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { EMAIL, LOGO_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="LUSAVONZO"
                className="h-12 w-12 rounded-full bg-white object-cover ring-2 ring-emerald-400/60"
                style={{ objectPosition: "50% 28%" }}
              />
              <span className="font-display text-xl font-extrabold text-white">
                LUSA<span className="text-emerald-400">VONZO</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Des espaces plus propres, une vie meilleure. Nettoyage résidentiel,
              commercial et industriel dans le Grand Montréal.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    data-testid={`footer-${l.testid}`}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Contact direct
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  data-testid="footer-call-link"
                  className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <Phone className="h-4 w-4 text-emerald-400" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`sms:${PHONE_TEL}`}
                  data-testid="footer-sms-link"
                  className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" /> SMS : {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  data-testid="footer-email-link"
                  className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <Mail className="h-4 w-4 text-emerald-400" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 text-emerald-400" /> Grand Montréal &amp; environs
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-emerald-400" /> 7 jours sur 7, horaire flexible
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} LUSAVONZO. Tous droits réservés.</p>
          <p>Nettoyage résidentiel · commercial · industriel</p>
        </div>
      </div>
    </footer>
  );
}
