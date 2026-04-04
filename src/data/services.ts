// data/services.ts
import { type Service } from "../types";

export const services: Service[] = [
  {
    name: "Application Management",
    slug: "application-management",
    icon: "Package",

    cardQuestion: "Struggling to manage logistics, warehouses, or order systems?",
    cardPoints: [
      "Real-time logistics & transport tracking",
      "AI-powered warehouse management",
      "Seamless hardware integration",
    ],

    tagline: "End-to-end logistics and operations software, built to scale.",
    heroDescription:
      "Cybertrack builds and manages proprietary software that connects your supply chain — from warehouse floor to customer doorstep — with real-time visibility and control.",

    sections: [
      {
        heading: "Logistics & Material Management",
        offerings: [
          {
            title: "Logistics Management",
            description:
              "Cybertrack's proprietary logistic and transportation management software and apps help in real-time information exchange, interactivity, and customizable reporting. The logistics and transportation management tools are user-friendly on the web and on mobile devices.",
          },
          {
            title: "Order Management",
            description:
              "Cybertrack has extensive experience with accounting information software and ERP systems. Our offering combines various software and systems with business intelligence tools and ERP applications to simplify the order management process.",
          },
          {
            title: "Warehouse Management Applications",
            description:
              "Our software and solutions for warehouse management using artificial intelligence assists logistics companies and in-house logistics departments in inventory tracking, management, and transparency.",
          },
          {
            title: "Hardware Integration",
            description:
              "Our software not only works independently in providing the best solutions but can be seamlessly integrated with various hardware like UHF reader, LHF leader, UHF/LHF cards, handheld devices, boom barriers, printer & readers.",
          },
        ],
        image: "/images/services/application-management.jpg",
      },
    ],

    useCases: [
      "Logistics and transportation companies",
      "In-house logistics departments",
      "Warehousing and inventory operations",
      "Businesses with ERP and BI requirements",
    ],
  },

  {
    name: "Data Management",
    slug: "data-management",
    icon: "BarChart2",

    cardQuestion: "Drowning in data with no clear insights or reporting?",
    cardPoints: [
      "AI/ML-powered BI and finance reporting",
      "No-code Delta Lake data platform",
      "Oracle & SAP ERP implementation",
    ],

    tagline: "Turn raw data into decisions. No code required.",
    heroDescription:
      "From business intelligence and machine learning to ERP implementation, Cybertrack builds the data infrastructure that lets your teams act on facts, not guesswork.",

    sections: [
      {
        heading: "Business Intelligence and Reporting",
        offerings: [
          {
            title: "AI & ML-Powered Reporting",
            description:
              "We are an industry-leading software development business specializing in the creation of solutions with artificial intelligence and machine learning for finance and reporting. These tools automate and replace labor-intensive processes, hence enhancing productivity.",
          },
          {
            title: "Next-Gen Delta Lake Solution",
            description:
              "The one-of-its-kind data and analytics platform where end-to-end activities of connecting to a data source, mapping the required data and transforming the data can be done without writing a single line of code.",
          },
          {
            title: "Cost Optimisation & Decision Intelligence",
            description:
              "Key decision makers can evaluate revenue, expenses, and savings through BI reporting. The procurement department is able to predict and adjust to inventory patterns, alleviate bottlenecks, and increase operational efficiency with the aid of detailed data — making seasonal and cyclical variations easy to monitor and act on.",
          },
        ],
        image: "/images/services/data-management-bi.jpg",
      },
      {
        heading: "ERP Customization and Implementation",
        subheading: "Oracle & SAP Customization and Implementation",
        body: "Cybertrack offers strategic insights about how to adopt and implement business management technology for growing companies that are consistent with the business processes and policies of the client. Identify and integrate other systems and data sources across the client's technology ecosystem and provide expertise in designing process automation across multiple functions.",
        offerings: [
          {
            title: "Our ERP offering broadly covers",
            description: "",
            bullets: [
              "ERP selection",
              "ERP implementation",
              "ERP contract negotiation",
              "Technology assessment",
              "Define strategy",
              "End user training & handholding",
            ],
          },
        ],
        image: "/images/services/data-management-erp.jpg",
      },
    ],

    useCases: [
      "Finance and operations teams needing automated reporting",
      "Businesses evaluating or migrating ERP platforms",
      "Companies with complex multi-source data ecosystems",
      "Procurement and supply chain departments",
    ],
  },

  {
    name: "Digital Transformation",
    slug: "digital-transformation",
    icon: "Zap",

    cardQuestion: "Still running on legacy processes that slow you down?",
    cardPoints: [
      "Custom digital strategy definition",
      "IoT, automation & cloud implementation",
      "Future-proof platforms and frameworks",
    ],

    tagline: "From legacy to leading-edge — without the disruption.",
    heroDescription:
      "Cybertrack helps businesses define and execute a digital strategy that spans every layer — from user experience to architecture — so transformation is a competitive advantage, not a risk.",

    sections: [
      {
        heading: "Digital Strategy Definition and Implementation",
        body: "Cybertrack offers consulting and solutions to clients to move in the right direction of digitalization, which gives a boost to businesses to innovate with new income streams and define new operating methods, while also safeguarding themselves against obsolescence.\n\nDespite the fact that no two businesses will have identical digital requirements, it's imperative that all organizations develop a digital strategy to help them evaluate how digital technologies affect their company, which digital tools to invest in, and how to use these applications in order to expand.\n\nWe offer services to help businesses adopt the right platforms, frameworks, and methods to give their business a solid, secure, and future-proof digital foundation.\n\nSince IT functions are essential for digital success, our digital transformation strategy encompasses all facets, from user experience management to architecture and people.\n\nOur Digital Transformation Services help customers to realize significant business advantages and improve process performance through the design of modern processes that harness disruptive new technology. Further, we assist customers in implementing new or enhanced business processes using IoT, Intelligent Automation, and the Cloud.",
        offerings: [
          {
            title: "Digital Strategy Consulting",
            description:
              "We evaluate how digital technologies affect your company, identify which digital tools to invest in, and map how to use these applications to expand your business.",
          },
          {
            title: "Platform & Framework Selection",
            description:
              "We help businesses adopt the right platforms, frameworks, and methods to give their business a solid, secure, and future-proof digital foundation.",
          },
          {
            title: "IoT, Automation & Cloud Implementation",
            description:
              "We assist customers in implementing new or enhanced business processes using IoT, Intelligent Automation, and the Cloud — from user experience management to architecture and people.",
          },
        ],
        image: "/images/services/digital-transformation.jpg",
      },
    ],

    useCases: [
      "Businesses running on outdated legacy systems",
      "Organisations beginning their digital journey",
      "Teams needing a structured technology roadmap",
      "Companies adopting cloud, IoT, or automation",
    ],
  },

  {
    name: "Infrastructure Management",
    slug: "infrastructure-management",
    icon: "Server",

    cardQuestion: "Is your IT infrastructure a bottleneck instead of a backbone?",
    cardPoints: [
      "Full IT infrastructure lifecycle management",
      "Cloud management across AWS, Azure, OCI",
      "24/7 service desk and security patching",
    ],

    tagline: "Reliable infrastructure for every system, server, and device.",
    heroDescription:
      "Cybertrack's Infrastructure Services vertical manages your entire IT environment — regardless of technologies or products deployed — ensuring optimal functioning across all systems, servers, and connected devices.",

    sections: [
      {
        heading: "Infrastructure Management Services",
        body: "Cybertrack's Infrastructure Services vertical provides a trustworthy foundation of cutting-edge technologies for managing IT infrastructure across a multitude of business sectors. To assist in achieving business objectives, we manage the client's whole IT infrastructure, regardless of the technologies used or products deployed, and ensure the optimal functioning of all systems, servers, and connected devices.",
        bullets: [
          "IMS Consulting",
          "Server Administration & Management",
          "Cloud Management (AWS, Azure, OCI, IBM Cloud)",
          "Database Administration & Management",
          "Network Operations, Planning and Designing",
          "Security & Patching",
          "Firewall Management",
          "Service Desk",
        ],
        image: "/images/services/infrastructure-management.jpg",
      },
    ],

    useCases: [
      "Enterprises managing complex multi-cloud environments",
      "Businesses needing managed server and database operations",
      "Teams requiring 24/7 service desk coverage",
      "Organisations needing network design and security management",
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getServiceNames = (): { name: string; slug: string }[] =>
  services.map(({ name, slug }) => ({ name, slug }));