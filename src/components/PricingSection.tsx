import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowUpRight, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content';

interface PricingSectionProps {
  onOpenTypeform: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTypeform }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="tarieven" className="py-20 bg-neutral-100/60 dark:bg-neutral-900/40 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
            Transparante & Eerlijke Prijzen
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Eén helder tarief van €399,-
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Geen verborgen kosten, geen ondoorzichtige urenregistraties. Inclusief 1 jaar domein en hosting, met onze 5-dagen live garantie.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Card: €399 Website Pakket (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
              Meest Gekozen
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white">
                  Compleet AI-Cocreated Website Pakket
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Ideaal voor zzp’ers, mkb, consultants, startups en lokale ondernemers.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <div className="flex items-baseline sm:justify-end gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-neutral-950 dark:text-white font-mono tabular-nums">
                    €399
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    (excl. btw)
                  </span>
                </div>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block">
                  Eenmalige investering
                </span>
              </div>
            </div>

            {/* Inclusions 2-Column List */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>1 heel jaar domeinnaam</strong> inbegrepen (.nl of .com)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>1 heel jaar snelle hosting</strong> op wereldklasse cloud</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>100% Responsive design</strong> (mobiel, tablet en desktop)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Binnen 5 dagen live</strong> op jouw domein</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Geen website, geen factuur</strong> belofte</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>HTML5, CSS & Modern JS</strong> schone code (geen logge plugins)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Contactformulier & CTA</strong> gekoppeld aan jouw e-mail</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Google SEO basisinrichting</strong> & SSL-veiligheidscertificaat</span>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% tevredenheidsgarantie vooraf</span>
              </div>

              <button
                type="button"
                onClick={onOpenTypeform}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
              >
                <span>Claim je website voor €399</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Secondary Card: Maandelijks Onderhoudspakket (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 font-semibold mb-3">
                Zorgeloos Beheer
              </div>

              <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                Maandelijks Onderhoudspakket
              </h3>

              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Houd je website altijd veilig, up-to-date en razendsnel zonder dat je er zelf omkijken naar hebt.
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-neutral-950 dark:text-white font-mono tabular-nums">
                  €29
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  /mnd (excl. btw)
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Maandelijkse security & software updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Uptime monitoring & snelle storingshulp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Kleine tekst- en afbeeldingswijzigingen inbegrepen</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Maandelijks opzegbaar (geen wurgcontract)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-3 text-center">
                Optioneel toe te voegen na oplevering
              </p>
              <button
                type="button"
                onClick={onOpenTypeform}
                className="w-full py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Vraag onderhoudsdetails aan
              </button>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-500" />
              <span>Veelgestelde Vragen</span>
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-neutral-900 dark:text-white text-sm hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg font-mono text-neutral-400">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
