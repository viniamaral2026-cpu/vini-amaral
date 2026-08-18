import React from 'react';
import { Zap, BrainCircuit, UsersRound, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { DIFFERENTIALS } from '../data/portfolioData';

export const DifferentialsWiki: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#0969da]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-[#1f883d]" />;
      case 'UsersRound': return <UsersRound className="w-5 h-5 text-[#8250df]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#cf222e]" />;
      default: return <Award className="w-5 h-5 text-[#0969da]" />;
    }
  };

  return (
    <section id="diferenciais" className="space-y-6 scroll-mt-20">
      {/* Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>7. Diferenciais Competitivos</span>
          <span className="text-xs font-mono text-[#656d76]">[diferenciais]</span>
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Postura profissional e diferenciais práticos que tornam a atuação de Vini Amaral um suporte de alto impacto para escritórios e equipes:
      </p>

      {/* Grid of Differentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DIFFERENTIALS.map((diff, idx) => (
          <div
            key={idx}
            className="p-4 rounded-md border border-[#d0d7de] bg-white hover:border-[#0969da] transition-all shadow-2xs space-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#f6f8fa] border border-[#d0d7de] flex items-center justify-center shrink-0">
                {getIcon(diff.icon)}
              </div>
              <h3 className="font-bold text-sm text-[#1f2328]">
                {diff.title}
              </h3>
            </div>

            <p className="text-xs text-[#656d76] leading-relaxed pl-11">
              {diff.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
