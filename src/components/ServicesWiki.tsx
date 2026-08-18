import React, { useState } from 'react';
import { 
  FolderKanban, 
  Cpu, 
  Sparkles, 
  Code2, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  ExternalLink,
  Shield,
  Layers,
  Zap,
  Clock
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

export const ServicesWiki: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderKanban': return <FolderKanban className="w-5 h-5 text-[#0969da]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#1f883d]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#8250df]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#cf222e]" />;
      default: return <Layers className="w-5 h-5 text-[#0969da]" />;
    }
  };

  return (
    <section id="servicos" className="space-y-6 scroll-mt-20">
      {/* Wikipedia Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>3. Serviços &amp; Soluções Especializadas</span>
          <span className="text-xs font-mono text-[#656d76]">[atuação]</span>
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Atuação técnica e operacional desenvolvida para escritórios, empresas e profissionais liberais que buscam eliminar gargalos, organizar arquivos digitais e aplicar tecnologia prática no dia a dia:
      </p>

      {/* Grid of Services (GitHub Repository Cards style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={`servico-${service.id}`}
            className="flex flex-col justify-between p-4 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:border-[#0969da] hover:shadow-2xs transition-all"
          >
            <div className="space-y-3">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-[#f6f8fa] border border-[#d0d7de] shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#1f2328] hover:text-[#0969da]">
                      3.{index + 1} {service.title}
                    </h3>
                    <span className="text-[11px] text-[#656d76] font-mono">
                      id: {service.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs text-[#656d76] leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Deliverables List */}
              <div className="pt-2 border-t border-[#eaeef2] space-y-1.5">
                <div className="text-[11px] font-semibold text-[#1f2328] uppercase tracking-wider">
                  O que é entregue:
                </div>
                <ul className="space-y-1 text-xs text-[#1f2328]">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags / Tools */}
              <div className="flex flex-wrap gap-1 pt-2">
                {service.tools.slice(0, 4).map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 mt-4 border-t border-[#eaeef2] flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="text-xs font-semibold text-[#0969da] hover:underline flex items-center gap-1"
              >
                <span>Ver detalhes completos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-2xs transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Solicitar</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal for Service Inspection */}
      {selectedService && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-2xs"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-lg border border-[#d0d7de] shadow-lg p-5 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2 border-b border-[#d0d7de] pb-3">
              <div className="flex items-center gap-2">
                {getIcon(selectedService.iconName)}
                <div>
                  <h3 className="font-bold text-base text-[#1f2328]">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-[#656d76] font-mono">
                    Especificação de Serviço • Vini Amaral
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs px-2 py-1 rounded bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] font-mono text-[#656d76]"
              >
                Fechar ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#1f2328] leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-xs text-[#1f2328] uppercase tracking-wider">
                Escopo de Atividades &amp; Entregáveis
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1f2328] bg-[#f6f8fa] p-3 rounded border border-[#d0d7de]">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-xs text-[#1f2328] uppercase tracking-wider">
                Benefícios Imediatos
              </h4>
              <ul className="space-y-1 text-xs text-[#1f2328]">
                {selectedService.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[#1a7f37]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f37]" />
                    <span className="text-[#1f2328]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#d0d7de] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-3 py-1.5 text-xs font-medium text-[#1f2328] bg-[#f6f8fa] hover:bg-[#eaeef2] rounded border border-[#d0d7de]"
              >
                Voltar
              </button>
              <a
                href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent(selectedService.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded text-white bg-[#1f883d] hover:bg-[#1a7f37] shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp sobre este serviço</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
