import React, { useState } from 'react';
import { 
  Globe, 
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
  Lock, 
  BarChart3, 
  Clock, 
  Laptop, 
  ArrowRight,
  Building2,
  Eye,
  Check,
  Award,
  Smartphone,
  Search,
  Code2
} from 'lucide-react';
import { LUCENA_WEBSITE_PRODUCT_DATA } from '../data/portfolioData';

interface LucenaWebsiteProductPageProps {
  onBackToHome: () => void;
}

export const LucenaWebsiteProductPage: React.FC<LucenaWebsiteProductPageProps> = ({ onBackToHome }) => {
  const [activeScreenId, setActiveScreenId] = useState<'homepage' | 'areas'>('homepage');

  const currentScreen = LUCENA_WEBSITE_PRODUCT_DATA.demoScreens.find(s => s.id === activeScreenId) || LUCENA_WEBSITE_PRODUCT_DATA.demoScreens[0];

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* 1. Breadcrumbs and Return Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d0d7de] pb-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#656d76] font-mono flex-wrap">
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
          <span className="text-[#656d76]">Sites para Advocacia</span>
          <span>/</span>
          <span className="text-[#1f2328] font-bold">Lucena &amp; Associados Advogados</span>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Ver Demonstração Ao Vivo</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={LUCENA_WEBSITE_PRODUCT_DATA.whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#1a7f37]" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>

      {/* 2. Hero da Página do Produto */}
      <section className="rounded-md border border-[#d0d7de] bg-gradient-to-b from-[#ffffff] to-[#f6f8fa] p-6 sm:p-10 shadow-2xs space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/40">
              <Globe className="w-3.5 h-3.5" />
              <span>{LUCENA_WEBSITE_PRODUCT_DATA.categoryBadge}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#dafbe1] text-[#1a7f37] border border-[#4ac26b]/40">
              <Award className="w-3.5 h-3.5" />
              <span>Conforme OAB Provimento 205/2021</span>
            </span>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#0969da]">
              {LUCENA_WEBSITE_PRODUCT_DATA.title}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#1f2328] wiki-serif tracking-tight leading-tight mt-1">
              {LUCENA_WEBSITE_PRODUCT_DATA.modelName}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#0969da] font-medium wiki-serif">
            {LUCENA_WEBSITE_PRODUCT_DATA.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#57606a] leading-relaxed wiki-serif">
            {LUCENA_WEBSITE_PRODUCT_DATA.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-lucena-demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-sm font-semibold shadow-2xs transition-colors"
            >
              <span>ACESSAR DEMONSTRAÇÃO AO VIVO</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={LUCENA_WEBSITE_PRODUCT_DATA.whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-lucena-orcamento"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-[#1f2328] text-sm font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#1a7f37]" />
              <span>QUERO UM SITE PARA MEU ESCRITÓRIO</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Mockup Preview */}
        <div className="rounded-md border border-[#d0d7de] bg-white p-2 shadow-xs space-y-2">
          <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-3 py-2 rounded-t flex items-center justify-between text-xs text-[#656d76]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              <span className="font-mono text-xs ml-2 text-[#57606a]">https://lucena-associados.adv.br</span>
            </div>
            <a
              href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-[#0969da] hover:underline flex items-center gap-1"
            >
              <span>Testar no Navegador</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="overflow-hidden rounded-b relative aspect-16/9 bg-[#0d1117]">
            <img 
              src="/src/assets/images/lucena_advogados_website_1787134706248.jpg"
              alt="Site Modelo Lucena & Associados Advogados"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 3. Destaque de Conformidade com o Provimento OAB */}
      <section className="p-5 rounded-md border border-[#4ac26b]/40 bg-[#dafbe1]/30 space-y-2">
        <div className="flex items-center gap-2 text-[#1a7f37]">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <h3 className="text-sm font-bold uppercase tracking-wide">
            Marketing Jurídico Ético &amp; Conformidade com a OAB
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#1f2328] leading-relaxed pl-7 wiki-serif">
          {LUCENA_WEBSITE_PRODUCT_DATA.oabCompliance} O projeto foi estruturado com sobriedade visual, foco em autoridade institucional, clareza nas especialidades do escritório e canais diretos para que o próprio cliente inicie a consulta de forma espontânea.
        </p>
      </section>

      {/* 4. Demonstração Visual das Telas */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#0969da]" />
              <span>1. Demonstração da Estrutura Visual</span>
            </h2>
            <p className="text-xs text-[#656d76] mt-0.5">
              Navegue pelas telas do modelo institucional Lucena &amp; Associados Advogados.
            </p>
          </div>

          <a
            href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1a7f37] hover:bg-[#15672c] text-white text-xs font-semibold shadow-2xs transition-colors"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Abrir Demonstração Online</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-[#d0d7de] pb-2">
          {LUCENA_WEBSITE_PRODUCT_DATA.demoScreens.map((screen) => {
            const isSelected = activeScreenId === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenId(screen.id as any)}
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
                {currentScreen.title}
              </h3>
              <p className="text-xs text-[#57606a]">
                {currentScreen.desc}
              </p>
            </div>
            <a
              href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0969da] hover:underline font-medium flex items-center gap-1 shrink-0"
            >
              <span>Ver no site demonstrador</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="rounded border border-[#d0d7de] overflow-hidden aspect-16/9 bg-[#0d1117] shadow-inner relative group">
            <img 
              src={currentScreen.image}
              alt={currentScreen.title}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* 5. Funcionalidades e Recursos Inclusos no Site */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0969da]" />
            <span>2. Funcionalidades &amp; Recursos Estratégicos</span>
          </h2>
          <p className="text-xs text-[#656d76] mt-0.5">
            Cada detalhe do site é construído para potencializar a reputação da banca e captar novos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LUCENA_WEBSITE_PRODUCT_DATA.features.map((feature, idx) => (
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

      {/* 6. O que está Incluso no Pacote de Desenvolvimento */}
      <section className="space-y-4">
        <div className="border-b border-[#d0d7de] pb-2">
          <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#1a7f37]" />
            <span>3. O que está Incluso na Entrega</span>
          </h2>
          <p className="text-xs text-[#656d76] mt-0.5">
            Solução pronta para colocar o seu escritório no topo da internet sem dores de cabeça técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {LUCENA_WEBSITE_PRODUCT_DATA.includedServices.map((service, i) => (
            <div 
              key={i}
              className="p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] space-y-1.5"
            >
              <div className="flex items-center gap-2 text-[#0969da]">
                <Check className="w-4 h-4 shrink-0 text-[#1a7f37]" />
                <h3 className="text-xs font-bold text-[#1f2328] uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-[#57606a] leading-relaxed pl-6">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Seção Comercial de Preço do Template */}
      <section id="preco-template-advocacia" className="space-y-4 scroll-mt-20">
        <div className="border-b border-[#d0d7de] pb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#1f2328] wiki-serif flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0969da]" />
              <span>4. Licenciamento Comercial &amp; Preço do Template</span>
            </h2>
            <p className="text-xs text-[#656d76] mt-0.5">
              Adquira a licença de uso do template completo desenvolvido em React + WordPress.
            </p>
          </div>

          <span className="text-[11px] font-semibold text-[#0969da] bg-[#ddf4ff] border border-[#54aeff]/40 px-2.5 py-0.5 rounded-full font-mono">
            Tecnologia: {LUCENA_WEBSITE_PRODUCT_DATA.pricing.technology}
          </span>
        </div>

        {/* Pricing Card Wrapper */}
        <div className="rounded-lg border-2 border-[#0969da]/40 bg-white shadow-xs overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-[#0969da] to-[#054da7] text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">
                {LUCENA_WEBSITE_PRODUCT_DATA.pricing.productName}
              </span>
            </div>
            <span className="text-[11px] font-semibold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded text-white font-mono">
              {LUCENA_WEBSITE_PRODUCT_DATA.pricing.licenseType}
            </span>
          </div>

          {/* Card Main Body: 2 Columns on Desktop */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Price & Action Buttons */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#d0d7de] pb-6 lg:pb-0 lg:pr-8">
              
              <div className="space-y-1">
                <span className="inline-block text-xs font-bold uppercase tracking-wider font-mono text-[#0969da] bg-[#ddf4ff] px-2.5 py-1 rounded">
                  {LUCENA_WEBSITE_PRODUCT_DATA.pricing.licenseType}
                </span>
                <p className="text-xs text-[#57606a] pt-1">
                  Pagamento único com acesso integral ao código-fonte e estrutura.
                </p>
              </div>

              {/* Price Tag Display */}
              <div className="py-2">
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-[#1f2328] font-mono">
                    {LUCENA_WEBSITE_PRODUCT_DATA.pricing.currency}
                  </span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1f2328] tracking-tight font-mono">
                    {LUCENA_WEBSITE_PRODUCT_DATA.pricing.priceValue}
                  </span>
                  <span className="text-sm font-semibold text-[#57606a] font-mono">
                    ,00
                  </span>
                  <span className="text-sm font-semibold text-[#0969da] ml-1.5 font-mono">
                    {LUCENA_WEBSITE_PRODUCT_DATA.pricing.licenseShort}
                  </span>
                </div>
                <p className="text-[11px] text-[#1a7f37] font-semibold mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Sem mensalidades obrigatórias de licença</span>
                </p>
              </div>

              {/* Purchase and Demo Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={LUCENA_WEBSITE_PRODUCT_DATA.pricing.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-comprar-template-advocacia"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#1f883d] hover:bg-[#1a7f37] text-white text-sm font-bold shadow-xs transition-colors"
                >
                  <span>COMPRAR AGORA</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={LUCENA_WEBSITE_PRODUCT_DATA.pricing.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-ver-demo-preco"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#d0d7de] bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#1f2328] text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Laptop className="w-3.5 h-3.5 text-[#0969da]" />
                  <span>VER DEMONSTRAÇÃO</span>
                  <ExternalLink className="w-3 h-3 text-[#656d76]" />
                </a>
              </div>

              {/* Disclaimer Note */}
              <div className="p-3 rounded bg-[#f6f8fa] border border-[#d0d7de] text-left">
                <p className="text-[11px] text-[#57606a] leading-relaxed">
                  <strong>Observação:</strong> {LUCENA_WEBSITE_PRODUCT_DATA.pricing.disclaimer}
                </p>
              </div>

            </div>

            {/* Right Column: Benefits Checklist & Technical Highlights */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1f2328] font-mono border-b border-[#d0d7de] pb-1.5 flex items-center justify-between">
                  <span>Recursos Inclusos na Licença</span>
                  <span className="text-[10px] text-[#1a7f37] font-semibold bg-[#dafbe1] px-2 py-0.5 rounded border border-[#4ac26b]/30">
                    10 Benefícios Essenciais
                  </span>
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                  {LUCENA_WEBSITE_PRODUCT_DATA.pricing.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-[#1f2328]">
                      <span className="p-0.5 rounded bg-[#dafbe1] text-[#1a7f37] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Highlights */}
              <div className="pt-2 border-t border-[#eaeef2] space-y-2">
                <h4 className="text-[11px] font-semibold uppercase text-[#57606a] font-mono">
                  Destaques da Arquitetura:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {LUCENA_WEBSITE_PRODUCT_DATA.pricing.technicalHighlights.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="inline-flex items-center px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#f6f8fa] text-[#57606a] border border-[#d0d7de]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA Final de Venda e Contratação */}
      <section className="rounded-md border border-[#0969da]/40 bg-gradient-to-br from-[#ffffff] via-[#f6f8fa] to-[#ddf4ff]/50 p-6 sm:p-8 shadow-sm space-y-6 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0969da] text-white">
            <Globe className="w-3.5 h-3.5" />
            <span>Criação de Sites para Advogados</span>
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] wiki-serif tracking-tight">
            PRONTO PARA TER UM SITE DE ALTA PERFORMANCE?
          </h2>

          <p className="text-xs sm:text-sm text-[#57606a] leading-relaxed wiki-serif">
            Apresente sua banca de advocacia com a credibilidade que ela merece. Solicite uma proposta sob medida com prazos rápidos de entrega e total personalização para a sua identidade.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={LUCENA_WEBSITE_PRODUCT_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-btn-ver-demo-lucena"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#0969da] hover:bg-[#085cc0] text-white text-sm font-semibold shadow-2xs transition-colors"
          >
            <span>VER DEMONSTRAÇÃO AO VIVO</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={LUCENA_WEBSITE_PRODUCT_DATA.whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-btn-falar-whatsapp-lucena"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#d0d7de] bg-[#ffffff] hover:bg-[#f6f8fa] text-[#1f2328] text-sm font-semibold shadow-2xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#1a7f37]" />
            <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
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
