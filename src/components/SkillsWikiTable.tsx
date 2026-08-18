import React from 'react';
import { 
  FolderCheck, 
  Search, 
  Bot, 
  FileEdit, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Code,
  Layers
} from 'lucide-react';
import { RESUME_COMPETENCIES } from '../data/portfolioData';

export const SkillsWikiTable: React.FC = () => {
  const skillMatrix = [
    {
      domain: "Gestão de Arquivos & Dossiês",
      icon: FolderCheck,
      level: "Avançado",
      techs: ["PDFs Pesados", "Compressão em Lote", "OCR Avançado", "Nomenclatura Padrão", "Estrutura de Pastas e Backups"],
      application: "Organização estruturada de arquivos digitais, separando com clareza documentos, evidências e anexos para tribunais, auditorias e escritórios."
    },
    {
      domain: "Pesquisa & Diagnóstico Analítico",
      icon: Search,
      level: "Avançado",
      techs: ["Cruzamento de Informações", "Análise de Gargalos", "Diagnóstico de Falhas", "Resolução de Problemas"],
      application: "Investigação ágil da causa raiz de problemas em rotinas operacionais e sistemas, com postura ativa de 'resolvedor'."
    },
    {
      domain: "Inteligência Artificial Generativa",
      icon: Bot,
      level: "Avançado",
      techs: ["Gemini", "Claude", "ChatGPT", "Prompt Engineering", "Análise e Síntese de Dados"],
      application: "Aceleração de tarefas repetitivas, extração de pontos-chave de textos longos, minutas de documentos e automações práticas."
    },
    {
      domain: "Digitação, Redação & Formatação",
      icon: FileEdit,
      level: "Avançado",
      techs: ["Digitação Ágil", "Formatação Profissional", "Revisão Textual", "Elaboração de Relatórios", "Padronização Visual"],
      application: "Produção e conferência impecável de relatórios, peças, minutas e informativos com elevado padrão estético e gramatical."
    },
    {
      domain: "Sistemas & Suporte de TI",
      icon: Terminal,
      level: "Sólido",
      techs: ["Windows", "Linux", "Certificados Digitais", "Configuração de Redes", "Manutenção e Otimização"],
      application: "Resolução de falhas do dia a dia, eliminação de travamentos em computadores e parametrização de ferramentas de trabalho."
    },
    {
      domain: "Organização de Rotinas & Prazos",
      icon: Clock,
      level: "Sólido",
      techs: ["Priorização de Demandas", "Fluxos de Trabalho", "Controle de Prazos", "Redução de Retrabalho"],
      application: "Destravamento de demandas burocráticas para liberar tempo de equipes e advogados para atividades de alto valor."
    },
    {
      domain: "Desenvolvimento & Tecnologias Web",
      icon: Code,
      level: "Em Formação Contínua",
      techs: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Git & GitHub", "Automações"],
      application: "Criação de utilitários digitais, landing pages de alta velocidade e automações de código limpo."
    }
  ];

  return (
    <section id="competencias" className="space-y-6 scroll-mt-20">
      {/* Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>5. Competências &amp; Matriz Técnica</span>
          <span className="text-xs font-mono text-[#656d76]">[matriz]</span>
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        A tabela a seguir compila a matriz de competências operacionais e técnicas de Vini Amaral, indicando o nível de domínio e a aplicação prática em ambiente de trabalho:
      </p>

      {/* Wikipedia Data Table */}
      <div className="overflow-x-auto border border-[#d0d7de] rounded-md shadow-2xs">
        <table className="w-full text-left text-xs border-collapse wiki-table bg-white">
          <thead className="bg-[#f6f8fa] border-b border-[#d0d7de] text-[#1f2328] font-semibold">
            <tr>
              <th className="p-3 border-r border-[#d0d7de] w-1/4">Domínio / Competência</th>
              <th className="p-3 border-r border-[#d0d7de] w-28">Nível</th>
              <th className="p-3 border-r border-[#d0d7de] w-1/3">Ferramentas &amp; Tecnologias</th>
              <th className="p-3">Aplicação Operacional Prática</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d0d7de]">
            {skillMatrix.map((item, idx) => {
              const Icon = item.icon;
              return (
                <tr key={idx} className="hover:bg-[#f6f8fa] transition-colors">
                  <td className="p-3 border-r border-[#d0d7de] font-semibold text-[#1f2328]">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#0969da] shrink-0" />
                      <span>{item.domain}</span>
                    </div>
                  </td>
                  <td className="p-3 border-r border-[#d0d7de]">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]">
                      {item.level}
                    </span>
                  </td>
                  <td className="p-3 border-r border-[#d0d7de]">
                    <div className="flex flex-wrap gap-1">
                      {item.techs.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de] text-[10.5px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-[#656d76] leading-relaxed text-xs">
                    {item.application}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
