import React from 'react';
import { 
  Scale, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { LAW_FIRM_PRODUCT_DATA } from '../data/portfolioData';

interface LawFirmProductHighlightProps {
  onOpenProductPage: () => void;
}

export const LawFirmProductHighlight: React.FC<LawFirmProductHighlightProps> = ({ 
  onOpenProductPage 
}) => {
  return (
    <section id="advocacia-plataforma" className="scroll-mt-20">
      {/* Container card following site's GitHub/Wikipedia design system */}
      <div className="rounded-md border border-[#0969da]/30 bg-gradient-to-br from-[#ffffff] via-[#f6f8fa] to-[#ddf4ff]/40 p-5 sm:p-7 shadow-2xs space-y-6">
        
        {/* Disambiguation / Badge Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded bg-[#0969da] text-white flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0969da] font-mono">
              Solução Especializada em Legal Tech
            </span>
            <span className="text-[11px] font-bold text-[#0969da] bg-[#ddf4ff] px-2 py-0.5 rounded font-mono border border-[#54aeff]/30">
              A partir de R$ 149/mês
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1a7f37] bg-[#dafbe1] border border-[#4ac26b]/40 px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 text-[#1a7f37]" />
            Demonstração Disponível
          </span>
        </div>

        {/* Title and Summary Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-7 space-y-3.5">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif tracking-tight leading-snug">
              {LAW_FIRM_PRODUCT_DATA.title}
            </h2>

            <p className="text-sm text-[#57606a] leading-relaxed wiki-serif">
              {LAW_FIRM_PRODUCT_DATA.homeSummary}
            </p>

            {/* Micro bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#1f2328]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0969da] shrink-0" />
                <span>Gestão de Processos, Prazos &amp; Clientes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0969da] shrink-0" />
                <span>Honorários, Custas &amp; Financeiro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0969da] shrink-0" />
                <span>Automação com Inteligência Artificial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0969da] shrink-0" />
                <span>Segurança &amp; Conformidade LGPD</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={onOpenProductPage}
                id="home-btn-conheca-plataforma"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <span>CONHEÇA A PLATAFORMA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={LAW_FIRM_PRODUCT_DATA.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
                title="Abrir demonstração ao vivo"
              >
                <Laptop className="w-3.5 h-3.5 text-[#0969da]" />
                <span>Ver Demonstração Online</span>
                <ExternalLink className="w-3 h-3 text-[#656d76]" />
              </a>
            </div>
          </div>

          {/* Right: Mockup Preview Box */}
          <div className="lg:col-span-5">
            <div 
              onClick={onOpenProductPage}
              className="group cursor-pointer relative rounded-md border border-[#d0d7de] bg-white p-2 shadow-xs hover:border-[#0969da] hover:shadow-md transition-all overflow-hidden"
              title="Clique para abrir a página completa da plataforma"
            >
              <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-2.5 py-1.5 rounded-t flex items-center justify-between text-[10.5px] text-[#656d76]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]"></span>
                  <span className="font-mono text-[10px] ml-1 text-[#57606a]">plataforma-juridica.app</span>
                </div>
                <span className="text-[10px] text-[#0969da] font-medium group-hover:underline flex items-center gap-0.5">
                  Expandir Detalhes
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              <div className="overflow-hidden rounded-b relative aspect-video bg-[#f6f8fa]">
                <img 
                  src="/src/assets/images/law_firm_dashboard_1787133908200.jpg"
                  alt="Interface da Plataforma Jurídica para Escritórios de Advocacia"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-[#0969da]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="px-3 py-1.5 rounded bg-[#1f2328]/90 text-white text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#54aeff]" />
                    Acessar Página Completa do Produto
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
