import React from 'react';
import { 
  MapPin, 
  MessageCircle, 
  Linkedin, 
  Mail, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Briefcase, 
  Building,
  Home,
  FileText
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';
import profileImg from '../assets/images/eu.JPG';

export const WikipediaInfobox: React.FC = () => {
  return (
    <aside 
      id="wikipedia-infobox"
      className="w-full lg:w-[320px] xl:w-[340px] shrink-0 wiki-infobox rounded-md overflow-hidden text-xs text-[#1f2328]"
    >
      {/* Infobox Header */}
      <div className="bg-[#f6f8fa] border-b border-[#d0d7de] p-3 text-center">
        <h3 className="font-bold text-sm text-[#1f2328] wiki-serif tracking-tight">
          {PERSONAL_DATA.name}
        </h3>
        <p className="text-[11px] text-[#0969da] font-medium mt-0.5 font-mono">
          {PERSONAL_DATA.objective}
        </p>
      </div>

      {/* Portrait Image & Caption */}
      <div className="p-3 bg-white border-b border-[#d0d7de]">
        <div className="border border-[#d0d7de] rounded p-1 bg-[#f6f8fa]">
          <img 
            src="/eu.JPG" 
            alt="Marcos Vinícius (Vini Amaral)" 
            className="w-full h-auto object-cover rounded aspect-square shadow-2xs"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('vini-amaral.jpg') === -1) {
                target.src = '/vini-amaral.jpg';
              } else if (profileImg) {
                target.src = profileImg;
              }
            }}
          />
        </div>
        <p className="text-[10px] text-[#656d76] text-center mt-1.5 italic">
          Vini Amaral — Suporte Operacional, Controladoria &amp; Automação em Taquara - RS.
        </p>
        <div className="flex items-center justify-center gap-2 mt-1 text-[10px]">
          <a 
            href="/eu.JPG" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0969da] hover:underline inline-flex items-center gap-0.5 font-medium"
          >
            <ExternalLink className="w-2.5 h-2.5" />
            <span>Ver foto original</span>
          </a>
          <span className="text-[#d0d7de]">|</span>
          <a 
            href="/eu.JPG" 
            download="Vini-Amaral-Foto.jpg"
            className="text-[#0969da] hover:underline inline-flex items-center gap-0.5 font-medium"
          >
            <span>Download Foto</span>
          </a>
        </div>
      </div>

      {/* Infobox Key Facts Table */}
      <div className="p-3 space-y-2 bg-white">
        <div className="text-[10px] font-bold uppercase tracking-wider text-[#656d76] border-b border-[#d0d7de] pb-1">
          Dados Pessoais &amp; Contato
        </div>

        <table className="w-full text-left text-[11px] border-collapse">
          <tbody>
            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top w-24">Nome</th>
              <td className="py-1.5 text-[#1f2328] font-medium">{PERSONAL_DATA.name}</td>
            </tr>

            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">Endereço</th>
              <td className="py-1.5 text-[#1f2328]">
                <div className="flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0969da] shrink-0 mt-0.5" />
                  <span>{PERSONAL_DATA.address}</span>
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">Disponibilidade</th>
              <td className="py-1.5 text-[#1f2328] font-medium">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#ddf4ff] text-[#0969da] border border-[#54aeff] text-[10px]">
                  {PERSONAL_DATA.availability}
                </span>
              </td>
            </tr>

            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">Objetivo</th>
              <td className="py-1.5 text-[#1f2328] font-semibold text-[10.5px] leading-snug">
                {PERSONAL_DATA.objective}
              </td>
            </tr>

            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">Áreas Chave</th>
              <td className="py-1.5 text-[#1f2328] space-y-1">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969da]"></span>
                  <span>Controladoria Jurídica</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f37]"></span>
                  <span>Gestão Documental &amp; Dossiês</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8250df]"></span>
                  <span>Automação com IA Generativa</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cf222e]"></span>
                  <span>Suporte &amp; Diagnóstico de TI</span>
                </div>
              </td>
            </tr>

            <tr className="border-b border-[#eaeef2]">
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">GitHub</th>
              <td className="py-1.5 text-[#1f2328]">
                <a 
                  href={PERSONAL_DATA.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0969da] hover:underline font-mono text-[10.5px] flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  <span>viniamaral2026-cpu</span>
                </a>
              </td>
            </tr>

            <tr>
              <th className="py-1.5 pr-2 font-semibold text-[#656d76] align-top">Status</th>
              <td className="py-1.5 text-[#1a7f37] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1a7f37] shrink-0" />
                <span>Disponível para Contratação</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* WhatsApp & Channels Action Box inside Infobox */}
        <div className="pt-3 border-t border-[#d0d7de] space-y-2">
          <a
            href="/curriculo-vini-amaral.pdf"
            download="Curriculo-Vini-Amaral.pdf"
            id="infobox-download-cv-btn"
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-semibold text-xs text-[#1f2328] bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] shadow-2xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#0969da]" />
            <span>Baixar Currículo (PDF)</span>
          </a>

          <a
            href={PERSONAL_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="infobox-whatsapp-btn"
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-semibold text-xs text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp: (51) 98144-6019</span>
          </a>

          <div className="grid grid-cols-2 gap-1.5">
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] font-medium text-[11px]"
            >
              <Linkedin className="w-3 h-3 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] font-medium text-[11px]"
            >
              <Mail className="w-3 h-3 text-[#656d76]" />
              <span>E-mail</span>
            </a>
          </div>
        </div>

      </div>

      {/* Infobox Footer tag */}
      <div className="bg-[#f6f8fa] border-t border-[#d0d7de] p-2 text-center text-[10px] text-[#656d76] font-mono">
        VINI AMARAL • TAQUARA - RS
      </div>
    </aside>
  );
};
