/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechPhilosophySection } from './components/TechPhilosophySection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { UsefulToolsSection } from './components/UsefulToolsSection';
import { Footer } from './components/Footer';
import { TypeformModal } from './components/TypeformModal';
import { ActiveTab, ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('misternord_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('provenkpi');
  const [isTypeformOpen, setIsTypeformOpen] = useState<boolean>(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('misternord_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    setActiveTab('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      
      {/* Navigation Top Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenTypeform={() => setIsTypeformOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onOpenTypeform={() => setIsTypeformOpen(true)}
              setActiveTab={handleTabChange}
              onSelectProject={handleSelectProject}
            />
            <TechPhilosophySection />
            <PortfolioSection
              selectedProjectId={selectedProjectId}
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
            <PricingSection
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
            <AboutSection
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
            <UsefulToolsSection />
          </>
        )}

        {activeTab === 'portfolio' && (
          <div className="pt-4">
            <PortfolioSection
              selectedProjectId={selectedProjectId}
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="pt-4">
            <PricingSection
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-4">
            <AboutSection
              onOpenTypeform={() => setIsTypeformOpen(true)}
            />
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="pt-4">
            <UsefulToolsSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenTypeform={() => setIsTypeformOpen(true)}
      />

      {/* Typeform Modal */}
      <TypeformModal
        isOpen={isTypeformOpen}
        onClose={() => setIsTypeformOpen(false)}
      />

    </div>
  );
}
