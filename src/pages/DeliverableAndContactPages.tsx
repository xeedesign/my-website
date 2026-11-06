import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Factory,
  FlaskConical,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import {
  ABBESS_ASSETS,
  AssetSource,
  CAREERS_CONTENT,
  COMPANY_CULTURE_CONTENT,
  CONTACT_CONTENT,
  HOW_AND_WHERE_CONTENT,
  PageRoute,
  PRODUCT_DEVELOPMENT_CONTENT,
  PRODUCT_LIST_CONTENT,
} from "../data/abbessData";
import { LinkedInIcon } from "../components/Layout";
import {
  PageHeroBanner,
  ParallaxImageCard,
  Reveal,
  SmartImage,
  TiltCard,
} from "../components/MotionPrimitives";

interface DeliverablePageProps {
  onNavigate: (route: PageRoute, prefillSubject?: string) => void;
  onOpenLightbox: (images: AssetSource[], index: number) => void;
}

/* =========================================================================
   1. HOW AND WHERE PAGE (/how-and-where)
   ========================================================================= */
export const HowAndWherePage: React.FC<DeliverablePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const hwCaptions = [
    "High-end Analytical Method Development & Validation Laboratory equipped with UPLCs & HPLCs",
    "ABBESS Healthcare OPC Pvt. Ltd. R&D Scientific Team at Navi Mumbai, Maharashtra, India",
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={HOW_AND_WHERE_CONTENT.title}
        eyebrow="Deliverables • Facilities & Analytical Infrastructure"
        subtitle="Full-fledged Research, Formulation Development, and UPLC/HPLC Analytical Method Validation laboratories in Navi Mumbai, Maharashtra, India."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "How and Where" },
        ]}
        onNavigate={(r) => onNavigate(r)}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {HOW_AND_WHERE_CONTENT.items.map((item, idx) => (
              <Reveal key={item} delay={idx * 0.1}>
                <TiltCard className="p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-sm font-extrabold text-[#3393F0]">
                    0{idx + 1}
                  </div>
                  <p className="text-base font-medium leading-relaxed text-[#17224D]">
                    {item}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Exact 2 Facility Images (hw2.png & hw1.png) with Parallax & Lightbox */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {HOW_AND_WHERE_CONTENT.gallery.map((img, idx) => (
              <ParallaxImageCard
                key={img.local}
                asset={img}
                badge={idx === 0 ? "UPLC & HPLC Analytical Lab" : "Navi Mumbai R&D Unit"}
                caption={hwCaptions[idx]}
                aspectClass="aspect-[4/3]"
                delay={idx * 0.12}
                onExpand={() =>
                  onOpenLightbox(HOW_AND_WHERE_CONTENT.gallery, idx)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   2. PRODUCT DEVELOPMENT PAGE (/product-development)
   ========================================================================= */
export const ProductDevelopmentPage: React.FC<DeliverablePageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const galleryCaptions = [
    "GMP Blending & Process Control Equipment for Scale-Up Batches",
    "Pilot & Pivotal Bioequivalence (BE) Formulation Equipment Operation",
    "Rapid Mixer Granulator & Solid Dosage Manufacturing Suite",
  ];

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={PRODUCT_DEVELOPMENT_CONTENT.title}
        eyebrow="Deliverables • CDMO & Pilot/Pivotal BE Batches"
        subtitle="Comprehensive molecule-to-supply pharmaceutical product development, technology transfer, and commercial manufacturing in India and globally."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Product Development" },
        ]}
        onNavigate={(r) => onNavigate(r)}
        bgAsset={ABBESS_ASSETS.bgLabDots}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h6 className="inline-flex items-center gap-2 rounded-full bg-[#EDF1FC] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
              <Factory className="h-3.5 w-3.5" />
              {PRODUCT_DEVELOPMENT_CONTENT.subheading}
            </h6>
            <h2 className="mt-3 text-3xl font-bold text-[#17224D] sm:text-4xl">
              {PRODUCT_DEVELOPMENT_CONTENT.heading}
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_DEVELOPMENT_CONTENT.items.map((item, idx) => (
              <Reveal key={item.lead} delay={idx * 0.08}>
                <TiltCard className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#EDF1FC] px-3 py-1 text-xs font-bold text-[#3393F0]">
                      Capability 0{idx + 1}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-[#3393F0]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#17224D]">
                    {item.lead}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#54595F]">
                    {item.text}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Exact 3-Image Gallery (product2.png, hw3.png, product1.png) */}
          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
            {PRODUCT_DEVELOPMENT_CONTENT.gallery.map((img, idx) => (
              <ParallaxImageCard
                key={img.local}
                asset={img}
                badge={`Plant Facility 0${idx + 1}`}
                caption={galleryCaptions[idx]}
                aspectClass="aspect-square"
                delay={idx * 0.1}
                onExpand={() =>
                  onOpenLightbox(PRODUCT_DEVELOPMENT_CONTENT.gallery, idx)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enlisted Research-Product development activity of last decade over 101941-1.jpg */}
      <section className="relative overflow-hidden bg-[#EDF1FC]/75 py-20">
        <div className="pointer-events-none absolute inset-0 opacity-45">
          <SmartImage
            asset={ABBESS_ASSETS.bgLabDots}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold leading-snug text-[#17224D] sm:text-3xl">
              {PRODUCT_DEVELOPMENT_CONTENT.decadeHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#54595F] sm:text-base">
              Explore our categorized product portfolio across Platform
              Technology, Patented Formulations, Technology Transfer, and Site
              Transfer readiness, or request the detailed R&amp;D dossier list
              from our Business Development desk.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("product-list")}
                className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3393F0]/25 transition hover:bg-[#17224D]"
              >
                <span>View Product List Categories</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    "contact-us",
                    "Request: Enlisted R&D Product Portfolio Dossier"
                  )
                }
                className="inline-flex items-center gap-2 rounded-full border border-[#324E8E]/25 bg-white px-7 py-3.5 text-sm font-semibold text-[#17224D] transition hover:border-[#3393F0] hover:text-[#3393F0]"
              >
                <Mail className="h-4 w-4 text-[#3393F0]" />
                <span>Request Portfolio via bd@abbess.in</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   3. PRODUCT LIST PAGE (/product-list)
   ========================================================================= */
export const ProductListPage: React.FC<DeliverablePageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={PRODUCT_LIST_CONTENT.title}
        eyebrow="Deliverables • Portfolio & Technology Transfer"
        subtitle="Platform technology, patented formulations, and stability-backed products ready for technology and site transfer."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Product List" },
        ]}
        onNavigate={(r) => onNavigate(r)}
        bgAsset={ABBESS_ASSETS.bgLabDots}
      />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <SmartImage
            asset={ABBESS_ASSETS.bgLabDots}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Exact Email Request Banner */}
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-gradient-to-r from-[#17224D] to-[#324E8E] p-8 text-center text-white shadow-xl sm:flex-row sm:p-10 sm:text-left">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#6EC1E4] uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  Official Product Dossier Inquiry
                </span>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  {PRODUCT_LIST_CONTENT.notePrefix}
                  <a
                    href={`mailto:${PRODUCT_LIST_CONTENT.email}`}
                    className="text-[#6EC1E4] underline decoration-[#6EC1E4]/60 underline-offset-4 transition hover:text-white"
                  >
                    {PRODUCT_LIST_CONTENT.email}
                  </a>
                </p>
              </div>

              <a
                href={`mailto:${PRODUCT_LIST_CONTENT.email}?subject=Product%20List%20Inquiry%20-%20ABBESS%20Healthcare`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3393F0] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-[#17224D]"
              >
                <Mail className="h-4 w-4" />
                <span>Email {PRODUCT_LIST_CONTENT.email}</span>
              </a>
            </div>
          </Reveal>

          {/* 6 Exact Product Categories */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_LIST_CONTENT.categories.map((category, idx) => (
              <Reveal key={category} delay={idx * 0.08}>
                <TiltCard className="p-7">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                          <FlaskConical className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-[#EDF1FC] px-3 py-1 text-xs font-bold text-[#324E8E]">
                          Category 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold leading-snug text-[#17224D]">
                        {category}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onNavigate("contact-us", `Product List Inquiry: ${category}`)
                      }
                      className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#3393F0] transition hover:text-[#17224D]"
                    >
                      <span>Request Category List</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
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
   4. CAREERS PAGE (/careers)
   ========================================================================= */
export const CareersPage: React.FC<DeliverablePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title={CAREERS_CONTENT.title}
        eyebrow="Join ABBESS Healthcare"
        subtitle="Advance your scientific, analytical, quality, or business development career across our Navi Mumbai and European operations."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Careers" },
        ]}
        onNavigate={(r) => onNavigate(r)}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[30px] border border-[#324E8E]/15 bg-gradient-to-br from-[#EDF1FC] via-white to-[#EFFFFF] p-8 text-center shadow-[0_22px_55px_-16px_rgba(23,34,77,0.14)] sm:p-14">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3393F0] text-white shadow-lg shadow-[#3393F0]/30">
                <Briefcase className="h-8 w-8" />
              </div>

              <h2 className="text-2xl font-bold text-[#17224D] sm:text-3xl">
                {CAREERS_CONTENT.title}
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#17224D]">
                {CAREERS_CONTENT.messagePrefix}
                <button
                  type="button"
                  onClick={() =>
                    onNavigate("contact-us", "Vacancy / Career Application Query")
                  }
                  className="font-bold text-[#3393F0] underline decoration-[#3393F0]/60 underline-offset-4 transition hover:text-[#17224D]"
                >
                  {CAREERS_CONTENT.linkText}
                </button>
                {CAREERS_CONTENT.messageSuffix}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate("contact-us", "Vacancy / Career Application Query")
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#3393F0]/30 transition hover:bg-[#17224D]"
                >
                  <span>Go to Contact Us Form</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("company-culture")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#324E8E]/20 bg-white px-7 py-4 text-sm font-semibold text-[#17224D] transition hover:border-[#3393F0] hover:text-[#3393F0]"
                >
                  <span>Explore Company Culture</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* Life & Culture Preview Cards */}
          <div className="mt-14">
            <Reveal>
              <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                Why Scientists Grow at AHC
              </h6>
              <h3 className="mt-2 text-2xl font-bold text-[#17224D]">
                Highlights from Our Company Culture
              </h3>
            </Reveal>

            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
              {COMPANY_CULTURE_CONTENT.items.map((item, idx) => (
                <Reveal key={item} delay={idx * 0.08}>
                  <div className="flex items-start gap-3.5 rounded-2xl border border-[#EDF1FC] bg-white p-6 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3393F0]" />
                    <p className="text-sm font-medium leading-relaxed text-[#17224D] sm:text-base">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   5. CONTACT US PAGE (/contact-us)
   ========================================================================= */
interface ContactUsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenLightbox: (images: AssetSource[], index: number) => void;
  initialSubject?: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  onNavigate,
  onOpenLightbox,
  initialSubject = "",
}) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: initialSubject,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormState((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${CONTACT_CONTENT.email}?subject=${encodeURIComponent(
    formState.subject || "Inquiry from ABBESS Healthcare Website"
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <div className="bg-white">
      <PageHeroBanner
        title={CONTACT_CONTENT.title}
        eyebrow="Global Offices • Malta, Europe & Navi Mumbai, India"
        subtitle="Connect with our Business Development, EU QP Services, and R&D teams."
        breadcrumbs={[
          { label: "Home", route: "home" },
          { label: "Contact Us" },
        ]}
        onNavigate={onNavigate}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Column: Visit Us Exact Entities & Addresses */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF1FC] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#3393F0] uppercase">
                  <Building2 className="h-3.5 w-3.5" />
                  Global Presence
                </span>
                <h2 className="mt-3 text-3xl font-bold text-[#17224D]">
                  {CONTACT_CONTENT.visitUsHeading}
                </h2>
              </Reveal>

              {/* Corporate Office */}
              <Reveal delay={0.06}>
                <TiltCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                        Corporate Office • Navi Mumbai
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#17224D]">
                        {CONTACT_CONTENT.corporateOffice}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* European Entity */}
              <Reveal delay={0.12}>
                <TiltCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#17224D] text-[#6EC1E4]">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                        European Entity
                      </span>
                      <h3 className="mt-1 text-base font-bold text-[#17224D]">
                        {CONTACT_CONTENT.euEntityName}
                      </h3>
                      <a
                        href="#location"
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[#324E8E] transition hover:text-[#3393F0]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-[#3393F0]" />
                        <span>{CONTACT_CONTENT.euEntityAddress}</span>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Indian R&D & Manufacturing Entity */}
              <Reveal delay={0.18}>
                <TiltCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDF1FC] text-[#3393F0]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                        R&amp;D &amp; Manufacturing Facility • India
                      </span>
                      <h3 className="mt-1 text-base font-bold text-[#17224D]">
                        {CONTACT_CONTENT.indiaEntityName}
                      </h3>
                      <a
                        href="#location"
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[#324E8E] transition hover:text-[#3393F0]"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-[#3393F0]" />
                        <span>{CONTACT_CONTENT.indiaEntityAddressFull}</span>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Direct Email & LinkedIn */}
              <Reveal delay={0.22}>
                <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[#EDF1FC] bg-[#EDF1FC]/60 p-5">
                  <a
                    href={`mailto:${CONTACT_CONTENT.email}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#17224D] shadow-sm transition hover:text-[#3393F0]"
                  >
                    <Mail className="h-4 w-4 text-[#3393F0]" />
                    <span>{CONTACT_CONTENT.email}</span>
                  </a>

                  <a
                    href={CONTACT_CONTENT.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#324E8E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3393F0]"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Exact Contact Form (Name, Phone, Email, Subject, Message, Submit) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-[30px] border border-[#324E8E]/15 bg-white p-7 shadow-[0_24px_65px_-16px_rgba(23,34,77,0.16)] sm:p-10">
                  <h3 className="text-2xl font-bold text-[#17224D]">
                    Send Us a Message
                  </h3>
                  <p className="mt-1.5 text-sm text-[#54595F]">
                    Fill out the inquiry form below for Business Development,
                    Product List, EU QP Services, or Career opportunities.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 rounded-3xl border border-[#61CE70]/40 bg-[#EDF1FC]/60 p-8 text-center"
                    >
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#61CE70]/20 text-[#61CE70]">
                        <CheckCircle2 className="h-8 w-8 text-[#61CE70]" />
                      </div>
                      <h4 className="text-xl font-bold text-[#17224D]">
                        Thank You, {formState.name || "Partner"}!
                      </h4>
                      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#54595F]">
                        Your inquiry regarding{" "}
                        <strong>
                          {formState.subject || "ABBESS Healthcare Services"}
                        </strong>{" "}
                        has been prepared. You can also send it directly via
                        your email client to{" "}
                        <strong>{CONTACT_CONTENT.email}</strong>.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={mailtoHref}
                          className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#17224D]"
                        >
                          <Mail className="h-4 w-4" />
                          <span>Dispatch Email to {CONTACT_CONTENT.email}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFormState({
                              name: "",
                              phone: "",
                              email: "",
                              subject: "",
                              message: "",
                            });
                          }}
                          className="rounded-full border border-[#324E8E]/20 bg-white px-5 py-3 text-sm font-semibold text-[#17224D] transition hover:border-[#3393F0]"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-[#17224D]">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Name"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full rounded-[30px] border border-[#EDF1FC] bg-[#EDF1FC] px-5 py-3.5 text-sm text-[#17224D] placeholder-[#7A7A7A] transition focus:border-[#3393F0] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-[#17224D]">
                            Phone *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              required
                              placeholder="Phone"
                              value={formState.phone}
                              onChange={(e) =>
                                setFormState({
                                  ...formState,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full rounded-[30px] border border-[#EDF1FC] bg-[#EDF1FC] px-5 py-3.5 text-sm text-[#17224D] placeholder-[#7A7A7A] transition focus:border-[#3393F0] focus:bg-white focus:outline-none"
                            />
                            <Phone className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7A7A7A]" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-[#17224D]">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                            className="w-full rounded-[30px] border border-[#EDF1FC] bg-[#EDF1FC] px-5 py-3.5 text-sm text-[#17224D] placeholder-[#7A7A7A] transition focus:border-[#3393F0] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-sm font-semibold text-[#17224D]">
                            Subject *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Subject"
                            value={formState.subject}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                subject: e.target.value,
                              })
                            }
                            className="w-full rounded-[30px] border border-[#EDF1FC] bg-[#EDF1FC] px-5 py-3.5 text-sm text-[#17224D] placeholder-[#7A7A7A] transition focus:border-[#3393F0] focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-[#17224D]">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Message"
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                          className="w-full rounded-[24px] border border-[#EDF1FC] bg-[#EDF1FC] px-5 py-4 text-sm text-[#17224D] placeholder-[#7A7A7A] transition focus:border-[#3393F0] focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2.5 rounded-[30px] bg-[#3393F0] px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-[#3393F0]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17224D]"
                        >
                          <Send className="h-4 w-4" />
                          <span>Submit</span>
                        </button>

                        <a
                          href={`mailto:${CONTACT_CONTENT.email}`}
                          className="text-xs font-semibold text-[#324E8E] hover:text-[#3393F0]"
                        >
                          Or email directly: {CONTACT_CONTENT.email}
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Exact Global Map Image (map2-2.png) */}
          <div className="mt-16">
            <ParallaxImageCard
              asset={ABBESS_ASSETS.mapContact}
              badge="Global Locations Pin Map"
              caption="Malta, Europe (ABBESS Consultancy Limited) & Navi Mumbai, India (ABBESS Healthcare OPC Private Limited)"
              aspectClass="aspect-[16/8.5]"
              parallaxStrength={16}
              onExpand={() => onOpenLightbox([ABBESS_ASSETS.mapContact], 0)}
            />
          </div>

          {/* Exact Dual Embedded Google Maps (#location) */}
          <div id="location" className="mt-14 scroll-mt-28">
            <Reveal className="mb-7">
              <h6 className="text-xs font-semibold tracking-[0.18em] text-[#3393F0] uppercase">
                Interactive Maps
              </h6>
              <h3 className="mt-1.5 text-2xl font-bold text-[#17224D] sm:text-3xl">
                Our European &amp; Indian Locations
              </h3>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-[#324E8E]/15 bg-[#EDF1FC]/40 shadow-lg">
                  <div className="flex items-center justify-between border-b border-[#EDF1FC] bg-white px-6 py-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                        European Hub
                      </span>
                      <h4 className="text-base font-bold text-[#17224D]">
                        Malta, Europe — {CONTACT_CONTENT.euEntityName}
                      </h4>
                    </div>
                    <MapPin className="h-5 w-5 text-[#3393F0]" />
                  </div>
                  <iframe
                    title="ABBESS Consultancy Limited - Malta, Europe"
                    src={CONTACT_CONTENT.maps.maltaEmbed}
                    className="h-80 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-3xl border border-[#324E8E]/15 bg-[#EDF1FC]/40 shadow-lg">
                  <div className="flex items-center justify-between border-b border-[#EDF1FC] bg-white px-6 py-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#3393F0] uppercase">
                        India Headquarters &amp; R&amp;D
                      </span>
                      <h4 className="text-base font-bold text-[#17224D]">
                        Navi Mumbai, India — {CONTACT_CONTENT.indiaEntityName}
                      </h4>
                    </div>
                    <MapPin className="h-5 w-5 text-[#3393F0]" />
                  </div>
                  <iframe
                    title="ABBESS Healthcare OPC Private Limited - Mumbai, India"
                    src={CONTACT_CONTENT.maps.mumbaiEmbed}
                    className="h-80 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
