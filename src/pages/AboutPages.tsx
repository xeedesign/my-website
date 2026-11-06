import React, { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Columns3,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  RotateCw,
  ShieldPlus,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  ABBESS_ASSETS,
  ABOUT_US_CONTENT,
  AssetSource,
  COMPANY_CULTURE_CONTENT,
  CSR_ACTIVITIES_CONTENT,
  PageRoute,
} from "../data/abbessData";
import {
  FlipCard3D,
  PageHeroBanner,
  ParallaxImageCard,
  Reveal,
  SmartImage,
  TiltCard,
} from "../components/MotionPrimitives";

interface SubPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLightbox: (images: AssetSource[], index: number) => void;
}

export const AboutUsPage: React.FC<SubPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [expandedPillarView, setExpandedPillarView] = useState(true);

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={ABOUT_US_CONTENT.title}
        eyebrow="Global Pharmaceutical R&D & Consultancy"
        subtitle="Advancing accessible, innovative, and commercially viable pharmaceutical formulations from Navi Mumbai, India to Malta, Europe."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "About Us" },
        ]}
        onNavigate={onNavigate}
      />

      {/* Incorporations & Global Map Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {ABOUT_US_CONTENT.incorporations.map((inc, idx) => (
              <Reveal key={inc.year} delay={idx * 0.12}>
                <TiltCard className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#17224D] to-[#324E8E] text-white shadow-lg">
                      <span className="text-[10px] font-semibold tracking-wider text-[#6EC1E4] uppercase">
                        Est.
                      </span>
                      <span className="text-lg font-extrabold">{inc.year}</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EDF1FC] px-3 py-1 text-xs font-semibold text-[#3393F0]">
                        <Globe2 className="h-3.5 w-3.5" />
                        <span>{inc.location}</span>
                      </div>
                      <p className="mt-3 text-base font-medium leading-relaxed text-[#17224D] sm:text-lg">
                        {inc.text}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Exact Global World Map Image (map2-1-1.png) with Parallax Reveal & Lightbox */}
          <div className="mt-12">
            <ParallaxImageCard
              asset={ABBESS_ASSETS.mapAbout}
              badge="Malta, Europe & Navi Mumbai, India"
              caption="ABBESS Global Operations — ABBESS Healthcare OPC Private Limited (India) & ABBESS Consultancy Limited (Europe)"
              aspectClass="aspect-[16/9]"
              containMode={false}
              parallaxStrength={18}
              onExpand={() => onOpenLightbox([ABBESS_ASSETS.mapAbout], 0)}
            />
          </div>

          {/* Our Priorities */}
          <Reveal className="mt-14">
            <div className="relative overflow-hidden rounded-[28px] border border-[#324E8E]/15 bg-gradient-to-br from-[#17224D] to-[#324E8E] p-8 text-white shadow-[0_24px_60px_-15px_rgba(23,34,77,0.3)] sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#3393F0]/25 blur-3xl" />
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC1E4]/35 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-[0.16em] text-[#6EC1E4] uppercase">
                    <Target className="h-3.5 w-3.5" />
                    Core Purpose
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {ABOUT_US_CONTENT.prioritiesTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#EDF1FC] sm:text-lg">
                    {ABOUT_US_CONTENT.prioritiesText}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate("company-culture")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-[#17224D]"
                  >
                    <span>Company Culture</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate("csr-activities")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    <span>CSR Activities</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Vision & Facility / Mission Section (Exact bg_memphis_1 + Vision, Facility, Mission) */}
      <section className="relative overflow-hidden bg-[#EDF1FC]/60 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <SmartImage
            asset={ABBESS_ASSETS.bgMemphis}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <Reveal>
              <h6 className="inline-flex items-center gap-2 rounded-full border border-[#3393F0]/25 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                {ABOUT_US_CONTENT.visionSectionEyebrow}
              </h6>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#17224D] sm:text-4xl lg:text-[44px]">
                {ABOUT_US_CONTENT.visionSectionTitle}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-[#324E8E]/15 bg-white p-1.5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedPillarView(true)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    expandedPillarView
                      ? "bg-[#3393F0] text-white shadow-sm"
                      : "text-[#54595F] hover:text-[#17224D]"
                  }`}
                >
                  <Columns3 className="h-3.5 w-3.5" />
                  <span>Full Editorial View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedPillarView(false)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    !expandedPillarView
                      ? "bg-[#17224D] text-white shadow-sm"
                      : "text-[#54595F] hover:text-[#17224D]"
                  }`}
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>3D Flip Cards</span>
                </button>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {/* Vision */}
            <Reveal delay={0.05}>
              <FlipCard3D
                title={ABOUT_US_CONTENT.vision.title}
                subtitle="Commercial Viability Across Human & Animal Healthcare"
                iconPath="/assets/icons/objective.svg"
                forceExpanded={expandedPillarView}
                minHeightClass="min-h-[320px]"
                backContent={
                  <p className="text-base leading-relaxed text-[#17224D]">
                    {ABOUT_US_CONTENT.vision.description}
                  </p>
                }
              />
            </Reveal>

            {/* Facility */}
            <Reveal delay={0.12}>
              <FlipCard3D
                title={ABOUT_US_CONTENT.facility.title}
                subtitle="Collaborative CRO, GMP Area & Scientific Manpower"
                iconPath="/assets/icons/building.svg"
                forceExpanded={expandedPillarView}
                minHeightClass="min-h-[320px]"
                ctaLabel="Explore Research Facility"
                onCtaClick={() => onNavigate("research-facility")}
                backContent={
                  <ul className="space-y-3">
                    {ABOUT_US_CONTENT.facility.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#17224D]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3393F0]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                }
              />
            </Reveal>
          </div>

          {/* Mission (Full Width Showcase for all 7 comprehensive mission statements) */}
          <Reveal delay={0.18} className="mt-8">
            <FlipCard3D
              title={ABOUT_US_CONTENT.mission.title}
              subtitle="7 Core Commitments to Global Pharmaceutical, Herbal & Nutraceutical Innovation"
              iconPath="/assets/icons/medical.svg"
              forceExpanded={expandedPillarView}
              minHeightClass="min-h-[420px]"
              ctaLabel="View Our Services"
              onCtaClick={() => onNavigate("service")}
              backContent={
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {ABOUT_US_CONTENT.mission.items.map((item, idx) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#EDF1FC] bg-[#EDF1FC]/45 p-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3393F0] text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[#17224D]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              }
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export const CompanyCulturePage: React.FC<SubPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const icons = [Lightbulb, Users, Award, GraduationCap];
  const titles = [
    "Freedom of Thought & Expression",
    "Continuous Learning & Seminars",
    "Holistic Scientist Growth",
    "Ph.D. Program Sponsorship",
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={COMPANY_CULTURE_CONTENT.title}
        eyebrow="About Us • People & Scientific Excellence"
        subtitle="Nurturing curiosity, open scientific dialogue, continuous learning, and doctoral advancement at ABBESS Healthcare."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "About Us", route: "about-us" },
          { label: "Company Culture" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              {COMPANY_CULTURE_CONTENT.items.map((item, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <Reveal key={item} delay={idx * 0.1}>
                    <TiltCard className="p-6 sm:p-7">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                            {titles[idx]}
                          </span>
                          <p className="mt-1.5 text-base font-medium leading-relaxed text-[#17224D]">
                            {item}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            <div className="lg:col-span-5">
              <ParallaxImageCard
                asset={ABBESS_ASSETS.hw1}
                badge="ABBESS Scientific Team"
                caption="Scientists & R&D Specialists at ABBESS Healthcare OPC Pvt. Ltd., Navi Mumbai"
                aspectClass="aspect-[4/3]"
                onExpand={() => onOpenLightbox([ABBESS_ASSETS.hw1], 0)}
              />

              <Reveal delay={0.2} className="mt-6">
                <div className="rounded-3xl border border-[#EDF1FC] bg-[#EDF1FC]/60 p-6">
                  <h3 className="text-lg font-bold text-[#17224D]">
                    Build Your Scientific Career at AHC
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#54595F]">
                    Explore opportunities in Formulation Development, Analytical
                    R&amp;D, Quality Assurance, and Regulatory Affairs.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate("careers")}
                      className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17224D]"
                    >
                      <span>Visit Careers</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate("csr-activities")}
                      className="inline-flex items-center gap-2 rounded-full border border-[#324E8E]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#17224D] transition hover:border-[#3393F0] hover:text-[#3393F0]"
                    >
                      <span>CSR Activities</span>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CsrActivitiesPage: React.FC<SubPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const csrCaptions = [
    "Annual full-day employee initiative supporting differently-abled children & elderly communities",
    "ABBESS team volunteering and fostering inclusivity & care across community centers",
    "Training programmes & leadership outreach initiatives by ABBESS Healthcare",
  ];

  const csrIcons = [
    HeartHandshake,
    Building2,
    ShieldPlus,
    Sparkles,
    ShieldPlus,
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={CSR_ACTIVITIES_CONTENT.title}
        eyebrow="About Us • Corporate Social Responsibility"
        subtitle="Serving communities with compassion, healthcare outreach, disaster relief contributions, and life insurance support for Police Personnel & their families."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "About Us", route: "about-us" },
          { label: "CSR Activities" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* 5 Exact CSR Initiatives */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CSR_ACTIVITIES_CONTENT.items.map((item, idx) => {
              const Icon = csrIcons[idx % csrIcons.length];
              return (
                <Reveal
                  key={item}
                  delay={idx * 0.08}
                  className={idx === 0 ? "md:col-span-2 lg:col-span-2" : ""}
                >
                  <TiltCard className="p-7">
                    <div className="flex h-full flex-col justify-between gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-[#EDF1FC] px-3 py-1 text-xs font-bold text-[#324E8E]">
                          Initiative 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-base font-medium leading-relaxed text-[#17224D]">
                        {item}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>

          {/* Exact CSR Photo Gallery (IMG_1683.jpg, IMG_1700.jpg, event1.png) with Parallax & Lightbox */}
          <div className="mt-16">
            <Reveal className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                  Community Moments
                </h6>
                <h2 className="mt-2 text-2xl font-bold text-[#17224D] sm:text-3xl">
                  ABBESS Healthcare CSR Gallery
                </h2>
              </div>
              <p className="text-xs font-medium text-[#7A7A7A]">
                Click any photograph to open full-screen gallery view
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {CSR_ACTIVITIES_CONTENT.gallery.map((imgAsset, idx) => (
                <ParallaxImageCard
                  key={imgAsset.local}
                  asset={imgAsset}
                  badge={`CSR Activity 0${idx + 1}`}
                  caption={csrCaptions[idx]}
                  aspectClass="aspect-[4/3]"
                  delay={idx * 0.12}
                  onExpand={() =>
                    onOpenLightbox(CSR_ACTIVITIES_CONTENT.gallery, idx)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
