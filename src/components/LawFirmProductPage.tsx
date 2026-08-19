import React, { useState } from 'react';
import { 
  Scale, 
  ArrowLeft, 
  ExternalLink, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Users, 
  FileText, 
  Calendar, 
  DollarSign, 
  Lock, 
  Cpu, 
  BarChart3, 
  Clock, 
  Check, 
  ChevronRight, 
  Laptop, 
  ArrowRight,
  Database,
  Building2,
  FolderGit2,
  Eye,
  Key,
  Award,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Settings
} from 'lucide-react';
import { LAW_FIRM_PRODUCT_DATA, LAW_FIRM_PRICING_DATA, PERSONAL_DATA } from '../data/portfolioData';

interface LawFirmProductPageProps {
  onBackToHome: () => void;
}

export const LawFirmProductPage: React.FC<LawFirmProductPageProps> = ({ onBackToHome }) => {
  const [activeTabId, setActiveTabId] = useState<'dashboard' | 'processos' | 'financeiro'>('dashboard');
  const [billingCycle, setBillingCycle] = useState<'mensal' | 'anual'>('mensal');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentTab = LAW_FIRM_PRODUCT_DATA.demoScreens.find(s => s.id === activeTabId) || LAW_FIRM_PRODUCT_DATA.demoScreens[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* 1. Breadcrumbs and Return Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d0d7de] pb-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#656d76] font-mono">
          <button 
            type="button"
            onClick={onBackToHome}
            className="text-[#0969da] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Início / Portfólio</span>
          </button>
          <span>/</span>
          <span className="text-[#656d76]">Produtos</span>
          <span>/</span>
          <span className="text-[#1f2328] font-bold">Plataforma para Escritórios de Advocacia</span>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LAW_FIRM_PRODUCT_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Acessar Demo Online</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={LAW_FIRM_PRODUCT_DATA.whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 2. Hero da Página do Produto */}
      <section className="rounded-md border border-[#d0d7de] bg-gradient-to-b from-[#ffffff] to-[#f6f8fa] p-6 sm:p-10 shadow-2xs space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/40">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Tech • Gestão Jurídica de Alta Performance</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-[#1f2328] wiki-serif tracking-tight leading-tight">
            {LAW_FIRM_PRODUCT_DATA.subtitle}
          </h1>

          <p className="text-lg sm:text-xl text-[#0969da] font-medium wiki-serif">
            {LAW_FIRM_PRODUCT_DATA.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#57606a] leading-relaxed wiki-serif">
            {LAW_FIRM_PRODUCT_DATA.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={LAW_FIRM_PRODUCT_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-demo-online"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-sm font-semibold shadow-2xs transition-colors"
            >
              <span>CONHEÇA A PLATAFORMA</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={LAW_FIRM_PRODUCT_DATA.whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-especialista"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-[#1f2328] text-sm font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#1a7f37]" />
              <span>FALE COM UM ESPECIALISTA</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="rounded-md border border-[#d0d7de] bg-white p-2 shadow-xs">
          <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-3 py-2 rounded-t flex items-center justify-between text-xs text-[#656d76]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              <span className="font-mono text-xs ml-2 text-[#57606a]">https://advocacia.deevofinanceiras.com.br/dashboard</span>
            </div>
            <span className="text-[11px] font-medium text-[#1a7f37] bg-[#dafbe1] px-2 py-0.5 rounded border border-[#4ac26b]/30">
              Visão Geral Ativa
            </span>
          </div>

          <div className="overflow-hidden rounded-b relative aspect-16/9 bg-[#0d1117]">
            <img 
              src="/src/assets/images/law_firm_dashboard_1787133908200.jpg"
              alt="Painel Executivo da Plataforma para Escritórios de Advocacia"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 3. Apresentação do Produto */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#0969da]" />
            <span>1. Centralização &amp; Estrutura Operacional</span>
          </h2>
          <span className="text-xs font-mono text-[#656d76]">Visão Geral</span>
        </div>

        <div className="p-5 rounded-md border border-[#d0d7de] bg-white space-y-4 text-sm text-[#1f2328] leading-relaxed wiki-serif">
          <p>
            A **Plataforma Jurídica Inteligente** foi concebida para atender à necessidade crítica de modernização nas bancas de advocacia brasileiras. Em vez de operar com sistemas fragmentados, planilhas avulsas e comunicação descentralizada, a solução integra a rotina processual, os clientes, os prazos fatais e a gestão financeira sob um mesmo ambiente auditável e intuitivo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 rounded border border-[#d0d7de] bg-[#f6f8fa] space-y-1.5">
              <h3 className="text-xs font-bold text-[#1f2328] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0969da]" />
                <span>Zero Prazos Perdidos</span>
              </h3>
              <p className="text-xs text-[#57606a]">
                Contagem automatizada e sincronizada de prazos processuais com alertas preventivos para toda a equipe.
              </p>
            </div>

            <div className="p-3.5 rounded border border-[#d0d7de] bg-[#f6f8fa] space-y-1.5">
              <h3 className="text-xs font-bold text-[#1f2328] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#0969da]" />
                <span>Dossiês &amp; GED na Nuvem</span>
              </h3>
              <p className="text-xs text-[#57606a]">
                Armazenamento seguro de petições, procurações e documentos com busca instantânea e indexação.
              </p>
            </div>

            <div className="p-3.5 rounded border border-[#d0d7de] bg-[#f6f8fa] space-y-1.5">
              <h3 className="text-xs font-bold text-[#1f2328] flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#1a7f37]" />
                <span>Controle Rigoroso de Caixa</span>
              </h3>
              <p className="text-xs text-[#57606a]">
                Honorários contratuais e sucumbenciais organizados por cliente com conciliação e emissão ágil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção de Demonstração Interativa ("CONHEÇA A PLATAFORMA") */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#0969da]" />
              <span>2. Demonstração Visual da Interface</span>
            </h2>
            <p className="text-xs text-[#656d76] mt-0.5">
              Explore as principais telas de trabalho do software jurídico.
            </p>
          </div>

          <a
            href={LAW_FIRM_PRODUCT_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1a7f37] hover:bg-[#15672c] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Testar Demo no WordPress</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-[#d0d7de] pb-2">
          {LAW_FIRM_PRODUCT_DATA.demoScreens.map((screen) => {
            const isSelected = activeTabId === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveTabId(screen.id as any)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isSelected 
                    ? 'bg-[#0969da] text-white shadow-2xs' 
                    : 'bg-[#f6f8fa] text-[#57606a] hover:bg-[#eaeef2] border border-[#d0d7de]'
                }`}
              >
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Screen Display Box */}
        <div className="rounded-md border border-[#d0d7de] bg-white p-4 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
            <div>
              <h3 className="text-base font-bold text-[#1f2328] wiki-serif">
                {currentTab.title}
              </h3>
              <p className="text-xs text-[#57606a]">
                {currentTab.desc}
              </p>
            </div>
            <a
              href={LAW_FIRM_PRODUCT_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0969da] hover:underline font-medium flex items-center gap-1 shrink-0"
            >
              <span>Abrir tela completa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="rounded border border-[#d0d7de] overflow-hidden aspect-16/9 bg-[#0d1117] shadow-inner relative group">
            <img 
              src={currentTab.image}
              alt={currentTab.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* 5. Funcionalidades Completas */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0969da]" />
            <span>3. Recursos &amp; Funcionalidades Completas</span>
          </h2>
          <p className="text-xs text-[#656d76] mt-0.5">
            Módulos integrados projetados para cobrir todas as frentes de uma banca jurídica moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LAW_FIRM_PRODUCT_DATA.features.map((feature, idx) => (
            <div 
              key={feature.id}
              className="p-4 rounded-md border border-[#d0d7de] bg-white hover:border-[#0969da]/50 transition-colors shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-[#0969da] bg-[#ddf4ff] px-2 py-0.5 rounded">
                  {feature.category}
                </span>
                <span className="text-[11px] font-mono text-[#656d76]">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#1f2328] wiki-serif">
                {feature.title}
              </h3>

              <p className="text-xs text-[#57606a] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Benefícios Estratégicos */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0969da]" />
            <span>4. Principais Benefícios para o Escritório</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {LAW_FIRM_PRODUCT_DATA.benefits.map((benefit, i) => (
            <div 
              key={i}
              className="p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] space-y-1.5"
            >
              <div className="flex items-center gap-2 text-[#0969da]">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1a7f37]" />
                <h3 className="text-xs font-bold text-[#1f2328] uppercase tracking-wide">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xs text-[#57606a] leading-relaxed pl-6">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Segurança Jurídica e Proteção de Dados (LGPD) */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1a7f37]" />
            <span>5. Segurança Jurídica e Proteção de Dados (LGPD)</span>
          </h2>
          <span className="text-xs font-mono text-[#1a7f37] bg-[#dafbe1] px-2 py-0.5 rounded border border-[#4ac26b]/30">
            Conformidade Total
          </span>
        </div>

        <div className="p-5 rounded-md border border-[#d0d7de] bg-white space-y-4">
          <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
            A proteção do sigilo entre cliente e advogado e o cumprimento irrestrito da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) são os pilares centrais da arquitetura do sistema:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LAW_FIRM_PRODUCT_DATA.securityPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded border border-[#d0d7de] bg-[#f6f8fa] space-y-1"
              >
                <h3 className="text-xs font-bold text-[#1f2328] flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-[#0969da]" />
                  <span>{pillar.title}</span>
                </h3>
                <p className="text-xs text-[#57606a] leading-relaxed pl-5">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seção de Planos & Preços (SaaS Jurídico) */}
      <section id="planos-precos" className="space-y-6 scroll-mt-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/40">
            <Award className="w-3.5 h-3.5" />
            <span>SaaS Jurídico • Estrutura Escalável</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] wiki-serif tracking-tight">
            {LAW_FIRM_PRICING_DATA.sectionTitle}
          </h2>

          <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
            {LAW_FIRM_PRICING_DATA.sectionSubtitle}
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex items-center p-1 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg shadow-2xs">
              <button
                type="button"
                onClick={() => setBillingCycle('mensal')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'mensal'
                    ? 'bg-white text-[#0969da] shadow-xs border border-[#d0d7de]'
                    : 'text-[#57606a] hover:text-[#1f2328]'
                }`}
              >
                <span>MENSAL</span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('anual')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'anual'
                    ? 'bg-[#0969da] text-white shadow-xs'
                    : 'text-[#57606a] hover:text-[#1f2328]'
                }`}
              >
                <span>ANUAL</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  billingCycle === 'anual' ? 'bg-white/20 text-white' : 'bg-[#dafbe1] text-[#1a7f37]'
                }`}>
                  Economize
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch pt-2">
          {LAW_FIRM_PRICING_DATA.plans.map((plan) => {
            const isProfessional = plan.id === 'profissional';
            const priceObj = billingCycle === 'anual' && plan.annualPrice.value !== null 
              ? plan.annualPrice 
              : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                id={`card-plano-${plan.id}`}
                className={`flex flex-col justify-between rounded-lg transition-all duration-200 ${
                  isProfessional
                    ? 'border-2 border-[#0969da] bg-white shadow-md ring-1 ring-[#0969da]/30 relative'
                    : 'border border-[#d0d7de] bg-[#ffffff] hover:border-[#0969da]/40 shadow-2xs'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.recommendedBadge && (
                  <div className="bg-[#0969da] text-white text-[10.5px] font-bold uppercase tracking-wider text-center py-1 rounded-t-[6px] font-mono flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#ffd700]" />
                    <span>{plan.recommendedBadge}</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-[#1f2328] wiki-serif">
                        {plan.name}
                      </h3>
                      <span className="text-[10.5px] font-mono font-semibold text-[#0969da] bg-[#ddf4ff] px-2 py-0.5 rounded">
                        {plan.usersLimit}
                      </span>
                    </div>

                    <p className="text-[11.5px] text-[#57606a] leading-tight min-h-[34px]">
                      {plan.targetAudience}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 pb-2 border-y border-[#eaeef2]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#1f2328] font-mono tracking-tight">
                        {priceObj.formatted}
                      </span>
                      <span className="text-xs font-semibold text-[#57606a] font-mono">
                        {priceObj.period}
                      </span>
                    </div>

                    {billingCycle === 'anual' && plan.annualPrice.value !== null ? (
                      <p className="text-[10.5px] text-[#1a7f37] font-semibold mt-1">
                        {plan.annualPrice.savingsText}
                      </p>
                    ) : (
                      <p className="text-[10.5px] text-[#656d76] mt-1">
                        {plan.monthlyPrice.note}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#656d76] font-mono block">
                      Recursos Inclusos:
                    </span>

                    <ul className="space-y-1.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 text-xs text-[#1f2328]">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isProfessional ? 'text-[#0969da]' : 'text-[#1a7f37]'
                          }`} />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action Button */}
                <div className="p-5 pt-0 mt-4">
                  <a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-bold transition-colors shadow-2xs ${
                      isProfessional
                        ? 'bg-[#0969da] hover:bg-[#085cc0] text-white'
                        : 'bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] border border-[#d0d7de]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implantação Setup Box */}
        <div className="rounded-lg border border-[#d0d7de] bg-[#f6f8fa] p-5 sm:p-6 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#0969da]/10 text-[#0969da] flex items-center justify-center shrink-0">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1f2328] uppercase tracking-wide">
                  {LAW_FIRM_PRICING_DATA.setup.title}
                </h3>
                <span className="text-[11px] font-mono text-[#0969da] font-semibold">
                  {LAW_FIRM_PRICING_DATA.setup.startingPrice} • {LAW_FIRM_PRICING_DATA.setup.badge}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-[#1a7f37] bg-[#dafbe1] px-2.5 py-1 rounded border border-[#4ac26b]/30 self-start sm:self-auto">
              Cobrança Única • Não é mensalidade
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#1f2328] leading-relaxed wiki-serif">
            {LAW_FIRM_PRICING_DATA.setup.description}
          </p>

          <p className="text-[11.5px] text-[#57606a] leading-relaxed">
            {LAW_FIRM_PRICING_DATA.setup.clarification}
          </p>
        </div>

        {/* Destaque Comercial: Comece pelo Plano que Faz Sentido */}
        <div className="rounded-lg border border-[#0969da]/30 bg-gradient-to-r from-[#ddf4ff]/40 via-[#ffffff] to-[#dafbe1]/30 p-5 sm:p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#0969da]">
            <Zap className="w-4 h-4 shrink-0 text-[#0969da]" />
            <h3 className="text-xs sm:text-sm font-bold text-[#1f2328] uppercase tracking-wider font-mono">
              {LAW_FIRM_PRICING_DATA.commercialHighlight.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
            {LAW_FIRM_PRICING_DATA.commercialHighlight.description}
          </p>
        </div>

        {/* FAQ de Preços & Contratação */}
        <div className="space-y-4 pt-4">
          <div className="border-b border-[#d0d7de] pb-2 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
              <HelpCircle className="w-4.5 h-4.5 text-[#0969da]" />
              <span>Perguntas Frequentes sobre Planos &amp; Contratação</span>
            </h3>
            <span className="text-xs font-mono text-[#656d76]">FAQ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LAW_FIRM_PRICING_DATA.faq.map((item, qIdx) => {
              const isOpen = openFaqIndex === qIdx;
              return (
                <div 
                  key={qIdx}
                  className="rounded-md border border-[#d0d7de] bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(qIdx)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-2 hover:bg-[#f6f8fa] transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-bold text-[#1f2328] wiki-serif">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0969da] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#656d76] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-3.5 pt-0 border-t border-[#eaeef2] bg-[#f6f8fa]/50 text-xs text-[#57606a] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 9. CTA Final Premium */}
      <section className="rounded-md border border-[#0969da]/40 bg-gradient-to-br from-[#ffffff] via-[#f6f8fa] to-[#ddf4ff]/50 p-6 sm:p-8 shadow-sm space-y-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0969da] text-white">
            <Scale className="w-3.5 h-3.5" />
            <span>Modernização e Eficiência Jurídica</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] wiki-serif tracking-tight">
            {LAW_FIRM_PRICING_DATA.finalCta.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
            {LAW_FIRM_PRICING_DATA.finalCta.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={LAW_FIRM_PRICING_DATA.finalCta.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-btn-comecar-agora"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-sm font-semibold shadow-2xs transition-colors"
          >
            <span>{LAW_FIRM_PRICING_DATA.finalCta.btnPrimaryText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={LAW_FIRM_PRICING_DATA.finalCta.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-btn-falar-especialista-final"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-[#1f2328] text-sm font-semibold shadow-2xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#1a7f37]" />
            <span>{LAW_FIRM_PRICING_DATA.finalCta.btnSecondaryText}</span>
          </a>

          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md border border-transparent hover:bg-[#eaeef2] text-[#57606a] text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio Principal</span>
          </button>
        </div>
      </section>

    </div>
  );
};
