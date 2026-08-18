import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Tag, 
  CheckCircle2, 
  Sparkles, 
  Terminal,
  Code
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_DATA } from '../data/portfolioData';

export const ProjectsWiki: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'opensource' | 'operations'>('all');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'opensource') return proj.badge === 'Open Source';
    if (filter === 'operations') return proj.badge !== 'Open Source';
    return true;
  });

  return (
    <section id="projetos" className="space-y-6 scroll-mt-20">
      {/* Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>4. Repositórios &amp; Projetos em Destaque</span>
          <span className="text-xs font-mono text-[#656d76]">[repos]</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-sm text-[#1f2328] wiki-serif">
          Iniciativas, metodologias operacionais e repositórios de código desenvolvidos por Vini Amaral:
        </p>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 bg-[#f6f8fa] p-1 rounded-md border border-[#d0d7de] text-xs shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'all'
                ? 'bg-white text-[#1f2328] font-semibold border border-[#d0d7de] shadow-2xs'
                : 'text-[#656d76] hover:text-[#1f2328]'
            }`}
          >
            Todos ({PROJECTS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('opensource')}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'opensource'
                ? 'bg-white text-[#1f2328] font-semibold border border-[#d0d7de] shadow-2xs'
                : 'text-[#656d76] hover:text-[#1f2328]'
            }`}
          >
            Open Source
          </button>
          <button
            type="button"
            onClick={() => setFilter('operations')}
            className={`px-2.5 py-1 rounded transition-colors ${
              filter === 'operations'
                ? 'bg-white text-[#1f2328] font-semibold border border-[#d0d7de] shadow-2xs'
                : 'text-[#656d76] hover:text-[#1f2328]'
            }`}
          >
            Operações &amp; Métodos
          </button>
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            id={`proj-${proj.id}`}
            className="flex flex-col justify-between p-4 rounded-md border border-[#d0d7de] bg-white hover:border-[#0969da] transition-all shadow-2xs"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#656d76]" />
                  <a
                    href={proj.githubUrl || PERSONAL_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm text-[#0969da] hover:underline font-mono"
                  >
                    {proj.title}
                  </a>
                </div>

                {proj.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10.5px] font-medium bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]">
                    {proj.badge}
                  </span>
                )}
              </div>

              {/* Subtitle & Description */}
              <div>
                <div className="text-xs font-semibold text-[#1f2328]">
                  {proj.subtitle}
                </div>
                <p className="text-xs text-[#656d76] mt-1 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1 bg-[#f6f8fa] p-2.5 rounded border border-[#d0d7de] text-xs">
                {proj.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-1.5 text-[#1f2328]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a7f37] shrink-0 mt-0.5" />
                    <span className="leading-snug text-[11.5px]">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Tech Stack & Links */}
            <div className="pt-3 mt-3 border-t border-[#eaeef2] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                {proj.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] text-[#656d76] font-mono"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0969da]/70 inline-block"></span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              <a
                href={proj.githubUrl || PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0969da] hover:underline"
              >
                <Github className="w-3.5 h-3.5 text-[#1f2328]" />
                <span>{proj.linkText || 'Ver Repositório'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CodeForge GitHub Callout */}
      <div className="p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-[#d0d7de] flex items-center justify-center text-[#1f2328] shrink-0">
            <Github className="w-5 h-5 text-[#1f2328]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1f2328]">
              Acesse o ecossistema no GitHub
            </h4>
            <p className="text-[11px] text-[#656d76]">
              Explore repositórios, códigos e automações em <strong>github.com/viniamaral2026-cpu</strong>
            </p>
          </div>
        </div>

        <a
          href={PERSONAL_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#1f2328] bg-white hover:bg-[#eaeef2] border border-[#d0d7de] shadow-2xs shrink-0"
        >
          <span>Abrir Perfil GitHub</span>
          <ExternalLink className="w-3 h-3 text-[#656d76]" />
        </a>
      </div>
    </section>
  );
};
