import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { ActiveTab } from '../types';

interface HeroSectionProps {
  onOpenTypeform: () => void;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectProject: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTypeform,
  setActiveTab,
  onSelectProject,
}) => {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* Background layer with radial rays */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 nord-rays-light dark:nord-rays-dark opacity-80 transition-colors" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Main Hero Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] text-balance">
            Professionele AI-cocreated websites voor slechts{' '}
            <span className="relative inline-block text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/30 decoration-wavy decoration-2">
              €399
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Inclusief 1 jaar domeinregistratie en snelle cloud hosting. Onze slimme AI-gedreven methodologie bespaart je{' '}
            <strong className="font-semibold text-neutral-900 dark:text-white">duizenden euro’s</strong> ten opzichte van traditionele webbureaus.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenTypeform}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
            >
              <span>Vraag je website aan</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm focus:outline-none"
            >
              <span>Bekijk ons werk</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Binnen 5 dagen live</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-medium text-neutral-900 dark:text-neutral-200">Geen website, geen factuur!</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-500" />
              <span>1 jaar domein + hosting inbegrepen</span>
            </div>
          </div>
        </div>

        {/* Floating Perspective Preview Cards Showcase */}
        <div className="mt-16 md:mt-20 relative">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-mono">
              Recente AI-Cocreated Producties van misternord
            </p>
          </div>

          {/* Symmetrical Floating Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProject(item.id);
                  setActiveTab('portfolio');
                }}
                className={`group cursor-pointer rounded-2xl p-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 1 ? 'md:-translate-y-4 md:border-neutral-400 dark:md:border-neutral-700 shadow-md' : ''
                }`}
              >
                <div>
                  {/* Card Preview Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-sm text-[11px] font-mono text-white flex items-center gap-1.5">
                      <span>Live project</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
                    <span>{item.category}</span>
                    <span className="font-mono text-[11px]">{item.displayUrl}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {item.metrics}
                  </span>
                  <span className="text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white flex items-center gap-1 font-medium transition-colors">
                    Bekijk details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://form.typeform.com/to/kKCMDG8v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Wil jij ook een supersnelle website binnen 5 dagen? Klik hier om te starten</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
