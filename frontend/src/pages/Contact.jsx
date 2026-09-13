import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Bits";
import { BigCallButton } from "@/components/CallButtons";
import {
  EMAIL,
  FREQUENCY_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_OPTIONS,
} from "@/data/site";

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get("service") || "";
  const [mode, setMode] = useState("sms");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: SERVICE_OPTIONS.some((s) => preService.includes(s.split(" ")[0]))
      ? SERVICE_OPTIONS.find((s) => preService.includes(s.split(" ")[0]))
      : preService || SERVICE_OPTIONS[0],
    frequency: FREQUENCY_OPTIONS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Nouvelle demande — LUSAVONZO",
      `Nom : ${form.name}`,
      `Téléphone : ${form.phone || "—"}`,
      `Ville / Adresse : ${form.city || "—"}`,
      `Service souhaité : ${form.service}`,
      `Fréquence : ${form.frequency}`,
      `Détails : ${form.message || "—"}`,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    if (mode === "sms") {
      window.location.href = `sms:${PHONE_TEL}?body=${body}`;
    } else {
      const subject = encodeURIComponent(`Demande de devis — ${form.service}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  return (
    <main data-testid="contact-page">
      <section className="dot-grid-dark relative overflow-hidden bg-brand-ink pb-20 pt-40">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Votre devis commence par un simple message
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Remplissez le formulaire, choisissez SMS ou courriel : votre application s'ouvre avec
              tout le message déjà rédigé. Un clic, et c'est envoyé. Aucun compte, aucun détour.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20" data-testid="contact-form-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 ring-1 ring-emerald-500/20 sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Comment préférez-vous nous joindre ?
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  data-testid="contact-mode-toggle-sms"
                  onClick={() => setMode("sms")}
                  className={`flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 font-display text-sm font-bold transition-all duration-200 sm:text-base ${
                    mode === "sms"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md shadow-emerald-500/10"
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <MessageSquare className="h-5 w-5" /> SMS instantané
                </button>
                <button
                  type="button"
                  data-testid="contact-mode-toggle-email"
                  onClick={() => setMode("email")}
                  className={`flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 font-display text-sm font-bold transition-all duration-200 sm:text-base ${
                    mode === "email"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md shadow-emerald-500/10"
                      : "border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  <Mail className="h-5 w-5" /> Courriel
                </button>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet *" htmlFor="cf-name">
                  <input
                    id="cf-name"
                    required
                    data-testid="contact-form-name-input"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Votre nom"
                    className={inputCls}
                  />
                </Field>
                <Field label="Téléphone" htmlFor="cf-phone">
                  <input
                    id="cf-phone"
                    type="tel"
                    data-testid="contact-form-phone-input"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="514 000 0000"
                    className={inputCls}
                  />
                </Field>
                <Field label="Ville / Adresse" htmlFor="cf-city">
                  <input
                    id="cf-city"
                    data-testid="contact-form-city-input"
                    value={form.city}
                    onChange={set("city")}
                    placeholder="Montréal, Laval…"
                    className={inputCls}
                  />
                </Field>
                <Field label="Type de service" htmlFor="cf-service">
                  <select
                    id="cf-service"
                    data-testid="contact-form-service-select"
                    value={form.service}
                    onChange={set("service")}
                    className={inputCls}
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    {preService && !SERVICE_OPTIONS.includes(form.service) && (
                      <option value={form.service}>{form.service}</option>
                    )}
                  </select>
                </Field>
                <Field label="Fréquence souhaitée" htmlFor="cf-frequency">
                  <select
                    id="cf-frequency"
                    data-testid="contact-form-frequency-select"
                    value={form.frequency}
                    onChange={set("frequency")}
                    className={inputCls}
                  >
                    {FREQUENCY_OPTIONS.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message / Détails" htmlFor="cf-message">
                    <textarea
                      id="cf-message"
                      rows={4}
                      data-testid="contact-form-message-input"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Parlez-nous de votre espace : superficie, besoins particuliers, disponibilités…"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                data-testid="contact-form-submit-button"
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-teal px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:bg-brand-tealdark hover:-translate-y-0.5 hover:shadow-xl sm:text-lg"
              >
                {mode === "sms" ? (
                  <>
                    <MessageSquare className="h-5 w-5" /> Ouvrir mes SMS avec le message prêt
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Ouvrir mon courriel avec le message prêt
                  </>
                )}
              </button>

              {sent && (
                <p
                  data-testid="contact-form-sent-notice"
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Votre application s'est ouverte — il ne reste qu'à appuyer sur « Envoyer ».
                </p>
              )}

              <p className="mt-4 text-center text-xs leading-relaxed text-slate-400">
                Aucune donnée n'est enregistrée sur ce site. Le message est composé directement dans
                votre application SMS ou courriel, prérempli et prêt à envoyer.
              </p>
            </form>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="dot-grid-dark rounded-[2rem] bg-brand-ink p-8 text-white">
                <h2 className="font-display text-2xl font-bold">Le plus rapide ? Le téléphone.</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Une question, une urgence, un devis : on décroche, on écoute, on planifie.
                </p>
                <div className="mt-6">
                  <BigCallButton testid="contact-call-button" className="w-full" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">Accès direct</h3>
                <div className="mt-5 space-y-3">
                  <a
                    href={`sms:${PHONE_TEL}?body=${encodeURIComponent("Bonjour LUSAVONZO, j'aimerais obtenir un devis.")}`}
                    data-testid="direct-sms-button"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
                      <MessageSquare className="h-5 w-5 text-emerald-600" />
                    </span>
                    <span>
                      <span className="block font-display font-bold text-slate-900">SMS</span>
                      <span className="text-sm text-slate-500">{PHONE_DISPLAY}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Demande de devis — LUSAVONZO")}`}
                    data-testid="direct-email-button"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100">
                      <Mail className="h-5 w-5 text-brand-teal" />
                    </span>
                    <span>
                      <span className="block font-display font-bold text-slate-900">Courriel</span>
                      <span className="text-sm text-slate-500">{EMAIL}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    data-testid="direct-call-button"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </span>
                    <span>
                      <span className="block font-display font-bold text-slate-900">Téléphone</span>
                      <span className="text-sm text-slate-500">{PHONE_DISPLAY}</span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHead
            align="center"
            overline="Sans attente"
            title="Réponse rapide, estimation claire, zéro pression"
            sub="Nous répondons en général dans l'heure pendant nos plages d'ouverture. Et le devis est toujours gratuit."
          />
        </div>
      </section>
    </main>
  );
}
