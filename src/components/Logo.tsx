import React, { useState } from "react";
import { ABBESS_ASSETS } from "../data/abbessData";

/**
 * Official ABBESS Healthcare logo lockup.
 *
 * 3-tier resilience so the brand mark can never render as a broken image:
 *   1. Local bundled file  -> /assets/logo-horizontal.jpg
 *   2. Official abbess.in  -> FOR-PPTs-DOCs-Copy.jpg
 *   3. Inline SVG recreation of the navy triangle mark + serif wordmark
 *
 * Brand navy sampled directly from the official logo file: #324E8F,
 * which is abbess.in's published --e-global-color-c41626d (#324E8E).
 */

const BRAND_NAVY = "#324E8E";

const LogoFallbackSvg: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 1372 287"
    role="img"
    aria-label="ABBESS Healthcare"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Navy triangle */}
    <path d="M166 8 L317 232 L15 232 Z" fill={BRAND_NAVY} />
    {/* Trademark */}
    <text
      x="228"
      y="34"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="24"
      fill={BRAND_NAVY}
    >
      TM
    </text>
    {/* Base ellipse with embedded wordmark */}
    <ellipse cx="166" cy="250" rx="151" ry="20" fill={BRAND_NAVY} />
    <text
      x="166"
      y="256"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="15"
      fontWeight="700"
      fill="#FFFFFF"
    >
      ABBESS Healthcare
    </text>
    {/* Primary wordmark */}
    <text
      x="352"
      y="196"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="150"
      fill={BRAND_NAVY}
      textLength="1000"
      lengthAdjust="spacingAndGlyphs"
    >
      ABBESS Healthcare
    </text>
  </svg>
);

interface LogoProps {
  className?: string;
  /** "header" uses the wide wordmark; "footer" is visually identical but sized separately. */
  variant?: "header" | "footer";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "header" }) => {
  const [tier, setTier] = useState<1 | 2 | 3>(1);

  const baseClass =
    variant === "header"
      ? "h-10 w-auto max-w-[235px] object-contain transition-transform duration-300 group-hover:scale-[1.015] sm:h-12 sm:max-w-[300px] lg:h-[52px] lg:max-w-[330px]"
      : "h-12 w-auto max-w-[290px] object-contain sm:h-14";

  if (tier === 3) {
    return <LogoFallbackSvg className={`${baseClass} ${className}`} />;
  }

  const src = tier === 1 ? ABBESS_ASSETS.logoHorizontal.local : ABBESS_ASSETS.logoHorizontal.remote;

  return (
    <img
      src={src}
      alt="ABBESS Healthcare"
      width={1372}
      height={287}
      className={`${baseClass} ${className}`}
      onError={() => setTier((t) => (t === 1 ? 2 : 3))}
    />
  );
};

export default Logo;
