import React, { useState } from 'react';
import { 
  Terminal, 
  MessageCircle, 
  Linkedin, 
  Mail, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  FileText,
  Building2,
  Calendar
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface ArticleHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div id="inicio" className="pb-6 border-b border-[#d0d7de] space-y-4">
      {/* Top Notice Banner (Wikipedia-style neutral disambiguation header) */}
      <div className="p-3 bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-xs text-[#656d76] flex items-start gap-2.5">
        <FileText className="w-4 h-4 text-[#0969da] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold text-[#1f2328]">Currículo e Portfólio Profissional: </span>
          Este documento apresenta a trajetória, competências operacionais, projetos e canais de contato de{' '}
          <strong className="text-[#1f2328]">Vini Amaral</strong>. Para propostas e contratação, utilize os canais diretos abaixo.
        </div>
      </div>

      {/* Main Title / Article Heading */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-normal text-[#1f2328] wiki-serif tracking-tight border-b-0 pb-0">
            {PERSONAL_DATA.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1 font-mono flex flex-wrap items-center gap-2">
            <span>[ˈvi.ni a.maˈɾaw]</span>
            <span>•</span>
            <span className="text-[#0969da] font-medium">{PERSONAL_DATA.objective}</span>
          </p>
        </div>

        {/* Quick action bar */}
        <div className="flex items-center gap-2 pt-2 sm:pt-0 shrink-0">
          <a
            href="/curriculo-vini-amaral.pdf"
            download="Curriculo-Marcos-Vinicius-Vini-Amaral.pdf"
            id="hero-download-pdf-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-xs font-semibold text-[#1f2328] shadow-2xs transition-colors"
            title="Baixar arquivo PDF do currículo"
          >
            <Download className="w-3.5 h-3.5 text-[#0969da]" />
            <span>Baixar Currículo (PDF)</span>
          </a>

          <a
            href="/curriculo.html"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-view-cv-html-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-xs font-semibold text-[#0969da] shadow-2xs transition-colors"
            title="Abrir versão formatada para impressão"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Ver / Imprimir CV</span>
          </a>
        </div>
      </div>

      {/* Wikipedia Lead Paragraph */}
      <p className="text-base leading-relaxed text-[#1f2328] wiki-serif">
        <strong className="font-bold text-[#1f2328]">{PERSONAL_DATA.name}</strong> é um profissional autodidata brasileiro com forte domínio tecnológico, com atuação voltada para{' '}
        <span className="text-[#0969da] font-semibold">Cargos Operacionais, Administrativos e de Controladoria Jurídica</span>. Destaca-se pela união entre raciocínio analítico, resolução prática de problemas e uso estratégico de <strong className="font-semibold text-[#1f2328]">Inteligência Artificial</strong> e ferramentas digitais para acelerar pesquisas, redigir e revisar documentos e estruturar fluxos complexos de informação.
      </p>

      {/* GitHub Repo Badges & Key Metadata Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]">
          <Sparkles className="w-3 h-3 text-[#0969da]" />
          Disponível: Home Office &amp; Presencial
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
          WhatsApp: (51) 98144-6019
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#f6f8fa] text-[#1f2328] border border-[#d0d7de]">
          <MapPin className="w-3 h-3 text-[#656d76]" />
          Atuação Remota &amp; Nacional
        </span>

        <a
          href={PERSONAL_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#0969da] border border-[#d0d7de] font-mono transition-colors"
        >
          <Github className="w-3 h-3 text-[#1f2328]" />
          github.com/viniamaral2026-cpu
        </a>
      </div>

      {/* Direct Call to Action Ribbon */}
      <div className="p-3 bg-[#f6f8fa] border border-[#d0d7de] rounded-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="text-xs text-[#1f2328]">
          <span className="font-semibold text-[#1f2328]">Pronto para destravar processos e trazer eficiência operacional à sua equipe?</span>
          <p className="text-[#656d76] text-[11px] mt-0.5">
            Converse diretamente com Vini Amaral pelo WhatsApp ou envie um e-mail com a sua proposta.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PERSONAL_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta-btn"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#eaeef2] text-[#1f2328] transition-colors"
            title="Copiar e-mail"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#1a7f37]" /> : <Copy className="w-3.5 h-3.5 text-[#656d76]" />}
            <span>{copiedEmail ? 'Copiado!' : 'Copiar E-mail'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
