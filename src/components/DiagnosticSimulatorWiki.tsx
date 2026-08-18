import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  MessageCircle, 
  RefreshCw,
  Clock,
  ShieldCheck,
  FileCheck2,
  Cpu
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const DiagnosticSimulatorWiki: React.FC = () => {
  const [segment, setSegment] = useState<'juridico' | 'empresa' | 'autonomo' | 'ti'>('juridico');
  const [bottlenecks, setBottlenecks] = useState<string[]>([
    'Arquivos pesados e PDFs fora do padrão',
    'Falta de tempo para redigir e revisar minutas'
  ]);
  const [urgency, setUrgency] = useState<'imediata' | 'planejada'>('imediata');
  const [isCalculated, setIsCalculated] = useState(true);

  const toggleBottleneck = (item: string) => {
    if (bottlenecks.includes(item)) {
      setBottlenecks(bottlenecks.filter((b) => b !== item));
    } else {
      setBottlenecks([...bottlenecks, item]);
    }
  };

  const bottleneckOptions = [
    { id: '1', label: 'Arquivos pesados e PDFs fora do padrão de upload' },
    { id: '2', label: 'Desorganização de pastas e documentos espalhados' },
    { id: '3', label: 'Lentidão em computadores e falhas de suporte no dia a dia' },
    { id: '4', label: 'Falta de tempo para redigir, pesquisar e revisar relatórios/minutas' },
    { id: '5', label: 'Necessidade de automações práticas com Inteligência Artificial' },
    { id: '6', label: 'Desejo de criar ou modernizar presença web e portfólio' },
  ];

  const getEstimatedHoursSaved = () => {
    const base = bottlenecks.length * 4;
    return base > 0 ? base : 4;
  };

  const getGeneratedWhatsAppText = () => {
    const text = `Olá Vini Amaral! Fiz o diagnóstico no seu site. Segmento: ${segment.toUpperCase()} | Gargalos: ${bottlenecks.join(', ')} | Gostaria de conversar sobre como podemos otimizar essas rotinas!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="diagnostico" className="space-y-6 scroll-mt-20">
      {/* Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>6. Simulador Interativo de Diagnóstico Operacional</span>
          <span className="text-xs font-mono text-[#656d76]">[interativo]</span>
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Selecione as características do seu fluxo de trabalho abaixo para simular a economia de tempo e as soluções recomendadas por Vini Amaral:
      </p>

      {/* Simulator Card (GitHub Workspace clean layout) */}
      <div className="border border-[#d0d7de] rounded-lg bg-white overflow-hidden shadow-2xs">
        <div className="p-4 bg-[#f6f8fa] border-b border-[#d0d7de] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0969da]" />
            <span className="text-xs font-bold text-[#1f2328]">
              Calculadora de Eficiência Operacional &amp; Automação
            </span>
          </div>
          <span className="text-[11px] text-[#656d76] font-mono">
            vini-diagnostic-v2.0
          </span>
        </div>

        <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-4 text-xs">
            
            {/* Step 1: Segment */}
            <div>
              <label className="font-semibold text-[#1f2328] block mb-1.5">
                1. Qual é o seu segmento de atuação?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'juridico', label: 'Jurídico' },
                  { id: 'empresa', label: 'PME / Negócios' },
                  { id: 'autonomo', label: 'Profissional' },
                  { id: 'ti', label: 'Suporte TI' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSegment(s.id as any)}
                    className={`py-2 px-2.5 rounded-md border text-center font-medium transition-all ${
                      segment === s.id
                        ? 'border-[#0969da] bg-[#ddf4ff] text-[#0969da] font-semibold'
                        : 'border-[#d0d7de] bg-[#f6f8fa] text-[#1f2328] hover:bg-[#eaeef2]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Bottlenecks Checkboxes */}
            <div>
              <label className="font-semibold text-[#1f2328] block mb-1.5">
                2. Quais são os principais gargalos da rotina? (Selecione os que se aplicam)
              </label>
              <div className="space-y-1.5">
                {bottleneckOptions.map((opt) => {
                  const isChecked = bottlenecks.includes(opt.label);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleBottleneck(opt.label)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-md border text-left text-xs transition-all ${
                        isChecked
                          ? 'border-[#54aeff] bg-[#ddf4ff]/50 text-[#1f2328] font-medium'
                          : 'border-[#d0d7de] bg-white text-[#656d76] hover:bg-[#f6f8fa]'
                      }`}
                    >
                      <span className="pr-2 leading-snug">{opt.label}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#0969da] border-[#0969da] text-white' : 'border-[#d0d7de] bg-white'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Output / Result Panel */}
          <div className="lg:col-span-5 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#d0d7de] pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#656d76]">
                  Resultado do Diagnóstico
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#1a7f37] font-semibold bg-[#dafbe1] px-2 py-0.5 rounded border border-[#4ac26b]">
                  <Clock className="w-3 h-3" />
                  ~{getEstimatedHoursSaved()}h economizadas/semana
                </span>
              </div>

              {/* Summary recommendation */}
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-[#1f2328]">
                  Plano Recomendado por Vini Amaral:
                </div>
                
                <ul className="space-y-1.5 text-[#1f2328]">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong>Organização e Dossiês:</strong> Padronização sistemática de arquivos e indexação.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong>IA &amp; Automação:</strong> Prompts e esteiras de pesquisa para acelerar minutas em até 60%.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong>Suporte Técnico:</strong> Resolução preventiva de lentidão e estabilidade do ambiente digital.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-3 border-t border-[#d0d7de] space-y-2">
              <a
                href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${getGeneratedWhatsAppText()}`}
                target="_blank"
                rel="noopener noreferrer"
                id="simulator-send-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-xs font-semibold text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Diagnóstico pelo WhatsApp</span>
              </a>

              <p className="text-[10.5px] text-[#656d76] text-center italic">
                Atendimento direto com Vini Amaral • Taquara - RS
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
