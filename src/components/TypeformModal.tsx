import React from 'react';
import { X, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TypeformModal: React.FC<TypeformModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl h-[90vh] max-h-[800px] rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80">
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-900 dark:text-white text-base">
              Aanvraag misternord — €399 All-in
            </span>
            <span className="hidden sm:inline-block text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              Binnen 5 dagen live
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_INFO.typeformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors text-xs flex items-center gap-1 font-medium"
              title="Open direct in nieuw venster"
            >
              <span className="hidden sm:inline">Nieuw tabblad</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Sluit formulier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Guarantees Sub-header */}
        <div className="px-6 py-2 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/40 text-xs flex items-center justify-between flex-wrap gap-2 text-emerald-800 dark:text-emerald-300">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Klaar in 5 dagen · Inclusief 1 jaar hosting & domein</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Geen website, geen factuur!</span>
          </div>
        </div>

        {/* Typeform Iframe Container */}
        <div className="flex-1 w-full h-full bg-neutral-50 dark:bg-neutral-950">
          <iframe
            id="typeform-iframe"
            title="misternord Typeform Aanvraag"
            src={`${BUSINESS_INFO.typeformUrl}?typeform-embed=embed-widget`}
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>

        {/* Footer fallback */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs flex items-center justify-between text-neutral-500">
          <span>Persoonlijk contact met Basel · Groningen, Nederland</span>
          <a
            href={BUSINESS_INFO.typeformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-900 dark:hover:text-white"
          >
            Formulier laadt niet? Klik hier
          </a>
        </div>
      </div>
    </div>
  );
};
