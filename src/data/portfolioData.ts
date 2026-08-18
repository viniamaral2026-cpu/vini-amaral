import { ServiceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_DATA = {
  name: "Vini Amaral",
  fullName: "Marcos Vinícius (Vini Amaral)",
  roleTitle: "Cargos Operacionais, Administrativos e de Controladoria Jurídica",
  secondaryTitle: "Suporte de TI, Gestão Documental & Automação com IA",
  address: "Taquara - RS (Disponível Home Office & Presencial)",
  location: "Taquara - RS",
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
  description: "Como a DEEVO Soluções Financeiras possui um CNPJ muito amplo e estratégico — cobrindo desde Correspondente Bancário até Suporte de TI, Tratamento de Dados e Serviços Administrativos —, o seu portfólio de serviços pode ser dividido em três pilares principais.",
  structureNote: "Essa estrutura mostra que a sua empresa entrega tanto a parte financeira quanto a infraestrutura tecnológica e operacional:",
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
