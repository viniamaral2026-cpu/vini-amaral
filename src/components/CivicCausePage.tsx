import React, { useState } from 'react';
import { 
  Vote, 
  Share2, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  ShieldAlert, 
  Sparkles, 
  Scale, 
  FileText, 
  Users, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  Landmark,
  Lightbulb,
  Printer,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Download,
  Newspaper,
  Mail,
  ShoppingCart,
  Bot,
  AlertTriangle,
  Clock,
  ShieldCheck,
  FileCode,
  Globe,
  Lock,
  Zap,
  TrendingUp
} from 'lucide-react';
import { PETITIONS_DATA, PERSONAL_DATA } from '../data/portfolioData';

interface CivicCausePageProps {
  onBackToHome: () => void;
}

export const CivicCausePage: React.FC<CivicCausePageProps> = ({ onBackToHome }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedMinuta, setCopiedMinuta] = useState(false);
  const [copiedPetitionText, setCopiedPetitionText] = useState(false);
  const [isMinutaOpen, setIsMinutaOpen] = useState(true);

  const petition = PETITIONS_DATA[0];

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const generateFullMinutaText = () => {
    const draft = petition.billDraft;
    let fullText = `${draft.header}\n`;
    fullText += `TÍTULO: ${draft.title}\n\n`;
    fullText += `Ementa: ${draft.ementa}\n\n`;
    fullText += `${draft.decree}\n\n`;

    draft.chapters.forEach((chap) => {
      fullText += `${chap.chapter}\n`;
      chap.articles.forEach((art) => {
        fullText += `${art.article} ${art.text}\n`;
        if (art.paragrafoUnico) {
          fullText += `${art.paragrafoUnico}\n`;
        }
        if (art.items) {
          art.items.forEach((item) => {
            fullText += `  ${item}\n`;
          });
        }
      });
      fullText += '\n';
    });

    fullText += `JUSTIFICATIVA\n\n${draft.justificativa}\n`;
    return fullText;
  };

  const handleCopyMinuta = () => {
    const text = generateFullMinutaText();
    navigator.clipboard.writeText(text);
    setCopiedMinuta(true);
    setTimeout(() => setCopiedMinuta(false), 2500);
  };

  const handleCopyPetitionText = () => {
    const p = petition.changeOrgPetition;
    let fullText = `TÍTULO:\n${p.title}\n\nDESCRIÇÃO:\n${p.descriptionText}\n\n`;
    p.demands.forEach((d) => {
      fullText += `• ${d.title}: ${d.desc}\n`;
    });
    fullText += `\nAssine o abaixo-assinado: ${petition.signatureUrl}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPetitionText(true);
    setTimeout(() => setCopiedPetitionText(false), 2500);
  };

  const handlePrintMinuta = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const draft = petition.billDraft;
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${draft.header} - ${draft.title}</title>
          <style>
            body { font-family: 'Times New Roman', serif; line-height: 1.6; margin: 40px; color: #111; font-size: 13pt; }
            .header { text-align: center; font-weight: bold; margin-bottom: 8px; font-size: 15pt; }
            .title { text-align: center; font-weight: bold; margin-bottom: 20px; font-size: 12pt; text-transform: uppercase; }
            .ementa { text-align: justify; margin-left: 35%; font-style: italic; margin-bottom: 30px; font-size: 11pt; border-left: 2px solid #ccc; padding-left: 12px; }
            .decree { font-weight: bold; margin-bottom: 20px; text-align: center; }
            .chapter { font-weight: bold; margin-top: 25px; margin-bottom: 10px; text-transform: uppercase; font-size: 12pt; }
            .article { margin-bottom: 12px; text-align: justify; text-indent: 2em; }
            .paragrafo { margin-bottom: 12px; text-align: justify; text-indent: 2em; }
            .item { margin-left: 3em; margin-bottom: 6px; text-align: justify; }
            .justificativa { margin-top: 40px; border-top: 1px solid #999; padding-top: 20px; }
            .justificativa h3 { text-align: center; font-size: 14pt; }
            .justificativa p { text-indent: 2em; text-align: justify; margin-bottom: 12px; }
          </style>
        </head>
        <body>
          <div class="header">${draft.header}</div>
          <div class="title">TÍTULO: ${draft.title}</div>
          <div class="ementa"><strong>Ementa:</strong> ${draft.ementa}</div>
          <div class="decree">${draft.decree}</div>
          ${draft.chapters.map(chap => `
            <div class="chapter">${chap.chapter}</div>
            ${chap.articles.map(art => `
              <div class="article"><strong>${art.article}</strong> ${art.text}</div>
              ${art.paragrafoUnico ? `<div class="paragrafo">${art.paragrafoUnico}</div>` : ''}
              ${art.items ? art.items.map(it => `<div class="item">${it}</div>`).join('') : ''}
            `).join('')}
          `).join('')}
          <div class="justificativa">
            <h3>JUSTIFICATIVA</h3>
            ${draft.justificativa.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  // Social share URLs
  const shareText = encodeURIComponent("Apoie a Lei do Canal Direto e a Modernização do Consumidor.gov.br! Assine o abaixo-assinado contra desertos de atendimento e fraudes digitais:");
  const petitionUrl = encodeURIComponent(petition.signatureUrl);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${petitionUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${petitionUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${petitionUrl}`;

  return (
    <div id="pagina-lei-canal-direto" className="space-y-10">
      
      {/* Top Navigation & Breadcrumb */}
      <nav aria-label="Navegação estrutural" className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0969da] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Portfólio Principal</span>
        </button>

        <div className="flex items-center gap-2 text-[11px] text-[#57606a] font-mono">
          <span>Iniciativa Cidadã</span>
          <span>/</span>
          <span className="text-[#1f2328] font-bold">Lei do Canal Direto</span>
        </div>
      </nav>

      {/* Header Editorial Principal */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#0969da] text-white font-mono flex items-center gap-1">
            <Scale className="w-3 h-3" />
            Iniciativa Cidadã Popular
          </span>

          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]/30 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Abaixo-Assinado Oficial Ativo
          </span>

          <span className="text-xs text-[#57606a] font-mono">
            Ano 2026 • Proposta Legislativa
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="text-xs sm:text-sm font-bold font-mono tracking-wider text-[#0969da] uppercase">
            {petition.movementTitle}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f2328] wiki-serif tracking-tight leading-tight">
            {petition.movementSubtitle}
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#424a53] leading-relaxed wiki-serif max-w-4xl">
          Proposta legislativa de iniciativa popular e mobilização cidadã para a <strong>modernização estrutural do Consumidor.gov.br</strong> e 
          criação da <strong>Lei do Canal Direto</strong>, unificando denúncias com autenticação Gov.br, combate cautelar a fraudes via Pix, 
          eliminação de desertos de atendimento do PROCON e encaminhamento obrigatório ao Ministério Público e Defensoria/OAB.
        </p>

        {/* Autor e Órgãos Alvo */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-[#57606a] border-t border-[#eaeef2]">
          <div>
            <strong className="text-[#1f2328]">Idealização &amp; Redação Cidadã: </strong>
            <span>{PERSONAL_DATA.fullName} ({PERSONAL_DATA.name})</span>
          </div>
          <span className="hidden sm:inline text-[#d0d7de]">•</span>
          <div>
            <strong className="text-[#1f2328]">Fundamentação Constitucional: </strong>
            <span>Art. 5º, XXXII e Art. 170, V da CF/88</span>
          </div>
          <span className="hidden sm:inline text-[#d0d7de]">•</span>
          <div>
            <strong className="text-[#1f2328]">Ambiente: </strong>
            <span>Consumidor.gov.br &amp; SNDC</span>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SEÇÃO 1: MENSAGEM DO MOVIMENTO & A CAUSA */}
      {/* ========================================================================= */}
      <section id="mensagem-movimento" className="space-y-5">
        <div className="border-b border-[#d0d7de] pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#cf222e]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif tracking-tight">
              {petition.movementMessage.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#656d76]">[diagnóstico de urgência]</span>
        </div>

        {/* Por que precisamos dessa mudança urgente? */}
        <div className="p-5 rounded-lg bg-[#ffffff] border border-[#d0d7de] shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-[#0969da]" />
            <h3 className="text-base sm:text-lg font-bold text-[#1f2328] wiki-serif">
              {petition.movementMessage.urgentQuestion}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#424a53] leading-relaxed wiki-serif">
            {petition.movementMessage.urgentText}
          </p>
        </div>

        {/* 4 Gargalos Históricos */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#cf222e] flex items-center gap-1.5 font-mono">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{petition.movementMessage.bottlenecksTitle}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {petition.movementMessage.bottlenecks.map((item, idx) => (
              <div 
                key={item.id}
                className="p-4 rounded-lg bg-[#ffffff] border border-[#d0d7de] hover:border-[#cf222e]/40 shadow-2xs space-y-2 transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#ffebe9] text-[#cf222e] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#1f2328] leading-tight">
                      {item.title}
                    </h5>
                  </div>
                </div>
                <p className="text-xs text-[#57606a] leading-relaxed pl-8 wiki-serif">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Callout de Evolução do Consumidor.gov.br */}
        <div className="p-4 sm:p-5 rounded-lg bg-gradient-to-r from-[#ddf4ff] via-[#f0f9ff] to-[#ffffff] border-l-4 border-l-[#0969da] border border-[#bae6fd] shadow-2xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#0969da]">
            <Sparkles className="w-4 h-4" />
            <span>A Transformação do Consumidor.gov.br:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#1f2328] leading-relaxed wiki-serif font-medium">
            "{petition.movementMessage.evolutionCallout}"
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 2: MINUTA COMPLETA DO PROJETO DE LEI */}
      {/* ========================================================================= */}
      <section 
        id="minuta-completa-projeto-de-lei"
        className="github-box overflow-hidden shadow-2xs border border-[#d0d7de] rounded-lg"
      >
        {/* Accordion / Visualizer Header */}
        <div className="p-4 sm:p-5 github-header-bg border-b border-[#d0d7de] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-white border border-[#d0d7de] text-[#0969da] shrink-0 mt-0.5">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]">
                  {petition.billDraft.sectionTitle}
                </span>
                <span className="text-xs text-[#57606a] font-mono">
                  Ano 2026
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1f2328] wiki-serif mt-1">
                {petition.billDraft.title}
              </h3>
              <p className="text-xs text-[#57606a] font-medium">
                {petition.billDraft.header}
              </p>
            </div>
          </div>

          {/* Action Toolbar on Minuta Header */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMinuta}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors shadow-2xs cursor-pointer"
              title="Copiar texto integral da Minuta de Lei"
            >
              {copiedMinuta ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
                  <span className="text-[#1a7f37]">Minuta Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>Copiar Minuta</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrintMinuta}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors shadow-2xs cursor-pointer"
              title="Imprimir ou Salvar Minuta em PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#656d76]" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMinutaOpen(!isMinutaOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#0969da] transition-colors cursor-pointer"
              title={isMinutaOpen ? 'Ocultar texto' : 'Expandir texto'}
            >
              <span>{isMinutaOpen ? 'Ocultar' : 'Exibir Texto'}</span>
              {isMinutaOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Minuta Body (Official Document Typography) */}
        {isMinutaOpen && (
          <div className="p-4 sm:p-8 bg-[#ffffff] space-y-6 text-[#1f2328] border-b border-[#eaeef2]">
            
            {/* Document Header & Ementa */}
            <div className="text-center space-y-2 border-b border-[#d0d7de] pb-5">
              <h4 className="font-bold text-sm sm:text-base tracking-wide font-mono text-[#1f2328]">
                {petition.billDraft.header}
              </h4>
              
              <div className="text-xs font-bold uppercase tracking-wider text-[#57606a] font-mono">
                TÍTULO: {petition.billDraft.title}
              </div>

              <div className="max-w-2xl ml-auto text-xs sm:text-sm italic text-[#424a53] text-justify leading-relaxed bg-[#f6f8fa] p-3.5 rounded border border-[#eaeef2] mt-3">
                <strong className="not-italic text-[#1f2328]">Ementa: </strong>
                {petition.billDraft.ementa}
              </div>

              <div className="pt-3 font-bold text-xs uppercase tracking-widest text-[#1f2328]">
                {petition.billDraft.decree}
              </div>
            </div>

            {/* Articles Structured List */}
            <div className="space-y-6 text-xs sm:text-sm">
              {petition.billDraft.chapters.map((chap, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#0969da] border-b border-[#eaeef2] pb-1 font-mono">
                    {chap.chapter}
                  </h5>

                  <div className="space-y-3 pl-2 sm:pl-4">
                    {chap.articles.map((art, aIdx) => (
                      <div key={aIdx} className="space-y-1.5">
                        <p className="leading-relaxed text-justify wiki-serif">
                          <strong className="font-mono text-[#1f2328] font-bold">{art.article} </strong>
                          {art.text}
                        </p>

                        {art.paragrafoUnico && (
                          <p className="leading-relaxed text-justify wiki-serif pl-4 text-[#424a53] italic">
                            <strong className="not-italic font-mono text-[#1f2328]">Parágrafo único. </strong>
                            {art.paragrafoUnico.replace('Parágrafo único. ', '')}
                          </p>
                        )}

                        {art.items && (
                          <ul className="pl-4 sm:pl-6 space-y-1.5 text-xs text-[#424a53]">
                            {art.items.map((it, itIdx) => (
                              <li key={itIdx} className="leading-relaxed text-justify wiki-serif">
                                {it}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Justificativa Box */}
            <div className="pt-4 border-t-2 border-[#d0d7de] space-y-3">
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#0969da]" />
                <h5 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-[#1f2328]">
                  Justificativa da Proposta Legislativa
                </h5>
              </div>

              <div className="p-4 sm:p-5 rounded bg-[#f6f8fa] border border-[#d0d7de] text-xs sm:text-sm leading-relaxed space-y-3 text-[#24292f]">
                {petition.billDraft.justificativa.split('\n\n').map((par, pIdx) => (
                  <p key={pIdx} className="wiki-serif text-justify">
                    {par}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Minuta Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyMinuta}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] font-semibold text-[#1f2328] transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>{copiedMinuta ? 'Copiado para a Área de Transferência!' : 'Copiar Texto Integral da Minuta'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintMinuta}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] font-semibold text-[#1f2328] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>Gerar Versão para Impressão / PDF</span>
                </button>
              </div>

              <a
                href={petition.signatureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0969da] hover:underline inline-flex items-center gap-1"
              >
                <span>Assinar Apoio ao Projeto na Change.org</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 3: TEXTO PARA O ABAIXO-ASSINADO (CHANGE.ORG) */}
      {/* ========================================================================= */}
      <section 
        id="texto-abaixo-assinado-change"
        className="p-5 sm:p-7 rounded-lg bg-gradient-to-r from-[#0969da]/10 via-[#ffffff] to-[#dafbe1]/40 border-2 border-[#0969da]/40 shadow-sm space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0969da]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-[#0969da] text-white">
              <Vote className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold text-[#0969da] uppercase tracking-wider">
              {petition.changeOrgPetition.sectionTitle}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Petição Pública Oficial</span>
          </span>
        </div>

        {/* Título e Descrição da Petição */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#57606a]">Título na Change.org:</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif mt-0.5">
              {petition.changeOrgPetition.title}
            </h2>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-white border border-[#d0d7de] space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#57606a]">Descrição do Abaixo-Assinado:</span>
            <div className="text-xs sm:text-sm text-[#24292f] leading-relaxed space-y-3 wiki-serif">
              {petition.changeOrgPetition.descriptionText.split('\n\n').map((par, pIdx) => (
                <p key={pIdx}>
                  {par}
                </p>
              ))}
            </div>

            {/* As 5 Exigências Estruturadas */}
            <div className="pt-2 space-y-2">
              <div className="font-bold text-xs uppercase text-[#0969da] font-mono">
                Pilares Exigidos ao Ministério da Justiça, Senacon e Congresso Nacional:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                {petition.changeOrgPetition.demands.map((dem, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-md bg-[#f6f8fa] border border-[#d0d7de] space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#1f2328]">
                      <Check className="w-3.5 h-3.5 text-[#1a7f37] shrink-0" />
                      <span>{dem.title}</span>
                    </div>
                    <p className="text-xs text-[#57606a] leading-relaxed pl-5 wiki-serif">
                      {dem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button & Social Share Toolbar */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={petition.signatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-assinar-change-org"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-bold text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-sm transition-all hover:scale-[1.01]"
            >
              <FileText className="w-4 h-4" />
              <span>Assinar Agora na Change.org</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={petition.whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-apoiar-whatsapp"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold text-white bg-[#0969da] hover:bg-[#085cc0] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Apoiar no WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyPetitionText}
              className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors cursor-pointer"
              title="Copiar texto da petição para compartilhar"
            >
              {copiedPetitionText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
                  <span className="text-[#1a7f37]">Texto Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>Copiar Texto da Petição</span>
                </>
              )}
            </button>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-[#57606a]">
            <span className="font-semibold text-[11px] hidden md:inline">Compartilhar:</span>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#1f2328] transition-colors"
              title="Compartilhar no X (Twitter)"
              aria-label="Compartilhar no X"
            >
              <span className="font-bold text-xs">𝕏</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#1f2328] font-bold text-xs transition-colors"
              title="Compartilhar no Facebook"
              aria-label="Compartilhar no Facebook"
            >
              f
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#0969da] font-bold text-xs transition-colors"
              title="Compartilhar no LinkedIn"
              aria-label="Compartilhar no LinkedIn"
            >
              in
            </a>
            <button
              type="button"
              onClick={() => handleCopyLink(petition.signatureUrl, 'quick-action')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors cursor-pointer"
              title="Copiar Link da Petição"
            >
              {copiedLink === 'quick-action' ? (
                <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#656d76]" />
              )}
              <span>{copiedLink === 'quick-action' ? 'Copiado!' : 'Copiar Link'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SESSÃO PARA IMPRENSA, PARLAMENTARES & APOIO INSTITUCIONAL */}
      {/* ========================================================================= */}
      <section className="p-5 sm:p-6 rounded-lg bg-[#f6f8fa] border border-[#d0d7de] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-white border border-[#d0d7de] text-[#0969da] shrink-0 mt-0.5">
            <Newspaper className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-[#1f2328]">
              Área para Imprensa, Parlamentares &amp; Entidades Civis
            </h4>
            <p className="text-xs text-[#57606a] mt-0.5 leading-relaxed wiki-serif">
              É jornalista, membro do poder legislativo ou representa uma organização de defesa do consumidor e deseja apoiar a tramitação deste projeto? Entre em contato direto:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 self-stretch sm:self-auto">
          <a
            href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent('Olá Vini! Sou da imprensa / mandato parlamentar e gostaria de conversar sobre a Minuta de Projeto de Lei da Defesa do Consumidor (Lei do Canal Direto).')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
            <span>Contato Imprensa (WhatsApp)</span>
          </a>

          <a
            href={`mailto:${PERSONAL_DATA.email}?subject=${encodeURIComponent('Apoio / Imprensa - Minuta Projeto de Lei Defesa do Consumidor')}`}
            className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-xs font-semibold text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Enviar E-mail</span>
          </a>
        </div>
      </section>

      {/* Bottom Back Button */}
      <div className="pt-4 border-t border-[#d0d7de] flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Portfólio Principal</span>
        </button>

        <a
          href="#pagina-lei-canal-direto"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-medium text-[#0969da] hover:underline"
        >
          Voltar ao topo ↑
        </a>
      </div>

    </div>
  );
};
