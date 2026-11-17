import React, { useState } from 'react';
import { ExternalLink, Search, Palette, Check, ArrowRight, Lightbulb } from 'lucide-react';
import { USEFUL_TOOLS } from '../data/content';

const CURATED_PALETTES = [
  {
    name: 'Nordic Slate & Mint (Aanbevolen)',
    colors: ['#0F172A', '#1E293B', '#10B981', '#F8FAFC', '#FFFFFF'],
  },
  {
    name: 'Groningen Cobalt & Amber',
    colors: ['#0A192F', '#1E3A8A', '#F59E0B', '#F1F5F9', '#FFFFFF'],
  },
  {
    name: 'Modern Minimal Obsidian',
    colors: ['#000000', '#171717', '#525252', '#E5E5E5', '#FFFFFF'],
  },
  {
    name: 'Clean Tech Indigo',
    colors: ['#1E1B4B', '#4338CA', '#06B6D4', '#F8FAFC', '#FFFFFF'],
  },
];

export const UsefulToolsSection: React.FC = () => {
  const [domainInput, setDomainInput] = useState('');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleSearchDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    const clean = domainInput.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    window.open(`https://instantdomainsearch.com/search/domains?q=${encodeURIComponent(clean)}`, '_blank');
  };

  return (
    <section id="tools" className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
            Gratis Hulpmiddelen Voor Jouw Website
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Handige Tools
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Bereid je website optimaal voor. Gebruik deze drie aanbevolen tools om direct je domein te controleren, het perfecte kleurenpalet samen te stellen en designinspiratie op te doen.
          </p>
        </div>

        {/* 3 Main Curated Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {USEFUL_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400">
                    {tool.tag}
                  </span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-950 dark:hover:text-white p-1"
                    title={`Open ${tool.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-2">
                  {tool.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {tool.description}
                </p>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{tool.tips}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <span>{tool.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tool 1: Instant Domain Lookup Launcher */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
              <Search className="w-4 h-4" />
              <span>Directe Domeincheck Via InstantDomainSearch</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Is jouw droomdomeinnaam nog vrij?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Onthoud: 1 jaar domeinregistratie (.nl of .com) zit <strong>al inbegrepen</strong> in ons €399 pakket! Type je bedrijfsnaam hieronder om realtime te controleren.
            </p>

            <form onSubmit={handleSearchDomain} className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Bijv. bakkerijgroningen of mijnadvies"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Check beschikbaarheid</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Interactive Tool 2: Color Palette Explorer with 1-Click Copy */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                <Palette className="w-4 h-4" />
                <span>Kleuren Inspiratie & Coolors Integratie</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                Kies je favoriete kleurenpalet
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Klik op een kleurcode om direct de HEX-waarde te kopiëren voor jouw briefing.
              </p>
            </div>

            <a
              href="https://coolors.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>Open Coolors.co generator</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CURATED_PALETTES.map((palette, pIdx) => (
              <div
                key={pIdx}
                className="rounded-2xl p-5 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80"
              >
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  <span>{palette.name}</span>
                  <span className="text-[10px] font-mono text-neutral-400">5 kleuren</span>
                </div>

                <div className="grid grid-cols-5 gap-2 rounded-xl overflow-hidden p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  {palette.colors.map((color, cIdx) => (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => handleCopyColor(color)}
                      className="group relative h-16 rounded-lg transition-transform hover:scale-105 focus:outline-none flex flex-col justify-end p-1.5 shadow-xs"
                      style={{ backgroundColor: color }}
                      title={`Klik om ${color} te kopiëren`}
                    >
                      <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-black/60 text-white truncate text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedHex === color ? 'Gekopieerd!' : color}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Klik op een swatch om te kopiëren</span>
                  {copiedHex && (
                    <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                      <Check className="w-3 h-3" />
                      Gekopieerd!
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
