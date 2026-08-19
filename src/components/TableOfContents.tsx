import React, { useState } from 'react';
import { ListTree, ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsProps {
  onNavigate: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    {
      id: 'sobre',
      number: '1',
      title: 'Resumo Profissional e Biografia',
      subsections: [
        { id: 'sobre-perfil', number: '1.1', title: 'Perfil Autodidata e Domínio Tecnológico' },
        { id: 'sobre-pilares', number: '1.2', title: 'Pilares de Atuação e Foco Operacional' },
      ],
    },
    {
      id: 'experiencia',
      number: '2',
      title: 'Experiência Profissional & Formação',
      subsections: [
        { id: 'exp-gestao', number: '2.1', title: 'Gestão Administrativa e Suporte Multidisciplinar' },
        { id: 'exp-processos', number: '2.2', title: 'Projetos de Organização e Estruturação' },
        { id: 'formacao', number: '2.3', title: 'Formação e Estudo Contínuo' },
      ],
    },
    {
      id: 'servicos',
      number: '3',
      title: 'Serviços & Soluções Especializadas',
      subsections: [
        { id: 'servico-controladoria', number: '3.1', title: 'Controladoria & Gestão Documental' },
        { id: 'servico-suporte', number: '3.2', title: 'Suporte Operacional & Diagnóstico de TI' },
        { id: 'servico-automacao', number: '3.3', title: 'Automação com IA & Otimização' },
        { id: 'servico-dev', number: '3.4', title: 'Desenvolvimento Web & Soluções' },
        { id: 'advocacia-plataforma', number: '3.5', title: 'Plataforma para Escritórios de Advocacia (Legal Tech)' },
        { id: 'site-advocacia-lucena', number: '3.6', title: 'Sites para Advocacia (Modelo Lucena & Associados)' },
      ],
    },
    {
      id: 'deevo-financeiras',
      number: '4',
      title: 'DEEVO Soluções Financeiras (Atuação PJ)',
      subsections: [
        { id: 'pilar-financeiro', number: '4.1', title: 'Soluções Financeiras & Correspondente Bancário' },
        { id: 'pilar-tecnologia', number: '4.2', title: 'Tecnologia, Suporte de TI & Dados' },
        { id: 'pilar-gestao', number: '4.3', title: 'Gestão Documental & Apoio Administrativo' },
      ],
    },
    {
      id: 'projetos-lei',
      number: '5',
      title: 'Projetos de Lei, Abaixo-Assinados & Causas Cidadãs',
      subsections: [
        { id: 'projetos-lei', number: '5.1', title: 'Ação Rápida: Abaixo-Assinado (Lei do Canal Direto)' },
        { id: 'causa-canal-direto', number: '5.2', title: 'Página Completa: Minuta do Projeto de Lei & Impacto Digital' },
      ],
    },
    {
      id: 'projetos',
      number: '6',
      title: 'Repositórios & Projetos em Destaque',
      subsections: [
        { id: 'proj-codeforge', number: '6.1', title: 'CodeForge (Iniciativa Open Source)' },
        { id: 'proj-docflow-juridico', number: '6.2', title: 'DocFlow & Dossiês Eletrônicos' },
        { id: 'proj-autosupport-hub', number: '6.3', title: 'AutoSupport & Triagem de TI' },
      ],
    },
    {
      id: 'competencias',
      number: '7',
      title: 'Competências & Matriz Técnica',
    },
    {
      id: 'diagnostico',
      number: '8',
      title: 'Simulador Interativo de Diagnóstico Operacional',
    },
    {
      id: 'diferenciais',
      number: '9',
      title: 'Diferenciais Competitivos',
    },
    {
      id: 'contato',
      number: '10',
      title: 'Informações de Contato & Conexões',
    },
  ];

  return (
    <div 
      id="toc-wikipedia-container"
      className="my-6 p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] text-xs max-w-lg shadow-2xs"
    >
      <div className="flex items-center justify-between font-bold text-sm text-[#1f2328] border-b border-[#d0d7de] pb-2">
        <div className="flex items-center gap-2">
          <ListTree className="w-4 h-4 text-[#0969da]" />
          <span>Sumário / Índice</span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0969da] hover:underline text-xs font-normal flex items-center gap-0.5"
        >
          <span>[{isOpen ? 'ocultar' : 'mostrar'}]</span>
        </button>
      </div>

      {isOpen && (
        <ol className="mt-3 space-y-1.5 list-none pl-1">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                onClick={() => onNavigate(sec.id)}
                className="text-[#0969da] hover:underline font-medium flex items-center gap-1.5"
              >
                <span className="text-[#656d76] font-mono">{sec.number}.</span>
                <span>{sec.title}</span>
              </a>

              {sec.subsections && (
                <ol className="pl-4 mt-1 space-y-1">
                  {sec.subsections.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        onClick={() => onNavigate(sub.id)}
                        className="text-[#0969da] hover:underline text-[11px] flex items-center gap-1.5"
                      >
                        <span className="text-[#656d76] font-mono">{sub.number}</span>
                        <span>{sub.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
