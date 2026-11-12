import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Columns3,
  Globe2,
  Layers,
  Mail,
  RotateCw,
  ShieldCheck,
} from "lucide-react";
import {
  ABBESS_ASSETS,
  AssetSource,
  HOME_CONTENT,
  PageRoute,
} from "../data/abbessData";
import {
  FlipCard3D,
  ParallaxImageCard,
  Reveal,
  SmartIcon,
  SmartImage,
  TiltCard,
} from "../components/MotionPrimitives";

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLightbox: (images: AssetSource[], index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedDeliverables, setExpandedDeliverables] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const deliverablesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "24%"]);
  const heroContentOpacity = useTransform(heroScroll, [0, 0.78], [1, 0]);
  const heroContentY = useTransform(heroScroll, [0, 0.78], [0, 56]);

  const { scrollYProgress: delivScroll } = useScroll({
    target: deliverablesRef,
    offset: ["start end", "end start"],
  });
  const delivBgY = useTransform(delivScroll, [0, 1], ["-10%", "12%"]);

  const slides = HOME_CONTENT.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6800);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  const facilityShowcase: {
    asset: AssetSource;
    badge: string;
    caption: string;
    route: PageRoute;
  }[] = [
    {
      asset: "/assets/facility/hw1 (1).png",
      badge: "Navi Mumbai Hub",
      caption: "ABBESS Healthcare OPC Pvt. Ltd. Scientific R&D Team",
      route: "how-and-where",
    },
    {
      asset: "/assets/facility/research (1).png",
      badge: "Formulation R&D",
      caption: "Formulation Development & Stability Testing Laboratory",
      route: "research-facility",
    },
    {
      asset: "/assets/facility/product1 (1).png",
      badge: "GMP Scale-Up",
      caption: "Pilot & Pivotal Bioequivalence (BE) Batch Equipment",
      route: "product-development",
    },
    {
      asset: "/assets/facility/map-2.png",
      badge: "Global Footprint",
      caption: "Operating Across Navi Mumbai, India & Malta, Europe",
      route: "about-us",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. CINEMATIC HERO SLIDER (Exact Slide 1 & Slide 2 images + #17224D94 overlay + exact text) */}
      <section
        ref={heroRef}
        className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-[#17224D] sm:min-h-[650px] lg:min-h-[710px]"
      >
        {/* Background Slides with Ken Burns Zoom + Scroll Parallax */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1.11 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.0, ease: "easeInOut" },
                scale: { duration: 7.2, ease: "linear" },
              }}
              className="absolute inset-0"
            >
              {/* Desktop image */}
              <SmartImage
                asset={currentSlide.desktopImage}
                className="hidden h-full w-full object-cover sm:block"
              />
              {/* Mobile image */}
              <SmartImage
                asset={currentSlide.mobileImage}
                className="block h-full w-full object-cover sm:hidden"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Exact #17224D94 Overlay + Subtle Radial Luxury Depth */}
        <div className="pointer-events-none absolute inset-0 bg-[#17224D]/62" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17224D]/75 via-[#17224D]/45 to-[#17224D]/88" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#3393F0]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#6EC1E4]/20 blur-3xl" />

        {/* Hero Typography & CTA */}
        <motion.div
          style={{ opacity: heroContentOpacity, y: heroContentY }}
          className="relative z-10 mx-auto max-w-[1140px] px-4 py-20 text-center text-white sm:px-6 lg:px-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#6EC1E4]/40 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-[#EFFFFF] backdrop-blur-md sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#6EC1E4]" />
                <span>{currentSlide.eyebrow}</span>
              </div>

              <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl lg:text-[62px]">
                {currentSlide.headline}
              </h1>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate(currentSlide.ctaRoute)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#3393F0] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#3393F0]/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#17224D]"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("service")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#6EC1E4] hover:bg-white/20"
                >
                  <Globe2 className="h-4 w-4 text-[#6EC1E4]" />
                  <span>Explore Global Services</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Left / Right Slide Arrows */}
        <button
          type="button"
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#3393F0] md:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#3393F0] md:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Slide Progress Indicators */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((s, idx) => {
            const isCurrent = idx === activeSlide;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-300 ${
                  isCurrent ? "w-14 bg-white/30" : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              >
                {isCurrent && (
                  <motion.span
                    key={`bar-${activeSlide}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6.8, ease: "linear" }}
                    className="absolute inset-y-0 left-0 rounded-full bg-[#6EC1E4]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. GLOBAL MILESTONE STATS STRIP (Authentic ABBESS Data Points) */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <Reveal direction="up">
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#324E8E]/15 bg-white p-6 shadow-[0_22px_55px_-16px_rgba(23,34,77,0.16)] sm:p-8 lg:grid-cols-4 lg:divide-x lg:divide-[#EDF1FC]">
              {[
                {
                  value: "2014",
                  label: "Incorporated in Navi Mumbai, India",
                  sub: "ABBESS Healthcare OPC Pvt. Ltd.",
                },
                {
                  value: "5 Units",
                  label: "Dedicated R&D & Analytical Labs",
                  sub: "Formulation, Potent, UPLC & HPLC",
                },
                {
                  value: "2024",
                  label: "Expanded to Malta, Europe",
                  sub: "ABBESS Consultancy Limited (EU)",
                },
                {
                  value: "200g – 250kg",
                  label: "In-House QBD & GMP Batch Scale",
                  sub: "OSD, Liquids, Parenterals & Semisolids",
                },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${idx > 0 ? "lg:pl-8" : ""} flex flex-col justify-center`}
                >
                  <div className="text-2xl font-extrabold tracking-tight text-[#3393F0] sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#17224D]">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-xs text-[#7A7A7A]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. UPDATES / EUROPE EXPANSION SECTION (Exact #EDF1FC + bg_memphis_1 + 4 Global Services) */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Exact bg_memphis_1 overlay on #EDF1FC tint */}
        <div className="pointer-events-none absolute inset-0 bg-[#EDF1FC]/55" />
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <SmartImage
            asset={ABBESS_ASSETS.bgMemphis}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h6 className="inline-flex items-center gap-2 rounded-full border border-[#3393F0]/25 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#3393F0]" />
              {HOME_CONTENT.updatesSection.eyebrow}
            </h6>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#17224D] sm:text-4xl lg:text-[42px]">
              <button
                type="button"
                onClick={() => onNavigate(HOME_CONTENT.updatesSection.headingRoute)}
                className="text-center transition-colors hover:text-[#3393F0]"
              >
                {HOME_CONTENT.updatesSection.heading}
              </button>
            </h2>
          </Reveal>

          {/* 4 Interactive 3D Tilt Service Cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {HOME_CONTENT.updatesSection.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.1} className="h-full">
                <TiltCard className="p-7">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 flex items-center justify-between gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF1FC] p-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3393F0]/15">
                          <SmartIcon
                            iconPath={card.iconPath}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                        <span className="rounded-full bg-[#EDF1FC] px-3 py-1 text-[11px] font-semibold text-[#324E8E]">
                          {card.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-snug text-[#17224D] transition-colors group-hover:text-[#3393F0]">
                        {card.title}
                      </h3>

                      <ul className="mt-5 space-y-3 border-t border-[#EDF1FC] pt-5">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-[#54595F]"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3393F0]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigate(card.route)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3393F0] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#3393F0]/20 transition-all duration-300 hover:bg-[#17224D]"
                      >
                        <span>View More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES 3D FLIP-BOX SECTION (Exact 5315-1.jpg Parallax Backdrop + 3 Flip Cards) */}
      <section
        ref={deliverablesRef}
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        {/* Parallax 5315-1.jpg pharmaceutical conveyor background */}
        <motion.div
          style={{ y: delivBgY }}
          className="pointer-events-none absolute -inset-y-16 inset-x-0 opacity-22"
        >
          <SmartImage
            asset={ABBESS_ASSETS.bgDeliverables}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/94 via-white/88 to-[#EDF1FC]/92" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <Reveal className="max-w-2xl">
              <h6 className="inline-flex items-center gap-2 rounded-full border border-[#3393F0]/25 bg-[#EDF1FC] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                <Layers className="h-3.5 w-3.5" />
                {HOME_CONTENT.deliverablesSection.eyebrow}
              </h6>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-[#17224D] sm:text-4xl lg:text-[44px]">
                {HOME_CONTENT.deliverablesSection.heading}
              </h2>
            </Reveal>

            {/* Interactive View Switcher: 3D Flip Mode vs Full Expanded Reading Mode */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-[#324E8E]/15 bg-white p-1.5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setExpandedDeliverables(false)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    !expandedDeliverables
                      ? "bg-[#17224D] text-white shadow-sm"
                      : "text-[#54595F] hover:text-[#17224D]"
                  }`}
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>3D Flip Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedDeliverables(true)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    expandedDeliverables
                      ? "bg-[#3393F0] text-white shadow-sm"
                      : "text-[#54595F] hover:text-[#17224D]"
                  }`}
                >
                  <Columns3 className="h-3.5 w-3.5" />
                  <span>Read All Expanded</span>
                </button>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {HOME_CONTENT.deliverablesSection.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.12}>
                <FlipCard3D
                  title={card.title}
                  subtitle={card.subtitle}
                  iconPath={card.iconPath}
                  forceExpanded={expandedDeliverables}
                  minHeightClass="min-h-[470px]"
                  ctaLabel="View More"
                  onCtaClick={() => onNavigate(card.route)}
                  backContent={
                    <div className="space-y-3">
                      {"notePrefix" in card && card.notePrefix && (
                        <p className="rounded-xl bg-[#EDF1FC] p-3 text-xs font-medium text-[#17224D]">
                          {card.notePrefix}
                          <a
                            href={`mailto:${card.noteEmail}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 font-bold text-[#3393F0] underline"
                          >
                            <Mail className="h-3 w-3" />
                            {card.noteEmail}
                          </a>
                        </p>
                      )}
                      <ul className="space-y-2.5">
                        {card.items.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#17224D]/90"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3393F0]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REAL R&D LABORATORIES & GLOBAL FOOTPRINT PARALLAX GALLERY STRIP */}
      <section className="bg-[#17224D] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6EC1E4]/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#6EC1E4] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" />
                Inside ABBESS Healthcare
              </span>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                State-of-the-Art R&amp;D Facilities, GMP Scale-Up &amp; EU Presence
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <button
                type="button"
                onClick={() => onNavigate("research-facility")}
                className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-[#17224D]"
              >
                <span>Explore Research Facility</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityShowcase.map((item, idx) => (
              <div key={item.caption} className="flex flex-col gap-3">
                <ParallaxImageCard
                  asset={item.asset}
                  badge={item.badge}
                  caption={item.caption}
                  aspectClass="aspect-[4/3]"
                  parallaxStrength={20}
                  delay={idx * 0.08}
                  onExpand={() =>
                    onOpenLightbox(
                      facilityShowcase.map((f) => f.asset),
                      idx
                    )
                  }
                />
                <button
                  type="button"
                  onClick={() => onNavigate(item.route)}
                  className="inline-flex items-center gap-1.5 self-start pl-1 text-xs font-semibold text-[#6EC1E4] transition hover:text-white"
                >
                  <span>Visit Dedicated Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
