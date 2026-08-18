import React, { useState } from 'react';
import { Header } from './components/Header';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { WikipediaInfobox } from './components/WikipediaInfobox';
import { TableOfContents } from './components/TableOfContents';
import { ArticleHero } from './components/ArticleHero';
import { AboutWiki } from './components/AboutWiki';
import { ExperienceWiki } from './components/ExperienceWiki';
import { ServicesWiki } from './components/ServicesWiki';
import { DeevoFinanceirasWiki } from './components/DeevoFinanceirasWiki';
import { ProjectsWiki } from './components/ProjectsWiki';
import { SkillsWikiTable } from './components/SkillsWikiTable';
import { DiagnosticSimulatorWiki } from './components/DiagnosticSimulatorWiki';
import { DifferentialsWiki } from './components/DifferentialsWiki';
import { ContactWiki } from './components/ContactWiki';
import { FooterWiki } from './components/FooterWiki';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8fa] text-[#1f2328] flex flex-col selection:bg-[#ddf4ff] selection:text-[#0969da]">
      {/* PWA Multi-Platform Install Banner */}
      <PWAInstallBanner />

      {/* GitHub / Wikipedia Unified Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Layout Wrapper */}
      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Article & Infobox Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Document Body (Left on Desktop) */}
          <article className="grow min-w-0 w-full bg-white p-6 sm:p-8 rounded-md border border-[#d0d7de] shadow-2xs space-y-10">
            
            {/* Lead & README Header */}
            <ArticleHero onNavigate={handleNavigate} />

            {/* Wikipedia Table of Contents */}
            <TableOfContents onNavigate={handleNavigate} />

            {/* 1. Resumo Profissional e Biografia */}
            <AboutWiki />

            {/* 2. Experiência Profissional & Formação */}
            <ExperienceWiki />

            {/* 3. Serviços e Soluções */}
            <ServicesWiki />

            {/* 4. DEEVO Soluções Financeiras (Atuação PJ) */}
            <DeevoFinanceirasWiki />

            {/* 5. Repositórios e Projetos */}
            <ProjectsWiki />

            {/* 5. Competências & Matriz Técnica */}
            <SkillsWikiTable />

            {/* 6. Simulador Interativo */}
            <DiagnosticSimulatorWiki />

            {/* 7. Diferenciais & Metodologia */}
            <DifferentialsWiki />

            {/* 8. Contato e Conexões */}
            <ContactWiki />

          </article>

          {/* Wikipedia Infobox (Right on Desktop, Top-aligned & Sticky on scroll) */}
          <div className="w-full lg:w-auto shrink-0 order-first lg:order-last lg:sticky lg:top-24">
            <WikipediaInfobox />
          </div>

        </div>

      </main>

      {/* Wikipedia / GitHub Footer */}
      <FooterWiki onNavigate={handleNavigate} />

      {/* Direct Floating WhatsApp Contact Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
