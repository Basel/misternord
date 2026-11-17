import React from 'react';
import { Cpu, UserCheck, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/content';

export const TechPhilosophySection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-100/60 dark:bg-neutral-900/40 border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
            De Kracht Achter misternord
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Mens + AI = het krachtigste resultaat.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            AI alleen bouwt oppervlakkige templates. Maar wanneer je geavanceerde AI combineert met diepgaande data-architectuur en jarenlange codeerervaring, ontstaat pure magie: professionele maatwerkcode in dagen in plaats van maanden.
          </p>
        </div>

        {/* Philosophy Core Equation Banner */}
        <div className="mb-14 rounded-2xl p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mx-auto lg:mx-0">
                <UserCheck className="w-6 h-6 text-neutral-900 dark:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                  1. Menselijke Inzicht & Ervaring
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Actief als Data Engineer & BI consultant sinds 2019. Gestructureerde architectuur, conversiegerichte logica en oog voor detail.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center shrink-0 mx-auto lg:mx-0 border border-emerald-200/50 dark:border-emerald-800/50">
                <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                  2. AI-Backed Methodologie
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  State-of-the-art AI-acceleratie (vibe coding) die repetitief handwerk automatiseert en duizenden euro’s aan overhead schrapt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shrink-0 mx-auto lg:mx-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 dark:text-white text-base">
                  3. Duizenden Euro’s Bespaard
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Geen log bureau met dure overhead. Jij krijgt een enterprise-waardige website voor slechts €399,- in plaats van €3.500+.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>De Technologieën Die Wij Gebruiken</span>
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Geen trage, onveilige WordPress plugins met maandelijkse licenties. Wij bouwen met de zuivere gouden standaard van het moderne web:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                  {tech.category}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {tech.name}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {tech.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Geoptimaliseerd & Schaalbaar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Box: 3 Examples of JS Libraries */}
        <div className="mt-8 rounded-xl p-6 bg-emerald-500/5 dark:bg-emerald-500/5 border border-emerald-500/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                  Waarom deze Javascript libraries het verschil maken
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  <strong>React</strong> voor modulaire interacties, <strong>Tailwind CSS</strong> voor 100% responsieve precisie, en <strong>Motion/Lucide</strong> voor intuïtieve visuele communicatie.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
              Clean code · Geen bloatware
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
