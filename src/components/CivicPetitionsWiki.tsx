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
  Landmark,
  Lightbulb,
  Printer,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Download,
  Newspaper,
  Mail,
  Send
} from 'lucide-react';
import { PETITIONS_DATA, PERSONAL_DATA, COMPANY_DATA } from '../data/portfolioData';

export const CivicPetitionsWiki: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedMinuta, setCopiedMinuta] = useState(false);
  const [isMinutaOpen, setIsMinutaOpen] = useState(true);

  const petition = PETITIONS_DATA[0];

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const generateFullMinutaText = () => {
    const draft = petition.billDraft;
    let fullText = `${draft.header}\n\n`;
    fullText += `Ementa: ${draft.ementa}\n\n`;
    fullText += `${draft.decree}\n\n`;

    draft.chapters.forEach((chap) => {
      fullText += `${chap.chapter}\n`;
      chap.articles.forEach((art) => {
        fullText += `${art.article} ${art.text}\n`;
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

  const handlePrintMinuta = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const draft = petition.billDraft;
    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${draft.header} - Minuta de Projeto de Lei</title>
          <style>
            body { font-family: 'Times New Roman', serif; line-height: 1.6; margin: 40px; color: #111; font-size: 14pt; }
            .header { text-align: center; font-weight: bold; margin-bottom: 20px; font-size: 16pt; }
            .ementa { text-align: justify; margin-left: 40%; font-style: italic; margin-bottom: 30px; font-size: 12pt; }
            .decree { font-weight: bold; margin-bottom: 20px; }
            .chapter { font-weight: bold; margin-top: 25px; margin-bottom: 10px; text-transform: uppercase; }
            .article { margin-bottom: 12px; text-align: justify; text-indent: 2em; }
            .item { margin-left: 3em; margin-bottom: 6px; }
            .justificativa { margin-top: 40px; border-top: 1px solid #999; padding-top: 20px; }
            .justificativa h3 { text-align: center; font-size: 15pt; }
            .justificativa p { text-indent: 2em; text-align: justify; }
          </style>
        </head>
        <body>
          <div class="header">${draft.header}</div>
          <div class="ementa">${draft.ementa}</div>
          <div class="decree">${draft.decree}</div>
          ${draft.chapters.map(chap => `
            <div class="chapter">${chap.chapter}</div>
            ${chap.articles.map(art => `
              <div class="article"><strong>${art.article}</strong> ${art.text}</div>
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
  const shareText = encodeURIComponent("Apoie a Reforma da Proteção ao Consumidor no Brasil! Assine a petição pública por um sistema mais rápido e eficiente:");
  const petitionUrl = encodeURIComponent(petition.signatureUrl);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${petitionUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${petitionUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${petitionUrl}`;

  return (
    <section id="projetos-lei" className="space-y-6 scroll-mt-24">
      {/* Wikipedia Section Title */}
      <div className="border-b border-[#d0d7de] pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#0969da]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#1f2328] wiki-serif tracking-tight">
            Projetos de Lei, Abaixo-Assinados &amp; Causas Cidadãs
          </h2>
        </div>
        <span className="text-xs text-[#57606a] font-mono">
          [iniciativas de impacto público e cidadania]
        </span>
      </div>

      {/* Intro Wikipedia Paragraph */}
      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Além da atuação técnica e operacional em controladoria e tecnologia, esta seção reúne 
        <strong> iniciativas cidadãs, projetos de lei de iniciativa popular e abaixo-assinados públicos</strong> idealizados 
        para combater ineficiências sistêmicas, desburocratizar serviços públicos e fortalecer os direitos fundamentais do 
        cidadão brasileiro através da inovação e da transparência.
      </p>

      {/* ========================================================================= */}
      {/* BLOCO 1: O ABAIXO-ASSINADO (AÇÃO RÁPIDA - DESTAQUE CHAMATIVO) */}
      {/* ========================================================================= */}
      <div className="p-5 sm:p-6 rounded-lg bg-linear-to-r from-[#0969da]/5 via-[#f6f8fa] to-[#dafbe1]/30 border-2 border-[#0969da]/30 shadow-xs relative overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-full bg-[#0969da] text-white">
              <Vote className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold text-[#0969da] uppercase tracking-wider">
              Ação Rápida de Cidadania • Abaixo-Assinado
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Petição Pública Ativa</span>
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#1f2328] wiki-serif">
            {petition.quickAction.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#424a53] mt-1 leading-relaxed wiki-serif">
            "{petition.quickAction.shortText}"
          </p>
        </div>

        {/* CTA Button & Social Share Toolbar */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={petition.signatureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-bold text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-sm transition-all hover:scale-[1.01]"
            >
              <FileText className="w-4 h-4" />
              <span>Assinar o Abaixo-Assinado na Change.org</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={petition.whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grow sm:grow-0 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs sm:text-sm font-semibold text-white bg-[#0969da] hover:bg-[#085cc0] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Apoiar no WhatsApp</span>
            </a>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs text-[#57606a]">
            <span className="font-semibold text-[11px] hidden md:inline">Compartilhar:</span>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#1f2328] transition-colors"
              title="Compartilhar no X (Twitter)"
              aria-label="Compartilhar no X"
            >
              <span className="font-bold text-xs">𝕏</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#1f2328] font-bold text-xs transition-colors"
              title="Compartilhar no Facebook"
              aria-label="Compartilhar no Facebook"
            >
              f
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-[#0969da] font-bold text-xs transition-colors"
              title="Compartilhar no LinkedIn"
              aria-label="Compartilhar no LinkedIn"
            >
              in
            </a>
            <button
              type="button"
              onClick={() => handleCopyLink(petition.signatureUrl, 'quick-action')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors"
              title="Copiar Link da Petição"
            >
              {copiedLink === 'quick-action' ? (
                <Check className="w-3.5 h-3.5 text-[#1a7f37]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#656d76]" />
              )}
              <span>{copiedLink === 'quick-action' ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETALHAMENTO DO PROBLEMA E DA JUSTIFICATIVA SOCIAL */}
      {/* ========================================================================= */}
      <div className="github-box overflow-hidden shadow-2xs border border-[#d0d7de] rounded-lg">
        <div className="p-4 sm:p-5 github-header-bg border-b border-[#d0d7de] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#cf222e]" />
            <h3 className="font-bold text-sm sm:text-base text-[#1f2328] wiki-serif">
              Diagnóstico do Cenário e Ineficiências da Proteção ao Consumidor
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#57606a]">
            Art. 5º, XXXII da CF/88 &amp; SNDC/Senacon
          </span>
        </div>

        <div className="p-4 sm:p-6 bg-white space-y-6 text-sm">
          {/* Relato do Problema */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#cf222e]">
              O Problema Enfrentado pelo Cidadão
            </h4>
            <div className="p-4 rounded-md bg-[#fff8f8] border border-[#ffc1c0] text-[#1f2328] text-xs sm:text-sm leading-relaxed space-y-3">
              {petition.problemText.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="wiki-serif">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* 4 Eixos da Proposta */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0969da] flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Eixos Estratégicos de Modernização Propostos</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {petition.proposalPoints.map((point, ptIdx) => (
                <div 
                  key={ptIdx}
                  className="p-3.5 rounded-md bg-[#f6f8fa] border border-[#d0d7de] space-y-1.5 hover:border-[#0969da]/40 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#ddf4ff] text-[#0969da] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {ptIdx + 1}
                    </span>
                    <h5 className="font-semibold text-xs sm:text-[13px] text-[#1f2328] leading-tight">
                      {point.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#57606a] leading-relaxed pl-7">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chamamento */}
          <div className="p-4 rounded-md bg-[#f0f9ff] border border-[#bae6fd] text-[#0c4a6e] text-xs sm:text-sm leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#0369a1]">
              <Users className="w-4 h-4 shrink-0" />
              <span>Construindo um Sistema Justo e Transparente:</span>
            </div>
            {petition.closingMessage.split('\n\n').map((msg, mIdx) => (
              <p key={mIdx} className="wiki-serif">
                {msg}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BLOCO 2: A PROPOSTA LEGISLATIVA (A SOLUÇÃO - MINUTA DO PROJETO DE LEI) */}
      {/* ========================================================================= */}
      <div 
        id="minuta-projeto-de-lei"
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
                  Texto Legislativo Completo
                </span>
                <span className="text-xs text-[#57606a] font-mono">
                  Ano 2026
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1f2328] wiki-serif mt-1">
                {petition.billDraft.title}
              </h3>
              <p className="text-xs text-[#57606a] font-medium">
                {petition.billDraft.subtitle}
              </p>
            </div>
          </div>

          {/* Action Toolbar on Minuta Header */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMinuta}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors shadow-2xs"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors shadow-2xs"
              title="Imprimir ou Salvar Minuta em PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#656d76]" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMinutaOpen(!isMinutaOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#0969da] transition-colors"
              title={isMinutaOpen ? 'Ocultar texto' : 'Expandir texto'}
            >
              <span>{isMinutaOpen ? 'Ocultar' : 'Exibir Texto'}</span>
              {isMinutaOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Minuta Body (Expandable Accordion with Official Document Typography) */}
        {isMinutaOpen && (
          <div className="p-4 sm:p-8 bg-[#ffffff] space-y-6 text-[#1f2328] border-b border-[#eaeef2]">
            
            {/* Document Header & Ementa */}
            <div className="text-center space-y-2 border-b border-[#d0d7de] pb-5">
              <h4 className="font-bold text-sm sm:text-base tracking-wide font-mono text-[#1f2328]">
                {petition.billDraft.header}
              </h4>
              
              <div className="max-w-md ml-auto text-xs sm:text-sm italic text-[#424a53] text-justify leading-relaxed bg-[#f6f8fa] p-3 rounded border border-[#eaeef2]">
                <strong className="not-italic text-[#1f2328]">Ementa: </strong>
                {petition.billDraft.ementa}
              </div>

              <div className="pt-2 font-bold text-xs uppercase tracking-widest text-[#57606a]">
                {petition.billDraft.decree}
              </div>
            </div>

            {/* Articles Structured List */}
            <div className="space-y-6 text-xs sm:text-sm">
              {petition.billDraft.chapters.map((chap, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#0969da] border-b border-[#eaeef2] pb-1">
                    {chap.chapter}
                  </h5>

                  <div className="space-y-2.5 pl-2 sm:pl-4">
                    {chap.articles.map((art, aIdx) => (
                      <div key={aIdx} className="space-y-1.5">
                        <p className="leading-relaxed text-justify wiki-serif">
                          <strong className="font-mono text-[#1f2328] font-bold">{art.article} </strong>
                          {art.text}
                        </p>

                        {art.items && (
                          <ul className="pl-4 sm:pl-6 space-y-1 text-xs text-[#424a53]">
                            {art.items.map((it, itIdx) => (
                              <li key={itIdx} className="leading-relaxed">
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

              <div className="p-4 rounded bg-[#f6f8fa] border border-[#d0d7de] text-xs sm:text-sm leading-relaxed space-y-3 text-[#24292f]">
                {petition.billDraft.justificativa.split('\n\n').map((par, pIdx) => (
                  <p key={pIdx} className="wiki-serif text-justify">
                    {par}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Minuta Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyMinuta}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] font-semibold text-[#1f2328] transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-[#656d76]" />
                  <span>{copiedMinuta ? 'Copiado para a Área de Transferência!' : 'Copiar Texto Integral da Minuta'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintMinuta}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] font-semibold text-[#1f2328] transition-colors"
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
      </div>

      {/* ========================================================================= */}
      {/* SESSÃO PARA IMPRENSA, PARLAMENTARES & APOIO INSTITUCIONAL */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-lg bg-[#f6f8fa] border border-[#d0d7de] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            href={`https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent('Olá Vini! Sou da imprensa / mandato parlamentar e gostaria de conversar sobre a Minuta de Projeto de Lei da Defesa do Consumidor.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-white hover:bg-[#eaeef2] border border-[#d0d7de] text-xs font-semibold text-[#1f2328] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
            <span>Contato Imprensa (WhatsApp)</span>
          </a>

          <a
            href={`mailto:${PERSONAL_DATA.email}?subject=${encodeURIComponent('Apoio / Imprensa - Minuta Projeto de Lei Defesa do Consumidor')}`}
            className="grow sm:grow-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-xs font-semibold text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Enviar E-mail</span>
          </a>
        </div>
      </div>

    </section>
  );
};
