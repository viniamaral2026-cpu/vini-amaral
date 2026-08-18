import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  Clock,
  Briefcase,
  Building2
} from 'lucide-react';
import { PERSONAL_DATA, COMPANY_DATA } from '../data/portfolioData';

export const ContactWiki: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [userName, setUserName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = userName ? `Olá Vini, me chamo ${userName}.` : 'Olá Vini!';
    const message = customMsg || 'Gostaria de conversar sobre oportunidades e serviços operacionais.';
    const fullText = `${greeting} ${message}`;
    const url = `https://wa.me/${PERSONAL_DATA.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="space-y-6 scroll-mt-20">
      {/* Section Title */}
      <div className="border-b border-[#d0d7de] pb-1">
        <h2 className="text-xl sm:text-2xl font-normal text-[#1f2328] wiki-serif tracking-tight flex items-center justify-between">
          <span>9. Informações de Contato &amp; Conexões</span>
          <span className="text-xs font-mono text-[#656d76]">[contato]</span>
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-[#1f2328] wiki-serif">
        Disponível para contratação profissional CLT/PJ, prestação de serviços operacionais e consultoria pela <strong>{COMPANY_DATA.name}</strong>:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Direct Contact Cards */}
        <div className="lg:col-span-6 space-y-3">
          
          {/* WhatsApp Card */}
          <div className="p-4 rounded-md border border-[#4ac26b] bg-[#dafbe1]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1f883d] text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#1f2328]">WhatsApp Direto</h3>
                <p className="text-xs text-[#1f2328] font-mono">{PERSONAL_DATA.phoneDisplay}</p>
                <span className="text-[11px] text-[#1a7f37] font-medium">Resposta rápida no dia a dia</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <a
                href={PERSONAL_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#1f883d] hover:bg-[#1a7f37] transition-colors"
              >
                <span>Abrir Conversa</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-1.5 rounded-md border border-[#d0d7de] bg-white hover:bg-[#eaeef2] text-[#1f2328]"
                title="Copiar número"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#1a7f37]" /> : <Copy className="w-4 h-4 text-[#656d76]" />}
              </button>
            </div>
          </div>

          {/* Company PJ Card */}
          <div className="p-3.5 rounded-md border border-[#0969da]/40 bg-[#ddf4ff]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0969da] text-white flex items-center justify-center shrink-0 font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-[#1f2328]">{COMPANY_DATA.name}</h3>
                <p className="text-[11px] text-[#57606a] font-mono">CNPJ: {COMPANY_DATA.cnpj}</p>
                <span className="text-[11px] text-[#0969da] font-medium">Emissão de NF &amp; Serviços PJ</span>
              </div>
            </div>

            <a
              href={COMPANY_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#0969da] hover:bg-[#085cc0] transition-colors shrink-0"
            >
              <span>Site da Empresa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Email Card */}
          <div className="p-4 rounded-md border border-[#d0d7de] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f6f8fa] border border-[#d0d7de] text-[#0969da] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#1f2328]">E-mail Corporativo</h3>
                <p className="text-xs text-[#656d76] font-mono">{PERSONAL_DATA.email}</p>
                <span className="text-[11px] text-[#656d76]">Propostas, contratos e documentação</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-[#1f2328] bg-[#f6f8fa] hover:bg-[#eaeef2] border border-[#d0d7de] transition-colors"
              >
                <span>Enviar E-mail</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md border border-[#d0d7de] bg-white hover:bg-[#eaeef2] text-[#1f2328]"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#1a7f37]" /> : <Copy className="w-4 h-4 text-[#656d76]" />}
              </button>
            </div>
          </div>

          {/* LinkedIn & GitHub Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-[#d0d7de] bg-white hover:border-[#0a66c2] transition-colors flex items-center gap-2.5"
            >
              <Linkedin className="w-5 h-5 text-[#0a66c2] shrink-0" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-[#1f2328]">LinkedIn</div>
                <div className="text-[11px] text-[#656d76] truncate font-mono">{PERSONAL_DATA.linkedinDisplay}</div>
              </div>
            </a>

            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md border border-[#d0d7de] bg-white hover:border-[#1f2328] transition-colors flex items-center gap-2.5"
            >
              <Github className="w-5 h-5 text-[#1f2328] shrink-0" />
              <div className="min-w-0">
                <div className="font-bold text-xs text-[#1f2328]">GitHub</div>
                <div className="text-[11px] text-[#656d76] truncate font-mono">{PERSONAL_DATA.githubDisplay}</div>
              </div>
            </a>
          </div>

          {/* Location, Curriculum & Availability Card */}
          <div className="p-3 rounded-md border border-[#d0d7de] bg-[#f6f8fa] text-xs space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#1f2328]">
              <MapPin className="w-4 h-4 text-[#0969da]" />
              <span>Localização &amp; Disponibilidade:</span>
            </div>
            <p className="text-[#656d76] pl-6 text-[11.5px]">
              {PERSONAL_DATA.location} • <strong>{PERSONAL_DATA.availability}</strong>
            </p>
            
            <div className="pt-2 border-t border-[#d0d7de] flex flex-wrap items-center gap-2 pl-6">
              <a
                href="/curriculo-vini-amaral.pdf"
                download="Curriculo-Marcos-Vinicius-Vini-Amaral.pdf"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0969da] hover:underline"
              >
                <span>📥 Baixar Currículo (PDF)</span>
              </a>
              <span className="text-[#d0d7de]">•</span>
              <a
                href="/curriculo.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0969da] hover:underline"
              >
                <span>📄 Ver Versão Web / Impressão</span>
              </a>
              <span className="text-[#d0d7de]">•</span>
              <a
                href="/eu.JPG"
                download="Foto-Vini-Amaral.jpg"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0969da] hover:underline"
              >
                <span>🖼️ Foto Original</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Quick Interactive WhatsApp Dispatch Form */}
        <div className="lg:col-span-6">
          <form 
            onSubmit={handleSendCustomWhatsApp}
            className="p-4 sm:p-5 rounded-md border border-[#d0d7de] bg-white shadow-2xs space-y-3.5"
          >
            <div className="border-b border-[#d0d7de] pb-2">
              <h3 className="font-bold text-sm text-[#1f2328] flex items-center gap-2">
                <Send className="w-4 h-4 text-[#0969da]" />
                <span>Mensagem Rápida via WhatsApp</span>
              </h3>
              <p className="text-xs text-[#656d76] mt-0.5">
                Envie sua solicitação diretamente para o WhatsApp de Vini Amaral:
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1f2328] mb-1">
                Seu Nome ou Empresa:
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Dr. Carlos / Escritório Silva"
                className="w-full px-3 py-2 text-xs bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-[#1f2328] focus:outline-none focus:bg-white focus:border-[#0969da]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1f2328] mb-1">
                Como Vini Amaral pode ajudar sua equipe?
              </label>
              <textarea
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Ex: Gostaria de alinhar suporte para organização de dossiês e processos no meu escritório..."
                className="w-full px-3 py-2 text-xs bg-[#f6f8fa] border border-[#d0d7de] rounded-md text-[#1f2328] focus:outline-none focus:bg-white focus:border-[#0969da]"
              />
            </div>

            <button
              type="submit"
              id="contact-form-whatsapp-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#1f883d] hover:bg-[#1a7f37] border border-[rgba(31,35,40,0.15)] shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar via WhatsApp agora</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
