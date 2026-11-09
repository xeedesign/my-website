import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Globe2,
  Layers,
  Lock,
  Microscope,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  ABBESS_ASSETS,
  AssetSource,
  BUSINESS_DEVELOPMENT_CONTENT,
  PageRoute,
  PROJECT_MANAGEMENT_CONTENT,
  QP_SERVICE_CONTENT,
  RESEARCH_FACILITY_CONTENT,
  SERVICE_CONTRACT_CONTENT,
  SERVICE_PAGE_CONTENT,
  SUPPLY_CHAIN_CONTENT,
} from "../data/abbessData";
import {
  PageHeroBanner,
  ParallaxImageCard,
  Reveal,
  SmartImage,
  TiltCard,
} from "../components/MotionPrimitives";

interface ServicePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLightbox: (images: AssetSource[], index: number) => void;
}

/* =========================================================================
   1. SERVICE OVERVIEW PAGE (/service)
   ========================================================================= */
export const ServiceOverviewPage: React.FC<ServicePageProps> = ({
  onNavigate,
}) => {
  const [filterText, setFilterText] = useState("");

  const filteredDeliverables = SERVICE_PAGE_CONTENT.marketDeliverables.filter(
    (d) => d.toLowerCase().includes(filterText.trim().toLowerCase())
  );

  const subServicePages: {
    title: string;
    subtitle: string;
    route: PageRoute;
    icon: React.FC<{ className?: string }>;
  }[] = [
    {
      title: "Research Facility",
      subtitle: "Formulation, Analytical & Collaborative DST Projects",
      route: "research-facility",
      icon: Microscope,
    },
    {
      title: "QP Service",
      subtitle: "EU GMP Compliance, Batch Release & CMO Audits",
      route: "qp-service",
      icon: ShieldCheck,
    },
    {
      title: "Business Development",
      subtitle: "CDMO/CRO, Strategic Partnerships & Market Expansion",
      route: "business-development",
      icon: Briefcase,
    },
    {
      title: "Supply Chain Management",
      subtitle: "APIs, Excipients, Packaging & Commercial Supply Agreements",
      route: "supply-chain-management",
      icon: PackageCheck,
    },
    {
      title: "Project Management",
      subtitle: "5-Stage Initiation to Closure Execution & Budget Control",
      route: "project-management",
      icon: Workflow,
    },
    {
      title: "Service Contract",
      subtitle: "Dedicated Machines, Area, Staff, Dossiers & Two-Party NDA",
      route: "service-contract",
      icon: FileCheck2,
    },
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={SERVICE_PAGE_CONTENT.title}
        eyebrow="Global Pharmaceutical Capabilities"
        subtitle="Accelerating pharmaceutical development, patenting, regulatory dossier preparation, and GMP scale-up across regulated and ROW markets."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service" },
        ]}
        onNavigate={onNavigate}
      />

      {/* Intro Deliverables Statement */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[28px] border border-[#324E8E]/15 bg-gradient-to-br from-[#EDF1FC] via-white to-[#EFFFFF] p-8 shadow-[0_20px_50px_-15px_rgba(23,34,77,0.12)] sm:p-11">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3393F0]/12 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#3393F0] uppercase">
                <Layers className="h-3.5 w-3.5" />
                {SERVICE_PAGE_CONTENT.heading}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[#17224D] sm:text-3xl">
                Strategic Partnership &amp; End-to-End Deliverables
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#17224D]/90 sm:text-lg">
                {SERVICE_PAGE_CONTENT.introParagraph}
              </p>
            </div>
          </Reveal>

          {/* Dosage Forms Spectrum */}
          <div className="mt-14">
            <Reveal>
              <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                Dosage Form Spectrum
              </h6>
              <h3 className="mt-2 text-2xl font-bold text-[#17224D] sm:text-3xl">
                Comprehensive Formulation Development
              </h3>
            </Reveal>

            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_PAGE_CONTENT.dosageForms.map((df, idx) => (
                <Reveal
                  key={df}
                  delay={idx * 0.07}
                  className={idx === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                >
                  <TiltCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                        <FlaskConical className="h-5 w-5" />
                      </div>
                      <p className="text-base font-semibold leading-relaxed text-[#17224D]">
                        {df}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Global Markets & All 25 Exact Deliverables */}
          <div className="mt-16 rounded-[30px] border border-[#324E8E]/15 bg-[#17224D] p-7 text-white sm:p-11">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC1E4]/35 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-[0.16em] text-[#6EC1E4] uppercase">
                  <Globe2 className="h-3.5 w-3.5" />
                  Global Regulatory &amp; Technical Scope
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {SERVICE_PAGE_CONTENT.marketsHeading}
                </h3>
              </div>

              {/* Filter Input */}
              <div className="relative w-full max-w-xs">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6EC1E4]" />
                <input
                  type="search"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Filter 25 capabilities..."
                  className="w-full rounded-full border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:border-[#6EC1E4] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
              {filteredDeliverables.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 9) * 0.04 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-[#6EC1E4]/50 hover:bg-white/[0.11]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6EC1E4]" />
                  <span className="text-sm leading-relaxed text-[#EDF1FC]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dedicated Specialized Service Pages Directory */}
          <div className="mt-16">
            <Reveal>
              <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                Specialized Divisions
              </h6>
              <h3 className="mt-2 text-2xl font-bold text-[#17224D] sm:text-3xl">
                Explore Dedicated Service Units
              </h3>
            </Reveal>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subServicePages.map((sp, idx) => {
                const Icon = sp.icon;
                return (
                  <Reveal key={sp.route} delay={idx * 0.08}>
                    <TiltCard className="p-6">
                      <button
                        type="button"
                        onClick={() => onNavigate(sp.route)}
                        className="flex h-full w-full flex-col justify-between text-left"
                      >
                        <div>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0] transition group-hover:bg-[#3393F0] group-hover:text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h4 className="text-lg font-bold text-[#17224D] group-hover:text-[#3393F0]">
                            {sp.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#54595F]">
                            {sp.subtitle}
                          </p>
                        </div>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                          <span>Open Page</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   2. RESEARCH FACILITY PAGE (/research-facility)
   ========================================================================= */
export const ResearchFacilityPage: React.FC<ServicePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={RESEARCH_FACILITY_CONTENT.title}
        eyebrow="Service • R&D Infrastructure"
        subtitle="Integrated Formulation Development Lab, Analytical Development Lab, and Stability Chambers engineered for QBD optimization and regulatory excellence."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "Research Facility" },
        ]}
        onNavigate={onNavigate}
        bgAsset={ABBESS_ASSETS.bgLabDots}
      />

      {/* Section 1: Service to Offer + reserch.png */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF1FC] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#3393F0] uppercase">
                  <Microscope className="h-3.5 w-3.5" />
                  {RESEARCH_FACILITY_CONTENT.section1Subheading}
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17224D] sm:text-4xl">
                  {RESEARCH_FACILITY_CONTENT.section1Heading}
                </h2>
              </Reveal>

              <div className="mt-7 space-y-4">
                {RESEARCH_FACILITY_CONTENT.serviceToOffer.map((point, idx) => (
                  <Reveal key={point} delay={idx * 0.08}>
                    <div className="flex items-start gap-3.5 rounded-2xl border border-[#EDF1FC] bg-[#EDF1FC]/45 p-4 transition hover:border-[#3393F0]/40 hover:bg-white hover:shadow-md">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#3393F0]" />
                      <p className="text-sm font-medium leading-relaxed text-[#17224D] sm:text-[15px]">
                        {point}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ParallaxImageCard
                asset={ABBESS_ASSETS.researchLab1}
                badge="Formulation Development Lab"
                caption="ABBESS Healthcare Formulation Development & Stability Testing Unit"
                aspectClass="aspect-[4/3]"
                onExpand={() =>
                  onOpenLightbox(
                    [ABBESS_ASSETS.researchLab1, ABBESS_ASSETS.researchLab2],
                    0
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Formulation Scope & Analytical Scope + research.png over 101941-1.jpg */}
      <section className="relative overflow-hidden bg-[#EDF1FC]/60 py-20">
        <div className="pointer-events-none absolute inset-0 opacity-45">
          <SmartImage
            asset={ABBESS_ASSETS.bgLabDots}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Formulation Development Scope */}
            <Reveal>
              <TiltCard className="p-8">
                <div className="mb-5 flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17224D]">
                    {RESEARCH_FACILITY_CONTENT.formulationScopeTitle}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {RESEARCH_FACILITY_CONTENT.formulationScope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#17224D]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3393F0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>

            {/* Analytical Development Scope + Lab Image */}
            <div className="flex flex-col gap-7">
              <Reveal delay={0.1}>
                <TiltCard className="p-8">
                  <div className="mb-5 flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                      <Beaker className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#17224D]">
                      {RESEARCH_FACILITY_CONTENT.analyticalScopeTitle}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {RESEARCH_FACILITY_CONTENT.analyticalScope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#17224D]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3393F0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>

              <ParallaxImageCard
                asset={ABBESS_ASSETS.researchLab2}
                badge="Analytical Development Lab"
                caption="Analytical Method Development & Validation Scientists with HPLC/UPLC Systems"
                aspectClass="aspect-[16/10]"
                onExpand={() =>
                  onOpenLightbox(
                    [ABBESS_ASSETS.researchLab1, ABBESS_ASSETS.researchLab2],
                    1
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Collaborative Project / High-End Research Project */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[28px] bg-gradient-to-br from-[#17224D] to-[#324E8E] p-8 text-white shadow-2xl sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC1E4]/35 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-[#6EC1E4] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                {RESEARCH_FACILITY_CONTENT.collaborativeEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {RESEARCH_FACILITY_CONTENT.collaborativeTitle}
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {RESEARCH_FACILITY_CONTENT.collaborativeItems.map(
                  (item, idx) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#3393F0] text-xs font-bold text-white">
                        0{idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[#EDF1FC] sm:text-base">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   3. SUPPLY CHAIN MANAGEMENT PAGE (/supply-chain-management)
   ========================================================================= */
export const SupplyChainPage: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={SUPPLY_CHAIN_CONTENT.title}
        eyebrow="Service • Global Pharmaceutical Sourcing"
        subtitle="End-to-end API, excipient, consumable, and packaging sourcing with disciplined price control and reliable commercial supply agreements."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "Supply Chain Management" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              {SUPPLY_CHAIN_CONTENT.paragraphs.map((para, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <TiltCard className="p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EDF1FC] px-3.5 py-1 text-xs font-semibold text-[#3393F0]">
                      <PackageCheck className="h-3.5 w-3.5" />
                      <span>
                        {idx === 0
                          ? "Strategic Sourcing & Price Control"
                          : "Commercial Supply Agreements & Risk Mitigation"}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-[#17224D] sm:text-lg">
                      {para}
                    </p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <div className="rounded-[28px] bg-gradient-to-br from-[#17224D] to-[#324E8E] p-8 text-white shadow-xl">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#6EC1E4] uppercase">
                    Core Supply Portfolio
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Global Supply Chain Offerings
                  </h3>

                  <div className="mt-6 space-y-3.5">
                    {SUPPLY_CHAIN_CONTENT.keyPillars.map((pillar) => (
                      <div
                        key={pillar}
                        className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6EC1E4]" />
                        <span className="font-semibold text-white">
                          {pillar}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate("contact-us")}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3393F0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-[#17224D]"
                  >
                    <span>Inquire About API &amp; Excipient Supply</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   4. BUSINESS DEVELOPMENT PAGE (/business-development)
   ========================================================================= */
export const BusinessDevelopmentPage: React.FC<ServicePageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={BUSINESS_DEVELOPMENT_CONTENT.title}
        eyebrow="Service • Strategic Growth & Global Partnerships"
        subtitle={BUSINESS_DEVELOPMENT_CONTENT.intro}
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "Business Development" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Operational Initiatives */}
          <Reveal>
            <div className="rounded-[28px] border border-[#EDF1FC] bg-[#EDF1FC]/55 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-[#17224D] sm:text-3xl">
                Key Organizational Growth Mandates
              </h2>
              <p className="mt-2 text-sm text-[#54595F]">
                {BUSINESS_DEVELOPMENT_CONTENT.intro}
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                {BUSINESS_DEVELOPMENT_CONTENT.operationalGoals.map((goal) => (
                  <div
                    key={goal}
                    className="flex items-start gap-3.5 rounded-2xl border border-white bg-white p-5 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3393F0]" />
                    <p className="text-sm font-medium leading-relaxed text-[#17224D] sm:text-base">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 6 Strategic Pillars */}
          <div className="mt-14">
            <Reveal>
              <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                Strategic Framework
              </h6>
              <h3 className="mt-2 text-2xl font-bold text-[#17224D] sm:text-3xl">
                Six Pillars of Business Development
              </h3>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BUSINESS_DEVELOPMENT_CONTENT.strategicPillars.map(
                (pillar, idx) => (
                  <Reveal key={pillar.label} delay={idx * 0.08}>
                    <TiltCard className="p-7">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDF1FC] text-sm font-extrabold text-[#3393F0]">
                          0{idx + 1}
                        </span>
                        <Briefcase className="h-5 w-5 text-[#324E8E]/60" />
                      </div>
                      <h4 className="text-xl font-bold text-[#17224D]">
                        {pillar.label}
                      </h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#54595F]">
                        {pillar.description}
                      </p>
                    </TiltCard>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   5. PROJECT MANAGEMENT PAGE (/project-management)
   ========================================================================= */
export const ProjectManagementPage: React.FC<ServicePageProps> = ({
  onNavigate,
}) => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={PROJECT_MANAGEMENT_CONTENT.title}
        eyebrow="Service • Precision Execution"
        subtitle={PROJECT_MANAGEMENT_CONTENT.intro}
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "Project Management" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF1FC] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#3393F0] uppercase">
              <Workflow className="h-3.5 w-3.5" />
              End-to-End Delivery Lifecycle
            </span>
            <p className="mt-4 text-base leading-relaxed text-[#17224D] sm:text-lg">
              {PROJECT_MANAGEMENT_CONTENT.intro}
            </p>
          </Reveal>

          {/* Interactive 5-Stage Horizontal Step Selector */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {PROJECT_MANAGEMENT_CONTENT.phases.map((phase, idx) => (
              <button
                key={phase.title}
                type="button"
                onClick={() => setActivePhase(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activePhase === idx
                    ? "bg-[#3393F0] text-white shadow-lg shadow-[#3393F0]/30"
                    : "border border-[#EDF1FC] bg-[#EDF1FC]/60 text-[#17224D] hover:border-[#3393F0]"
                }`}
              >
                <span className="text-xs opacity-80">{phase.step}</span>
                <span>{phase.title}</span>
              </button>
            ))}
          </div>

          {/* All 5 Phases Timeline Grid */}
          <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {PROJECT_MANAGEMENT_CONTENT.phases.map((phase, idx) => {
              const isSelected = activePhase === idx;
              return (
                <Reveal key={phase.step} delay={idx * 0.09}>
                  <div
                    onClick={() => setActivePhase(idx)}
                    className={`cursor-pointer rounded-3xl border p-6 transition-all duration-300 ${
                      isSelected
                        ? "border-[#3393F0] bg-gradient-to-b from-[#17224D] to-[#324E8E] text-white shadow-2xl -translate-y-1.5"
                        : "border-[#324E8E]/15 bg-white text-[#17224D] hover:border-[#3393F0]/50 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-extrabold ${
                          isSelected
                            ? "bg-[#3393F0] text-white"
                            : "bg-[#EDF1FC] text-[#3393F0]"
                        }`}
                      >
                        {phase.step}
                      </span>
                      <span
                        className={`text-xs font-semibold uppercase ${
                          isSelected ? "text-[#6EC1E4]" : "text-[#7A7A7A]"
                        }`}
                      >
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h3
                      className={`mt-5 text-lg font-bold ${
                        isSelected ? "text-white" : "text-[#17224D]"
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-sm leading-relaxed ${
                        isSelected ? "text-[#EDF1FC]" : "text-[#54595F]"
                      }`}
                    >
                      {phase.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   6. QP SERVICE PAGE (/qp-service)
   ========================================================================= */
export const QpServicePage: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={QP_SERVICE_CONTENT.title}
        eyebrow="Service • EU GMP Qualified Person (Malta, Europe)"
        subtitle={QP_SERVICE_CONTENT.intro}
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "QP Service" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[28px] border border-[#324E8E]/15 bg-gradient-to-r from-[#17224D] to-[#324E8E] p-8 text-white shadow-xl sm:p-10">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#6EC1E4] uppercase">
                    <ShieldCheck className="h-4 w-4" />
                    EU Market Regulatory Oversight
                  </span>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-white sm:text-xl">
                    {QP_SERVICE_CONTENT.intro}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("contact-us")}
                  className="shrink-0 rounded-full bg-[#3393F0] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-[#17224D]"
                >
                  Connect with Malta EU Office
                </button>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {QP_SERVICE_CONTENT.pillars.map((pillar, idx) => (
              <Reveal
                key={pillar.title}
                delay={idx * 0.09}
                className={idx === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <TiltCard className="p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17224D]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#54595F]">
                    {pillar.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   7. SERVICE CONTRACT PAGE (/service-contract)
   ========================================================================= */
export const ServiceContractPage: React.FC<ServicePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const highlights = [
    {
      title: "Accelerated Development & Patenting",
      desc: "Reducing development time and workload on client teams while patenting products and processes developed for our clients.",
    },
    {
      title: "Dedicated Machines, Area & Staff",
      desc: "Offering dedicated pharmaceutical machinery, GMP area, and scientific staff for potential and long-term customers.",
    },
    {
      title: "Regulated Market Dossiers & Training",
      desc: "Preparing complete dossiers even for highly regulated markets and training clients on advanced technologies and concepts.",
    },
    {
      title: "Two-Party Confidential NDA",
      desc: "Signing a strict two-party confidential agreement for the non-disclosure of the service offered after mutual agreement.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={SERVICE_CONTRACT_CONTENT.title}
        eyebrow="Service • Confidential Partnership Model"
        subtitle="Dedicated R&D resources, dossier compilation, IP patenting, and two-party confidentiality agreements tailored for global pharma partners."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Service", route: "service" },
          { label: "Service Contract" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-[28px] border border-[#324E8E]/15 bg-[#EDF1FC]/55 p-8 sm:p-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#3393F0] shadow-sm">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Contractual Commitment</span>
                  </div>
                  <p className="text-base leading-relaxed text-[#17224D] sm:text-lg">
                    {SERVICE_CONTRACT_CONTENT.paragraph}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <ParallaxImageCard
                asset={ABBESS_ASSETS.bgServiceContract}
                badge="Pharmaceutical Formulations"
                caption="Dedicated Development, Dossier Preparation & Confidential Service Contracts"
                aspectClass="aspect-[16/10]"
                onExpand={() =>
                  onOpenLightbox([ABBESS_ASSETS.bgServiceContract], 0)
                }
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, idx) => (
              <Reveal key={h.title} delay={idx * 0.08}>
                <TiltCard className="p-6">
                  <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                    Commitment 0{idx + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#17224D]">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#54595F]">
                    {h.desc}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
