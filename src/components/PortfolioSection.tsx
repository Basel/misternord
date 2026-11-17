import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';

interface PortfolioSectionProps {
  selectedProjectId?: string;
  onOpenTypeform: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  selectedProjectId,
  onOpenTypeform,
}) => {
  const [activeItem, setActiveItem] = useState<string>(
    selectedProjectId || PORTFOLIO_ITEMS[0].id
  );

  useEffect(() => {
    if (selectedProjectId) {
      setActiveItem(selectedProjectId);
    }
  }, [selectedProjectId]);

  const currentProject = PORTFOLIO_ITEMS.find((p) => p.id === activeItem) || PORTFOLIO_ITEMS[0];

  return (
    <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-semibold mb-2">
            Praktijkvoorbeelden & Ervaring
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Recent werk van misternord
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            Bekijk voorbeelden van moderne, responsieve webapplicaties en platforms die we hebben gerealiseerd. Elk project combineert intuïtief design, schone code en razendsnelle laadtijden.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-neutral-200/70 dark:bg-neutral-900 rounded-xl max-w-xl">
          {PORTFOLIO_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex-1 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeItem === item.id
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Visual Preview (Col 7) */}
            <div className="lg:col-span-7 relative bg-neutral-100 dark:bg-neutral-950 p-6 sm:p-8 flex flex-col justify-center">
              <div className="relative group rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 dark:border-neutral-800/80">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top transform group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-950 font-semibold text-xs shadow-lg hover:bg-neutral-100"
                  >
                    <span>Bezoek live website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Browser mockup bar below image */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>SSL Beveiligd · Cloud Hosting</span>
                </div>
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 flex items-center gap-1 transition-colors"
                >
                  <span>https://{currentProject.displayUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Project Details (Col 5) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:pl-0 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium mb-2">
                  <span>{currentProject.category}</span>
                  <span>·</span>
                  <span>{currentProject.metrics}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                  {currentProject.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {currentProject.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tech Stack List */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-2">
                    Toegepaste Technologieën
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Inclusief 1 jaar snelle hosting & domeinnaam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Gereed en opgeleverd binnen 5 werkdagen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Volledig geoptimaliseerd voor zoekmachines (SEO)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center gap-3">
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
                >
                  <span>Open {currentProject.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={onOpenTypeform}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Bouw vergelijkbare site voor €399</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Quick Grid of All 3 Portfolio Items for direct side-by-side access */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-5 border transition-all ${
                activeItem === item.id
                  ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-900 shadow-sm'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.displayUrl}
                </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1"
                  title={`Open ${item.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h4 className="font-bold text-neutral-900 dark:text-white text-base">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                {item.tagline}
              </p>
              <button
                onClick={() => setActiveItem(item.id)}
                className="mt-4 text-xs font-semibold text-neutral-900 dark:text-white hover:underline flex items-center gap-1"
              >
                <span>Toon projectweergave</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
