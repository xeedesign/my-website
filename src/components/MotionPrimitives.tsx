import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Home,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { ABBESS_ASSETS, AssetSource, PageRoute } from "../data/abbessData";

const ICON_REMOTE_FALLBACKS: Record<string, string> = {
  "/assets/icons/data-science.svg":
    "https://abbess.in/wp-content/uploads/2025/02/data-science_6754362.svg",
  "/assets/icons/checklist.svg":
    "https://abbess.in/wp-content/uploads/2025/06/checklist_7479747.svg",
  "/assets/icons/building.svg":
    "https://abbess.in/wp-content/uploads/2025/06/building_1349295.svg",
  "/assets/icons/product-management.svg":
    "https://abbess.in/wp-content/uploads/2025/06/product-management_11449033.svg",
  "/assets/icons/medical.svg":
    "https://abbess.in/wp-content/uploads/2025/02/medical_4595116.svg",
  "/assets/icons/objective.svg":
    "https://abbess.in/wp-content/uploads/2025/02/objective_18370492.svg",
  "/assets/icons/pills.svg":
    "https://abbess.in/wp-content/uploads/2025/02/pills_10802222.svg",
};

export const SmartIcon: React.FC<{ iconPath: string; className?: string }> = ({
  iconPath,
  className = "h-8 w-8 object-contain",
}) => {
  const [src, setSrc] = useState(iconPath);
  return (
    <img
      src={src}
      alt=""
      className={className}
      onError={() => {
        const fb = ICON_REMOTE_FALLBACKS[iconPath];
        if (fb && src !== fb) setSrc(fb);
      }}
    />
  );
};

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  asset: AssetSource | string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  asset,
  className = "",
  alt,
  ...rest
}) => {
  const getInitialSrc = (a: AssetSource | string) =>
    typeof a === "string" ? a : a.local;

  const [src, setSrc] = useState(() => getInitialSrc(asset));
  const [triedRemote, setTriedRemote] = useState(false);

  useEffect(() => {
    setSrc(getInitialSrc(asset));
    setTriedRemote(false);
  }, [asset]);

  const defaultAlt = typeof asset === "string" ? "" : asset.alt;
  const remoteUrl = typeof asset === "string" ? undefined : asset.remote;

  return (
    <img
      src={src}
      alt={alt ?? defaultAlt}
      className={className}
      onError={() => {
        if (!triedRemote && remoteUrl && src !== remoteUrl) {
          setTriedRemote(true);
          setSrc(remoteUrl);
        }
      }}
      {...rest}
    />
  );
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.72,
  direction = "up",
  className = "",
}) => {
  const offsets = {
    up: { opacity: 0, y: 34, x: 0, scale: 1 },
    down: { opacity: 0, y: -34, x: 0, scale: 1 },
    left: { opacity: 0, x: 38, y: 0, scale: 1 },
    right: { opacity: 0, x: -38, y: 0, scale: 1 },
    scale: { opacity: 0, x: 0, y: 18, scale: 0.94 },
  };

  return (
    <motion.div
      initial={offsets[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxImageCardProps {
  asset: AssetSource | string;
  caption?: string;
  badge?: string;
  aspectClass?: string;
  imgClassName?: string;
  parallaxStrength?: number;
  containMode?: boolean;
  onExpand?: () => void;
  delay?: number;
}

export const ParallaxImageCard: React.FC<ParallaxImageCardProps> = ({
  asset,
  caption,
  badge,
  aspectClass = "aspect-[4/3]",
  imgClassName = "",
  parallaxStrength = 28,
  containMode = false,
  onExpand,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    [-parallaxStrength, parallaxStrength]
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{
        opacity: 0,
        clipPath: "inset(10% 5% 10% 5% round 24px)",
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 24px)",
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onExpand}
      className={`group relative overflow-hidden rounded-3xl border border-[#324E8E]/15 bg-[#EDF1FC] shadow-[0_20px_50px_-15px_rgba(23,34,77,0.16)] ${
        onExpand ? "cursor-pointer" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <motion.div
          style={{ y: containMode ? 0 : y }}
          className={`h-full w-full ${containMode ? "" : "scale-[1.12]"}`}
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          >
            <SmartImage
              asset={asset}
              className={`h-full w-full ${
                containMode ? "object-contain p-3 sm:p-5 bg-white" : "object-cover"
              } ${imgClassName}`}
            />
          </motion.div>
        </motion.div>

        {/* Diagonal Specular Light Sheen on Hover */}
        <div className="sheen-effect pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/35 to-transparent" />

        {/* Subtle bottom gradient for depth */}
        {!containMode && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17224D]/65 via-[#17224D]/10 to-transparent opacity-65 transition-opacity duration-500 group-hover:opacity-80" />
        )}

        {badge && (
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#17224D]/80 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6EC1E4]" />
            {badge}
          </div>
        )}

        {onExpand && (
          <button
            type="button"
            aria-label="View full image"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#17224D] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3393F0] group-hover:text-white"
          >
            <Expand className="h-4 w-4" />
          </button>
        )}

        {caption && (
          <div
            className={`absolute inset-x-0 bottom-0 z-10 p-5 ${
              containMode
                ? "border-t border-[#EDF1FC] bg-white/95 text-[#17224D] backdrop-blur-md"
                : "text-white"
            }`}
          >
            <p className="text-sm font-medium leading-snug">{caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -5.5);
    rotateY.set(((x - centerX) / centerX) * 5.5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(51, 147, 240, 0.14), transparent 80%)`;

  return (
    <div className="perspective-1200 h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className={`group relative h-full overflow-hidden rounded-[24px] border border-[#324E8E]/14 bg-white transition-shadow duration-500 hover:border-[#3393F0]/45 hover:shadow-[0_24px_60px_-15px_rgba(23,34,77,0.18)] ${className}`}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
};

interface FlipCard3DProps {
  title: string;
  subtitle?: string;
  iconPath?: string;
  frontBadge?: string;
  backContent: React.ReactNode;
  ctaLabel?: string;
  onCtaClick?: () => void;
  forceExpanded?: boolean;
  minHeightClass?: string;
}

export const FlipCard3D: React.FC<FlipCard3DProps> = ({
  title,
  subtitle,
  iconPath,
  frontBadge = "Hover or Tap to Flip",
  backContent,
  ctaLabel,
  onCtaClick,
  forceExpanded = false,
  minHeightClass = "min-h-[430px]",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (forceExpanded) {
    return (
      <div className="flex h-full flex-col justify-between rounded-[26px] border border-[#324E8E]/20 bg-white p-7 shadow-[0_20px_50px_-15px_rgba(23,34,77,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3393F0]/50">
        <div>
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#EDF1FC] pb-4">
            <div className="flex items-center gap-3.5">
              {iconPath && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EDF1FC] p-2.5">
                  <SmartIcon iconPath={iconPath} className="h-7 w-7 object-contain" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-[#17224D]">{title}</h3>
                {subtitle && (
                  <p className="mt-0.5 text-xs font-medium text-[#324E8E]">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-[#17224D]/90">
            {backContent}
          </div>
        </div>
        {ctaLabel && onCtaClick && (
          <div className="mt-6 pt-2">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#3393F0]/25 transition-all duration-300 hover:bg-[#17224D]"
            >
              {ctaLabel}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`perspective-1200 group w-full ${minHeightClass}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
          }
        }}
        className={`preserve-3d relative h-full w-full cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${minHeightClass} ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT FACE */}
        <div
          className={`backface-hidden absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-[26px] border border-[#324E8E]/20 bg-gradient-to-br from-[#17224D] to-[#324E8E] p-8 text-center text-white shadow-[0_24px_55px_-16px_rgba(23,34,77,0.38)]`}
        >
          {/* Decorative glowing orb & pattern */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#3393F0]/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-[#6EC1E4]/20 blur-2xl" />

          <div className="relative z-10 flex w-full items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#EFFFFF] uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EC1E4]" />
              ABBESS Healthcare
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#6EC1E4]">
              <RotateCw className="h-3.5 w-3.5" />
              {frontBadge}
            </span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center py-6">
            {iconPath && (
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/95 p-4 shadow-xl shadow-[#17224D]/20 transition-transform duration-500 group-hover:scale-105">
                <SmartIcon iconPath={iconPath} className="h-12 w-12 object-contain" />
              </div>
            )}
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#EDF1FC]/85">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6EC1E4] uppercase">
            <span>Explore Details</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={`backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between overflow-y-auto rounded-[26px] border-2 border-[#3393F0]/45 bg-white p-6 text-left shadow-[0_24px_60px_-14px_rgba(23,34,77,0.25)] sm:p-7`}
        >
          <div>
            <div className="mb-3.5 flex items-center justify-between border-b border-[#EDF1FC] pb-3">
              <h3 className="text-xl font-bold text-[#17224D]">{title}</h3>
              <span className="rounded-full bg-[#EDF1FC] px-2.5 py-1 text-[11px] font-semibold text-[#324E8E]">
                Details
              </span>
            </div>
            <div className="text-[13.5px] leading-relaxed text-[#17224D]/90">
              {backContent}
            </div>
          </div>

          {ctaLabel && onCtaClick && (
            <div className="mt-4 pt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onCtaClick();
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#3393F0] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#3393F0]/25 transition-all duration-300 hover:bg-[#17224D]"
              >
                {ctaLabel}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface PageHeroBannerProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  onNavigate: (route: PageRoute) => void;
  bgAsset?: AssetSource;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  title,
  eyebrow = "ABBESS Healthcare",
  subtitle,
  breadcrumbs,
  onNavigate,
  bgAsset = ABBESS_ASSETS.bgMemphis,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div ref={bannerRef} className="relative overflow-hidden">
      {/* Main Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EDF1FC] to-[#EFFFFF] py-16 sm:py-20 lg:py-24">
        {/* Parallax texture layer */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 opacity-35"
        >
          <SmartImage
            asset={bgAsset}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Architectural glowing accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#3393F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-12 h-80 w-80 rounded-full bg-[#6EC1E4]/18 blur-3xl" />
        <div className="abbess-grid-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#324E8E]/15 bg-white/85 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#3393F0] uppercase shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#3393F0]" />
              {eyebrow}
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-[#17224D] sm:text-5xl lg:text-[58px] lg:leading-[1.06]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#54595F] sm:text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb Bar matching abbess.in's exact breadcrumb strip */}
      <div className="border-y border-[#EDF1FC] bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2 px-4 py-3.5 text-sm sm:px-6 lg:px-8">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={`${crumb.label}-${idx}`}>
                {crumb.route && !isLast ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(crumb.route!)}
                    className="inline-flex items-center gap-1.5 font-medium text-[#17224D] transition-colors hover:text-[#3393F0]"
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5 text-[#3393F0]" />}
                    {crumb.label}
                  </button>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1.5 ${
                      isLast
                        ? "font-semibold text-[#3393F0]"
                        : "font-medium text-[#54595F]"
                    }`}
                  >
                    {idx === 0 && <Home className="h-3.5 w-3.5 text-[#3393F0]" />}
                    {crumb.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight className="h-3.5 w-3.5 text-[#7A7A7A]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ImageLightboxProps {
  images: AssetSource[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  activeIndex,
  onClose,
  onChangeIndex,
}) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) {
        onChangeIndex((activeIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && images.length > 1) {
        onChangeIndex((activeIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length, onChangeIndex, onClose]);

  return (
    <AnimatePresence>
      {activeIndex !== null && images[activeIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#17224D]/92 p-4 backdrop-blur-xl sm:p-8"
        >
          {/* Top toolbar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="mb-4 flex w-full max-w-5xl items-center justify-between text-white"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold">
                {activeIndex + 1} / {images.length}
              </span>
              <span className="hidden text-sm font-medium text-[#EDF1FC] sm:inline">
                {images[activeIndex].alt}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#3393F0]"
                aria-label="Toggle zoom"
              >
                {zoomed ? (
                  <ZoomOut className="h-4 w-4" />
                ) : (
                  <ZoomIn className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-[#3393F0]"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[78vh] w-full max-w-5xl items-center justify-center overflow-auto rounded-3xl border border-white/15 bg-[#17224D]/45 p-2 sm:p-4"
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  onChangeIndex((activeIndex - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
                className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#17224D] shadow-xl transition hover:bg-[#3393F0] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <motion.div
              key={images[activeIndex].local}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: zoomed ? 1.35 : 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <SmartImage
                asset={images[activeIndex]}
                className="max-h-[72vh] w-auto rounded-2xl object-contain"
              />
            </motion.div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => onChangeIndex((activeIndex + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#17224D] shadow-xl transition hover:bg-[#3393F0] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
