import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  ExternalLink, 
  Printer, 
  Copy, 
  Check, 
  ArrowLeft, 
  Share2, 
  MessageCircle, 
  Download, 
  MapPin, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Car, 
  FileCheck, 
  HelpCircle, 
  Briefcase, 
  AlertCircle,
  Eye
} from 'lucide-react';
import { TUDO_FACIL_TAQUARA_DATA } from '../data/portfolioData';

interface TudoFacilTaquaraPageProps {
  onBackToHome: () => void;
}

export const TudoFacilTaquaraPage: React.FC<TudoFacilTaquaraPageProps> = ({ onBackToHome }) => {
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const data = TUDO_FACIL_TAQUARA_DATA;
  const bill = data.billDraft;

  const handleCopyDraft = () => {
    const fullText = `
${bill.number}

${bill.ementa}

${bill.preamble}

${bill.articles.map(art => {
  let text = `${art.article} ${art.text}`;
  if (art.items) {
    text += `\n${art.items.join('\n')}`;
  }
  return text;
}).join('\n\n')}

${bill.closingOffice}

${bill.mayorSignature}

--------------------------------------------------
${bill.justificativaHeader}
${bill.justificativaSalutation}

${bill.justificativaParagraphs.join('\n\n')}

${bill.closingPlaceDate}

${bill.proponentSignature}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(data.signatureUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn text-[#1f2328]">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d0d7de] pb-4">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0969da] hover:underline cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Voltar para a Página Inicial</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Petição &amp; Projeto Ativos</span>
          </span>
          <span className="text-xs font-mono text-[#57606a]">
            Taquara / RS • Vale do Paranhana
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-md bg-[#0969da] text-white">
            <Building2 className="w-6 h-6" />
          </span>
          <div>
            <span className="text-xs font-mono font-bold text-[#0969da] uppercase tracking-wider">
              Iniciativa Cidadã • Projeto de Lei Municipal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1f2328] wiki-serif tracking-tight">
              Instalação da Unidade do Tudo Fácil em Taquara/RS
            </h1>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-[#57606a] wiki-serif">
          Proposta de Lei Municipal autorizando o Poder Executivo de Taquara a firmar convênio de cooperação com o 
          Governo do Estado do Rio Grande do Sul (SPGG) para instalar um posto de atendimento presencial unificado do 
          <strong> Programa Tudo Fácil</strong>, centralizando serviços essenciais do IGP (CIN/RG), DetranRS, Gov.br, IPE Prev/Saúde, FADERS, CORSAN, RGE e da Prefeitura.
        </p>

        {/* Proponent & City Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-[#f6f8fa] border border-[#d0d7de] text-xs">
          <div>
            <span className="text-[#57606a] block">Proponente Cidadão:</span>
            <strong className="text-[#1f2328] text-sm">{data.proponent}</strong>
          </div>
          <div>
            <span className="text-[#57606a] block">Localização / Polo:</span>
            <strong className="text-[#1f2328] text-sm">{data.city}</strong>
          </div>
          <div>
            <span className="text-[#57606a] block">População Beneficiada:</span>
            <strong className="text-[#1f2328] text-sm">{data.beneficiaries}</strong>
          </div>
        </div>
      </header>

      {/* Main Visual Banner (Uploaded Photo) */}
      <div className="p-4 sm:p-5 rounded-lg bg-white border border-[#d0d7de] shadow-xs space-y-3">
        <div className="relative rounded-md overflow-hidden border border-[#d0d7de] bg-[#0d1117] flex items-center justify-center">
          <img 
            src="/tudo-facil-taquara.png" 
            alt="Projeto Tudo Fácil Taquara/RS"
            className="w-full max-h-[480px] object-contain mx-auto"
            onError={(e) => {
              // Fallback if image fails to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#57606a]">
          <span className="italic">
            Identidade visual e conceito institucional da campanha pela instalação do Tudo Fácil em Taquara/RS.
          </span>
          <span className="font-mono text-[11px] bg-[#eaeef2] px-2 py-0.5 rounded">
            Vale do Paranhana • Inclusão &amp; Desburocratização
          </span>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="p-4 rounded-lg bg-[#ddf4ff]/40 border border-[#54aeff]/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={data.signatureUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-assinar-tudo-facil"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-xs sm:text-sm font-bold shadow-2xs transition-colors"
          >
            <FileCheck className="w-4 h-4" />
            <span>Assinar o Abaixo-Assinado no Change.org</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={data.docxUrl}
            download="Projeto_Unidade_Tudo_Facil_Taquara.docx"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white border border-[#d0d7de] hover:bg-[#f6f8fa] text-[#1f2328] text-xs sm:text-sm font-semibold shadow-2xs transition-colors"
          >
            <Download className="w-4 h-4 text-[#0969da]" />
            <span>Baixar DOCX</span>
          </a>

          <a
            href="/pdf-tudo-facil.pdf"
            download="Projeto_Unidade_Tudo_Facil_Taquara.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white border border-[#d0d7de] hover:bg-[#f6f8fa] text-[#1f2328] text-xs sm:text-sm font-semibold shadow-2xs transition-colors"
          >
            <FileText className="w-4 h-4 text-[#cf222e]" />
            <span>Baixar PDF</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white border border-[#d0d7de] hover:bg-[#f6f8fa] text-[#1f2328] text-xs sm:text-sm font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#656d76]" />
            <span>Imprimir</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyDraft}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white hover:bg-[#f6f8fa] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors cursor-pointer"
          >
            {copiedDraft ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
                <span className="text-[#1a7f37]">Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                <span>Copiar Minuta</span>
              </>
            )}
          </button>

          <a
            href={data.whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 text-[#1a7f37] text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEÇÃO 1: DIAGNÓSTICO REGIONAL & ROL DE SERVIÇOS */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif">
            1. Por Que Taquara e o Vale do Paranhana Precisam do Tudo Fácil?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#fff8c5]/40 border border-[#d4a72c]/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#9a6700] text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>O Desafio Atual: Deslocamento &amp; Custos</span>
            </div>
            <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
              Moradores de Taquara, Igrejinha, Parobé, Três Coroas, Rolante e Riozinho hoje são obrigados a viajar até Porto Alegre (mais de 80 km) ou Novo Hamburgo (mais de 40 km) para obter documentos, resolver pendências do Detran, IPE ou perícias. Isso acarreta perda de dias inteiros de trabalho e gastos elevados com passagens e transporte.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#dafbe1]/40 border border-[#4ac26b]/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1a7f37] text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>A Solução: Polo Regional Unificado</span>
            </div>
            <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
              Como cidade-polo histórica da região, Taquara possui localização estratégica para abrigar a unidade. O Tudo Fácil concentrará órgãos estaduais, concessionárias e serviços municipais no mesmo teto, impulsionando o comércio local e garantindo dignidade ao cidadão.
            </p>
          </div>
        </div>

        {/* 6 Eixos de Serviços Integrados */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold font-mono text-[#57606a] uppercase tracking-wider">
            Serviços Previstos no Projeto de Lei:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <FileCheck className="w-4 h-4" />
                <span>IGP / CIN (Carteira de Identidade)</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Emissão presencial de 1ª e 2ª vias da Carteira de Identidade Nacional com biometria rápida.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <Car className="w-4 h-4" />
                <span>DetranRS (Condutores &amp; Veículos)</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Requerimentos, defesas de autuação, recursos de infrações e processos de habilitação.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <ShieldCheck className="w-4 h-4" />
                <span>Balcão Gov.br &amp; Inclusão</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Criação, recuperação de senhas, validação facial e elevação de contas Ouro/Prata.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <Users className="w-4 h-4" />
                <span>IPE Prev, IPE Saúde &amp; FADERS</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Atendimento a servidores, solicitação de CIPTEA (autismo) e Passe Livre Intermunicipal.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <Building2 className="w-4 h-4" />
                <span>CORSAN &amp; RGE Sul</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Balcão presencial para ligação de água/luz, revisão de faturas e regularizações.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-white border border-[#d0d7de] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969da]">
                <Briefcase className="w-4 h-4" />
                <span>Prefeitura &amp; Apoio ao MEI</span>
              </div>
              <p className="text-[11px] text-[#57606a] leading-relaxed">
                Certidões municipais, IPTU, abertura rápida de empresas e suporte ao microempreendedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 2: MINUTA INTEGRAL DO PROJETO DE LEI */}
      {/* ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif">
            2. Minuta Oficial do Projeto de Lei
          </h2>
          <span className="text-xs text-[#57606a] font-mono">
            [Poder Executivo / Câmara de Vereadores de Taquara]
          </span>
        </div>

        {/* Paper Container */}
        <div className="p-6 sm:p-10 rounded-lg bg-white border-2 border-[#d0d7de] shadow-xs space-y-6 text-[#24292f] leading-relaxed wiki-serif print:border-none print:p-0">
          
          {/* Header & Number */}
          <div className="text-center space-y-2 border-b border-[#eaeef2] pb-6">
            <span className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-widest block">
              ESTADO DO RIO GRANDE DO SUL • MUNICÍPIO DE TAQUARA
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#1f2328] font-mono">
              {bill.number}
            </h3>
          </div>

          {/* Ementa */}
          <div className="flex justify-end my-4">
            <div className="w-full sm:w-2/3 p-4 rounded bg-[#f6f8fa] border-l-4 border-l-[#0969da] border border-[#eaeef2] text-xs sm:text-sm font-semibold italic text-[#1f2328] leading-relaxed text-justify">
              {bill.ementa}
            </div>
          </div>

          {/* Preâmbulo */}
          <p className="text-xs sm:text-sm font-semibold text-[#1f2328] text-justify">
            {bill.preamble}
          </p>

          {/* Artigos */}
          <div className="space-y-4 text-xs sm:text-sm text-justify">
            {bill.articles.map((art, idx) => (
              <div key={idx} className="space-y-2">
                <p>
                  <strong className="text-[#1f2328] font-bold font-mono">{art.article}</strong> {art.text}
                </p>
                {art.items && (
                  <div className="pl-4 sm:pl-6 space-y-1.5 text-[#333]">
                    {art.items.map((item, itemIdx) => (
                      <p key={itemIdx} className="text-justify">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Closing Gabinete */}
          <div className="pt-6 border-t border-[#eaeef2] space-y-4">
            <p className="text-xs sm:text-sm text-center italic text-[#57606a]">
              {bill.closingOffice}
            </p>

            <div className="text-center pt-2">
              <div className="w-48 mx-auto border-b border-[#1f2328] mb-1.5" />
              <strong className="block text-xs sm:text-sm font-bold text-[#1f2328]">Sirlei Silveira</strong>
              <span className="text-xs text-[#57606a]">Prefeita Municipal de Taquara/RS</span>
            </div>
          </div>

          {/* JUSTIFICATIVA */}
          <div className="pt-8 border-t-2 border-dashed border-[#d0d7de] space-y-4">
            <div className="text-center space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#1f2328] font-mono tracking-wider">
                {bill.justificativaHeader}
              </h4>
              <p className="text-xs sm:text-sm font-bold text-[#1f2328] italic">
                {bill.justificativaSalutation}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-justify">
              {bill.justificativaParagraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-xs sm:text-sm text-right text-[#57606a] italic">
                {bill.closingPlaceDate}
              </p>

              <div className="text-center pt-2">
                <div className="w-48 mx-auto border-b border-[#1f2328] mb-1.5" />
                <strong className="block text-xs sm:text-sm font-bold text-[#1f2328]">Vini Amaral</strong>
                <span className="text-xs text-[#57606a]">Proponente Cidadão</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 3: MOBILIZAÇÃO CIDADÃ & ABAIXO-ASSINADO NA CHANGE.ORG */}
      {/* ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-lg bg-gradient-to-r from-[#1f883d]/10 via-white to-[#0969da]/10 border-2 border-[#1f883d]/30 shadow-xs space-y-5">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-[#1a7f37] uppercase tracking-wider">
            Participe da Mobilização Popular
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif">
            Abaixo-Assinado Oficial: Instalar Unidade Tudo Fácil em Taquara/RS
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#424a53] leading-relaxed wiki-serif text-justify">
          Ajude a transformar este projeto em realidade! Cada assinatura fortalece o pedido formal junto à Prefeitura Municipal de Taquara, à Câmara de Vereadores e ao Governo do Estado do Rio Grande do Sul.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={data.signatureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-sm font-bold shadow-xs transition-colors"
          >
            <FileCheck className="w-4 h-4" />
            <span>Assinar Petição no Change.org</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={data.whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-white border border-[#d0d7de] hover:bg-[#f6f8fa] text-[#1f2328] text-xs sm:text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#1a7f37]" />
            <span>Compartilhar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-md bg-white hover:bg-[#f6f8fa] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
                <span className="text-[#1a7f37]">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                <span>Copiar Link da Petição</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Bottom Return Button */}
      <div className="pt-4 border-t border-[#d0d7de] flex justify-between items-center">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0969da] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Voltar para a Página Inicial</span>
        </button>

        <a
          href={data.signatureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#1a7f37] hover:underline inline-flex items-center gap-1"
        >
          <span>Acessar Change.org</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
