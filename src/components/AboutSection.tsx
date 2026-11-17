import React from 'react';
import { Compass, Database, Terminal, Languages, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenTypeform: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTypeform }) => {
  return (
    <section id="over-ons" className="py-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
            Achter de Schermen
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Over misternord (Mr. North)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Geen anoniem bureau met gladde accountmanagers, maar directe communicatie met een ervaren data- en software engineer uit Groningen.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            
            <div className="rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2 mb-3">
                <Compass className="w-5 h-5 text-emerald-500" />
                <span>Waarom de naam "misternord"?</span>
              </h3>
              <p>
                De naam is een directe weerspiegeling van mijn wortels en levenspad: <strong>ik ben geboren in het noorden en heb ook het grootste deel van mijn volwassen leven in het noorden doorgebracht (Groningen)</strong>. De noordelijke nuchterheid zit in mijn DNA: heldere afspraken, geen wollige verkooppraatjes en afspraak is afspraak.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-3">
                Hoi, ik ben Basel
              </h3>
              <p>
                Sinds <strong>2019 ben ik actief als Data Engineer & Business Intelligence (BI) consultant</strong> en gepassioneerd <strong>vibe coder</strong>. Ik geniet er enorm van om complexe gegevensstructuren, geavanceerde algoritmes en webtechnologieën om te toveren tot snelle, elegante digitale oplossingen.
              </p>
              <p className="mt-4">
                In de loop der jaren zag ik hoe ondernemers en mkb'ers vaak duizenden euro's kwijt waren aan trage webbureaus die standaard WordPress-thema’s leverden vol overbodige plugins en veiligheidsrisico’s. Dat kan én moet anders.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
              <p className="font-semibold text-neutral-900 dark:text-white italic">
                “Mens + AI = het krachtigste resultaat.”
              </p>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                AI is een ongelooflijke versneller, maar zonder diepgaand begrip van datastructuren, codekwaliteit en gebruikerservaring blijft het oppervlakkig. De combinatie van mijn data-engineering achtergrond met de modernste AI-tools stelt mij in staat om een volwaardige website te bouwen in slechts 5 dagen voor €399,-.
              </p>
            </div>

            {/* Language Proficiency Badge */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white mb-2">
                <Languages className="w-4 h-4 text-emerald-500" />
                <span>Persoonlijke Communicatie in Drie Talen</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {BUSINESS_INFO.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Ik spreek vloeiend Nederlands, Engels en Arabisch. Je kunt altijd in de taal communiceren waarin jij je het meest comfortabel voelt.
              </p>
            </div>

          </div>

          {/* Right Column: Profile Specs & Fast Facts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl p-6 sm:p-8 bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-3 pb-6 border-b border-neutral-800">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center font-bold text-xl text-emerald-400 font-mono">
                  B
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Basel</h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    Data Engineer / BI Consultant & Vibe Coder
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-xs font-mono">
                <div className="flex items-start justify-between gap-4 py-2 border-b border-neutral-800/80">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Locatie:
                  </span>
                  <span className="text-white text-right">Groningen, Nederland</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-neutral-800/80">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    Ervaring:
                  </span>
                  <span className="text-white text-right">Sinds 2019 actief</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-neutral-800/80">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    Specialisme:
                  </span>
                  <span className="text-white text-right">HTML5, CSS, JS, AI Vibe Coding</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-neutral-800/80">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Onderdeel van:
                  </span>
                  <span className="text-white text-right">MiVidasVin</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2">
                  <span className="text-neutral-400">KVK-nummer:</span>
                  <span className="text-emerald-400 font-bold">{BUSINESS_INFO.kvk}</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={onOpenTypeform}
                  className="w-full py-3 px-4 rounded-xl bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Neem direct contact op met Basel</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-950" />
                </button>
              </div>

            </div>

            {/* Quick Guarantees Box */}
            <div className="rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2.5">
              <h5 className="font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono text-[11px]">
                Waarom kiezen voor misternord?
              </h5>
              <p>✓ 1 vast aanspreekpunt (geen ticketing systemen of wachttijden).</p>
              <p>✓ Geen verrassingen achteraf: €399,- inclusief hosting en domein.</p>
              <p>✓ No website, no invoice: je loopt nul financieel risico.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
