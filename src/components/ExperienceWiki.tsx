import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { RESUME_EXPERIENCES, RESUME_EDUCATION } from '../data/portfolioData';

export const ExperienceWiki: React.FC = () => {
  return (
    <section id="experiencia" className="space-y-6 scroll-mt-20">
      {/* Wikipedia Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>2. Experiência Profissional &amp; Formação</span>
          <span className="text-xs font-mono text-[#656d76]">[trajetória]</span>
        </h2>
      </div>

      {/* Intro paragraph */}
      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        A trajetória de Vini Amaral é caracterizada pela proatividade autodidata e aplicação prática de tecnologia na resolução de desafios operacionais, estruturação de fluxos de trabalho e organização documental.
      </p>

      {/* Subsection 2.1: Experiências - Projetos e Resolução de Problemas */}
      <div className="space-y-4">
        <h3 className="text-base sm:text-lg font-semibold text-[#1f2328] wiki-serif border-b border-[#eaeef2] pb-1 flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#0969da]" />
          <span>2.1 Projetos e Resolução de Problemas no Dia a Dia</span>
        </h3>

        <div className="space-y-4">
          {RESUME_EXPERIENCES.map((exp, index) => (
            <div 
              key={index}
              className="p-4 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:border-[#0969da] transition-colors shadow-2xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#eaeef2] pb-2">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1f2328]">
                    {exp.role}
                  </h4>
                  <div className="text-xs text-[#0969da] font-medium mt-0.5">
                    {exp.type}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de] shrink-0">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2 text-xs sm:text-sm text-[#1f2328]">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Subsection 2.2: Formação e Estudo Contínuo */}
      <div id="formacao" className="space-y-4 pt-2">
        <h3 className="text-base sm:text-lg font-semibold text-[#1f2328] wiki-serif border-b border-[#eaeef2] pb-1 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#0969da]" />
          <span>2.2 Formação e Aprendizado Contínuo</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME_EDUCATION.map((edu, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-white hover:border-[#0969da] transition-all space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-bold text-sm text-[#1f2328]">
                  {edu.title}
                </h4>
                <span className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#ddf4ff] text-[#0969da] border border-[#54aeff] shrink-0">
                  {edu.status}
                </span>
              </div>
              <p className="text-xs text-[#656d76] leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action ribbon inside Experience */}
        <div className="p-3 bg-[#f6f8fa] border border-[#d0d7de] rounded-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#1f2328]">
            <span className="font-semibold">Deseja uma via completa deste currículo para seu departamento de RH?</span>
            <p className="text-[11px] text-[#656d76]">Faça o download do PDF pronto para arquivamento ou impressão.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/curriculo-vini-amaral.pdf"
              download="Curriculo-Vini-Amaral.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#0969da] hover:bg-[#085cc0] shadow-xs transition-colors"
            >
              <span>📥 Baixar CV em PDF</span>
            </a>
            <a
              href="/curriculo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#1f2328] bg-white hover:bg-[#eaeef2] border border-[#d0d7de] transition-colors"
            >
              <span>📄 Versão Web / Imprimir</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
