import React, { useState } from 'react';
import { 
  Vote, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  Scale, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShoppingCart,
  FileCheck,
  ShieldCheck,
  Building,
  Lock,
  Cpu,
  Share2
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
  const hp = petition.homePetition;

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
      {/* DESTAQUE PRINCIPAL: TEXTO DO ABAIXO-ASSINADO NA HOME */}
      {/* ========================================================================= */}
      <div className="p-5 sm:p-7 rounded-lg bg-gradient-to-r from-[#0969da]/5 via-[#ffffff] to-[#dafbe1]/30 border-2 border-[#0969da]/30 shadow-xs space-y-6">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-full bg-[#0969da] text-white">
              <Vote className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold text-[#0969da] uppercase tracking-wider">
              Ação Rápida de Cidadania • Abaixo-Assinado Oficial
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Petição Pública Ativa</span>
          </span>
        </div>

        {/* Título do Abaixo-Assinado */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider">
            Título do Abaixo-Assinado:
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif leading-tight">
            {hp.title}
          </h3>
        </div>

        {/* O problema */}
        <div className="space-y-3">
          <h4 className="text-sm sm:text-base font-bold text-[#cf222e] flex items-center gap-2 font-mono uppercase tracking-wider">
            <span>{hp.problemHeading}</span>
          </h4>

          <div className="space-y-3 text-xs sm:text-sm text-[#24292f] leading-relaxed wiki-serif">
            {hp.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Os 4 Pontos da Proposta */}
        <div className="space-y-3 pt-1">
          <div className="grid grid-cols-1 gap-3">
            {hp.points.map((point) => (
              <div 
                key={point.num}
                className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#d0d7de] hover:border-[#0969da]/40 shadow-2xs space-y-1 transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {point.num}
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed wiki-serif">
                    <strong className="text-[#1f2328] font-bold">{point.bold}</strong>, {point.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objetivo & Call to Action */}
        <div className="space-y-3 pt-2">
          <p className="text-xs sm:text-sm text-[#24292f] leading-relaxed wiki-serif text-justify font-medium">
            {hp.objective}
          </p>

          <div className="p-4 rounded-lg bg-[#ddf4ff]/50 border-l-4 border-l-[#0969da] border border-[#bae6fd] text-xs sm:text-sm text-[#1f2328] leading-relaxed wiki-serif">
            <strong>Participe: </strong>{hp.callToAction}
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="pt-4 border-t border-[#d0d7de] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={petition.signatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-assinar-home"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-xs sm:text-sm font-bold shadow-2xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Assinar no Change.org</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {onNavigateToCivicCause && (
              <button
                type="button"
                onClick={onNavigateToCivicCause}
                id="btn-ver-minuta-completa"
                className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>Ver Minuta Completa &amp; Proposta Legislativa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={petition.whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md border border-[#d0d7de] bg-white hover:bg-[#f6f8fa] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
              <span>Apoiar no WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center justify-center gap-1.5 text-xs text-[#57606a] hover:text-[#0969da] px-3 py-2 rounded bg-white hover:bg-[#f6f8fa] border border-[#d0d7de] transition-colors cursor-pointer"
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
                <span>Copiar Link (c.org)</span>
              </>
            )}
          </button>
        </div>

      </div>

    </section>
  );
};
