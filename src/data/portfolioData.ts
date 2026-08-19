import { ServiceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_DATA = {
  name: "Vini Amaral",
  fullName: "Marcos Vinícius (Vini Amaral)",
  roleTitle: "Cargos Operacionais, Administrativos e de Controladoria Jurídica",
  secondaryTitle: "Suporte de TI, Gestão Documental & Automação com IA",
  address: "Brasil (Atendimento Remoto / Home Office & Nacional)",
  location: "Brasil (Remoto & Nacional)",
  availability: "Home Office ou Presencial",
  email: "viniamaral2026@gmail.com",
  phoneDisplay: "(51) 98144-6019",
  whatsappNumber: "5551981446019",
  whatsappLink: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20e%20projetos!",
  linkedin: "https://www.linkedin.com/in/dev-vini-amaral",
  linkedinDisplay: "linkedin.com/in/dev-vini-amaral",
  github: "https://github.com/viniamaral2026-cpu",
  githubDisplay: "github.com/viniamaral2026-cpu",
  resumePdfUrl: "/curriculo-vini-amaral.pdf",
  resumeHtmlUrl: "/curriculo.html",
  photoUrl: "/eu.JPG",
  status: "Disponível para Home Office & Presencial",
  objective: "Cargos Operacionais, Administrativos e de Controladoria Jurídica",
  companyName: "DEEVO Soluções Financeiras LTDA",
  companyCnpj: "63.187.175/0001-70",
  companyUrl: "https://www.deevofinanceiras.com.br/",
  
  summary: "Profissional autodidata com forte domínio tecnológico, dedicado a trazer eficiência e organização para rotinas administrativas e operacionais. Une raciocínio analítico e capacidade de resolução de problemas ao uso estratégico de inteligência artificial e ferramentas digitais para acelerar pesquisas, redigir e revisar documentos e estruturar informações complexas. Perfil proativo, que aprende sistemas novos com rapidez e assume a responsabilidade de destravar processos, reduzir retrabalho e manter arquivos e dados organizados — o suporte técnico e operacional que libera tempo para o que realmente exige atenção especializada.",

  bioParagraph1: "Profissional autodidata com forte domínio tecnológico, dedicado a trazer eficiência e organização para rotinas administrativas e operacionais.",
  bioParagraph2: "Une raciocínio analítico e capacidade de resolução de problemas ao uso estratégico de inteligência artificial e ferramentas digitais para acelerar pesquisas, redigir e revisar documentos e estruturar informações complexas.",
  bioParagraph3: "Perfil proativo, que aprende sistemas novos com rapidez e assume a responsabilidade de destravar processos, reduzir retrabalho e manter arquivos e dados organizados — o suporte técnico e operacional que libera tempo para o que realmente exige atenção especializada.",
};

export const COMPANY_DATA = {
  name: "DEEVO Soluções Financeiras LTDA",
  shortName: "DEEVO Soluções Financeiras",
  cnpj: "63.187.175/0001-70",
  website: "https://www.deevofinanceiras.com.br/",
  copyright: "© 2026 DEEVO Soluções Financeiras LTDA — CNPJ: 63.187.175/0001-70. Todos os direitos reservados.",
  headline: "DEEVO Soluções Financeiras: Crédito Inteligente, Tecnologia e Eficiência Operacional.",
  pitch: "Oferecemos soluções financeiras completas como correspondente bancário, aliadas a suporte tecnológico avançado, gestão de dados e otimização de rotinas administrativas para você e sua empresa.",
  description: "A DEEVO Soluções Financeiras possui uma estrutura empresarial ampla e estratégica, com atividades que abrangem Correspondente Bancário, Tecnologia da Informação, Tratamento de Dados e Serviços Administrativos. Essa combinação amplia sua capacidade de atuação e sustenta um portfólio integrado, organizado em três pilares estratégicos:",
  structureNote: "Essa estrutura consolida tanto a esteira de soluções financeiras quanto a infraestrutura tecnológica e operacional:",
  pillars: [
    {
      id: "pilar-financeiro",
      title: "1. Soluções Financeiras e Correspondência Bancária",
      cnae: "CNAE 66.19-3-02",
      badge: "Crédito & Correspondente",
      color: "#0969da",
      items: [
        {
          name: "Antecipação de Saque-Aniversário FGTS",
          desc: "Liberação de crédito rápido com desconto direto do saldo."
        },
        {
          name: "Consignado e Empréstimos (CLT, Pessoal e Portabilidade)",
          desc: "Intermediação de crédito e redução de taxas em parcerias bancárias."
        },
        {
          name: "Crédito com Garantia",
          desc: "Operações de crédito com garantia de veículo ou imóvel."
        },
        {
          name: "Cobrança e Análise Cadastral",
          desc: "Gestão de informações cadastrais e recuperação de crédito para parceiros."
        }
      ]
    },
    {
      id: "pilar-tecnologia",
      title: "2. Tecnologia, Suporte de TI e Tratamento de Dados",
      cnae: "CNAE 62.09-1-00 e 63.11-9-00",
      badge: "Suporte TI & IA",
      color: "#1a7f37",
      items: [
        {
          name: "Diagnóstico e Suporte Técnico de TI",
          desc: "Resolução de falhas em sistemas operacionais, aplicativos e dispositivos."
        },
        {
          name: "Tratamento e Gestão de Dados",
          desc: "Higienização de bases de dados, organização de cadastros e hospedagem/serviços de aplicação."
        },
        {
          name: "Automação com Inteligência Artificial",
          desc: "Criação de fluxos inteligentes para acelerar pesquisas, análises e atendimento ao cliente."
        }
      ]
    },
    {
      id: "pilar-gestao",
      title: "3. Gestão Documental e Apoio Administrativo",
      cnae: "CNAE 82.11-3-00 e 82.19-9-99",
      badge: "Controladoria & BPO",
      color: "#8250df",
      items: [
        {
          name: "Controladoria e Dossiês Digitais",
          desc: "Padronização, conversão (PDF) e estruturação de documentos para empresas e escritórios."
        },
        {
          name: "Serviços Combinados de Escritório",
          desc: "Suporte operacional para otimização de rotinas internas e digitação de documentos."
        },
        {
          name: "BPO Operacional",
          desc: "Terceirização de rotinas administrativas para liberar tempo produtivo da equipe principal."
        }
      ]
    }
  ]
};

export const RESUME_COMPETENCIES = [
  "Gestão e organização de arquivos digitais (PDFs, nuvem, backups e nomenclatura de dossiês)",
  "Pesquisa avançada, cruzamento de informações e diagnóstico de problemas",
  "Uso de Inteligência Artificial generativa para automação de tarefas, redação e análise de dados",
  "Digitação, formatação e revisão de documentos com padrão profissional",
  "Conhecimento sólido em sistemas operacionais e resolução de falhas técnicas do dia a dia",
  "Organização de rotinas e priorização de demandas com foco em prazos"
];

export const RESUME_EXPERIENCES = [
  {
    role: "Gestão Administrativa e Suporte Operacional Multidisciplinar",
    period: "Atuação recente",
    type: "Projetos próprios e prestação de serviços — Taquara/RS",
    highlights: [
      "Suporte operacional em rotinas administrativas, incluindo triagem, organização e acompanhamento de demandas do dia a dia",
      "Organização de dossiês digitais e gestão de dados, separando com clareza documentos, evidências e informações de apoio",
      "Gestão de diagnósticos técnicos em sistemas e ferramentas digitais, identificando falhas e propondo soluções rápidas",
      "Otimização de rotinas através de ferramentas digitais e de Inteligência Artificial, reduzindo tempo gasto em tarefas repetitivas de pesquisa e redação",
      "Elaboração e formatação de relatórios, textos e materiais com padrão visual profissional"
    ]
  },
  {
    role: "Projetos de Organização e Estruturação de Processos",
    period: "Atuação contínua",
    type: "Iniciativas autônomas — Taquara/RS",
    highlights: [
      "Estruturação de fluxos de trabalho do zero, definindo etapas, responsáveis e prazos para ganho de eficiência",
      "Diagnóstico e resolução de problemas técnicos e operacionais em diferentes contextos de trabalho",
      "Aplicação de ferramentas de IA para acelerar pesquisa, análise e produção de conteúdo escrito"
    ]
  }
];

export const RESUME_EDUCATION = [
  {
    title: "Ensino Médio",
    status: "Em curso / dedicação ao aprendizado autodidata",
    description: "Comprometimento contínuo com evolução pessoal e disciplinas fundamentais."
  },
  {
    title: "Formação Continuada em Desenvolvimento de Software e Tecnologias Digitais",
    status: "Estudo constante e autônomo",
    description: "Estudo contínuo de programação, ferramentas de IA e sistemas operacionais, aplicado diretamente na resolução de problemas do dia a dia."
  }
];

export const DIFFERENTIALS = [
  {
    icon: "Zap",
    title: "Aprendizado Ultrarrápido",
    description: "Facilidade extrema para aprender sistemas, softwares e ferramentas novas em tempo recorde."
  },
  {
    icon: "BrainCircuit",
    title: "Perfil 'Resolvedor' Autônomo",
    description: "Assume o problema até a solução completa, com autonomia e sem depender de supervisão constante."
  },
  {
    icon: "UsersRound",
    title: "Tecnologia como Ferramenta de Produtividade",
    description: "Uso natural e prático da tecnologia para destravar fluxos, organizar dados e acelerar rotinas."
  },
  {
    icon: "ShieldCheck",
    title: "Rigor e Confiabilidade Operacional",
    description: "Atenção meticulosa a detalhes em dossiês, pontualidade em prazos e zelo no tratamento de informações."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "controladoria-documental",
    title: "Controladoria & Gestão Documental",
    shortDesc: "Organização estrutural, padronização e conferência minuciosa de arquivos e dossiês digitais.",
    fullDesc: "Soluções completas para estruturar acervos documentais, assegurar conformidade processual e transformar repositórios desorganizados em fluxos impecáveis de consulta e auditoria.",
    iconName: "FolderKanban",
    category: "legal",
    deliverables: [
      "Padronização e nomenclatura sistemática de pastas e arquivos",
      "Higienização, unificação, OCR e compressão de PDFs pesados",
      "Montagem e conferência de dossiês processuais e societários",
      "Auditoria de conformidade com padrões de tribunais e cartórios",
      "Organização de rotinas e priorização de demandas com foco em prazos"
    ],
    benefits: [
      "Zero perdas de prazos por arquivos ilegíveis ou extraviados",
      "Economia substancial no tempo de localização de documentos",
      "Adequação técnica aos sistemas eletrônicos e normas de conformidade"
    ],
    tools: ["Adobe Acrobat Pro", "Ferramentas OCR", "Sistemas Jurídicos e ERPs", "Scripts de Nomenclatura", "Cloud Storage"],
    whatsappMessage: "Olá Vini! Gostaria de conversar sobre Controladoria e Gestão Documental para minha equipe/escritório."
  },
  {
    id: "suporte-diagnostico-ti",
    title: "Suporte Operacional & Diagnóstico de TI",
    shortDesc: "Resolução ágil de falhas em sistemas operacionais, computadores, redes e ferramentas do dia a dia.",
    fullDesc: "Atendimento técnico resolutivo e suporte operacional para manter estações de trabalho, softwares corporativos e rotinas digitais em perfeito funcionamento.",
    iconName: "Cpu",
    category: "ti",
    deliverables: [
      "Diagnóstico avançado de lentidão, travamentos e conflitos de software",
      "Configuração e suporte em Windows, Linux e dispositivos móveis",
      "Instalação e parametrização de certificados digitais e tokens",
      "Otimização de rotinas de backup seguro e recuperação de dados",
      "Manutenção preventiva de estações e periféricos de escritório"
    ],
    benefits: [
      "Redução drástica de tempo de inatividade operacional",
      "Atendimento ágil, objetivo e sem burocracia técnica",
      "Solução definitiva na causa raiz das falhas recorrentes"
    ],
    tools: ["Diagnóstico de Hardware/OS", "Acesso Remoto Seguro", "Gestão de Certificados", "Redes & Conexões", "Rotinas de Backup"],
    whatsappMessage: "Olá Vini! Preciso de suporte operacional e diagnóstico de TI para solucionar falhas e otimizar máquinas/sistemas."
  },
  {
    id: "automacao-ia",
    title: "Automação com IA & Otimização de Processos",
    shortDesc: "Aplicação estratégica de Inteligência Artificial generativa para acelerar pesquisas, redação e análise de dados.",
    fullDesc: "Uso de inteligência artificial generativa e automação prática de rotinas para sintetizar grandes volumes de dados, minutar relatórios e conectar fluxos administrativos.",
    iconName: "Sparkles",
    category: "ai",
    deliverables: [
      "Desenvolvimento de prompts estruturados para análise documental e resumos",
      "Pesquisa técnica avançada com IA para cruzamento ágil de informações",
      "Digitação, formatação e revisão de documentos com padrão profissional",
      "Estruturação de fluxos de trabalho do zero com definição de etapas e prazos",
      "Aplicação de ferramentas de IA para acelerar produção de conteúdo escrito"
    ],
    benefits: [
      "Multiplicação da velocidade de entrega de relatórios e minutas",
      "Redução drástica do tempo gasto em tarefas repetitivas de pesquisa",
      "Eliminação de erros manuais em digitação e formatação"
    ],
    tools: ["LLMs (Gemini, Claude, GPT)", "Prompt Engineering", "Scripts de Automação", "Automação de Planilhas", "Pipelines Digitais"],
    whatsappMessage: "Olá Vini! Quero aplicar IA e ferramentas digitais para acelerar as rotinas e tarefas da minha equipe."
  },
  {
    id: "desenvolvimento-conteudo",
    title: "Desenvolvimento Web & Soluções Digitais",
    shortDesc: "Criação de interfaces web modernas, portfólios, utilitários digitais e documentação técnica.",
    fullDesc: "Desenvolvimento de páginas e aplicações web responsivas com código limpo (React, TypeScript, Tailwind), além de documentação e manuais operacionais claros.",
    iconName: "Code2",
    category: "dev",
    deliverables: [
      "Criação de Landing Pages e Portfólios profissionais responsivos",
      "Desenvolvimento de utilitários e ferramentas web funcionais",
      "Elaboração e formatação de manuais, guias e materiais com padrão visual",
      "Manutenção e atualização contínua de plataformas digitais",
      "Projetos e iniciativas no ecossistema open-source"
    ],
    benefits: [
      "Presença digital moderna com código de alta performance",
      "Comunicação técnica e visual limpa e profissional",
      "Soluções sob medida para destravar demandas específicas"
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Git / GitHub", "Markdown"],
    whatsappMessage: "Olá Vini! Gostaria de conversar sobre desenvolvimento web e criação de soluções digitais."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "codeforge",
    title: "CodeForge",
    subtitle: "Iniciativa Open Source para Produtividade Dev",
    category: "Open Source / Dev Tools",
    description: "Iniciativa criada por Vini Amaral focada em utilitários, snippets reutilizáveis, boilerplates limpos e automações de fluxo para acelerar o desenvolvimento de novas aplicações.",
    highlights: [
      "Arquitetura modular orientada a boas práticas e legibilidade",
      "Scripts de automação para setups rápidos e padronizados",
      "Documentação clara e acessível no GitHub (github.com/viniamaral2026-cpu)"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "GitHub Actions"],
    badge: "Open Source",
    linkText: "Ver no GitHub",
    githubUrl: "https://github.com/viniamaral2026-cpu",
  },
  {
    id: "docflow-juridico",
    title: "DocFlow & Dossiês Eletrônicos",
    subtitle: "Esteira de Higienização, OCR e Indexação",
    category: "Controladoria & Gestão",
    description: "Metodologia e fluxo digital para triagem, compressão em lote, OCR e indexação automática de peças processuais e anexos volumosos.",
    highlights: [
      "Redução expressiva no tempo de preparação e upload de arquivos",
      "Padronização sistemática de nomes conforme normas vigentes",
      "Índice estruturado para facilitar a localização de evidências e documentos"
    ],
    techStack: ["Processamento PDF", "OCR Avançado", "Scripts de Nomenclatura", "Conformidade"],
    badge: "Metodologia Operacional",
  },
  {
    id: "autosupport-hub",
    title: "AutoSupport & Triagem de TI",
    subtitle: "Diagnóstico e Roteamento de Chamados",
    category: "Suporte TI & IA",
    description: "Fluxo inteligente de suporte para pré-diagnóstico de falhas de hardware, rede e sistemas operacionais, propondo soluções rápidas ou logs estruturados.",
    highlights: [
      "Agilidade na identificação da causa raiz de problemas em estações de trabalho",
      "Roteiros passo a passo para resolução de falhas recorrentes",
      "Integração com canais diretos de comunicação e WhatsApp"
    ],
    techStack: ["Diagnóstico OS", "IA Generativa", "Prompt Engineering", "Suporte Operacional"],
    badge: "Solução Técnica",
  },
  {
    id: "tech-insights",
    title: "Guias & Documentação Técnica",
    subtitle: "Materiais Didáticos & Produtividade Digital",
    category: "Documentação & Treinamentos",
    description: "Compilação de tutoriais, manuais operacionais e guias passo a passo para capacitar equipes no uso eficiente de ferramentas digitais e IA.",
    highlights: [
      "Manuais práticos com passo a passo ilustrado",
      "Desmistificação de rotinas de suporte de TI e segurança de dados",
      "Foco em produtividade real no dia a dia corporativo"
    ],
    techStack: ["Documentação Técnica", "Padrão Visual", "Markdown", "Produtividade"],
    badge: "Documentação",
  }
];

export const PETITIONS_DATA = [
  {
    id: "reforma-defesa-consumidor",
    title: "Lei da Modernização e Transparência na Proteção ao Consumidor (Lei do Canal Direto)",
    tagline: "Modernização tecnológica, transparência e agilidade na resolução de conflitos de consumo no Brasil",
    category: "Iniciativa Cidadã / Abaixo-Assinado & Projeto de Lei",
    status: "Petição Pública Ativa",
    signatureUrl: "https://c.org/6j7TF9ktMT",
    whatsappShareUrl: "https://c.org/hMV6T2Q8DH",
    targetEntities: [
      "Ministério da Justiça e Segurança Pública",
      "Secretaria Nacional do Consumidor (Senacon)",
      "Assembleias Legislativas Estaduais",
      "Câmara dos Deputados e Senado Federal",
      "PROCONs e Ministério Público"
    ],
    quickAction: {
      title: "Apoie a Lei da Modernização e Transparência na Proteção ao Consumidor",
      shortText: "A burocracia e os canais obsoletos não podem impedir a defesa do cidadão. Com a migração massiva do comércio para a internet, a Lei do Canal Direto é indispensável para combater fraudes, abusos digitais e a lentidão dos órgãos de fiscalização.",
      ctaLabel: "Assinar o Abaixo-Assinado na Change.org"
    },
    ecommerceImpact: {
      title: "A Migração Massiva do Comércio para a Internet e a Urgência da Lei",
      subtitle: "Por que as relações de consumo digitais exigem um novo marco de celeridade e tecnologia",
      keyPillars: [
        {
          title: "Explosão do E-commerce e Transações em Tempo Real",
          desc: "As compras online, marketplaces, aplicativos de delivery e serviços financeiros digitais ocorrem em frações de segundos, movimentando bilhões de reais diariamente. No entanto, o sistema tradicional de atendimento ao consumidor ainda opera sob lógicas analógicas e prazos incompatíveis com a velocidade da economia digital."
        },
        {
          title: "Atendimento Algorítmico e Desumanização do Suporte",
          desc: "Consumidores enfrentam 'labirintos de robôs' e chatbots programados para retardar cancelamentos, trocas e estornos. A falta de um canal público direto de notificação imediata permite que fornecedores infratores ignorem reclamações sem qualquer consequência prática imediata."
        },
        {
          title: "Golpes Digitais, Lojas Fantasmas e Publicidade Abusiva",
          desc: "A proliferação de anúncios fraudulentos em redes sociais, vazamentos de dados, cobranças indevidas automáticas e empresas de fachada exige triagem automatizada com Inteligência Artificial capaz de cruzar dados e acionar órgãos fiscalizadores em até 15 dias úteis."
        },
        {
          title: "Vulnerabilidade Ampliada do Cidadão",
          desc: "Idosos, famílias e cidadãos comuns perdem recursos essenciais em fraudes eletrônicas e compras não entregues, ficando desamparados diante de órgãos regionais desarticulados e desprovidos de ferramentas tecnológicas centralizadas."
        }
      ]
    },
    problemTitle: "O Problema no Cenário Atual",
    problemText: `Já passei por situações de desrespeito ao consumidor em que, ao tentar denunciar, não obtive retorno ágil. É frustrante ver empresas descumprindo leis enquanto a burocracia impede que os órgãos de fiscalização ajudem o cidadão no momento em que ele mais precisa. Esta não é apenas a minha realidade, mas a de milhões de brasileiros que se veem impotentes diante de abusos de consumo, sem uma resposta eficiente, transparente e justa dos órgãos responsáveis.

A proteção dos direitos do consumidor é garantida pelo artigo 5º, inciso XXXII, da Constituição Federal, mas, na prática, vemos que os processos são frequentemente engessados por burocracia e pela ineficiência dos sistemas analógicos de resolução de conflitos. 

Com a migração acelerada do varejo e dos serviços para a internet, onde milhões de transações ocorrem instantaneamente a cada segundo, a distância entre a velocidade do comércio eletrônico e a lentidão dos órgãos de defesa do consumidor tornou-se insustentável. Conforme o Relatório de Atividades do Sistema Nacional de Defesa do Consumidor (SNDC/Senacon), milhares de casos permanecem sem solução por meses, gerando sensação de impunidade para grandes conglomerados e plataformas digitais. Precisamos modernizar esse sistema com tecnologia, inteligência de dados e integração nacional com urgência.`,
    proposalTitle: "Propostas de Reforma e Transformação Digital",
    proposalPoints: [
      {
        title: "Cooperação Interinstitucional Integrada",
        desc: "Cooperação formal entre o Ministério da Justiça e Segurança Pública, a Senacon, os PROCONs estaduais/municipais e as Assembleias Legislativas para reformular, desburocratizar e agilizar os procedimentos de fiscalização e aplicação de penalidades."
      },
      {
        title: "Canal Único Digital com Triagem por Inteligência Artificial",
        desc: "Desenvolvimento de plataforma digital pública integrada com rastreamento de denúncias em tempo real, inteligência de triagem automática para categorizar ilícitos digitais e acionamento instantâneo aos órgãos fiscalizadores competentes."
      },
      {
        title: "Prazos Máximos de 15 Dias Úteis para Apuração",
        desc: "Fixação em lei de prazo improrrogável para início de averiguação formal em casos envolvendo risco à saúde, segurança ou prejuízos patrimoniais coletivos decorrentes do comércio físico ou eletrônico."
      },
      {
        title: "Campanhas Educativas Massivas e Combate a Fraudes Digitais",
        desc: "Investimento em campanhas educativas de alcance nacional para orientar a população sobre seus direitos nas compras virtuais, prevenção contra golpes digitais e uso correto dos canais públicos de denúncia."
      },
      {
        title: "Formação e Capacitação Tecnológica Contínua",
        desc: "Capacitação contínua e atualização técnica para servidores e agentes públicos dos órgãos de defesa do consumidor, preparando-os para investigar infrações complexas no ambiente do comércio eletrônico."
      }
    ],
    billDraft: {
      title: "Minuta do Projeto de Lei",
      subtitle: "Lei da Modernização e Transparência na Proteção ao Consumidor (Lei do Canal Direto)",
      header: "MINUTA DE PROJETO DE LEI Nº ____, DE 2026",
      ementa: "Dispõe sobre a modernização e a transparência no Sistema Nacional de Defesa do Consumidor (Lei do Canal Direto), cria o Canal Único Integrado de Denúncias do Consumidor, estabelece diretrizes para o acionamento automático e tempestivo dos órgãos de fiscalização e controle no comércio físico e eletrônico, e dá outras providências.",
      decree: "O CONGRESSO NACIONAL decreta:",
      chapters: [
        {
          chapter: "CAPÍTULO I – DAS DISPOSIÇÕES PRELIMINARES",
          articles: [
            {
              article: "Art. 1º",
              text: "Esta Lei altera e complementa a legislação do Sistema Nacional de Defesa do Consumidor (SNDC), com o objetivo de garantir celeridade, eficiência, transparência e uso intensivo de tecnologia no atendimento, na triagem e no encaminhamento de denúncias e reclamações de consumidores em todo o território nacional, com especial ênfase nas relações de consumo praticadas no comércio eletrônico e nas plataformas digitais."
            }
          ]
        },
        {
          chapter: "CAPÍTULO II – DO CANAL ÚNICO INTEGRADO DE DENÚNCIAS",
          articles: [
            {
              article: "Art. 2º",
              text: "Fica instituído o Canal Único Integrado de Denúncias do Consumidor, plataforma digital pública centralizada, sob a coordenação da Secretaria Nacional do Consumidor (Senacon), integrada aos PROCONs estaduais e municipais, Ministério Público e Agências Reguladoras."
            },
            {
              article: "Art. 3º",
              text: "A plataforma terá as seguintes funcionalidades obrigatórias:",
              items: [
                "I – Registro simplificado, intuitivo e acompanhamento em tempo real das denúncias pelos cidadãos através de protocolo único nacional;",
                "II – Triagem automatizada por inteligência artificial e categorização ágil de ilícitos de consumo, detectando reincidências e fraudes sistemáticas em plataformas de e-commerce e marketplaces;",
                "III – Envio imediato e simultâneo das denúncias aos órgãos competentes (PROCONs regionais, Vigilância Sanitária, Agências Reguladoras, Defensoria Pública e Ministério Público);",
                "IV – Painel público de transparência (Dashboard Aberto), exibindo indicadores de tempo de resposta das empresas fornecedoras e dos órgãos fiscalizadores públicos."
              ]
            }
          ]
        },
        {
          chapter: "CAPÍTULO III – DA INTEGRAÇÃO E AGILIDADE NAS FISCALIZAÇÕES",
          articles: [
            {
              article: "Art. 4º",
              text: "O recebimento da denúncia pelo Canal Único implicará o acionamento direto do PROCON e demais órgãos fiscalizadores da jurisdição onde ocorreu o fato ou do domicílio do consumidor lesado."
            },
            {
              article: "Art. 5º",
              text: "Fica estabelecido o prazo máximo de 15 (quinze) dias úteis para que os órgãos fiscalizadores emitam parecer inicial ou iniciem formalmente a apuração sobre denúncias que configurem risco iminente à saúde, à segurança ou ao patrimônio individual e coletivo dos consumidores no comércio tradicional ou digital."
            }
          ]
        },
        {
          chapter: "CAPÍTULO IV – DA CAPACITAÇÃO E EDUCAÇÃO AO CONSUMIDOR DIGITAL",
          articles: [
            {
              article: "Art. 6º",
              text: "O Poder Público promoverá campanhas permanentes de conscientização sobre os direitos do consumidor, prevenção contra golpes virtuais, boas práticas no comércio eletrônico e uso correto dos meios de denúncia digital."
            },
            {
              article: "Art. 7º",
              text: "Fica instituído o Programa de Capacitação Contínua para servidores, conciliadores e agentes que atuam na fiscalização e proteção dos direitos do consumidor, com ênfase em crimes cibernéticos e direito do consumidor digital."
            }
          ]
        },
        {
          chapter: "CAPÍTULO V – DAS DISPOSIÇÕES FINAIS",
          articles: [
            {
              article: "Art. 8º",
              text: "As despesas decorrentes da execução desta Lei correrão por conta de dotações orçamentárias próprias, suplementadas se necessário, incentivando-se o aproveitamento e integração dos sistemas digitais já existentes."
            },
            {
              article: "Art. 9º",
              text: "Esta Lei entra em vigor após decorridos 180 (cento e oitenta) dias de sua publicação oficial."
            }
          ]
        }
      ],
      justificativa: `O presente Projeto de Lei atende a uma demanda urgente e inadiável da sociedade brasileira por um sistema de defesa do consumidor moderno, ágil, interoperável e dotado de tecnologia de ponta. 

Historicamente, os processos administrativos e a falta de integração em tempo real entre os órgãos de fiscalização geram morosidade extrema, deixando o cidadão sem respostas tempestivas diante de abusos cometidos por fornecedores de produtos e prestadores de serviços.

Esse cenário tornou-se crítico com a migração massiva do comércio e dos serviços para o ambiente da internet (e-commerce, plataformas de intermediação, redes sociais, aplicativos de delivery e bancos digitais). Hoje, transações financeiras e contratações de serviços ocorrem em segundos, enquanto a resposta dos órgãos fiscalizadores consome semanas ou meses. Essa assimetria temporal alimenta o sentimento de impunidade dos maus fornecedores e deixa milhões de consumidores lesados por cancelamentos unilaterais, recusas de estorno, publicidades enganosas e golpes virtuais.

Com o avanço das tecnologias de informação, inteligência artificial e interoperabilidade de dados, é indispensável a criação de um canal digital único e integrado que permita ao cidadão registrar sua denúncia de forma simplificada e acionar automaticamente os órgãos competentes com protocolo nacional unificado.

A medida garante transparência pública absoluta, otimiza o emprego dos recursos estatais e confere eficácia prática ao mandamento constitucional estabelecido no artigo 5º, inciso XXXII, e no artigo 170, inciso V, da Constituição Federal.

Pelas razões expostas, contamos com a mobilização da sociedade civil e com o apoio dos ilustres parlamentares para a aprovação e célere tramitação desta indispensável proposta legislativa.`
    },
    closingMessage: `Esta reforma não é apenas necessária, é um direito de todos nós. Com o crescimento veloz do comércio eletrônico e das transações digitais, a proteção do consumidor não pode mais depender de processos morosos e desconectados.

Ao unir esforços entre a sociedade civil organizada, cidadãos conscientes e o poder público, podemos construir uma proteção ao consumidor verdadeiramente moderna, célere e acessível para todos os brasileiros.

Assine este abaixo-assinado na Change.org, compartilhe com seus amigos e familiares no WhatsApp e ajude a transformar a defesa do consumidor no Brasil!`
  }
];

export const LAW_FIRM_PRODUCT_DATA = {
  title: "TECNOLOGIA PARA UMA NOVA GERAÇÃO DA ADVOCACIA",
  subtitle: "PLATAFORMA JURÍDICA INTELIGENTE",
  tagline: "Mais organização. Mais controle. Mais eficiência para o seu escritório.",
  homeSummary: "Uma plataforma desenvolvida para modernizar a gestão de escritórios de advocacia, centralizando informações, processos, clientes e operações em um único ambiente.",
  demoUrl: "https://arriving-rattler.monstersites.io/",
  whatsappContactUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20gostaria%20de%20saber%20mais%20sobre%20a%20Plataforma%20Jur%C3%ADdica%20para%20Escrit%C3%B3rios%20de%20Advocacia!",
  heroDescription: "Desenvolvida sob medida para bancas de advocacia e departamentos jurídicos que buscam eliminar gargalos operacionais, blindar prazos processuais e oferecer um atendimento de alto padrão para seus clientes com o suporte de automação e Inteligência Artificial.",
  features: [
    {
      id: "clientes",
      title: "Gestão de Clientes (CRM 360°)",
      description: "Cadastro completo com qualificação das partes, histórico de atendimentos, dossiê documental, canais de contato rápido e registro de procurações.",
      category: "Atendimento & CRM"
    },
    {
      id: "processos",
      title: "Gestão de Processos & Andamentos",
      description: "Acompanhamento unificado de processos judiciais e administrativos, numeração CNJ, tribunal, vara, fase processual e distribuição de responsabilidades.",
      category: "Controladoria Jurídica"
    },
    {
      id: "agenda",
      title: "Agenda Jurídica & Prazos Fatais",
      description: "Controle rigoroso de prazos com contagem em dias úteis/corridos, audiências, perícias e reuniões com alertas automáticos e sincronização de calendário.",
      category: "Operacional & Prazos"
    },
    {
      id: "documentos",
      title: "GED Inteligente & Modelos",
      description: "Armazenamento estruturado na nuvem, busca textual por OCR em anexos e geração ágil de petições com modelos pré-formatados.",
      category: "Documentação"
    },
    {
      id: "financeiro",
      title: "Financeiro & Honorários",
      description: "Gestão de honorários contratuais e sucumbenciais, parcelamentos, controle de custas processuais, conciliação bancária e fluxo de caixa.",
      category: "Financeiro"
    },
    {
      id: "comunicacao",
      title: "Atendimento & WhatsApp Integrado",
      description: "Envio de atualizações de andamentos diretamente para o WhatsApp do cliente, reduzindo ligações repetitivas e elevando a satisfação.",
      category: "Comunicação"
    },
    {
      id: "relatorios",
      title: "Relatórios & Business Intelligence",
      description: "Dashboards visuais com taxa de êxito, rentabilidade por área do direito, produtividade da equipe e volume de prazos por período.",
      category: "Gestão & BI"
    },
    {
      id: "permissoes",
      title: "Perfis & Níveis de Acesso",
      description: "Controle hierárquico estrito para advogados sócios, associados, estagiários e financeiro, garantindo sigilo e separação de pastas confidenciais.",
      category: "Governança"
    },
    {
      id: "ia-automacao",
      title: "Automação & Inteligência Artificial",
      description: "Triagem automatizada de publicações, leitura assistida de intimações e geração de rascunhos de peças com prompts jurídicos especializados.",
      category: "Inovação"
    },
    {
      id: "seguranca-lgpd",
      title: "Segurança Jurídica & LGPD",
      description: "Ambiente blindado com criptografia de ponta a ponta, backups automáticos diários, logs de auditoria e total conformidade com as normas da OAB.",
      category: "Segurança"
    }
  ],
  benefits: [
    {
      title: "Centralização Total",
      desc: "Adeus à dispersão de planilhas e mensagens soltas. Tudo o que o escritório precisa em um único painel integrado."
    },
    {
      title: "Organização Impecável",
      desc: "Padronização de pastas, dossiês de clientes e modelos de peças para manter a controladoria sempre em dia."
    },
    {
      title: "Produtividade Multiplicada",
      desc: "Menos tempo gasto com rotinas manuais e mais tempo dedicado às teses jurídicas e ao relacionamento com clientes."
    },
    {
      title: "Segurança & Conformidade",
      desc: "Proteção rigorosa de dados pessoais e sigilo profissional sob os padrões mais elevados da LGPD."
    },
    {
      title: "Controle & Previsibilidade",
      desc: "Visão em tempo real de faturamento, prazos iminentes e status de cada caso da banca."
    },
    {
      title: "Automação com IA",
      desc: "Acelere a triagem de intimações e a revisão de peças com recursos inteligentes prontos para uso."
    },
    {
      title: "Escalabilidade do Negócio",
      desc: "Cresça sua carteira de clientes mantendo a mesma qualidade, governança e agilidade no atendimento."
    }
  ],
  securityPillars: [
    {
      title: "Controle de Acesso Granular",
      desc: "Definição minuciosa de quem pode ver, editar ou exportar cada processo, documento ou relatório financeiro."
    },
    {
      title: "Trilha de Auditoria Completa",
      desc: "Histórico detalhado de acessos, downloads e alterações para auditoria interna e compliance."
    },
    {
      title: "Proteção & Criptografia",
      desc: "Comunicação criptografada com certificados SSL/TLS de alta segurança e custódia segura de dados na nuvem."
    },
    {
      title: "Adequação Estrita à LGPD",
      desc: "Processos alinhados à Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e ao Código de Ética da OAB."
    }
  ],
  demoScreens: [
    {
      id: "dashboard",
      label: "1. Dashboard Geral",
      title: "Visão Executiva & Painel de Controle",
      desc: "Acompanhe prazos urgentes do dia, audiências agendadas, novos clientes e o resumo financeiro em tempo real.",
      image: "/src/assets/images/law_firm_dashboard_1787133908200.jpg"
    },
    {
      id: "processos",
      label: "2. Processos & Prazos",
      title: "Gestão Processual & Linha do Tempo",
      desc: "Organização visual por fases, varas, alertas de prazos fatais e controle de intimações judiciais.",
      image: "/src/assets/images/law_firm_cases_1787133935650.jpg"
    },
    {
      id: "financeiro",
      label: "3. Financeiro & Honorários",
      title: "Controle de Caixa & Faturamento",
      desc: "Acompanhamento de parcelas, emissão de cobranças, custas antecipadas e divisão de honorários da equipe.",
      image: "/src/assets/images/law_firm_finance_1787133958765.jpg"
    }
  ]
};

export const LAW_FIRM_PRICING_DATA = {
  sectionTitle: "ESCOLHA A ESTRUTURA IDEAL PARA O SEU ESCRITÓRIO",
  sectionSubtitle: "Planos desenvolvidos para acompanhar o crescimento da sua operação jurídica, do profissional autônomo às grandes bancas e departamentos jurídicos.",
  
  billingCycles: {
    monthly: {
      id: "mensal",
      label: "Mensal",
      badge: "Sem fidelidade"
    },
    annual: {
      id: "anual",
      label: "Anual",
      badge: "Economia no pagamento anual"
    }
  },

  plans: [
    {
      id: "essencial",
      name: "Plano Essencial",
      shortName: "Essencial",
      isPopular: false,
      recommendedBadge: null,
      targetAudience: "Advogados autônomos e pequenos escritórios.",
      usersLimit: "1 usuário",
      monthlyPrice: {
        value: 149,
        formatted: "R$ 149",
        period: "/mês",
        note: "Cobrança mensal recorrente"
      },
      annualPrice: {
        value: 1490,
        formatted: "R$ 1.490",
        period: "/ano",
        equivalentMonthly: "R$ 124,16/mês",
        savingsText: "Economize em relação ao pagamento mensal."
      },
      ctaText: "COMEÇAR AGORA",
      ctaUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20tenho%20interesse%20em%20come%C3%A7ar%20no%20Plano%20Essencial%20da%20Plataforma%20Jur%C3%ADdica%20(R$%20149/m%C3%AAs)!",
      features: [
        "Gestão de clientes",
        "CRM básico",
        "Processos",
        "Prazos",
        "Tarefas",
        "Agenda",
        "Documentos",
        "Notificações",
        "Dashboard",
        "Controle de acesso"
      ]
    },
    {
      id: "profissional",
      name: "Plano Profissional",
      shortName: "Profissional",
      isPopular: true,
      recommendedBadge: "MAIS ESCOLHIDO",
      targetAudience: "Escritórios pequenos e médios que precisam centralizar sua operação.",
      usersLimit: "Até 5 usuários",
      monthlyPrice: {
        value: 299,
        formatted: "R$ 299",
        period: "/mês",
        note: "Cobrança mensal recorrente"
      },
      annualPrice: {
        value: 2990,
        formatted: "R$ 2.990",
        period: "/ano",
        equivalentMonthly: "R$ 249,16/mês",
        savingsText: "Economize em relação ao pagamento mensal."
      },
      ctaText: "ESCOLHER PROFISSIONAL",
      ctaUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20quero%20contratar%20o%20Plano%20Profissional%20da%20Plataforma%20Jur%C3%ADdica%20(Mais%20Escolhido)!",
      features: [
        "Tudo do Plano Essencial",
        "CRM jurídico completo",
        "Gestão completa de processos",
        "Gestão de partes",
        "Gestão de documentos",
        "Contratos",
        "Honorários",
        "Financeiro",
        "Relatórios",
        "Auditoria",
        "LGPD",
        "Automações",
        "Recursos de Inteligência Artificial",
        "Até 5 usuários"
      ]
    },
    {
      id: "premium",
      name: "Plano Premium",
      shortName: "Premium",
      isPopular: false,
      recommendedBadge: null,
      targetAudience: "Escritórios estruturados que precisam de maior controle, automação e inteligência.",
      usersLimit: "Até 15 usuários",
      monthlyPrice: {
        value: 599,
        formatted: "R$ 599",
        period: "/mês",
        note: "Cobrança mensal recorrente"
      },
      annualPrice: {
        value: 5990,
        formatted: "R$ 5.990",
        period: "/ano",
        equivalentMonthly: "R$ 499,16/mês",
        savingsText: "Economize em relação ao pagamento mensal."
      },
      ctaText: "ESCOLHER PREMIUM",
      ctaUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20quero%20conhecer%20e%20contratar%20o%20Plano%20Premium%20da%20Plataforma%20Jur%C3%ADdica!",
      features: [
        "Tudo do Plano Profissional",
        "Até 15 usuários",
        "IA avançada",
        "Automações avançadas",
        "Relatórios avançados",
        "Maior armazenamento",
        "Maior volume de documentos",
        "Comunicação integrada",
        "Integrações",
        "Recursos avançados de gestão",
        "Suporte prioritário"
      ]
    },
    {
      id: "enterprise",
      name: "Plano Enterprise",
      shortName: "Enterprise",
      isPopular: false,
      recommendedBadge: "CORPORATIVO",
      targetAudience: "Grandes escritórios e departamentos jurídicos.",
      usersLimit: "20+ usuários",
      monthlyPrice: {
        value: 1490,
        formatted: "A partir de R$ 1.490",
        period: "/mês",
        note: "Proposta sob medida"
      },
      annualPrice: {
        value: null,
        formatted: "A partir de R$ 1.490",
        period: "/mês (Sob Consulta)",
        equivalentMonthly: "Condições corporativas exclusivas",
        savingsText: "Economize em relação ao pagamento mensal."
      },
      ctaText: "FALAR COM ESPECIALISTA",
      ctaUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20gostaria%20de%20uma%20proposta%20Enterprise%20personalizada%20para%20nosso%20departamento%20jur%C3%ADdico/escrit%C3%B3rio!",
      features: [
        "Tudo do Plano Premium",
        "20+ usuários",
        "Múltiplas unidades",
        "Integrações personalizadas",
        "Implantação dedicada",
        "Suporte prioritário",
        "SLA",
        "Customizações",
        "Maior capacidade operacional",
        "Arquitetura preparada para grandes operações"
      ]
    }
  ],

  setup: {
    title: "IMPLANTAÇÃO",
    startingPrice: "A partir de R$ 997",
    badge: "Serviço Inicial Avulso",
    description: "Configuração inicial da plataforma, parametrização do escritório, criação de usuários, configuração de permissões e orientação inicial para utilização do sistema.",
    clarification: "A implantação é um serviço de setup técnico cobrado separadamente da assinatura (pagamento único), garantindo que sua equipe comece a operar com processos ajustados desde o primeiro dia."
  },

  commercialHighlight: {
    title: "COMECE PELO PLANO QUE FAZ SENTIDO PARA SUA OPERAÇÃO",
    description: "Você pode começar com uma estrutura enxuta e evoluir conforme o crescimento do escritório. Faça upgrade do plano quando sua operação precisar de mais usuários, recursos, automações ou inteligência."
  },

  faq: [
    {
      question: "Posso mudar de plano depois?",
      answer: "Sim. Você pode fazer upgrade ou downgrade de plano a qualquer momento conforme o tamanho da equipe e o volume de processos do escritório aumentarem."
    },
    {
      question: "Existe fidelidade?",
      answer: "Nos planos com cobrança mensal não há contrato de fidelidade nem multa por cancelamento. Nos planos anuais você garante economia contratando o período de 12 meses."
    },
    {
      question: "A implantação está incluída na mensalidade?",
      answer: "Não. A implantação é uma etapa inicial separada (a partir de R$ 997, taxa única) para parametrização de fluxos, cadastro de usuários e orientação técnica da equipe."
    },
    {
      question: "Posso contratar recursos adicionais?",
      answer: "Sim. Usuários adicionais, maior espaço de armazenamento na nuvem e módulos customizados podem ser contratados sob demanda a qualquer momento."
    },
    {
      question: "Os planos possuem limite de usuários?",
      answer: "Sim: Plano Essencial (1 usuário), Plano Profissional (até 5 usuários), Plano Premium (até 15 usuários) e Plano Enterprise (20+ usuários sob medida)."
    },
    {
      question: "A Inteligência Artificial possui limite de utilização?",
      answer: "Os planos com recursos de IA incluem franquia mensal balanceada para o fluxo diário de pesquisas, triagens e elaboração de rascunhos de peças."
    },
    {
      question: "Existe plano para grandes escritórios?",
      answer: "Sim. O Plano Enterprise foi desenvolvido especificamente para grandes bancas e departamentos jurídicos com múltiplas unidades, SLA de suporte e integrações dedicadas."
    },
    {
      question: "Posso contratar a plataforma anualmente?",
      answer: "Sim. A modalidade anual oferece condições com desconto expressivo, reduzindo os custos operacionais do escritório em relação à cobrança mensal."
    }
  ],

  finalCta: {
    title: "PRONTO PARA MODERNIZAR A GESTÃO DO SEU ESCRITÓRIO?",
    description: "Centralize sua operação jurídica, reduza tarefas manuais e tenha mais controle sobre clientes, processos, documentos, prazos e financeiro.",
    btnPrimaryText: "COMEÇAR AGORA",
    btnSecondaryText: "FALAR COM UM ESPECIALISTA",
    primaryUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20quero%20modernizar%20a%20gest%C3%A3o%20do%20meu%20escrit%C3%B3rio%20com%20a%20Plataforma%20Jur%C3%ADdica!",
    secondaryUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20Plataforma%20Jur%C3%ADdica!"
  }
};

export const LUCENA_WEBSITE_PRODUCT_DATA = {
  title: "SITE PROFISSIONAL PARA ADVOCACIA",
  modelName: "Lucena & Associados Advogados",
  categoryBadge: "Desenvolvimento Web • Modelo Comercial Exclusivo",
  tagline: "Autoridade, Elegância e Captação Ativa de Clientes em Total Conformidade com a OAB",
  demoUrl: "https://arriving-rattler.monstersites.io/",
  whatsappContactUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20Site%20de%20Advocacia%20(Modelo%20Lucena%20%26%20Associados%20Advogados)!",
  heroDescription: "Um site institucional de alto padrão desenvolvido especialmente para advogados autônomos, sócios e bancas de advocacia que desejam transmitir credibilidade imediata, ranquear no Google e transformar visitantes em consultas pelo WhatsApp.",
  oabCompliance: "Desenvolvido em estrita conformidade com o Provimento nº 205/2021 do CFOAB sobre publicidade e marketing jurídico ético.",
  features: [
    {
      id: "autoridade",
      title: "Design de Alto Padrão & Credibilidade",
      description: "Paleta sóbria, tipografia clássica e diagramação editorial que transmitem solidez institucional desde o primeiro segundo de navegação.",
      category: "Posicionamento"
    },
    {
      id: "whatsapp",
      title: "Botão Flutuante & Captação via WhatsApp",
      description: "Gatilho de contato com mensagens pré-formatadas por área de interesse (Direito de Família, Trabalhista, Civil, etc.), acelerando o atendimento.",
      category: "Conversão"
    },
    {
      id: "areas-atuacao",
      title: "Páginas & Seções de Áreas de Atuação",
      description: "Módulos dedicados para detalhar especialidades jurídicas, esclarecer dúvidas frequentes dos clientes e valorizar o know-how da banca.",
      category: "Estrutura"
    },
    {
      id: "seo-google",
      title: "Otimização para Busca Local (SEO Google)",
      description: "Estrutura técnica com meta tags semânticas, schema markup para escritórios de advocacia e indexação ágil nos motores de busca.",
      category: "Visibilidade"
    },
    {
      id: "mobile-first",
      title: "100% Responsivo & Ultrarrápido",
      description: "Visual perfeito e carregamento instantâneo em smartphones, tablets e notebooks, garantindo que nenhum cliente desista por lentidão.",
      category: "Performance"
    },
    {
      id: "lgpd-contato",
      title: "Formulários Seguros & Conformidade LGPD",
      description: "Canal de consulta com aviso de privacidade e aceite de termos, protegendo o escritório e os dados sensíveis dos clientes.",
      category: "Segurança"
    },
    {
      id: "blog-artigos",
      title: "Módulo de Notícias & Artigos Jurídicos",
      description: "Área para publicação de conteúdos informativos, jurisprudências comentadas e posicionamentos éticos para fortalecimento de marca.",
      category: "Marketing de Conteúdo"
    },
    {
      id: "equipe-socios",
      title: "Apresentação dos Sócios & Advogados",
      description: "Cards detalhados com foto profissional, número de inscrição na OAB, titulação acadêmica, áreas de foco e link para o LinkedIn/Lattes.",
      category: "Institucional"
    }
  ],
  includedServices: [
    {
      title: "Personalização Completa",
      desc: "Adaptação de cores, logomarca, textos, fotos da equipe e áreas de atuação de acordo com a identidade do seu escritório."
    },
    {
      title: "Hospedagem Rápida & Certificado SSL",
      desc: "Servidor estável com conexão criptografada (cadeado de segurança HTTPS) e carregamento otimizado."
    },
    {
      title: "Configuração de Domínio & E-mails",
      desc: "Integração do domínio oficial (ex: seuescritorio.adv.br) e criação de e-mails corporativos profissionais."
    },
    {
      title: "Total Liberdade & Autonomia",
      desc: "Sem mensalidades abusivas ou dependência técnica para edições simples de conteúdo e postagens."
    },
    {
      title: "Suporte e Treinamento",
      desc: "Acompanhamento no lançamento do site e orientações práticas para atendimento das consultas recebidas."
    }
  ],
  demoScreens: [
    {
      id: "homepage",
      label: "1. Página Inicial (Hero & Apresentação)",
      title: "Home Institucional & Autoridade",
      desc: "Apresentação de impacto com chamada para consulta, slogan da banca e botão de contato imediato.",
      image: "/src/assets/images/lucena_advogados_website_1787134706248.jpg"
    },
    {
      id: "areas",
      label: "2. Áreas de Atuação & Equipe",
      title: "Especialidades & Apresentação dos Advogados",
      desc: "Demonstração clara das frentes de atuação, bio dos sócios, formulário de contato e integração com WhatsApp.",
      image: "/src/assets/images/lucena_mobile_preview_1787134734085.jpg"
    }
  ],
  pricing: {
    productName: "Template Premium para Escritórios de Advocacia",
    technology: "React + WordPress",
    priceFormatted: "R$ 597,00",
    priceValue: "597",
    currency: "R$",
    licenseType: "LICENÇA PARA 1 SITE",
    licenseShort: "/ licença",
    buyUrl: "https://wa.me/5551981446019?text=Ol%C3%A1%20Vini,%20quero%20comprar%20a%20licen%C3%A7a%20do%20Template%20Lucena%20%26%20Associados%20(R$%20597,00)!",
    demoUrl: "https://arriving-rattler.monstersites.io/",
    benefits: [
      "Uso em 1 site",
      "Layout totalmente responsivo",
      "Estrutura React + WordPress",
      "Blog integrado",
      "Módulos jurídicos",
      "Formulário de contato",
      "Recursos preparados para LGPD",
      "SEO otimizado",
      "Suporte à navegação mobile",
      "Código organizado e reutilizável"
    ],
    technicalHighlights: [
      "Design profissional para advocacia",
      "Estrutura institucional completa",
      "Módulos jurídicos e áreas de atuação",
      "Blog e artigos integrados",
      "Formulário de contato preparado para LGPD",
      "Popup de contato e gatilho de WhatsApp",
      "SEO otimizado para Google",
      "Layout responsivo e veloz",
      "Componentes reutilizáveis",
      "Navegação desktop e mobile"
    ],
    disclaimer: "Licença para utilização em um único site. Personalizações, instalação, hospedagem e serviços adicionais podem ser contratados separadamente."
  }
};



