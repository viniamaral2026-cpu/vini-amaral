import React, { useState } from 'react';
import { 
  Vote, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  ShieldAlert, 
  Scale, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShoppingCart,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import { PETITIONS_DATA } from '../data/portfolioData';

interface CivicPetitionsWikiProps {
  onNavigateToCivicCause?: () => void;
}

export const CivicPetitionsWiki: React.FC<CivicPetitionsWikiProps> = ({ 
  onNavigateToCivicCause 
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const petition = PETITIONS_DATA[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(petition.signatureUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="projetos-lei" className="space-y-6 scroll-mt-24">
      {/* Wikipedia Section Title */}
      <div className="border-b border-[#d0d7de] pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#0969da]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif tracking-tight">
            5. Projetos de Lei, Abaixo-Assinados &amp; Causas Cidadãs
          </h2>
        </div>
        <span className="text-xs text-[#57606a] font-mono">
          [iniciativas de impacto público e cidadania]
        </span>
      </div>

      {/* Intro Wikipedia Paragraph */}
      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Além da atuação técnica e operacional em controladoria e tecnologia, esta seção reúne 
        <strong> iniciativas cidadãs, projetos de lei de iniciativa popular e abaixo-assinados públicos</strong> idealizados 
        para combater ineficiências sistêmicas, desburocratizar serviços públicos e fortalecer os direitos fundamentais do 
        cidadão brasileiro através da inovação e da transparência.
      </p>

      {/* ========================================================================= */}
      {/* DESTAQUE PRINCIPAL: LEI DO CANAL DIRETO (AÇÃO RÁPIDA & ENCAMINHAMENTO) */}
      {/* ========================================================================= */}
      <div className="p-5 sm:p-6 rounded-lg bg-gradient-to-r from-[#0969da]/5 via-[#f6f8fa] to-[#dafbe1]/30 border-2 border-[#0969da]/30 shadow-xs space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-full bg-[#0969da] text-white">
              <Vote className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold text-[#0969da] uppercase tracking-wider">
              Ação Rápida de Cidadania • Abaixo-Assinado
            </span>
            <span className="text-[11px] font-bold text-[#0969da] bg-[#ddf4ff] px-2 py-0.5 rounded font-mono border border-[#54aeff]/30">
              Lei do Canal Direto
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Petição Pública Ativa</span>
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#1f2328] wiki-serif">
            {petition.quickAction.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#424a53] leading-relaxed wiki-serif">
            "{petition.quickAction.shortText}"
          </p>
        </div>

        {/* Motivação Central: A Migração para a Internet */}
        <div className="p-3.5 rounded-md bg-white border border-[#d0d7de] text-xs text-[#1f2328] space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#0969da]">
            <ShoppingCart className="w-4 h-4" />
            <span>A Urgência no Comércio Eletrônico &amp; Relações Digitais:</span>
          </div>
          <p className="text-[#57606a] leading-relaxed wiki-serif">
            Com a migração massiva do comércio para a internet (e-commerce, marketplaces, bancos digitais e aplicativos), as transações 
            ocorrem em segundos, mas a resposta dos órgãos de defesa do consumidor ainda opera em prazos analógicos. A proposta institui 
            o <strong>Canal Único Integrado</strong> com triagem por <strong>Inteligência Artificial</strong> e prazo de <strong>15 dias úteis</strong> para fiscalização.
          </p>
        </div>

        {/* 4 Eixos Resumidos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1f2328] pt-1">
          <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-[#eaeef2]">
            <Check className="w-3.5 h-3.5 text-[#0969da] shrink-0 mt-0.5" />
            <span>Canal Único Digital com Protocolo Nacional</span>
          </div>
          <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-[#eaeef2]">
            <Check className="w-3.5 h-3.5 text-[#0969da] shrink-0 mt-0.5" />
            <span>Triagem e Categorização Automatizada por IA</span>
          </div>
          <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-[#eaeef2]">
            <Check className="w-3.5 h-3.5 text-[#0969da] shrink-0 mt-0.5" />
            <span>Prazo de 15 Dias Úteis para Início de Apuração</span>
          </div>
          <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-[#eaeef2]">
            <Check className="w-3.5 h-3.5 text-[#0969da] shrink-0 mt-0.5" />
            <span>Combate a Fraudes Digitais &amp; Educação ao Consumidor</span>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="pt-3 border-t border-[#d0d7de] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {onNavigateToCivicCause && (
              <button
                type="button"
                onClick={onNavigateToCivicCause}
                id="btn-ver-minuta-completa"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>Ver Minuta Completa &amp; Proposta Legislativa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={petition.signatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-assinar-home"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-xs sm:text-sm font-bold shadow-2xs transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Assinar no Change.org</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <a
              href={petition.whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-md border border-[#d0d7de] bg-white hover:bg-[#f6f8fa] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
              <span>Apoiar no WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1 text-xs text-[#57606a] hover:text-[#0969da] px-2.5 py-1.5 rounded hover:bg-white transition-colors cursor-pointer"
            title="Copiar link do abaixo-assinado"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
                <span className="text-[#1a7f37] font-semibold">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                <span>Copiar Link da Petição</span>
              </>
            )}
          </button>
        </div>

      </div>

    </section>
  );
};
