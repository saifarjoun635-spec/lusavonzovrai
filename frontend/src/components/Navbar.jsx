import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import { LOGO_URL, NAV_LINKS, PHONE_TEL } from "@/data/site";
import { BigCallButton } from "@/components/CallButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div
          className={`mt-3 flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-slate-200/90 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
              : "border-white/15 bg-white/10 backdrop-blur-md"
          }`}
        >
          <Link to="/" data-testid="nav-logo" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="LUSAVONZO"
              className="h-11 w-11 rounded-full bg-white object-cover ring-2 ring-emerald-400/60"
              style={{ objectPosition: "50% 28%" }}
            />
            <span className="leading-tight">
              <span
                className={`font-display text-lg font-extrabold tracking-tight ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                LUSA<span className="text-emerald-500">VONZO</span>
              </span>
              <span
                className={`hidden text-[10px] uppercase tracking-[0.22em] sm:block ${
                  scrolled ? "text-slate-500" : "text-slate-300"
                }`}
              >
                Nettoyage résidentiel &amp; commercial
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                data-testid={l.testid}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-600"
                      : scrolled
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {l.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <BigCallButton testid="header-big-call-button" compact />
            </div>
            <button
              data-testid="mobile-menu-button"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-3 mt-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            data-testid="mobile-menu-panel"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  data-testid={`mobile-${l.testid}`}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {l.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <BigCallButton testid="mobile-menu-call-button" />
              <a
                href={`sms:${PHONE_TEL}`}
                data-testid="mobile-menu-sms-button"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 font-display font-bold text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-700"
              >
                <MessageSquare className="h-4 w-4" /> Envoyer un SMS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
