import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Download,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  ABBESS_ASSETS,
  CONTACT_CONTENT,
  HOME_CONTENT,
  MAIN_NAV_ITEMS,
  PageRoute,
  SEARCH_INDEX,
} from "../data/abbessData";
import { SmartImage } from "./MotionPrimitives";
import { Logo } from "./Logo";

export const LinkedInIcon: React.FC<{ className?: string }> = ({
  className = "h-4 w-4",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

interface LayoutProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQrLightbox: () => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  currentRoute,
  onNavigate,
  onOpenQrLightbox,
  children,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [showEuropeBadge, setShowEuropeBadge] = useState(true);
  const [europeModalOpen, setEuropeModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      setShowBackTop(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setEuropeModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredSearch = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SEARCH_INDEX;
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const isNavActive = (itemRoute: PageRoute, children?: { route: PageRoute }[]) => {
    if (currentRoute === itemRoute) return true;
    if (children && children.some((c) => c.route === currentRoute)) return true;
    return false;
  };

  const handleNavClick = (route: PageRoute) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
    onNavigate(route);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#17224D]">
      {/* TOP UTILITY BAR – Exact #324E8E (--e-global-color-c41626d) from post-98.css */}
      <div className="bg-[#324E8E] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 sm:text-[13px] lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT_CONTENT.email}`}
              className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#6EC1E4]"
            >
              <Mail className="h-3.5 w-3.5 text-[#6EC1E4]" />
              <span>{CONTACT_CONTENT.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => handleNavClick("contact-us")}
              className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#6EC1E4]"
            >
              <MapPin className="h-3.5 w-3.5 text-[#6EC1E4]" />
              <span>Malta, Europe</span>
            </button>

            <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />

            <button
              type="button"
              onClick={() => handleNavClick("contact-us")}
              className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#6EC1E4]"
            >
              <MapPin className="h-3.5 w-3.5 text-[#6EC1E4]" />
              <span>Navi Mumbai, India</span>
            </button>

            <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />

            <a
              href={CONTACT_CONTENT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ABBESS Healthcare LinkedIn"
              className="hidden items-center justify-center rounded-full p-1 text-white transition hover:bg-white/10 hover:text-[#6EC1E4] sm:inline-flex"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search ABBESS Healthcare"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white transition hover:border-[#6EC1E4] hover:bg-white/20"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* STICKY MAIN HEADER – Exact White (#FFFFFF) + Shadow + Scroll Progress */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#EDF1FC] bg-white/95 shadow-[0_10px_28px_rgba(23,34,77,0.08)] backdrop-blur-xl"
            : "border-b border-[#EDF1FC]/70 bg-white"
        }`}
      >
        {/* Spring Scroll Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="h-[3px] w-full origin-left bg-gradient-to-r from-[#324E8E] via-[#3393F0] to-[#6EC1E4]"
        />

        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Official ABBESS Healthcare Horizontal Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex items-center text-left focus:outline-none"
            aria-label="ABBESS Healthcare Home"
          >
            <Logo variant="header" />
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Menu"
            className="hidden items-center gap-1 lg:flex xl:gap-2"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const active = isNavActive(item.route, item.children);
              const hasChildren = Boolean(item.children?.length);

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.route)}
                    className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200 ${
                      active
                        ? "text-[#3393F0]"
                        : "text-[#17224D] hover:text-[#3393F0]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180 text-[#3393F0]" : ""
                        }`}
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute inset-x-3.5 -bottom-0.5 h-[2.5px] rounded-full bg-[#3393F0]"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Animated Dropdown Menu */}
                  <AnimatePresence>
                    {hasChildren && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full z-50 w-80 pt-2.5"
                      >
                        <div className="overflow-hidden rounded-2xl border border-[#324E8E]/15 bg-white p-2 shadow-[0_24px_60px_-12px_rgba(23,34,77,0.22)]">
                          {item.children!.map((sub) => {
                            const subActive = currentRoute === sub.route;
                            return (
                              <button
                                key={sub.route + sub.label}
                                type="button"
                                onClick={() => handleNavClick(sub.route)}
                                className={`group flex w-full items-start justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-all ${
                                  subActive
                                    ? "bg-[#EDF1FC] text-[#3393F0]"
                                    : "text-[#17224D] hover:bg-[#EDF1FC]/75 hover:text-[#3393F0]"
                                }`}
                              >
                                <div>
                                  <div className="text-sm font-semibold">
                                    {sub.label}
                                  </div>
                                  {sub.subtitle && (
                                    <div className="mt-0.5 text-xs text-[#7A7A7A]">
                                      {sub.subtitle}
                                    </div>
                                  )}
                                </div>
                                <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Action & Mobile Burger */}
          <div className="flex items-center gap-2.5">
            <a
              href={ABBESS_ASSETS.brochurePdf.local}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#3393F0] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-[#3393F0]/25 transition-all duration-300 hover:bg-[#17224D] xl:inline-flex"
            >
              <Download className="h-4 w-4" />
              <span>Our Brochure</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#EDF1FC] bg-[#EDF1FC]/60 text-[#17224D] transition hover:bg-[#3393F0] hover:text-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[#EDF1FC] bg-white lg:hidden"
            >
              <div className="mx-auto max-w-[1280px] space-y-1.5 px-4 py-4 sm:px-6">
                {MAIN_NAV_ITEMS.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isOpen = mobileAccordion === item.label;
                  const active = isNavActive(item.route, item.children);

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#EDF1FC] bg-[#EDF1FC]/30"
                    >
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleNavClick(item.route)}
                          className={`flex-1 px-4 py-3 text-left text-[15px] font-semibold ${
                            active ? "text-[#3393F0]" : "text-[#17224D]"
                          }`}
                        >
                          {item.label}
                        </button>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileAccordion(isOpen ? null : item.label)
                            }
                            aria-label={`Expand ${item.label}`}
                            className="px-4 py-3 text-[#324E8E]"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isOpen ? "rotate-180 text-[#3393F0]" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasChildren && isOpen && (
                        <div className="space-y-1 border-t border-[#EDF1FC] bg-white px-3 py-2.5">
                          {item.children!.map((sub) => (
                            <button
                              key={sub.route + sub.label}
                              type="button"
                              onClick={() => handleNavClick(sub.route)}
                              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium ${
                                currentRoute === sub.route
                                  ? "bg-[#EDF1FC] text-[#3393F0]"
                                  : "text-[#17224D] hover:bg-[#EDF1FC]/50"
                              }`}
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="pt-2">
                  <a
                    href={ABBESS_ASSETS.brochurePdf.local}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3393F0] px-5 py-3 text-sm font-semibold text-white shadow-md"
                  >
                    <Download className="h-4 w-4" />
                    <span>Our Brochure (PDF)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN PAGE VIEWPORT */}
      <main id="content" className="flex-1">
        {children}
      </main>

      {/* FOOTER – Exact ABBESS Healthcare Content, Logo, Google QR, Brochure & Entities */}
      <footer className="relative overflow-hidden border-t-2 border-[#17224D] bg-white text-[#17224D]">
        <div className="abbess-grid-pattern pointer-events-none absolute inset-0 opacity-35" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Logo + Official Google QR Code + Our Brochure */}
            <div className="flex flex-col items-start lg:col-span-4">
              <button
                type="button"
                onClick={() => handleNavClick("home")}
                className="mb-5 block text-left"
              >
                <Logo variant="footer" />
              </button>

              <div className="mb-6 flex items-center gap-4 rounded-2xl border border-[#EDF1FC] bg-[#EDF1FC]/45 p-3.5 transition hover:border-[#3393F0]/40">
                <button
                  type="button"
                  onClick={onOpenQrLightbox}
                  className="group relative overflow-hidden rounded-xl bg-white p-1.5 shadow-sm"
                  title="Click to enlarge Google QR Code"
                >
                  <SmartImage
                    asset={ABBESS_ASSETS.googleQr}
                    className="h-24 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
                <div className="max-w-[190px]">
                  <span className="inline-block rounded-full bg-[#3393F0]/12 px-2.5 py-0.5 text-[11px] font-semibold text-[#3393F0]">
                    Scan QR Profile
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#54595F]">
                    Connect with <strong>ABBESS Healthcare</strong> across India &amp;
                    Europe. Click QR to enlarge.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={ABBESS_ASSETS.brochurePdf.local}
                  target="_blank"
                  rel="noopener noreferrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLAnchorElement).href =
                      ABBESS_ASSETS.brochurePdf.remote;
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#3393F0] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#3393F0]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17224D]"
                >
                  <Download className="h-4 w-4" />
                  <span>Our Brochure</span>
                </a>
                <a
                  href={ABBESS_ASSETS.brochurePdf.remote}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#324E8E] underline-offset-4 hover:text-[#3393F0] hover:underline"
                >
                  <span>Direct PDF Mirror</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links + LinkedIn */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-lg font-semibold text-[#17224D]">
                  Quick Links
                </h5>
              </div>

              <a
                href={CONTACT_CONTENT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#324E8E]/20 bg-[#EDF1FC]/60 px-3.5 py-1.5 text-xs font-semibold text-[#324E8E] transition hover:border-[#3393F0] hover:bg-[#3393F0] hover:text-white"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>

              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Home", route: "home" as PageRoute },
                  { label: "About us", route: "about-us" as PageRoute },
                  { label: "Company Culture", route: "company-culture" as PageRoute },
                  { label: "CSR Activities", route: "csr-activities" as PageRoute },
                  { label: "Service", route: "service" as PageRoute },
                  { label: "Careers", route: "careers" as PageRoute },
                  { label: "Get In Touch", route: "contact-us" as PageRoute },
                ].map((link) => (
                  <li key={link.route + link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.route)}
                      className={`group inline-flex items-center gap-2 transition-colors ${
                        currentRoute === link.route
                          ? "font-semibold text-[#3393F0]"
                          : "text-[#17224D] hover:text-[#3393F0]"
                      }`}
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#3393F0] transition-transform group-hover:translate-x-0.5" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services & Deliverables Directory */}
            <div className="lg:col-span-3">
              <h5 className="mb-4 text-lg font-semibold text-[#17224D]">
                Services &amp; Deliverables
              </h5>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Research Facility", route: "research-facility" as PageRoute },
                  { label: "QP Service (EU GMP)", route: "qp-service" as PageRoute },
                  {
                    label: "Supply Chain Management",
                    route: "supply-chain-management" as PageRoute,
                  },
                  {
                    label: "Business Development",
                    route: "business-development" as PageRoute,
                  },
                  {
                    label: "Project Management",
                    route: "project-management" as PageRoute,
                  },
                  { label: "How and Where", route: "how-and-where" as PageRoute },
                  {
                    label: "Product Development",
                    route: "product-development" as PageRoute,
                  },
                  { label: "Product List", route: "product-list" as PageRoute },
                  { label: "Service Contract", route: "service-contract" as PageRoute },
                ].map((link) => (
                  <li key={link.route}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.route)}
                      className={`group inline-flex items-center gap-2 text-left transition-colors ${
                        currentRoute === link.route
                          ? "font-semibold text-[#3393F0]"
                          : "text-[#17224D] hover:text-[#3393F0]"
                      }`}
                    >
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#3393F0] transition-transform group-hover:translate-x-0.5" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch (Exact Corporate & Entity Addresses) */}
            <div className="lg:col-span-3">
              <h5 className="mb-4 text-lg font-semibold text-[#17224D]">
                Get in Touch
              </h5>

              <ul className="space-y-4 text-sm leading-relaxed text-[#17224D]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#3393F0]" />
                  <span>
  1102, Crystal Palace, Sec 20,
  <br />
  CBD Belapur, Navi Mumbai,
  <br />
  Maharashtra 400614 India
</span>
                </li>

                <li className="rounded-xl border border-[#EDF1FC] bg-[#EDF1FC]/50 p-3">
                  <div className="font-bold text-[#17224D]">
                    {CONTACT_CONTENT.euEntityName}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavClick("contact-us")}
                    className="mt-1 inline-flex items-center gap-1.5 text-left text-xs font-medium text-[#324E8E] transition hover:text-[#3393F0]"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#3393F0]" />
                    <span>{CONTACT_CONTENT.euEntityAddress}</span>
                  </button>
                </li>

                <li className="rounded-xl border border-[#EDF1FC] bg-[#EDF1FC]/50 p-3">
  <div className="font-bold text-[#17224D]">
    {CONTACT_CONTENT.indiaEntityName}
  </div>
  <button
                    type="button"
                    onClick={() => handleNavClick("contact-us")}
                    className="mt-1 inline-flex items-center gap-1.5 text-left text-xs font-medium text-[#324E8E] transition hover:text-[#3393F0]"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#3393F0]" />
                    <span>{CONTACT_CONTENT.indiaEntityAddressFooter}</span>
                  </button>
                </li>

                <li>
                  <a
                    href={`mailto:${CONTACT_CONTENT.email}`}
                    className="inline-flex items-center gap-2 font-semibold text-[#17224D] transition hover:text-[#3393F0]"
                  >
                    <Mail className="h-4 w-4 text-[#3393F0]" />
                    <span>{CONTACT_CONTENT.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#EDF1FC] bg-[#EDF1FC]/60">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-[#54595F] sm:flex-row sm:px-6 lg:px-8">
            <p className="font-medium text-[#17224D]">
              {CONTACT_CONTENT.copyright}
            </p>
            <div className="flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 text-[#324E8E]">
                <span className="h-2 w-2 rounded-full bg-[#61CE70]" />
                India (Navi Mumbai) &amp; Europe (Malta)
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* FULL-SCREEN LIVE SEARCH OVERLAY (matches elementor-search-form--skin-full_screen) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 z-[90] flex items-start justify-center bg-[#17224D]/80 px-4 pt-16 backdrop-blur-lg sm:pt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-[#EDF1FC] px-5 py-4">
                <Search className="h-5 w-5 text-[#3393F0]" />
                <input
                  type="search"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ABBESS Healthcare pages, QP services, R&D labs, dosage forms..."
                  className="w-full bg-transparent text-base text-[#17224D] placeholder-[#7A7A7A] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDF1FC] text-[#17224D] transition hover:bg-[#3393F0] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-3">
                {filteredSearch.length === 0 ? (
                  <div className="py-10 text-center text-sm text-[#7A7A7A]">
                    No matching pages found for &ldquo;{searchQuery}&rdquo;.
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {filteredSearch.map((entry) => (
                      <button
                        key={entry.route}
                        type="button"
                        onClick={() => handleNavClick(entry.route)}
                        className="group flex w-full items-start justify-between gap-4 rounded-2xl p-3.5 text-left transition hover:bg-[#EDF1FC]"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-[#3393F0]/12 px-2.5 py-0.5 text-[11px] font-semibold text-[#3393F0]">
                              {entry.category}
                            </span>
                            <span className="font-semibold text-[#17224D] group-hover:text-[#3393F0]">
                              {entry.title}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[#54595F]">
                            {entry.excerpt}
                          </p>
                        </div>
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#3393F0] opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING "We are now at Europe" BADGE + POPUP MODAL (from Elementor popup post-1156) */}
      <AnimatePresence>
        {showEuropeBadge && (
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-full border border-[#6EC1E4]/50 bg-[#17224D]/95 py-2 pl-3.5 pr-2 text-white shadow-xl backdrop-blur-md sm:left-6"
          >
            <button
              type="button"
              onClick={() => setEuropeModalOpen(true)}
              className="flex items-center gap-2 text-left text-xs font-semibold tracking-wide"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#6EC1E4]" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6EC1E4]" />
              </span>
              <span>{HOME_CONTENT.europeAnnouncement}</span>
              <span className="rounded-full bg-[#6EC1E4]/20 px-2 py-0.5 text-[10px] text-[#6EC1E4]">
                Malta, EU
              </span>
            </button>
            <button
              type="button"
              onClick={() => setShowEuropeBadge(false)}
              aria-label="Dismiss announcement"
              className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EUROPE EXPANSION MODAL (exact post-1156 #6EC1E4E0 & #17224D palette) */}
      <AnimatePresence>
        {europeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEuropeModalOpen(false)}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-[#17224D]/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-[#6EC1E4]/45 bg-gradient-to-br from-[#17224D] via-[#324E8E] to-[#3393F0] p-8 text-center text-white shadow-2xl sm:p-10"
            >
              <button
                type="button"
                onClick={() => setEuropeModalOpen(false)}
                aria-label="Close modal"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6EC1E4]/25 text-[#EFFFFF] backdrop-blur-sm">
                <Globe2 className="h-8 w-8 text-[#6EC1E4]" />
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-widest text-[#EFFFFF] uppercase">
                <Sparkles className="h-3.5 w-3.5 text-[#6EC1E4]" />
                Global Expansion Milestone
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {HOME_CONTENT.europeAnnouncement}
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#EDF1FC]">
                <strong>ABBESS Consultancy Limited</strong> has been incorporated in{" "}
                <strong>San Gwann, Malta, Europe (2024)</strong> — offering EU GMP
                QP Services, R&amp;D, Business Development, and Supply Chain
                Management globally alongside our Navi Mumbai, India hub.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setEuropeModalOpen(false);
                    handleNavClick("qp-service");
                  }}
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#17224D] shadow-lg transition hover:bg-[#6EC1E4] hover:text-[#17224D]"
                >
                  Explore EU QP Services
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEuropeModalOpen(false);
                    handleNavClick("about-us");
                  }}
                  className="rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  View Global Footprint
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
            className="fixed bottom-5 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#3393F0] text-white shadow-xl shadow-[#3393F0]/35 transition hover:-translate-y-1 hover:bg-[#17224D] sm:right-6"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
