import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Landmark, 
  Cpu, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_DATA, PERSONAL_DATA } from '../data/portfolioData';

export const DeevoFinanceirasWiki: React.FC = () => {
  const [copiedCNPJ, setCopiedCNPJ] = useState(false);

  const handleCopyCNPJ = () => {
    navigator.clipboard.writeText(COMPANY_DATA.cnpj);
    setCopiedCNPJ(true);
    setTimeout(() => setCopiedCNPJ(false), 2000);
  };

  return (
    <section id="deevo-financeiras" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <span>DEEVO Soluções Financeiras</span>
            <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-[#ddf4ff] text-[#0969da] border border-[#54aeff] font-semibold">
              Empresa &amp; Prestação de Serviços PJ
            </span>
          </span>
          <span className="text-xs font-mono text-[#656d76]">[deevo-financeiras]</span>
        </h2>
      </div>

      {/* Intro Box with Official Card */}
      <div className="p-4 sm:p-5 rounded-md border border-[#0969da]/30 bg-[#ddf4ff]/20 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#0969da]/20 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0969da] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-2xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1f2328]">
                {COMPANY_DATA.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57606a] mt-0.5">
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">
                  CNPJ: {COMPANY_DATA.cnpj}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCNPJ}
                  className="text-[#0969da] hover:underline inline-flex items-center gap-1 font-medium text-[11px]"
                  title="Copiar CNPJ"
                >
                  {copiedCNPJ ? (
                    <>
                      <Check className="w-3 h-3 text-[#1a7f37]" />
                      <span className="text-[#1a7f37]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-xs text-white bg-[#0969da] hover:bg-[#085cc0] shadow-2xs transition-colors"
            >
              <span>Acessar Site Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* User Direct Introduction statement */}
        <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
          {COMPANY_DATA.description}
        </p>
      </div>

      {/* 3 Strategic Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {COMPANY_DATA.pillars.map((pillar, index) => {
          const getPillarIcon = () => {
            if (index === 0) return <Landmark className="w-4 h-4 text-[#0969da]" />;
            if (index === 1) return <Cpu className="w-4 h-4 text-[#1a7f37]" />;
            return <FileCheck className="w-4 h-4 text-[#8250df]" />;
          };

          return (
            <div 
              key={pillar.id}
              className="p-4 rounded-md border border-[#d0d7de] bg-white shadow-2xs hover:border-[#0969da] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Pillar Header */}
                <div className="border-b border-[#eaeef2] pb-2.5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1.5 rounded bg-[#f6f8fa] border border-[#d0d7de] shrink-0">
                        {getPillarIcon()}
                      </div>
                      <span className="text-[10.5px] font-mono text-[#0969da] font-semibold truncate">
                        {pillar.cnae}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f6f8fa] text-[#57606a] border border-[#d0d7de] shrink-0 whitespace-nowrap">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#1f2328] leading-tight">
                    {pillar.title}
                  </h4>
                </div>

                {/* Pillar Itemized Deliverables */}
                <ul className="space-y-2 text-xs text-[#1f2328]">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0969da] shrink-0 mt-1.5" />
                      <div className="leading-snug">
                        <strong className="text-[#1f2328] font-semibold">{item.name}: </strong>
                        <span className="text-[#57606a]">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link for Pillar */}
              <div className="mt-4 pt-3 border-t border-[#eaeef2]">
                <a
                  href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent(`Olá Vini! Gostaria de saber mais sobre os serviços da DEEVO Financeiras na área de ${pillar.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2 rounded-md bg-[#f6f8fa] hover:bg-[#ddf4ff] border border-[#d0d7de] hover:border-[#54aeff] text-[#0969da] text-xs font-semibold transition-colors group shadow-2xs"
                >
                  <span className="truncate">Solicitar Atendimento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Pitch / Summary Card */}
      <div className="p-4 sm:p-5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] space-y-2.5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-[#656d76] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0969da]" />
          <span>Apresentação Comercial &amp; Síntese de Valor:</span>
        </div>
        
        <blockquote className="border-l-3 border-[#0969da] pl-3 py-0.5 space-y-1">
          <p className="font-bold text-sm text-[#1f2328]">
            &ldquo;{COMPANY_DATA.headline}&rdquo;
          </p>
          <p className="text-xs leading-relaxed text-[#57606a]">
            {COMPANY_DATA.pitch}
          </p>
        </blockquote>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-[11px] text-[#656d76]">
            Atuação com emissão de Nota Fiscal (PJ) para empresas e pessoas físicas.
          </span>
          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#0969da] hover:underline"
            >
              <span>{COMPANY_DATA.website}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
