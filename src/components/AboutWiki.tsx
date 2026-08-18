import React from 'react';
import { 
  CheckCircle2, 
  Brain, 
  Sparkles, 
  FileText, 
  Search, 
  Cpu, 
  FolderArchive, 
  Keyboard, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_DATA, RESUME_COMPETENCIES } from '../data/portfolioData';

export const AboutWiki: React.FC = () => {
  return (
    <section id="sobre" className="space-y-6 scroll-mt-20">
      {/* Wikipedia Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>1. Resumo Profissional e Biografia</span>
          <span className="text-xs font-mono text-[#656d76]">[editar resumo]</span>
        </h2>
      </div>

      {/* Main Narrative - Full CV Text */}
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#1f2328]">
        <p className="wiki-serif">
          {PERSONAL_DATA.summary}
        </p>

        {/* Highlight Callout Box (GitHub Note block style) */}
        <div className="p-4 rounded-md border border-[#54aeff] bg-[#ddf4ff] text-[#1f2328] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-sm text-[#0969da]">
            <Brain className="w-4 h-4 text-[#0969da]" />
            <span>Objetivo Profissional Declarado</span>
          </div>
          <p className="text-xs sm:text-sm text-[#1f2328] leading-normal font-medium">
            "{PERSONAL_DATA.objective}" — Atuação com postura resolutiva, autonomia para destravar gargalos diários e aplicação contínua de tecnologia de ponta para elevar a produtividade da equipe.
          </p>
        </div>
      </div>

      {/* Subsection 1.1: Competências Chave do Currículo */}
      <div id="sobre-pilares" className="space-y-3 pt-2">
        <h3 className="text-base sm:text-lg font-semibold text-[#1f2328] wiki-serif border-b border-[#eaeef2] pb-1">
          1.1 Competências Essenciais &amp; Domínio Técnico
        </h3>
        
        <p className="text-xs sm:text-sm text-[#656d76]">
          Abaixo estão as competências práticas comprovadas na rotina de trabalho e projetos de Vini Amaral:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {RESUME_COMPETENCIES.map((comp, idx) => {
            const icons = [FolderArchive, Search, Sparkles, Keyboard, Cpu, Clock];
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="p-3 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#ffffff] hover:border-[#0969da] transition-all flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded bg-[#ffffff] border border-[#d0d7de] flex items-center justify-center shrink-0 text-[#0969da] shadow-2xs mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-[#1f2328] font-medium leading-snug">
                  {comp}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
