import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#d0d7de] shadow-md text-xs text-[#1f2328] animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#1a7f37] inline-block animate-pulse"></span>
          <span className="font-medium">Falar com Vini no WhatsApp: (51) 98144-6019</span>
          <button 
            type="button" 
            onClick={() => setShowTooltip(false)}
            className="text-[#656d76] hover:text-[#1f2328] ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={PERSONAL_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#1f883d] hover:bg-[#1a7f37] text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 border border-[rgba(31,35,40,0.15)] group"
        aria-label="Falar com Vini Amaral pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp: (51) 98144-6019</span>
      </a>
    </div>
  );
};
