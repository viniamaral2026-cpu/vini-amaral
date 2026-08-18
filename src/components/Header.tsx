import React, { useState } from 'react';
import { 
  Terminal, 
  Search, 
  MessageCircle, 
  BookOpen, 
  Code2, 
  FolderGit2, 
  Layers, 
  Mail, 
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Share2,
  FileText,
  Briefcase,
  Github,
  Check
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface HeaderWikiProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderWikiProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const navTabs = [
    { id: 'inicio', label: 'README.md', icon: FileText },
    { id: 'sobre', label: '1. Resumo Profissional', icon: BookOpen },
    { id: 'experiencia', label: '2. Experiência & Formação', icon: Briefcase },
    { id: 'servicos', label: '3. Serviços', icon: Layers },
    { id: 'projetos', label: '4. Repositórios & Projetos', icon: FolderGit2 },
    { id: 'competencias', label: '5. Competências', icon: Code2 },
    { id: 'diagnostico', label: '6. Simulador', icon: Sparkles },
    { id: 'contato', label: '7. Contato', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#d0d7de] shadow-xs">
      {/* Top GitHub/Wikipedia Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          
          {/* Left: Breadcrumbs Repo Style */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#f6f8fa] border border-[#d0d7de] flex items-center justify-center text-[#1f2328] font-bold text-xs shrink-0">
              <Terminal className="w-4 h-4 text-[#0969da]" />
            </div>

            <div className="flex items-center gap-1.5 text-sm sm:text-base font-semibold truncate">
              <a 
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0969da] hover:underline font-mono text-xs sm:text-sm"
              >
                viniamaral2026-cpu
              </a>
              <span className="text-[#656d76]">/</span>
              <a 
                href="#inicio" 
                onClick={() => onNavigate('inicio')}
                className="text-[#1f2328] hover:text-[#0969da] font-mono text-xs sm:text-sm font-bold truncate"
              >
                curriculo-portfolio
              </a>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de] ml-1">
                Public CV
              </span>
            </div>
          </div>

          {/* Center/Right: Article Toolbar Actions & Search */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#656d76]">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button 
              type="button" 
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] transition-colors"
              title="Copiar link"
            >
              {copiedLink ? <Check className="w-3 h-3 text-[#1a7f37]" /> : <Share2 className="w-3 h-3 text-[#656d76]" />}
              <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>

          {/* Right Action: GitHub Green WhatsApp CTA */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-wiki-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: (51) 98144-6019</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] text-[#1f2328]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* GitHub Repository / Navigation Tabs Bar */}
      <div className="bg-[#f6f8fa] border-t border-[#d0d7de] px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-1 py-1 text-xs font-medium">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => onNavigate(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#ffffff] text-[#1f2328] font-semibold border border-[#d0d7de] shadow-2xs'
                    : 'text-[#656d76] hover:text-[#1f2328] hover:bg-[#eaeef2]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0969da]' : 'text-[#656d76]'}`} />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#d0d7de] px-4 py-3 space-y-1">
          {navTabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => {
                onNavigate(tab.id);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-xs font-medium text-[#1f2328] hover:bg-[#f6f8fa] rounded-md"
            >
              {tab.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
