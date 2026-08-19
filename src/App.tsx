import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { WikipediaInfobox } from './components/WikipediaInfobox';
import { TableOfContents } from './components/TableOfContents';
import { ArticleHero } from './components/ArticleHero';
import { AboutWiki } from './components/AboutWiki';
import { ExperienceWiki } from './components/ExperienceWiki';
import { ServicesWiki } from './components/ServicesWiki';
import { LawFirmProductHighlight } from './components/LawFirmProductHighlight';
import { LawFirmProductPage } from './components/LawFirmProductPage';
import { LucenaWebsiteProductPage } from './components/LucenaWebsiteProductPage';
import { CivicCausePage } from './components/CivicCausePage';
import { TudoFacilTaquaraPage } from './components/TudoFacilTaquaraPage';
import { DeevoFinanceirasWiki } from './components/DeevoFinanceirasWiki';
import { CivicPetitionsWiki } from './components/CivicPetitionsWiki';
import { ProjectsWiki } from './components/ProjectsWiki';
import { SkillsWikiTable } from './components/SkillsWikiTable';
import { DiagnosticSimulatorWiki } from './components/DiagnosticSimulatorWiki';
import { DifferentialsWiki } from './components/DifferentialsWiki';
import { ContactWiki } from './components/ContactWiki';
import { FooterWiki } from './components/FooterWiki';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PetitionModalPopup } from './components/PetitionModalPopup';

export function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentRoute, setCurrentRoute] = useState<'home' | 'produto-advocacia' | 'produto-site-lucena' | 'causa-canal-direto' | 'tudo-facil-taquara'>('home');

  // Handle URL changes, direct routes and browser back/forward buttons
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (
        path.includes('tudo-facil') ||
        hash.includes('tudo-facil') ||
        path.includes('taquara') ||
        hash.includes('taquara') ||
        hash.includes('tudo-facil-taquara')
      ) {
        setCurrentRoute('tudo-facil-taquara');
        setActiveSection('tudo-facil-taquara');
      } else if (
        path.includes('causa') || 
        hash.includes('causa') || 
        path.includes('lei-canal-direto') || 
        hash.includes('lei-canal-direto') || 
        path.includes('abaixo-assinado') || 
        hash.includes('abaixo-assinado') ||
        hash.includes('causa-canal-direto')
      ) {
        setCurrentRoute('causa-canal-direto');
        setActiveSection('causa-canal-direto');
      } else if (path.includes('lucena') || hash.includes('lucena') || path.includes('site-advocacia') || path.includes('site-advogacia') || hash.includes('site-advocacia')) {
        setCurrentRoute('produto-site-lucena');
        setActiveSection('site-advocacia-lucena');
      } else if (path.includes('/produto/advocacia') || hash.includes('produto-advocacia') || path.includes('/advocacia') || hash.includes('advocacia-plataforma')) {
        setCurrentRoute('produto-advocacia');
        setActiveSection('advocacia-plataforma');
      } else {
        setCurrentRoute('home');
        if (hash) {
          const cleanHash = hash.replace('#', '');
          setActiveSection(cleanHash || 'inicio');
        }
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const navigateToTudoFacil = () => {
    setCurrentRoute('tudo-facil-taquara');
    setActiveSection('tudo-facil-taquara');
    try {
      window.history.pushState({ route: 'tudo-facil-taquara' }, '', '/projeto/tudo-facil-taquara');
    } catch {
      window.location.hash = 'tudo-facil-taquara';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCivicCause = () => {
    setCurrentRoute('causa-canal-direto');
    setActiveSection('causa-canal-direto');
    try {
      window.history.pushState({ route: 'causa-canal-direto' }, '', '/causa/lei-canal-direto');
    } catch {
      window.location.hash = 'causa-canal-direto';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = () => {
    setCurrentRoute('produto-advocacia');
    setActiveSection('advocacia-plataforma');
    try {
      window.history.pushState({ route: 'produto-advocacia' }, '', '/produto/advocacia');
    } catch {
      window.location.hash = 'produto-advocacia';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLucenaWebsite = () => {
    setCurrentRoute('produto-site-lucena');
    setActiveSection('site-advocacia-lucena');
    try {
      window.history.pushState({ route: 'produto-site-lucena' }, '', '/produtos/site-advocacia/lucena-associados');
    } catch {
      window.location.hash = 'site-advocacia-lucena';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId: string = 'inicio') => {
    setCurrentRoute('home');
    setActiveSection(sectionId);
    try {
      window.history.pushState({ route: 'home' }, '', '/');
    } catch {
      window.location.hash = sectionId;
    }

    if (sectionId && sectionId !== 'inicio') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'tudo-facil-taquara' || sectionId === 'tudo-facil' || sectionId === 'taquara' || sectionId === 'projeto-taquara') {
      navigateToTudoFacil();
      return;
    }

    if (sectionId === 'causa-canal-direto' || sectionId === 'lei-canal-direto' || sectionId === 'abaixo-assinado') {
      navigateToCivicCause();
      return;
    }

    if (sectionId === 'site-advocacia-lucena' || sectionId === 'lucena' || sectionId === 'site-advocacia') {
      navigateToLucenaWebsite();
      return;
    }

    if (sectionId === 'advocacia-plataforma' || sectionId === 'produto-advocacia') {
      navigateToProduct();
      return;
    }

    if (currentRoute !== 'home') {
      navigateToHome(sectionId);
      return;
    }

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
            
            {currentRoute === 'tudo-facil-taquara' ? (
              /* Dedicated Tudo Fácil Taquara Project & Bill Draft Page */
              <TudoFacilTaquaraPage onBackToHome={() => navigateToHome('projetos-lei')} />
            ) : currentRoute === 'causa-canal-direto' ? (
              /* Dedicated Civic Initiative & Legislative Proposal Page */
              <CivicCausePage onBackToHome={() => navigateToHome('projetos-lei')} />
            ) : currentRoute === 'produto-site-lucena' ? (
              /* Dedicated Law Firm Website Sales & Presentation Page (Lucena & Associados) */
              <LucenaWebsiteProductPage onBackToHome={() => navigateToHome('servicos')} />
            ) : currentRoute === 'produto-advocacia' ? (
              /* Dedicated Law Firm Legal Tech Product Page */
              <LawFirmProductPage onBackToHome={() => navigateToHome('advocacia-plataforma')} />
            ) : (
              /* Standard Home Article Content */
              <>
                {/* Lead & README Header */}
                <ArticleHero onNavigate={handleNavigate} />

                {/* Wikipedia Table of Contents */}
                <TableOfContents onNavigate={handleNavigate} />

                {/* 1. Resumo Profissional e Biografia */}
                <AboutWiki />

                {/* 2. Experiência Profissional & Formação */}
                <ExperienceWiki />

                {/* 3. Serviços e Soluções */}
                <ServicesWiki onNavigateToLucenaWebsite={navigateToLucenaWebsite} />

                {/* 3.5 Destaque Comercial/Institucional: Plataforma para Escritórios de Advocacia */}
                <LawFirmProductHighlight onOpenProductPage={navigateToProduct} />

                {/* 4. DEEVO Soluções Financeiras (Atuação PJ) */}
                <DeevoFinanceirasWiki />

                {/* 5. Projetos de Lei, Abaixo-Assinados & Causas Cidadãs */}
                <CivicPetitionsWiki 
                  onNavigateToCivicCause={navigateToCivicCause}
                  onNavigateToTudoFacil={navigateToTudoFacil}
                />

                {/* 6. Repositórios e Projetos */}
                <ProjectsWiki />

                {/* 7. Competências & Matriz Técnica */}
                <SkillsWikiTable />

                {/* 8. Simulador Interativo */}
                <DiagnosticSimulatorWiki />

                {/* 9. Diferenciais & Metodologia */}
                <DifferentialsWiki />

                {/* 10. Contato e Conexões */}
                <ContactWiki />
              </>
            )}

          </article>

          {/* Wikipedia Infobox (Right on Desktop, Top-aligned & Sticky on scroll) */}
          <div className="w-full lg:w-[320px] xl:w-[340px] shrink-0 order-first lg:order-last lg:sticky lg:top-24 lg:self-start z-20">
            <WikipediaInfobox />
          </div>

        </div>

      </main>

      {/* Wikipedia / GitHub Footer */}
      <FooterWiki onNavigate={handleNavigate} />

      {/* Direct Floating WhatsApp Contact Button */}
      <WhatsAppFloatingButton />

      {/* Closable Civic Petition Popup */}
      <PetitionModalPopup 
        onNavigateToSection={handleNavigate} 
        onNavigateToCivicCause={navigateToCivicCause}
      />
    </div>
  );
}

export default App;


