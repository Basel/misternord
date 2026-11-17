import React from 'react';
import { Compass, Languages, MapPin, Building2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenTypeform: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenTypeform }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:bg-black border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Mission (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-neutral-950 flex items-center justify-center font-bold">
                <Compass className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                misternord
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Professionele AI-cocreated websites voor ondernemers en zzp’ers voor slechts €399,-. Inclusief 1 jaar domein en hosting, 5 dagen oplevergarantie: geen website, geen factuur.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2">
                <Languages className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-neutral-200">Ik spreek vloeiend:</span>
                <span className="text-white font-medium">Nederlands, Engels en Arabisch</span>
              </div>
              <div className="text-[11px] text-neutral-500 pl-5.5">
                (Dutch · English · العربية)
              </div>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-mono font-semibold">
              Navigatie
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Portfolio (ProvenKPI, Plotstudio, Planly)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('pricing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Tarieven & Pakketten (€399)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Over misternord & Basel
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('tools');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Handige Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Legal (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-mono font-semibold">
              Bedrijfsgegevens & Locatie
            </h4>
            
            <div className="rounded-xl p-4 bg-neutral-800/60 border border-neutral-700/60 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Onderdeel van <strong>{BUSINESS_INFO.parentCompany}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-neutral-400">KVK-nummer:</span>
                <span className="text-white font-mono font-bold">{BUSINESS_INFO.kvk}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Adres: <strong>{BUSINESS_INFO.location}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTypeform}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Direct contact opnemen (Typeform)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} misternord · Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Mens + AI = het krachtigste resultaat.</span>
            <span>·</span>
            <span>Groningen, Nederland</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
