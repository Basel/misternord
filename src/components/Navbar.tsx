import React from 'react';
import { Sun, Moon, ArrowUpRight, Compass } from 'lucide-react';
import { ActiveTab, ThemeMode } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenTypeform: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  onOpenTypeform,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center font-bold transition-transform group-hover:scale-105">
            <Compass className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          </div>
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap">
            misternord
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single Line, Clean) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <button
            onClick={() => setActiveTab('home')}
            className={`whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white py-1 ${
              activeTab === 'home'
                ? 'text-neutral-950 dark:text-white border-b-2 border-neutral-900 dark:border-white font-semibold'
                : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white py-1 ${
              activeTab === 'portfolio'
                ? 'text-neutral-950 dark:text-white border-b-2 border-neutral-900 dark:border-white font-semibold'
                : ''
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white py-1 ${
              activeTab === 'pricing'
                ? 'text-neutral-950 dark:text-white border-b-2 border-neutral-900 dark:border-white font-semibold'
                : ''
            }`}
          >
            Tarieven (€399)
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white py-1 ${
              activeTab === 'about'
                ? 'text-neutral-950 dark:text-white border-b-2 border-neutral-900 dark:border-white font-semibold'
                : ''
            }`}
          >
            Over misternord
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`whitespace-nowrap transition-colors hover:text-neutral-950 dark:hover:text-white py-1 ${
              activeTab === 'tools'
                ? 'text-neutral-950 dark:text-white border-b-2 border-neutral-900 dark:border-white font-semibold'
                : ''
            }`}
          >
            Handige Tools
          </button>
        </nav>

        {/* Zone 3: Dark/Light Mode + 1 Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Schakel tussen lichte en donkere modus"
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors focus:outline-none"
            title={theme === 'dark' ? 'Schakel naar lichte modus' : 'Schakel naar donkere modus'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenTypeform}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Start je website</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around px-2 py-2 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/90 dark:bg-neutral-950/90 text-xs font-medium text-neutral-600 dark:text-neutral-300 overflow-x-auto">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'home' ? 'text-neutral-950 dark:text-white font-bold bg-neutral-200/60 dark:bg-neutral-800' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'portfolio' ? 'text-neutral-950 dark:text-white font-bold bg-neutral-200/60 dark:bg-neutral-800' : ''}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => setActiveTab('pricing')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'pricing' ? 'text-neutral-950 dark:text-white font-bold bg-neutral-200/60 dark:bg-neutral-800' : ''}`}
        >
          €399 All-in
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'about' ? 'text-neutral-950 dark:text-white font-bold bg-neutral-200/60 dark:bg-neutral-800' : ''}`}
        >
          Over
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'tools' ? 'text-neutral-950 dark:text-white font-bold bg-neutral-200/60 dark:bg-neutral-800' : ''}`}
        >
          Tools
        </button>
      </div>
    </header>
  );
};
