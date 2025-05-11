export type Language = "pt-BR" | "en-US" | "es-ES";

interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  [key in Language]: TranslationObject;
}

export const translations: Translations = {
  "pt-BR": {
    nav: {
      about: "Sobre a Brazuca Cloud",
      aboutDropdown: {
        history: "Nossa História",
        team: "Nossa Equipe",
        mission: "Missão e Valores"
      },
      cloudCenter: "Cloud Center",
      cloudCenterDropdown: {
        infrastructure: "Infraestrutura",
        solutions: "Soluções",
        pricing: "Preços"
      },
      privateCloud: "Nuvem Privada",
      virtualDatacenter: "Datacenter Virtual",
      cloudServer: "Cloud Server",
      clientArea: "Área do Cliente"
    },
    hero: {
      title: "A Melhor Solução de Nuvem Privada do Mercado",
      description: "Oferecemos soluções avançadas de Cloud para Nuvens Privadas, Cloud Center, Datacenters Virtuais, Servidores Dedicados e VPS com alta disponibilidade e segurança aprimorada em DATACENTER FÍSICO com CERTIFICAÇÃO TIER 3.",
      buttons: {
        primary: "Fale com Especialista",
        secondary: "Conheça Nossas Soluções"
      }
    },
    features: {
      uptime: {
        title: "Uptime Garantido",
        description: "99.9% de disponibilidade para seus sistemas"
      },
      support: {
        title: "Suporte 24/7",
        description: "Atendimento especializado a qualquer momento"
      },
      security: {
        title: "Segurança",
        description: "Proteção contra ataques DDoS e backup automático"
      },
      certification: {
        title: "Certificação",
        description: "Datacenter com certificação TIER 3"
      }
    },
    services: {
      title: "Nossas Soluções de Cloud",
      description: "Descubra a infraestrutura de nuvem ideal para o seu negócio com nossas soluções personalizadas para empresas de todos os tamanhos.",
      learnMore: "Saiba Mais",
      cards: {
        privateCloud: {
          title: "Nuvem Privada",
          description: "Maximize controle e segurança com nossa infraestrutura de nuvem privada totalmente personalizada às necessidades do seu negócio.",
          features: [
            "Ambiente isolado e dedicado",
            "Alta performance garantida",
            "Segurança reforçada"
          ]
        },
        cloudCenter: {
          title: "Cloud Center",
          description: "Centralize suas operações em nuvem com nossa solução completa de gerenciamento e infraestrutura avançada.",
          features: [
            "Gerenciamento centralizado",
            "Escalabilidade imediata",
            "Monitoramento 24/7"
          ]
        },
        virtualDatacenter: {
          title: "Datacenter Virtual",
          description: "Obtenha a infraestrutura completa de um datacenter físico em ambiente virtualizado e com recursos flexíveis.",
          features: [
            "Infraestrutura flexível",
            "Redundância total",
            "Certificação TIER 3"
          ]
        },
        cloudServer: {
          title: "Cloud Server",
          description: "Servidores virtuais de alta performance com recursos dedicados para suas aplicações mais exigentes.",
          features: [
            "Alta disponibilidade",
            "Recursos dedicados",
            "Backup automático"
          ]
        }
      }
    },
    infrastructure: {
      title: "Infraestrutura de Última Geração",
      description: "Nossa infraestrutura de datacenter conta com as mais avançadas tecnologias do mercado, garantindo máxima performance, disponibilidade e segurança para seus dados e aplicações.",
      processors: {
        title: "Processadores de Alto Desempenho",
        description: "Equipamentos Intel Xeon e AMD EPYC de última geração para máxima performance."
      },
      storage: {
        title: "Armazenamento SSD NVMe",
        description: "Discos SSD NVMe para leitura e escrita ultrarrápidas, elimine gargalos de I/O."
      },
      network: {
        title: "Rede Redundante",
        description: "Conexões de rede 10Gbps com múltiplos provedores e proteção contra DDoS."
      },
      certification: {
        title: "Certificação TIER 3",
        description: "99.9% de disponibilidade"
      },
      button: "Conheça Nossa Infraestrutura",
      specs: {
        title: "Especificações Técnicas",
        servers: "Servidores",
        serversDetail: "Intel Xeon/AMD EPYC, com Multi-CPU e alta capacidade de processamento",
        storage: "Armazenamento",
        storageDetail: "Arrays SSD NVMe de alta velocidade com redundância RAID",
        network: "Rede",
        networkDetail: "Conexões redundantes 10Gbps com múltiplos provedores",
        security: "Segurança",
        securityDetail: "Proteção DDoS, Firewall Avançado e Monitoramento 24/7"
      }
    },
    testimonials: {
      title: "O Que Nossos Clientes Dizem",
      description: "Empresas de diversos segmentos confiam na Brazuca Cloud para suas soluções de infraestrutura em nuvem.",
      button: "Seja o Próximo Caso de Sucesso",
      feedback: {
        title: "Compartilhe Sua Experiência",
        description: "Sua opinião é muito importante para nós. Entre em contato para compartilhar sua experiência com nossos serviços."
      },
      items: [
        {
          content: "A migração para a nuvem privada da Brazuca Cloud reduziu nossos custos operacionais em 30% e melhorou significativamente a performance das nossas aplicações.",
          name: "Ricardo Oliveira",
          role: "CTO, TechSolutions"
        },
        {
          content: "O suporte técnico 24/7 da Brazuca Cloud é excepcional. Sempre que precisamos, temos uma resposta rápida e eficiente para qualquer problema.",
          name: "Fernanda Costa",
          role: "Gerente de TI, E-Commerce Brasil"
        },
        {
          content: "A segurança e conformidade da infraestrutura da Brazuca Cloud nos ajudou a atender aos requisitos regulatórios do nosso setor com facilidade.",
          name: "Marcelo Santos",
          role: "Diretor, FinTech Solutions"
        }
      ]
    },
    pricing: {
      title: "Planos e Preços",
      description: "Escolha o plano ideal para suas necessidades de computação em nuvem. Todos incluem suporte técnico especializado e infraestrutura de alta qualidade.",
      signup: "Contratar",
      mostPopular: "Mais Popular",
      customSolution: "Precisa de uma solução sob medida?",
      customButton: "Solicite um Orçamento Personalizado",
      plans: {
        start: {
          title: "Cloud Start",
          subtitle: "Para pequenas empresas",
          features: [
            "2 vCPUs",
            "4GB RAM",
            "50GB SSD NVMe",
            "1TB de Transferência",
            "Suporte por Email"
          ]
        },
        pro: {
          title: "Cloud Pro",
          subtitle: "Para empresas em crescimento",
          features: [
            "4 vCPUs",
            "8GB RAM",
            "100GB SSD NVMe",
            "3TB de Transferência",
            "Suporte 24/7",
            "Backup Diário"
          ]
        },
        enterprise: {
          title: "Cloud Enterprise",
          subtitle: "Para grandes empresas",
          features: [
            "8 vCPUs",
            "16GB RAM",
            "200GB SSD NVMe",
            "5TB de Transferência",
            "Suporte 24/7 Prioritário",
            "Backup Diário + Semanal",
            "Proteção DDoS Avançada"
          ]
        }
      }
    },
    contact: {
      title: "Entre em Contato",
      description: "Estamos prontos para ajudar sua empresa a escolher a melhor solução de nuvem. Fale com um de nossos especialistas hoje mesmo.",
      address: {
        title: "Endereço",
        value: "Av. Paulista, 1000, São Paulo - SP, Brasil"
      },
      phone: {
        title: "Telefone",
        value: "+55 (11) 3000-0000"
      },
      email: {
        title: "Email",
        value: "contato@brazucacloud.com.br"
      },
      social: {
        title: "Nos Siga"
      },
      form: {
        title: "Fale com um Especialista",
        fields: {
          name: "Nome",
          email: "Email",
          phone: "Telefone",
          company: "Empresa",
          service: "Serviço de Interesse",
          selectService: "Selecione um serviço",
          message: "Mensagem"
        },
        services: {
          privateCloud: "Nuvem Privada",
          cloudCenter: "Cloud Center",
          virtualDatacenter: "Datacenter Virtual",
          cloudServer: "Cloud Server",
          other: "Outro"
        },
        submit: "Enviar Mensagem",
        submitting: "Enviando...",
        validation: {
          name: "Nome é obrigatório",
          email: "Email inválido",
          phone: "Telefone inválido",
          company: "Empresa é obrigatória",
          service: "Selecione um serviço",
          message: "Mensagem deve ter pelo menos 10 caracteres"
        },
        success: {
          title: "Mensagem enviada!",
          message: "Entraremos em contato em breve."
        },
        error: {
          title: "Erro ao enviar mensagem",
          message: "Tente novamente mais tarde."
        }
      }
    },
    partners: {
      title: "Nossos Parceiros Tecnológicos",
      description: "Trabalhamos com os melhores parceiros tecnológicos para entregar soluções de nuvem de alta qualidade.",
      disclaimer: "As marcas listadas são propriedade de seus respectivos detentores e servem apenas como referência para as tecnologias utilizadas em nossa infraestrutura."
    },
    footer: {
      description: "Soluções avançadas de cloud computing para empresas de todos os tamanhos, com infraestrutura de alta performance e segurança.",
      copyright: "Todos os direitos reservados.",
      services: {
        title: "Serviços",
        privateCloud: "Nuvem Privada",
        cloudCenter: "Cloud Center",
        virtualDatacenter: "Datacenter Virtual",
        cloudServer: "Cloud Server",
        cloudBackup: "Backup em Nuvem",
        cloudConsulting: "Consultoria em Cloud"
      },
      usefulLinks: {
        title: "Links Úteis",
        aboutUs: "Sobre Nós",
        pricing: "Preços",
        blog: "Blog",
        clientArea: "Área do Cliente",
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade"
      },
      contact: {
        title: "Contato",
        address: "Av. Paulista, 1000, São Paulo - SP, Brasil",
        phone: "+55 (11) 3000-0000",
        email: "contato@brazucacloud.com.br"
      },
      newsletter: {
        title: "Fique por dentro das novidades",
        placeholder: "Seu email"
      },
      bottom: {
        terms: "Termos de Serviço",
        privacy: "Política de Privacidade",
        cookies: "Política de Cookies"
      }
    },
    languages: {
      portuguese: "Português",
      english: "Inglês",
      spanish: "Espanhol"
    },
    calculator: {
      title: "Calculadora de Preços",
      description: "Configure os recursos de acordo com suas necessidades e obtenha uma estimativa de preço em tempo real para sua infraestrutura em nuvem.",
      resourceConfiguration: "Configuração de Recursos",
      cpu: "CPUs Virtuais",
      cpuTooltip: "Número de processadores virtuais. Mais vCPUs melhoram o desempenho para aplicações que utilizam processamento paralelo.",
      ram: "Memória RAM",
      ramTooltip: "Quantidade de memória para suas aplicações. Mais memória melhora o desempenho para aplicações que lidam com grandes conjuntos de dados.",
      storage: "Armazenamento",
      storageTooltip: "Espaço em disco SSD NVMe para armazenar seus dados e aplicações.",
      bandwidth: "Tráfego de Rede",
      bandwidthTooltip: "Quantidade de transferência de dados mensais incluída no seu plano.",
      addons: "Complementos",
      dailyBackup: "Backup Diário",
      dailyBackupDescription: "Backup automatizado diário com retenção por 7 dias",
      ddosProtection: "Proteção DDoS",
      ddosProtectionDescription: "Proteção avançada contra ataques de negação de serviço",
      pricingSummary: "Resumo de Preços",
      billingPeriod: "Período de Cobrança",
      monthly: "Mensal",
      annual: "Anual",
      savePercent: "Economize {{percent}}%",
      priceBreakdown: "Detalhamento do Preço",
      computeResources: "Recursos de Computação",
      annualDiscount: "Desconto Anual",
      total: "Total",
      monthlyEquivalent: "Equivalente Mensal",
      contactSales: "Falar com Vendas",
      disclaimer: "Os preços são apenas estimativas. Impostos podem ser aplicados. Entre em contato para um orçamento personalizado."
    }
  },
  "en-US": {
    nav: {
      about: "About Brazuca Cloud",
      aboutDropdown: {
        history: "Our History",
        team: "Our Team",
        mission: "Mission and Values"
      },
      cloudCenter: "Cloud Center",
      cloudCenterDropdown: {
        infrastructure: "Infrastructure",
        solutions: "Solutions",
        pricing: "Pricing"
      },
      privateCloud: "Private Cloud",
      virtualDatacenter: "Virtual Datacenter",
      cloudServer: "Cloud Server",
      clientArea: "Client Area"
    },
    hero: {
      title: "The Best Private Cloud Solution on the Market",
      description: "We offer advanced Cloud solutions for Private Clouds, Cloud Center, Virtual Datacenters, Dedicated Servers and VPS with high availability and enhanced security in PHYSICAL DATACENTER with TIER 3 CERTIFICATION.",
      buttons: {
        primary: "Talk to a Specialist",
        secondary: "Discover Our Solutions"
      }
    },
    features: {
      uptime: {
        title: "Guaranteed Uptime",
        description: "99.9% availability for your systems"
      },
      support: {
        title: "24/7 Support",
        description: "Specialized assistance at any time"
      },
      security: {
        title: "Security",
        description: "DDoS attack protection and automatic backup"
      },
      certification: {
        title: "Certification",
        description: "TIER 3 certified datacenter"
      }
    },
    services: {
      title: "Our Cloud Solutions",
      description: "Discover the ideal cloud infrastructure for your business with our customized solutions for companies of all sizes.",
      learnMore: "Learn More",
      cards: {
        privateCloud: {
          title: "Private Cloud",
          description: "Maximize control and security with our private cloud infrastructure fully customized to your business needs.",
          features: [
            "Isolated and dedicated environment",
            "Guaranteed high performance",
            "Enhanced security"
          ]
        },
        cloudCenter: {
          title: "Cloud Center",
          description: "Centralize your cloud operations with our complete management solution and advanced infrastructure.",
          features: [
            "Centralized management",
            "Immediate scalability",
            "24/7 monitoring"
          ]
        },
        virtualDatacenter: {
          title: "Virtual Datacenter",
          description: "Get the complete infrastructure of a physical datacenter in a virtualized environment with flexible resources.",
          features: [
            "Flexible infrastructure",
            "Total redundancy",
            "TIER 3 certification"
          ]
        },
        cloudServer: {
          title: "Cloud Server",
          description: "High-performance virtual servers with dedicated resources for your most demanding applications.",
          features: [
            "High availability",
            "Dedicated resources",
            "Automatic backup"
          ]
        }
      }
    },
    infrastructure: {
      title: "State-of-the-Art Infrastructure",
      description: "Our datacenter infrastructure features the most advanced technologies on the market, ensuring maximum performance, availability, and security for your data and applications.",
      processors: {
        title: "High-Performance Processors",
        description: "Latest generation Intel Xeon and AMD EPYC equipment for maximum performance."
      },
      storage: {
        title: "SSD NVMe Storage",
        description: "SSD NVMe disks for ultra-fast read and write, eliminate I/O bottlenecks."
      },
      network: {
        title: "Redundant Network",
        description: "10Gbps network connections with multiple providers and DDoS protection."
      },
      certification: {
        title: "TIER 3 Certification",
        description: "99.9% availability"
      },
      button: "Discover Our Infrastructure",
      specs: {
        title: "Technical Specifications",
        servers: "Servers",
        serversDetail: "Intel Xeon/AMD EPYC, with Multi-CPU and high processing capacity",
        storage: "Storage",
        storageDetail: "High-speed SSD NVMe arrays with RAID redundancy",
        network: "Network",
        networkDetail: "10Gbps redundant connections with multiple providers",
        security: "Security",
        securityDetail: "DDoS Protection, Advanced Firewall and 24/7 Monitoring"
      }
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "Companies from various segments trust Brazuca Cloud for their cloud infrastructure solutions.",
      button: "Be Our Next Success Story",
      feedback: {
        title: "Share Your Experience",
        description: "Your opinion is very important to us. Get in touch to share your experience with our services."
      },
      items: [
        {
          content: "Migration to Brazuca Cloud's private cloud reduced our operational costs by 30% and significantly improved the performance of our applications.",
          name: "Richard Smith",
          role: "CTO, TechSolutions"
        },
        {
          content: "Brazuca Cloud's 24/7 technical support is exceptional. Whenever we need it, we get a quick and efficient response to any problem.",
          name: "Jennifer Parker",
          role: "IT Manager, E-Commerce Global"
        },
        {
          content: "The security and compliance of Brazuca Cloud's infrastructure helped us meet our industry's regulatory requirements with ease.",
          name: "Michael Johnson",
          role: "Director, FinTech Solutions"
        }
      ]
    },
    pricing: {
      title: "Plans and Pricing",
      description: "Choose the ideal plan for your cloud computing needs. All include specialized technical support and high-quality infrastructure.",
      signup: "Sign Up",
      mostPopular: "Most Popular",
      customSolution: "Need a custom solution?",
      customButton: "Request a Custom Quote",
      plans: {
        start: {
          title: "Cloud Start",
          subtitle: "For small businesses",
          features: [
            "2 vCPUs",
            "4GB RAM",
            "50GB SSD NVMe",
            "1TB Transfer",
            "Email Support"
          ]
        },
        pro: {
          title: "Cloud Pro",
          subtitle: "For growing businesses",
          features: [
            "4 vCPUs",
            "8GB RAM",
            "100GB SSD NVMe",
            "3TB Transfer",
            "24/7 Support",
            "Daily Backup"
          ]
        },
        enterprise: {
          title: "Cloud Enterprise",
          subtitle: "For large companies",
          features: [
            "8 vCPUs",
            "16GB RAM",
            "200GB SSD NVMe",
            "5TB Transfer",
            "Priority 24/7 Support",
            "Daily + Weekly Backup",
            "Advanced DDoS Protection"
          ]
        }
      }
    },
    contact: {
      title: "Contact Us",
      description: "We are ready to help your company choose the best cloud solution. Talk to one of our specialists today.",
      address: {
        title: "Address",
        value: "Av. Paulista, 1000, São Paulo - SP, Brazil"
      },
      phone: {
        title: "Phone",
        value: "+55 (11) 3000-0000"
      },
      email: {
        title: "Email",
        value: "contact@brazucacloud.com.br"
      },
      social: {
        title: "Follow Us"
      },
      form: {
        title: "Talk to a Specialist",
        fields: {
          name: "Name",
          email: "Email",
          phone: "Phone",
          company: "Company",
          service: "Service of Interest",
          selectService: "Select a service",
          message: "Message"
        },
        services: {
          privateCloud: "Private Cloud",
          cloudCenter: "Cloud Center",
          virtualDatacenter: "Virtual Datacenter",
          cloudServer: "Cloud Server",
          other: "Other"
        },
        submit: "Send Message",
        submitting: "Sending...",
        validation: {
          name: "Name is required",
          email: "Invalid email",
          phone: "Invalid phone",
          company: "Company is required",
          service: "Select a service",
          message: "Message must be at least 10 characters"
        },
        success: {
          title: "Message sent!",
          message: "We'll be in touch soon."
        },
        error: {
          title: "Error sending message",
          message: "Please try again later."
        }
      }
    },
    partners: {
      title: "Our Technology Partners",
      description: "We work with the best technology partners to deliver high-quality cloud solutions.",
      disclaimer: "The listed brands are property of their respective owners and serve only as reference for the technologies used in our infrastructure."
    },
    footer: {
      description: "Advanced cloud computing solutions for companies of all sizes, with high-performance infrastructure and security.",
      copyright: "All rights reserved.",
      services: {
        title: "Services",
        privateCloud: "Private Cloud",
        cloudCenter: "Cloud Center",
        virtualDatacenter: "Virtual Datacenter",
        cloudServer: "Cloud Server",
        cloudBackup: "Cloud Backup",
        cloudConsulting: "Cloud Consulting"
      },
      usefulLinks: {
        title: "Useful Links",
        aboutUs: "About Us",
        pricing: "Pricing",
        blog: "Blog",
        clientArea: "Client Area",
        terms: "Terms of Service",
        privacy: "Privacy Policy"
      },
      contact: {
        title: "Contact",
        address: "Av. Paulista, 1000, São Paulo - SP, Brazil",
        phone: "+55 (11) 3000-0000",
        email: "contact@brazucacloud.com.br"
      },
      newsletter: {
        title: "Stay up to date with the latest news",
        placeholder: "Your email"
      },
      bottom: {
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      }
    },
    languages: {
      portuguese: "Portuguese",
      english: "English",
      spanish: "Spanish"
    },
    calculator: {
      title: "Price Calculator",
      description: "Configure resources according to your needs and get a real-time price estimate for your cloud infrastructure.",
      resourceConfiguration: "Resource Configuration",
      cpu: "Virtual CPUs",
      cpuTooltip: "Number of virtual processors. More vCPUs improve performance for applications that use parallel processing.",
      ram: "RAM Memory",
      ramTooltip: "Amount of memory for your applications. More memory improves performance for applications that handle large datasets.",
      storage: "Storage",
      storageTooltip: "SSD NVMe disk space to store your data and applications.",
      bandwidth: "Network Traffic",
      bandwidthTooltip: "Amount of monthly data transfer included in your plan.",
      addons: "Add-ons",
      dailyBackup: "Daily Backup",
      dailyBackupDescription: "Automated daily backup with 7-day retention",
      ddosProtection: "DDoS Protection",
      ddosProtectionDescription: "Advanced protection against denial of service attacks",
      pricingSummary: "Pricing Summary",
      billingPeriod: "Billing Period",
      monthly: "Monthly",
      annual: "Annual",
      savePercent: "Save {{percent}}%",
      priceBreakdown: "Price Breakdown",
      computeResources: "Compute Resources",
      annualDiscount: "Annual Discount",
      total: "Total",
      monthlyEquivalent: "Monthly Equivalent",
      contactSales: "Contact Sales",
      disclaimer: "Prices are estimates only. Taxes may apply. Contact us for a custom quote."
    }
  },
  "es-ES": {
    nav: {
      about: "Sobre Brazuca Cloud",
      aboutDropdown: {
        history: "Nuestra Historia",
        team: "Nuestro Equipo",
        mission: "Misión y Valores"
      },
      cloudCenter: "Cloud Center",
      cloudCenterDropdown: {
        infrastructure: "Infraestructura",
        solutions: "Soluciones",
        pricing: "Precios"
      },
      privateCloud: "Nube Privada",
      virtualDatacenter: "Datacenter Virtual",
      cloudServer: "Cloud Server",
      clientArea: "Área del Cliente"
    },
    hero: {
      title: "La Mejor Solución de Nube Privada del Mercado",
      description: "Ofrecemos soluciones avanzadas de Cloud para Nubes Privadas, Cloud Center, Datacenters Virtuales, Servidores Dedicados y VPS con alta disponibilidad y seguridad mejorada en DATACENTER FÍSICO con CERTIFICACIÓN TIER 3.",
      buttons: {
        primary: "Hablar con un Especialista",
        secondary: "Conozca Nuestras Soluciones"
      }
    },
    features: {
      uptime: {
        title: "Uptime Garantizado",
        description: "99.9% de disponibilidad para sus sistemas"
      },
      support: {
        title: "Soporte 24/7",
        description: "Atención especializada en cualquier momento"
      },
      security: {
        title: "Seguridad",
        description: "Protección contra ataques DDoS y backup automático"
      },
      certification: {
        title: "Certificación",
        description: "Datacenter con certificación TIER 3"
      }
    },
    services: {
      title: "Nuestras Soluciones de Cloud",
      description: "Descubra la infraestructura de nube ideal para su negocio con nuestras soluciones personalizadas para empresas de todos los tamaños.",
      learnMore: "Más Información",
      cards: {
        privateCloud: {
          title: "Nube Privada",
          description: "Maximice el control y la seguridad con nuestra infraestructura de nube privada totalmente personalizada a las necesidades de su negocio.",
          features: [
            "Entorno aislado y dedicado",
            "Alto rendimiento garantizado",
            "Seguridad reforzada"
          ]
        },
        cloudCenter: {
          title: "Cloud Center",
          description: "Centralice sus operaciones en la nube con nuestra solución completa de gestión e infraestructura avanzada.",
          features: [
            "Gestión centralizada",
            "Escalabilidad inmediata",
            "Monitorización 24/7"
          ]
        },
        virtualDatacenter: {
          title: "Datacenter Virtual",
          description: "Obtenga la infraestructura completa de un datacenter físico en un entorno virtualizado y con recursos flexibles.",
          features: [
            "Infraestructura flexible",
            "Redundancia total",
            "Certificación TIER 3"
          ]
        },
        cloudServer: {
          title: "Cloud Server",
          description: "Servidores virtuales de alto rendimiento con recursos dedicados para sus aplicaciones más exigentes.",
          features: [
            "Alta disponibilidad",
            "Recursos dedicados",
            "Backup automático"
          ]
        }
      }
    },
    infrastructure: {
      title: "Infraestructura de Última Generación",
      description: "Nuestra infraestructura de datacenter cuenta con las tecnologías más avanzadas del mercado, garantizando máximo rendimiento, disponibilidad y seguridad para sus datos y aplicaciones.",
      processors: {
        title: "Procesadores de Alto Rendimiento",
        description: "Equipos Intel Xeon y AMD EPYC de última generación para máximo rendimiento."
      },
      storage: {
        title: "Almacenamiento SSD NVMe",
        description: "Discos SSD NVMe para lectura y escritura ultrarrápidas, elimine cuellos de botella de E/S."
      },
      network: {
        title: "Red Redundante",
        description: "Conexiones de red de 10 Gbps con múltiples proveedores y protección contra DDoS."
      },
      certification: {
        title: "Certificación TIER 3",
        description: "99.9% de disponibilidad"
      },
      button: "Conozca Nuestra Infraestructura",
      specs: {
        title: "Especificaciones Técnicas",
        servers: "Servidores",
        serversDetail: "Intel Xeon/AMD EPYC, con Multi-CPU y alta capacidad de procesamiento",
        storage: "Almacenamiento",
        storageDetail: "Arrays SSD NVMe de alta velocidad con redundancia RAID",
        network: "Red",
        networkDetail: "Conexiones redundantes 10Gbps con múltiples proveedores",
        security: "Seguridad",
        securityDetail: "Protección DDoS, Firewall Avanzado y Monitoreo 24/7"
      }
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      description: "Empresas de diversos segmentos confían en Brazuca Cloud para sus soluciones de infraestructura en la nube.",
      button: "Sea Nuestro Próximo Caso de Éxito",
      feedback: {
        title: "Comparta Su Experiencia",
        description: "Su opinión es muy importante para nosotros. Póngase en contacto para compartir su experiencia con nuestros servicios."
      },
      items: [
        {
          content: "La migración a la nube privada de Brazuca Cloud redujo nuestros costos operativos en un 30% y mejoró significativamente el rendimiento de nuestras aplicaciones.",
          name: "Ricardo Oliveira",
          role: "CTO, TechSolutions"
        },
        {
          content: "El soporte técnico 24/7 de Brazuca Cloud es excepcional. Siempre que lo necesitamos, obtenemos una respuesta rápida y eficiente para cualquier problema.",
          name: "Fernanda Costa",
          role: "Gerente de TI, E-Commerce Brasil"
        },
        {
          content: "La seguridad y el cumplimiento de la infraestructura de Brazuca Cloud nos ayudó a cumplir con los requisitos regulatorios de nuestro sector con facilidad.",
          name: "Marcelo Santos",
          role: "Director, FinTech Solutions"
        }
      ]
    },
    pricing: {
      title: "Planes y Precios",
      description: "Elija el plan ideal para sus necesidades de computación en la nube. Todos incluyen soporte técnico especializado e infraestructura de alta calidad.",
      signup: "Contratar",
      mostPopular: "Más Popular",
      customSolution: "¿Necesita una solución a medida?",
      customButton: "Solicite un Presupuesto Personalizado",
      plans: {
        start: {
          title: "Cloud Start",
          subtitle: "Para pequeñas empresas",
          features: [
            "2 vCPUs",
            "4GB RAM",
            "50GB SSD NVMe",
            "1TB de Transferencia",
            "Soporte por Email"
          ]
        },
        pro: {
          title: "Cloud Pro",
          subtitle: "Para empresas en crecimiento",
          features: [
            "4 vCPUs",
            "8GB RAM",
            "100GB SSD NVMe",
            "3TB de Transferencia",
            "Soporte 24/7",
            "Backup Diario"
          ]
        },
        enterprise: {
          title: "Cloud Enterprise",
          subtitle: "Para grandes empresas",
          features: [
            "8 vCPUs",
            "16GB RAM",
            "200GB SSD NVMe",
            "5TB de Transferencia",
            "Soporte 24/7 Prioritario",
            "Backup Diario + Semanal",
            "Protección DDoS Avanzada"
          ]
        }
      }
    },
    contact: {
      title: "Contáctenos",
      description: "Estamos listos para ayudar a su empresa a elegir la mejor solución en la nube. Hable con uno de nuestros especialistas hoy mismo.",
      address: {
        title: "Dirección",
        value: "Av. Paulista, 1000, São Paulo - SP, Brasil"
      },
      phone: {
        title: "Teléfono",
        value: "+55 (11) 3000-0000"
      },
      email: {
        title: "Email",
        value: "contacto@brazucacloud.com.br"
      },
      social: {
        title: "Síganos"
      },
      form: {
        title: "Hable con un Especialista",
        fields: {
          name: "Nombre",
          email: "Email",
          phone: "Teléfono",
          company: "Empresa",
          service: "Servicio de Interés",
          selectService: "Seleccione un servicio",
          message: "Mensaje"
        },
        services: {
          privateCloud: "Nube Privada",
          cloudCenter: "Cloud Center",
          virtualDatacenter: "Datacenter Virtual",
          cloudServer: "Cloud Server",
          other: "Otro"
        },
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
        validation: {
          name: "El nombre es obligatorio",
          email: "Email inválido",
          phone: "Teléfono inválido",
          company: "La empresa es obligatoria",
          service: "Seleccione un servicio",
          message: "El mensaje debe tener al menos 10 caracteres"
        },
        success: {
          title: "¡Mensaje enviado!",
          message: "Nos pondremos en contacto pronto."
        },
        error: {
          title: "Error al enviar mensaje",
          message: "Inténtelo de nuevo más tarde."
        }
      }
    },
    partners: {
      title: "Nuestros Socios Tecnológicos",
      description: "Trabajamos con los mejores socios tecnológicos para ofrecer soluciones de nube de alta calidad.",
      disclaimer: "Las marcas listadas son propiedad de sus respectivos dueños y sirven solo como referencia para las tecnologías utilizadas en nuestra infraestructura."
    },
    footer: {
      description: "Soluciones avanzadas de cloud computing para empresas de todos los tamaños, con infraestructura de alto rendimiento y seguridad.",
      copyright: "Todos los derechos reservados.",
      services: {
        title: "Servicios",
        privateCloud: "Nube Privada",
        cloudCenter: "Cloud Center",
        virtualDatacenter: "Datacenter Virtual",
        cloudServer: "Cloud Server",
        cloudBackup: "Backup en la Nube",
        cloudConsulting: "Consultoría en Cloud"
      },
      usefulLinks: {
        title: "Enlaces Útiles",
        aboutUs: "Sobre Nosotros",
        pricing: "Precios",
        blog: "Blog",
        clientArea: "Área del Cliente",
        terms: "Términos de Servicio",
        privacy: "Política de Privacidad"
      },
      contact: {
        title: "Contacto",
        address: "Av. Paulista, 1000, São Paulo - SP, Brasil",
        phone: "+55 (11) 3000-0000",
        email: "contacto@brazucacloud.com.br"
      },
      newsletter: {
        title: "Manténgase al día con las últimas novedades",
        placeholder: "Su email"
      },
      bottom: {
        terms: "Términos de Servicio",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies"
      }
    },
    languages: {
      portuguese: "Portugués",
      english: "Inglés",
      spanish: "Español"
    },
    calculator: {
      title: "Calculadora de Precios",
      description: "Configure los recursos según sus necesidades y obtenga una estimación de precios en tiempo real para su infraestructura en la nube.",
      resourceConfiguration: "Configuración de Recursos",
      cpu: "CPUs Virtuales",
      cpuTooltip: "Número de procesadores virtuales. Más vCPUs mejoran el rendimiento para aplicaciones que utilizan procesamiento paralelo.",
      ram: "Memoria RAM",
      ramTooltip: "Cantidad de memoria para sus aplicaciones. Más memoria mejora el rendimiento para aplicaciones que manejan grandes conjuntos de datos.",
      storage: "Almacenamiento",
      storageTooltip: "Espacio en disco SSD NVMe para almacenar sus datos y aplicaciones.",
      bandwidth: "Tráfico de Red",
      bandwidthTooltip: "Cantidad de transferencia de datos mensuales incluida en su plan.",
      addons: "Complementos",
      dailyBackup: "Backup Diario",
      dailyBackupDescription: "Backup automatizado diario con retención de 7 días",
      ddosProtection: "Protección DDoS",
      ddosProtectionDescription: "Protección avanzada contra ataques de denegación de servicio",
      pricingSummary: "Resumen de Precios",
      billingPeriod: "Período de Facturación",
      monthly: "Mensual",
      annual: "Anual",
      savePercent: "Ahorre {{percent}}%",
      priceBreakdown: "Desglose de Precios",
      computeResources: "Recursos de Computación",
      annualDiscount: "Descuento Anual",
      total: "Total",
      monthlyEquivalent: "Equivalente Mensual",
      contactSales: "Contactar Ventas",
      disclaimer: "Los precios son solo estimaciones. Pueden aplicarse impuestos. Contáctenos para obtener un presupuesto personalizado."
    }
  }
};
