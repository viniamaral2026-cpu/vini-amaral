import React, { useState, useEffect } from 'react';
import { 
  Vote, 
  X, 
  FileText, 
  MessageCircle, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { PETITIONS_DATA } from '../data/portfolioData';

interface PetitionModalPopupProps {
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToCivicCause?: () => void;
}

export const PetitionModalPopup: React.FC<PetitionModalPopupProps> = ({ 
  onNavigateToSection,
  onNavigateToCivicCause 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const petition = PETITIONS_DATA[0];

  useEffect(() => {
    // Check if user previously closed it in this session
    const hasDismissed = sessionStorage.getItem('petition_popup_dismissed');
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // 2.5s pleasant delay
      return () => clearTimeout(timer);
    } else {
      setIsMinimized(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(true);
    sessionStorage.setItem('petition_popup_dismissed', 'true');
  };

  const handleOpen = () => {
    setIsMinimized(false);
    setIsOpen(true);
  };

  const handleGoToSection = () => {
    handleClose();
    if (onNavigateToCivicCause) {
      onNavigateToCivicCause();
    } else if (onNavigateToSection) {
      onNavigateToSection('causa-canal-direto');
    } else {
      const el = document.getElementById('projetos-lei');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Minimized Floating Trigger Pill (Bottom Left) */}
      {isMinimized && !isOpen && (
        <button
          type="button"
          onClick={handleOpen}
          className="fixed bottom-5 left-4 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#f6f8fa] text-[#1f2328] border border-[#d0d7de] shadow-md transition-all hover:scale-105 group text-xs font-semibold"
          title="Ver Abaixo-Assinado e Apoiar"
          aria-label="Abrir Abaixo-Assinado"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#1f883d] animate-pulse" />
          <Vote className="w-4 h-4 text-[#0969da]" />
          <span>Apoiar Abaixo-Assinado</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#57606a] group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Main Closable Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="petition-popup-title"
        >
          <div 
            className="w-full max-w-lg bg-white rounded-lg border border-[#d0d7de] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 flex flex-col"
          >
            {/* Header Banner */}
            <div className="bg-[#f6f8fa] border-b border-[#d0d7de] p-3.5 sm:p-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]">
                  <Vote className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#0969da] font-bold block leading-none">
                    Iniciativa Cidadã • Apoio Necessário
                  </span>
                  <span className="text-xs text-[#57606a] font-medium mt-0.5 block">
                    Petição Pública Aberta
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-md text-[#57606a] hover:text-[#1f2328] hover:bg-[#eaeef2] transition-colors"
                title="Fechar pop-up"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Content */}
            <div className="p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-[#cf222e] font-semibold text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Reforma Urgente do Sistema de Defesa do Consumidor</span>
              </div>

              <h3 id="petition-popup-title" className="text-base sm:text-lg font-bold text-[#1f2328] wiki-serif leading-tight">
                {petition.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#424a53] leading-relaxed wiki-serif bg-[#f6f8fa] p-3 rounded border border-[#eaeef2]">
                "É frustrante ver empresas descumprindo leis enquanto a burocracia impede que os órgãos ajudem o cidadão. 
                Propomos integração digital em tempo real, cooperação interinstitucional e capacitação para transformar a proteção ao consumidor no Brasil."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#57606a]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f37]" />
                  <span>Plataforma digital em tempo real</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969da]" />
                  <span>Fim da burocracia e morosidade</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={petition.signatureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-bold text-xs sm:text-sm text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Assinar Petição Online no Change.org</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={petition.whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-semibold text-xs text-white bg-[#0969da] hover:bg-[#085cc0] transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Compartilhar WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleGoToSection}
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-md font-semibold text-xs text-[#1f2328] bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] transition-colors"
                  >
                    <span>Ler Proposta na Página</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#57606a]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f6f8fa] border-t border-[#d0d7de] px-4 py-2 flex items-center justify-between text-[10.5px] text-[#57606a]">
              <span>Sua assinatura fortalece a cidadania brasileira.</span>
              <button
                type="button"
                onClick={handleClose}
                className="text-[#0969da] hover:underline font-medium"
              >
                Dispensar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
