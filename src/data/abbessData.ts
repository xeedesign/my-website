export type PageRoute =
  | "home"
  | "about-us"
  | "company-culture"
  | "csr-activities"
  | "service"
  | "research-facility"
  | "supply-chain-management"
  | "business-development"
  | "project-management"
  | "qp-service"
  | "service-contract"
  | "how-and-where"
  | "product-development"
  | "product-list"
  | "careers"
  | "contact-us";

export interface AssetSource {
  local: string;
  remote: string;
  alt: string;
}

export const ABBESS_ASSETS: Record<string, AssetSource> = {
  logoHorizontal: {
    local: "/assets/logo-horizontal.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/FOR-PPTs-DOCs-Copy.jpg",
    alt: "ABBESS Healthcare Official Logo",
  },
  logoTriangle: {
    local: "/assets/logo-horizontal.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/FOR-PPTs-DOCs-Copy.png",
    alt: "ABBESS Healthcare Emblem",
  },
  googleQr: {
    local: "/assets/abbess-emblem.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/abbess.png",
    alt: "ABBESS Healthcare Google Profile QR Code",
  },
  brochurePdf: {
    local: "/assets/BROCHURE-ABBESS-HEALTHCARE.pdf",
    remote: "https://abbess.in/wp-content/uploads/2025/02/BROCHURE-ABBESS-HEALTHCARE.pdf",
    alt: "ABBESS Healthcare Brochure PDF",
  },
  heroSlide1Desktop: {
    local: "/assets/banner-new.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/banner-new.png",
    alt: "Creating a better tomorrow For health and happiness",
  },
  heroSlide1Mobile: {
    local: "/assets/mobile-banner.png",
    remote: "https://abbess.in/wp-content/uploads/2025/06/mobile-banner.png",
    alt: "Creating a better tomorrow For health and happiness",
  },
  heroSlide2: {
    local: "/assets/hero-medical-hand.jpg",
    remote:
      "https://abbess.in/wp-content/uploads/2025/06/11887238_38Z_Medical_c_hand_l_sh-1-scaled.jpg",
    alt: "Nurturing minds transforming healthcare through innovations & expertise",
  },
  bgMemphis: {
    local: "/assets/bg-memphis.png",
    remote:
      "https://abbess.in/wp-content/uploads/2025/02/bg_memphis_1-e1625293192688.png",
    alt: "ABBESS Geometric Background",
  },
  bgDeliverables: {
    local: "/assets/bg-deliverables-5315.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/5315-1.jpg",
    alt: "Pharmaceutical Solid Dosage Manufacturing Line",
  },
  bgLabDots: {
    local: "/assets/bg-lab-101941.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/101941-1.jpg",
    alt: "Scientific Wave Pattern Background",
  },
  bgServiceContract: {
    local: "/assets/bg-service-10026.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/10026-1.jpg",
    alt: "Pharmaceutical Dosage Forms Banner",
  },
  mapAbout: {
    local: "/assets/map-about.png",
    remote: "https://abbess.in/wp-content/uploads/2025/06/map2-1-1.png",
    alt: "ABBESS Global Presence Map – Malta, Europe & Navi Mumbai, India",
  },
  mapContact: {
    local: "/assets/map-contact.png",
    remote: "https://abbess.in/wp-content/uploads/2025/06/map2-2.png",
    alt: "ABBESS Global Locations – Malta, Europe & Navi Mumbai, India",
  },
  researchLab1: {
    local: "/assets/research-1.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/reserch.png",
    alt: "ABBESS Healthcare Formulation Development Laboratory",
  },
  researchLab2: {
    local: "/assets/research-2.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/research.png",
    alt: "ABBESS Healthcare Analytical Method Development & Validation Laboratory",
  },
  hw1: {
    local: "/assets/hw1.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/hw1.png",
    alt: "ABBESS Healthcare OPC Pvt. Ltd. R&D Scientific Team",
  },
  hw2: {
    local: "/assets/hw2.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/hw2.png",
    alt: "ABBESS Healthcare High-End Analytical Lab with UPLCs and HPLCs",
  },
  hw3: {
    local: "/assets/hw3.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/hw3.png",
    alt: "ABBESS Healthcare Formulation & Scale-Up Equipment Operation",
  },
  product1: {
    local: "/assets/product1.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/product1.png",
    alt: "ABBESS Healthcare Rapid Mixer Granulator & Process Equipment",
  },
  product2: {
    local: "/assets/product2.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/product2.png",
    alt: "ABBESS Healthcare Blending & GMP Manufacturing Unit",
  },
  csr1: {
    local: "/assets/csr-1.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/IMG_1683.jpg",
    alt: "ABBESS Healthcare Annual Community & Inclusive Care Initiative",
  },
  csr2: {
    local: "/assets/csr-2.jpg",
    remote: "https://abbess.in/wp-content/uploads/2025/02/IMG_1700.jpg",
    alt: "ABBESS Healthcare Employees Volunteering for Elderly & Community Care",
  },
  csrEvent1: {
    local: "/assets/csr-event1.png",
    remote: "https://abbess.in/wp-content/uploads/2025/02/event1.png",
    alt: "ABBESS Healthcare Training & Outreach Leadership",
  },
};

export interface NavItem {
  label: string;
  route: PageRoute;
  children?: { label: string; route: PageRoute; subtitle?: string }[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", route: "home" },
  {
    label: "About Us",
    route: "about-us",
    children: [
      {
        label: "About ABBESS",
        route: "about-us",
        subtitle: "India (2014) & Malta, Europe (2024)",
      },
      {
        label: "Company Culture",
        route: "company-culture",
        subtitle: "Scientific freedom, LnD & Ph.D. programs",
      },
      {
        label: "CSR Activities",
        route: "csr-activities",
        subtitle: "Community care, healthcare & social initiatives",
      },
    ],
  },
  {
    label: "Service",
    route: "service",
    children: [
      {
        label: "All Services & Deliverables",
        route: "service",
        subtitle: "End-to-end R&D, regulatory & global filing",
      },
      {
        label: "Research Facility",
        route: "research-facility",
        subtitle: "Formulation, Analytical & Collaborative R&D",
      },
      {
        label: "Supply Chain Management",
        route: "supply-chain-management",
        subtitle: "API, excipients, packaging & commercial supply",
      },
      {
        label: "Business Development",
        route: "business-development",
        subtitle: "CDMO/CRO, strategic partnerships & licensing",
      },
      {
        label: "Project Management",
        route: "project-management",
        subtitle: "5-phase initiation to closure execution",
      },
      {
        label: "QP Service",
        route: "qp-service",
        subtitle: "EU GMP compliance, audits & batch certification",
      },
      {
        label: "Service Contract",
        route: "service-contract",
        subtitle: "Dedicated facilities, dossiers & two-party NDA",
      },
    ],
  },
  {
    label: "Deliverables",
    route: "product-development",
    children: [
      {
        label: "How and Where",
        route: "how-and-where",
        subtitle: "5 R&D units in Navi Mumbai with UPLC/HPLC labs",
      },
      {
        label: "Product Development",
        route: "product-development",
        subtitle: "Manufacturing capabilities, CDMO & BE batches",
      },
      {
        label: "Product List",
        route: "product-list",
        subtitle: "Platform tech, patented & transfer-ready products",
      },
    ],
  },
  { label: "Careers", route: "careers" },
  { label: "Contact Us", route: "contact-us" },
];

export const HOME_CONTENT = {
  europeAnnouncement: "We are now at Europe",
  heroSlides: [
    {
      id: "slide-1",
      eyebrow: "Creating a better tomorrow For health and happiness",
      headline: "nurturing minds transforming healthcare through innovations & expertise",
      ctaText: "View More",
      ctaRoute: "about-us" as PageRoute,
      desktopImage: ABBESS_ASSETS.heroSlide1Desktop,
      mobileImage: ABBESS_ASSETS.heroSlide1Mobile,
    },
    {
      id: "slide-2",
      eyebrow: "Creating a better tomorrow For health and happiness",
      headline: "nurturing minds transforming healthcare through innovations & expertise",
      ctaText: "View More",
      ctaRoute: "about-us" as PageRoute,
      desktopImage: ABBESS_ASSETS.heroSlide2,
      mobileImage: ABBESS_ASSETS.heroSlide2,
    },
  ],
  updatesSection: {
    eyebrow: "Updates",
    heading: "We have expanded to Europe. Offering following services globally.",
    headingRoute: "service" as PageRoute,
    cards: [
      {
        title: "Research & Development",
        route: "research-facility" as PageRoute,
        iconPath: "/assets/icons/data-science.svg",
        badge: "5 R&D Units",
        items: [
          "Product Development",
          "Analytical Method Development & Validation",
          "Biosimilar & Biologics : Development Study initiative",
          "Product Lifecycle Management",
        ],
      },
      {
        title: "QP Services",
        route: "qp-service" as PageRoute,
        iconPath: "/assets/icons/checklist.svg",
        badge: "EU GMP",
        items: [
          "Batch Certification & Release",
          "Quality Assurance & Control",
          "Audits & Inspections",
          "Consulting & Training",
        ],
      },
      {
        title: "Business Development",
        route: "business-development" as PageRoute,
        iconPath: "/assets/icons/building.svg",
        badge: "Global CDMO / CRO",
        items: [
          "CDMO & CRO Services",
          "Pilot & Pivotal Batch Manufacturing and Supplies",
          "Project Management - End to End delivery",
          "In-Licensing of Products",
        ],
      },
      {
        title: "Supply Chain Management",
        route: "supply-chain-management" as PageRoute,
        iconPath: "/assets/icons/product-management.svg",
        badge: "End-to-End Sourcing",
        items: [
          "Product Portfolio Management",
          "Supply of API",
          "Supply of Excipients",
          "Supply of Consumables",
        ],
      },
    ],
  },
  deliverablesSection: {
    eyebrow: "Deliverables",
    heading: "What can we do for Existing Healthcare Industry?",
    cards: [
      {
        title: "How and Where",
        route: "how-and-where" as PageRoute,
        iconPath: "/assets/icons/medical.svg",
        previewImage: ABBESS_ASSETS.hw1,
        subtitle: "Navi Mumbai R&D Hub • 5 Specialized Laboratories • All Dosage Forms",
        items: [
          "ABBESS Healthcare has its first Research and Development unit in the year 2014 at Navi Mumbai, Maharashtra India.",
          "Currently, it has total five Research and Development Units dedicated for formulation Development, Technology Development, Potent Drug Product facility, Analytical Method Development Laboratory and dedicated Analytical Method Validation Laboratory.",
          "We also have full-fledged facility to cater the development & manufacturing for almost all dosage forms of OSD which include Tablets, Capsules, Sachets in granules and OSD Effervescent Formulations and also for Liquids , Parenteral Products and Semisolids.",
        ],
      },
      {
        title: "Product Development",
        route: "product-development" as PageRoute,
        iconPath: "/assets/icons/objective.svg",
        previewImage: ABBESS_ASSETS.product1,
        subtitle: "Core Formulation Competency • Q1Q2 & Reverse Engineering • API Sameness",
        items: [
          "Product development is our core competency",
          "Domain expertise of reverse engineering tasks with analytical support",
          "Model with complete Q1Q2 support mechanism",
          "API Sameness and Complex Characterization",
          "API PSD Determination in FDF",
        ],
      },
      {
        title: "Product List",
        route: "product-list" as PageRoute,
        iconPath: "/assets/icons/pills.svg",
        previewImage: ABBESS_ASSETS.bgDeliverables,
        subtitle: "Platform Technology • Patented Portfolio • Ready for Tech & Site Transfer",
        notePrefix: "Upon request, Please drop us a mail on ",
        noteEmail: "bd@abbess.in",
        items: [
          "Platform Technology based Products",
          "Patented Products",
          "Ready for Technology Transfer",
          "Ready for Site Transfer",
          "Ready to RnD Accelerated Stability",
          "Product under Development",
        ],
      },
    ],
  },
};

export const ABOUT_US_CONTENT = {
  title: "About Us",
  incorporations: [
    {
      year: "2014",
      location: "Navi Mumbai, India",
      text: "ABBESS Healthcare OPC Private Limited has been incorporated on 2014 in Navi Mumbai, India.",
    },
    {
      year: "2024",
      location: "Malta, Europe",
      text: "ABBESS Consultancy Limited has been incorporated on 2024 in Malta, Europe.",
    },
  ],
  prioritiesTitle: "Our Priorities",
  prioritiesText:
    "We have a clear goal to give patients worldwide access to innovative and affordable healthcare. Our purpose defines our quest to achieve long-term sustainable growth and deliver value to patient life.",
  visionSectionEyebrow: "Our Vision & Facility",
  visionSectionTitle: "Innovating Health, Advancing Wellness",
  vision: {
    title: "Vision",
    description:
      "To be a Leading Innovative Research and Development Organization in developing Formulating, Processes and Technologies of any dosage form and make it commercially viable for human and animal use.",
  },
  facility: {
    title: "Facility",
    items: [
      "Collaborative Research & Development facilities with CROs",
      "Dedicated for GMP Facility for different dosage forms for product development.",
      "Adequate scientific manpower and equipment and instrument to cater the development in almost all dosage form.",
    ],
  },
  mission: {
    title: "Mission",
    items: [
      "To be a helping hand to Pharmaceutical, Herbal, and Neutraceutical firms by formulating niche & innovative products to reach the market on-time with a wide product portfolio.",
      "To give patented formulations to the organizations who are engaged in high-end formulation research & development.",
      "To develop the technology-based product for pharma and allied field.",
      "To support healthcare industries and government in patenting our plants and parts inherited to us by our ancestors by carrying a good research in a natural /traditional system of medicines in a modernized systematic manner to handle life-threatening diseases.",
      "To reduce the long list of difficult to formulate product of numerous discovered and clinically approved molecules by employing the right strategy and technology with scientific manpower.",
      "Clinical support by providing our pilot GMP area to manufacture the clinical batches for pilot bioavailability and pilot bioequivalence study.",
      "We provide end to end support solution in product development and product lifecycle management.",
    ],
  },
};

export const COMPANY_CULTURE_CONTENT = {
  title: "Company Culture",
  items: [
    "Here at ABBESS Healthcare, all the employees have the equal freedom of expression of their thoughts",
    "On regular basis, the employees are attending seminars conferences and relevant LnD programs both on campus and our campus.",
    "We have introduced different programs not only for the professional growth of scientists but also financial and spiritual growth.",
    "We support employees to enroll for Ph.D. Programs, once they complete five years at AHC.",
  ],
};

export const CSR_ACTIVITIES_CONTENT = {
  title: "CSR Activities",
  items: [
    "Each year, all the employees actively engage in a full day initiative aimed at assisting children with physically challenges and elderly individuals across various locations in India, fostering inclusivity and acre within communities.",
    "Conduct various training programmes and do financial contributions during National Disasters.",
    "Contributing for the health care support for the needy people, wherever possible.",
    "ABBESS is continuously working to serve the society better and better with the passing of time.",
    "ABBESS is supporting Police Personnel & their families by facilitating life insurance policies.",
  ],
  gallery: [ABBESS_ASSETS.csr1, ABBESS_ASSETS.csr2, ABBESS_ASSETS.csrEvent1],
};

export const SERVICE_PAGE_CONTENT = {
  title: "Service",
  heading: "Deliverables",
  introParagraph:
    "As our objective is to help the existing pharma /healthcare organizations to reduce the development time and workload on their existing employees by getting associated with them and help in more product development and registration in the predefined time. Patenting the product and process developed by us for our clients We will be offering dedicated machines, area, and staff for potential and longterm customers. We can prepare dossiers for our clients even for highly regulated market by partnering with them. Time to time we can train our clients on advanced technologies and concepts We will be signing a two-party confidential agreement for the non-disclosure of the service offered to our client after mutually agreed upon.",
  dosageForms: [
    "Formulation development: Any dosage form, from any source of medicine like Synthetic, Herbal, Neutraceuticals & Cosmetic preparations",
    "Oral solid dosage form like a tablet, granules, capsules, dry syrups",
    "Liquid dosage forms",
    "Parenteral formulations",
    "Ointments and creams",
  ],
  marketsHeading: "Any market – US/ EU/ Canada/ Australia, ROW, India",
  marketDeliverables: [
    "Partial development to trigger the product the registration process of ANDAs",
    "Development by DOE and QBD",
    "Product registration for all dosage form across the globe",
    "Technology development for pharma and allied healthcare companies",
    "DSIR approval to small R&D center, ensuring huge taxation benefits",
    "IP support & NIS report for API & formulations & new technology",
    "Complete regulatory support for drug product & drug substance",
    "Product and process validation",
    "Analytical method development and analytical method validation",
    "Product technology transfer in India & overseas",
    "Content writing of dossiers, all modules",
    "Product registration and filing in the regulated market, semi-regulated market & in India.",
    "Offshore CQA & QA support for plants, to upgrade their quality system",
    "Trained manpower for CQA/ QA/ Marketing",
    "Offshore technology transfer in India & internationally by trained personnel",
    "Troubleshooting",
    "Training",
    "Project management",
    "Regulatory query solving",
    "Preclinical study support on animals for NCEs & NDA filing",
    "Clinical support by providing our pilot GMP area to manufacture the clinical batches for pilot bioavailability & pilot bioequivalence study",
    "We provide an end-to-end solution for a product development & product lifecycle management",
    "We have a state-of-the-art facility in Mumbai, India, dedicated to OSD products with a GMP area for manufacturing the batches for pilot BE studies & clinical studies",
    "In-house scale-up studies by QBD approach.",
    "Our facility supports the study of batch sizes starting from 200gm to 250kg",
  ],
};

export const RESEARCH_FACILITY_CONTENT = {
  title: "Research Facility",
  section1Heading: "What can we do for Existing Healthcare Industry?",
  section1Subheading: "Service to Offer",
  serviceToOffer: [
    "Product development is our core competency having Formulation Development Lab, Analytical Development Lab and Stability Chambers to cater formulation needs during Formulation development.",
    "We will do the literature search, patent landscaping, and strategy development. Based on the formula and process optimization studies using DOE concept, final composition and manufacturing process we can be recommended the lead formulation for bio-study and scale-up.",
    "The lead formulation will be optimized for a smooth scale up/ Pilot BE batches and process robustness & reproducibility in commercial batches.",
    "We have domain expertise of reverse engineering tasks where we have analytical model as well as complete Q1Q2 support mechanism.",
    "We have competency in API Sameness, Complex Characterization and API PSD Determination in FDF",
  ],
  formulationScopeTitle: "Formulation development Scope",
  formulationScope: [
    "New Dosage Form Development",
    "Generic Development",
    "Life Cycle Extension / Brand Extension",
    "Solubilization / Bioavailability Enhancement",
    "Platform Technology Development",
    "Nutraceuticals and Food Technology Development",
    "Herbal Cosmetic Preparations for the Regulated Market",
    "Lyophilized Products / Parenteral Dosage Form Development",
    "Eye Care Products Development by New and Conventional Technology",
  ],
  analyticalScopeTitle: "Analytical development Scope",
  analyticalScope: [
    "Analytical method development for non-pharmacopoeial products",
    "Analytical method development for all dosage forms of oral solid dosage (OSD) forms, including tablets, capsules, granules, complex capsules, complex modified-release (MR) tablets, creams, ointments, injections, and depot release products",
    "Analytical method development for non-pharmaceutical products such as nutraceutical products, herbal formulations, and food products",
    "Method validation & Equivalency studies",
    "Timely updates of pharmacopoeia standards",
    "Method upgrades",
    "Regulatory Query updates",
  ],
  collaborativeEyebrow: "Collaborative Project",
  collaborativeTitle: "High-End Research Project",
  collaborativeItems: [
    "Industry-Academic Collaboration funded by DST",
    "In collaboration with a medium scale healthcare industry, we can develop new products and processes in niche areas like Ayurceuticals and Herbaceuticals",
    "Biosimilars & Biotechnology Products",
    "Anticancer drugs sources: Plant derived seeds, isolation, enhancement of the active constituent, formulation and clinical trials and finally registration and commercialization.",
  ],
};

export const SUPPLY_CHAIN_CONTENT = {
  title: "Supply Chain Management",
  paragraphs: [
    "We have a dedicated team that meticulously manages all supply chain activities, ensuring efficiency and reliability at every step. Our responsibilities encompass the entire spectrum of the supply chain, beginning with the sourcing of Active Pharmaceutical Ingredients (APIs), excipients, and packaging materials. We place a strong emphasis on price control, negotiating competitive rates to maintain costeffectiveness without compromising on quality.",
    "Additionally, our team diligently handles supply agreements for commercial supplies, ensuring that all contractual obligations are met and that there is a steady and reliable flow of materials. Through strategic planning and effective coordination, we strive to optimize our supply chain processes, mitigate risks, and deliver exceptional value to our stakeholders.",
  ],
  keyPillars: [
    "Product Portfolio Management",
    "Supply of API",
    "Supply of Excipients",
    "Supply of Consumables",
  ],
};

export const BUSINESS_DEVELOPMENT_CONTENT = {
  title: "Business Development",
  intro:
    "Business Development Team is responsible for identification and fostering growth opportunities for an organization, which mainly includes:",
  operationalGoals: [
    "Formulate strategic initiatives that align with Abbess Healthcare's goals.",
    "Explore new market opportunities and build partnerships to expand the company’s global footprint.",
    "Ensure efficient supply logistics and manage high-pressure situations with clear communication.",
    "Coordinate travel plans and meetings to develop business relationships.",
  ],
  strategicPillars: [
    {
      label: "Strategic Planning",
      description:
        "Identifying market opportunities and creating strategies to capitalize on them.",
    },
    {
      label: "Market Research",
      description:
        "Understanding market trends, customer needs, and competitive landscape.",
    },
    {
      label: "Building Partnerships",
      description:
        "Developing and managing relationships with partners, clients, and stakeholders.",
    },
    {
      label: "Sales and Marketing",
      description:
        "Supporting sales teams with strategies and tools to boost sales and market presence.",
    },
    {
      label: "New Ventures",
      description:
        "Exploring new business avenues, such as new product lines or entering new markets.",
    },
    {
      label: "Resource Management",
      description:
        "Ensuring that the necessary resources (Financial, Human, Technological) are available and efficiently utilized.",
    },
  ],
};

export const PROJECT_MANAGEMENT_CONTENT = {
  title: "Project Management",
  intro:
    "We have a dedicated Project Management Team responsible for planning, executing, and closing projects. It focuses on achieving specific goals within a set timeline and budget. Key aspects include:",
  phases: [
    {
      step: "01",
      title: "Initiation",
      description:
        "Defining the project including its objectives, scope, and stakeholders.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Developing a detailed roadmap that includes timelines, resources, budget, and risk management plans.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Implementing the project by coordinating team members, managing resources, and ensuring tasks are completed on time.",
    },
    {
      step: "04",
      title: "Monitoring and Controlling",
      description:
        "Tracking the project’s progress, managing changes, and addressing any issues that arise.",
    },
    {
      step: "05",
      title: "Closure",
      description:
        "Completing all project tasks, obtaining stakeholder approval, and conducting a post-project review to identify lessons learned.",
    },
  ],
};

export const QP_SERVICE_CONTENT = {
  title: "QP Service",
  intro:
    "QP services play a crucial role in the pharmaceutical industry, ensuring compliance with regulatory standards and overseeing the release of medicinal products.",
  pillars: [
    {
      title: "Regulatory Compliance",
      description:
        "QPs ensure that pharmaceutical products meet EU GMP guidelines and other global regulatory requirements.",
    },
    {
      title: "Batch Release & Certification",
      description:
        "They certify and release medicinal products for the EU market, ensuring quality and safety.",
    },
    {
      title: "Audits & Inspections",
      description:
        "QPs conduct audits of API/formulation processes, contract manufacturing organizations (CMOs), and third-party suppliers.",
    },
    {
      title: "Risk Management & Quality Systems",
      description:
        "They help implement quality systems, manage risks, and assess suppliers.",
    },
    {
      title: "Importation & Distribution",
      description:
        "Some QP services also oversee the importation, storage, and distribution of medicines, ensuring compliance with Good Manufacturing Practice (GMP).",
    },
  ],
};

export const HOW_AND_WHERE_CONTENT = {
  title: "How and Where",
  items: [
    "ABBESS Healthcare has its first Research and Development unit at Navi Mumbai, Maharashtra India.",
    "It’s a full-fledged facility for research and formulation development of OSD which include tablets, capsules, sachets, granules and OSD effervescent formulations and also for Liquids and semisolids.",
    "The Formulation Development Lab is supported with a High-end Analytical method Development and Validation lab with UPLCs, HPLCs and other instruments and equipment to provide an end to end solution for product development.",
  ],
  gallery: [ABBESS_ASSETS.hw2, ABBESS_ASSETS.hw1],
};

export const PRODUCT_DEVELOPMENT_CONTENT = {
  title: "Product Development",
  heading: "Manufacturing Capabilities",
  subheading: "Plant Facilities",
  items: [
    {
      lead: "Global Development & Manufacturing",
      text: "ABBESS Healthcare is currently engaged in product development, technology transfer and manufacturing both in India and globally.",
    },
    {
      lead: "Fully Equipped Manufacturing CDMO",
      text: "We have fully functional and well equipped CDMO in India and globally.",
    },
    {
      lead: "Pilot Bioequivalence (BE) Batches",
      text: "We can perform pilot BE batches and pivotal BE batches for regulatory submission.",
    },
    {
      lead: "Batch Supplies",
      text: "We are capable to produce commercial batches that meet the requirements of various regulated, semi-regulated and ROW countries.",
    },
    {
      lead: "Manufacturing Partnerships",
      text: "Collaborating with other manufacturing companies enables us to scale up production and meet the demands of both regulated and ROW countries.",
    },
    {
      lead: "Manufacturing and Scaling of Pilot and Pivotal BE Batches",
      text: "Conducting necessary studies to demonstrate our approach provides a comprehensive solution to marketing companies, from molecule selection to supply, ensuring they can confidently bring new products to market.",
    },
  ],
  gallery: [ABBESS_ASSETS.product2, ABBESS_ASSETS.hw3, ABBESS_ASSETS.product1],
  decadeHeading: "Enlisted Research-Product development activity of last decade:",
};

export const PRODUCT_LIST_CONTENT = {
  title: "Product List",
  notePrefix: "Upon request, Please drop us a mail on ",
  email: "bd@abbess.in",
  categories: [
    "Platform Technology based Products",
    "Patented Products",
    "Ready for Technology Transfer",
    "Ready for Site Transfer",
    "Ready to RnD Accelerated Stability",
    "Product under Development",
  ],
};

export const SERVICE_CONTRACT_CONTENT = {
  title: "Service Contract",
  paragraph:
    "As our objective is to help the existing pharma /healthcare organizations to reduce the development time and workload on their existing employees by getting associated with them and help in more product development and registration in the predefined time. Patenting the product and process developed by us for our clients We will be offering dedicated machines, area, and staff for potential and longterm customers. We can prepare dossiers for our clients even for highly regulated market by partnering with them. Time to time we can train our clients on advanced technologies and concepts We will be signing a two-party confidential agreement for the non-disclosure of the service offered to our client after mutually agreed upon.",
};

export const CAREERS_CONTENT = {
  title: "Careers",
  messagePrefix: "For vacancy related query, please fill up the form in ",
  linkText: "contact us",
  messageSuffix: " page",
};

export const CONTACT_CONTENT = {
  title: "Contact Us",
  visitUsHeading: "Visit Us",
  corporateOffice:
    "The Park Navi Mumbai. No 1, Nirmaladevi Marg, Sector 10, CBD Belapur Navi Mumbai, Maharashtra 400614 India",
  euEntityName: "ABBESS Consultancy Limited",
  euEntityAddress: "San Gwann, Malta, EU Region",
  indiaEntityName: "ABBESS Healthcare OPC Private Limited",
  indiaEntityAddressFull:
    "A332 – A Wing, Silver Spring, Taloja MIDC, Navi Mumbai, Maharashtra, India",
  indiaEntityAddressFooter: "Taloja MIDC, Navi Mumbai, India",
  email: "bd@abbess.in",
  linkedinUrl: "https://www.linkedin.com/company/abbess-healthcare",
  copyright:
    "Copyright © 2026 ABBESS Healthcare OPC Private Limited. All Rights Reserved.",
  maps: {
    maltaEmbed:
      "https://maps.google.com/maps?q=Malta%2C%20Europe&t=m&z=12&output=embed&iwloc=near",
    mumbaiEmbed:
      "https://maps.google.com/maps?q=Mumbai%2CIndia&t=m&z=12&output=embed&iwloc=near",
  },
};

export interface SearchEntry {
  route: PageRoute;
  title: string;
  category: string;
  excerpt: string;
  keywords: string;
}

export const SEARCH_INDEX: SearchEntry[] = [
  {
    route: "home",
    title: "Home – ABBESS Healthcare",
    category: "Overview",
    excerpt:
      "Creating a better tomorrow For health and happiness. We have expanded to Europe. Offering Research & Development, QP Services, Business Development & Supply Chain globally.",
    keywords:
      "home europe expansion healthcare innovations r&d qp services cdmo cro deliverables",
  },
  {
    route: "about-us",
    title: "About Us",
    category: "Organization",
    excerpt:
      "ABBESS Healthcare OPC Private Limited (2014, Navi Mumbai, India) & ABBESS Consultancy Limited (2024, Malta, Europe). Vision, Facility & Mission.",
    keywords:
      "about us 2014 2024 malta europe navi mumbai priorities vision facility mission innovating health advancing wellness",
  },
  {
    route: "company-culture",
    title: "Company Culture",
    category: "About Us",
    excerpt:
      "Equal freedom of expression, regular seminars, conferences, LnD programs, holistic growth, and Ph.D. Program support after five years at AHC.",
    keywords:
      "company culture employees seminars conferences lnd phd programs scientists growth",
  },
  {
    route: "csr-activities",
    title: "CSR Activities",
    category: "About Us",
    excerpt:
      "Annual employee initiatives for children and elderly individuals, National Disaster contributions, healthcare support, and Police Personnel family life insurance.",
    keywords:
      "csr activities social responsibility elderly children police personnel life insurance disaster relief",
  },
  {
    route: "service",
    title: "Service & Deliverables",
    category: "Services",
    excerpt:
      "Formulation development for OSD, liquids, parenterals, ointments & creams across US/EU/Canada/Australia/ROW/India from 200gm to 250kg batch sizes.",
    keywords:
      "service deliverables formulation anda doe qbd dsir dossier cqa qa pilot be batch 200gm 250kg",
  },
  {
    route: "research-facility",
    title: "Research Facility",
    category: "Services",
    excerpt:
      "Formulation Development Lab, Analytical Development Lab, Stability Chambers, Q1Q2 reverse engineering, API sameness, and DST collaborative high-end research.",
    keywords:
      "research facility formulation analytical scope lyophilized eye care biosimilars ayurceuticals anticancer q1q2 psd",
  },
  {
    route: "supply-chain-management",
    title: "Supply Chain Management",
    category: "Services",
    excerpt:
      "Sourcing of Active Pharmaceutical Ingredients (APIs), excipients, consumables & packaging materials with strict price control and commercial supply agreements.",
    keywords:
      "supply chain management api excipients packaging consumables price control portfolio",
  },
  {
    route: "business-development",
    title: "Business Development",
    category: "Services",
    excerpt:
      "Strategic Planning, Market Research, Building Partnerships, CDMO & CRO Services, In-Licensing, New Ventures, and Resource Management.",
    keywords:
      "business development strategic planning market research partnerships sales new ventures cdmo cro",
  },
  {
    route: "project-management",
    title: "Project Management",
    category: "Services",
    excerpt:
      "Dedicated Project Management Team executing Initiation, Planning, Execution, Monitoring and Controlling, and Closure within timeline and budget.",
    keywords:
      "project management initiation planning execution monitoring controlling closure timeline budget",
  },
  {
    route: "qp-service",
    title: "QP Service",
    category: "Services",
    excerpt:
      "EU GMP Regulatory Compliance, Batch Release & Certification, CMO Audits & Inspections, Risk Management & Quality Systems, Importation & Distribution.",
    keywords:
      "qp service qualified person eu gmp batch release certification audits inspections importation",
  },
  {
    route: "service-contract",
    title: "Service Contract",
    category: "Services",
    excerpt:
      "Dedicated machines, area, staff, regulated market dossiers, advanced technology training, and two-party confidential non-disclosure agreements.",
    keywords:
      "service contract dedicated machines area staff dossier confidential agreement nda patenting",
  },
  {
    route: "how-and-where",
    title: "How and Where",
    category: "Deliverables",
    excerpt:
      "Navi Mumbai Research & Development facilities for OSD tablets, capsules, sachets, granules, effervescents, liquids & semisolids with UPLCs and HPLCs.",
    keywords:
      "how and where navi mumbai maharashtra osd effervescent uplc hplc analytical validation",
  },
  {
    route: "product-development",
    title: "Product Development",
    category: "Deliverables",
    excerpt:
      "Manufacturing Capabilities & Plant Facilities: Fully Equipped Manufacturing CDMO, Pilot & Pivotal BE Batches, Commercial Batch Supplies & Partnerships.",
    keywords:
      "product development manufacturing capabilities plant facilities cdmo pilot pivotal bioequivalence be batches",
  },
  {
    route: "product-list",
    title: "Product List",
    category: "Deliverables",
    excerpt:
      "Platform Technology based Products, Patented Products, Ready for Technology Transfer, Ready for Site Transfer, Ready to RnD Accelerated Stability.",
    keywords:
      "product list platform technology patented technology transfer site transfer accelerated stability bd@abbess.in",
  },
  {
    route: "careers",
    title: "Careers",
    category: "Careers",
    excerpt:
      "Explore scientific, analytical, quality, and business opportunities at ABBESS Healthcare. Submit vacancy queries directly.",
    keywords: "careers jobs vacancy scientists analytical formulation hiring",
  },
  {
    route: "contact-us",
    title: "Contact Us",
    category: "Contact",
    excerpt:
      "The Park CBD Belapur Navi Mumbai, San Gwann Malta EU Region (ABBESS Consultancy Limited), and Silver Spring Taloja MIDC Navi Mumbai. Email: bd@abbess.in.",
    keywords:
      "contact us visit us belapur taloja midc navi mumbai san gwann malta bd@abbess.in phone message",
  },
];
