import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  ArrowUp, 
  MapPin, 
  Heart,
  FileText
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface FooterWikiProps {
  onNavigate: (sectionId: string) => void;
}

export const FooterWiki: React.FC<FooterWikiProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f6f8fa] border-t border-[#d0d7de] mt-16 text-xs text-[#656d76]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Vini Amaral Info */}
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1f2328]">
              <span>{PERSONAL_DATA.name}</span>
            </div>
            <p className="text-xs text-[#656d76] leading-relaxed max-w-md">
              {PERSONAL_DATA.objective} • Suporte Operacional, Controladoria &amp; Automação com Inteligência Artificial em Taquara - RS.
            </p>
            <p className="text-[11px] text-[#656d76] flex items-center gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#0969da]" />
              <span>{PERSONAL_DATA.address}</span>
            </p>
          </div>

          {/* Col 2: Navegação Rápida */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#1f2328] uppercase text-[11px] tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#sobre" onClick={() => onNavigate('sobre')} className="text-[#0969da] hover:underline">
                  1. Resumo Profissional
                </a>
              </li>
              <li>
                <a href="#experiencia" onClick={() => onNavigate('experiencia')} className="text-[#0969da] hover:underline">
                  2. Experiência &amp; Formação
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={() => onNavigate('servicos')} className="text-[#0969da] hover:underline">
                  3. Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={() => onNavigate('projetos')} className="text-[#0969da] hover:underline">
                  4. Projetos &amp; Repositórios
                </a>
              </li>
              <li>
                <a href="#competencias" onClick={() => onNavigate('competencias')} className="text-[#0969da] hover:underline">
                  5. Competências
                </a>
              </li>
              <li>
                <a href="#contato" onClick={() => onNavigate('contato')} className="text-[#0969da] hover:underline">
                  6. Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Conexões Diretas */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#1f2328] uppercase text-[11px] tracking-wider">
              Conexões
            </h4>
            <div className="space-y-2">
              <a
                href={PERSONAL_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#1a7f37] font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {PERSONAL_DATA.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="flex items-center gap-1.5 text-xs text-[#0969da] hover:underline"
              >
                <Mail className="w-4 h-4 text-[#656d76]" />
                <span>{PERSONAL_DATA.email}</span>
              </a>

              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#1f2328] hover:text-[#0969da]"
              >
                <Github className="w-4 h-4" />
                <span>github.com/viniamaral2026-cpu</span>
              </a>

              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#0a66c2] hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn /dev-vini-amaral</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#d0d7de] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-1 text-[#656d76]">
            <span>© {new Date().getFullYear()} Vini Amaral. Currículo e Portfólio Profissional.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-[#d0d7de] bg-white hover:bg-[#eaeef2] text-[#1f2328] font-medium transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
