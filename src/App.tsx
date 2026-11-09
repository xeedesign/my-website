import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ABBESS_ASSETS,
  AssetSource,
  PageRoute,
  SEARCH_INDEX,
} from "./data/abbessData";
import { Layout } from "./components/Layout";
import { ImageLightbox } from "./components/MotionPrimitives";
import { HomePage } from "./pages/HomePage";
import {
  AboutUsPage,
  CompanyCulturePage,
  CsrActivitiesPage,
} from "./pages/AboutPages";
import {
  BusinessDevelopmentPage,
  ProjectManagementPage,
  QpServicePage,
  ResearchFacilityPage,
  ServiceContractPage,
  ServiceOverviewPage,
  SupplyChainPage,
} from "./pages/ServicePages";
import {
  CareersPage,
  ContactUsPage,
  HowAndWherePage,
  ProductDevelopmentPage,
  ProductListPage,
} from "./pages/DeliverableAndContactPages";

const VALID_ROUTES = new Set<PageRoute>([
  "home",
  "about-us",
  "company-culture",
  "csr-activities",
  "service",
  "research-facility",
  "supply-chain-management",
  "business-development",
  "project-management",
  "qp-service",
  "service-contract",
  "how-and-where",
  "product-development",
  "product-list",
  "careers",
  "contact-us",
]);

function parseHashToRoute(hash: string): PageRoute {
  const cleaned = hash.replace(/^#\/?/, "").replace(/\/$/, "").trim();
  if (!cleaned) return "home";
  if (VALID_ROUTES.has(cleaned as PageRoute)) {
    return cleaned as PageRoute;
  }
  return "home";
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    typeof window !== "undefined" ? parseHashToRoute(window.location.hash) : "home"
  );
  const [contactSubjectPrefill, setContactSubjectPrefill] = useState<string>("");
  const [lightboxImages, setLightboxImages] = useState<AssetSource[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHashToRoute(window.location.hash);
      setCurrentRoute(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const entry = SEARCH_INDEX.find((s) => s.route === currentRoute);
    if (currentRoute === "home" || !entry) {
      document.title =
        "AHC – ABBESS Healthcare | Global Pharmaceutical R&D, QP Services & CDMO";
    } else {
      document.title = `${entry.title} – AHC – ABBESS Healthcare`;
    }
  }, [currentRoute]);

  const handleNavigate = useCallback(
    (route: PageRoute, prefillSubject?: string) => {
      if (prefillSubject !== undefined) {
        setContactSubjectPrefill(prefillSubject);
      } else if (route !== "contact-us") {
        setContactSubjectPrefill("");
      }

      const targetHash = route === "home" ? "#/" : `#/${route}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      } else {
        setCurrentRoute(route);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleOpenLightbox = useCallback(
    (images: AssetSource[], index: number) => {
      setLightboxImages(images);
      setLightboxIndex(index);
    },
    []
  );

  const renderPage = () => {
    switch (currentRoute) {
      case "home":
        return (
          <HomePage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "about-us":
        return (
          <AboutUsPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "company-culture":
        return (
          <CompanyCulturePage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "csr-activities":
        return (
          <CsrActivitiesPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "service":
        return (
          <ServiceOverviewPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "research-facility":
        return (
          <ResearchFacilityPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "supply-chain-management":
        return (
          <SupplyChainPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "business-development":
        return (
          <BusinessDevelopmentPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "project-management":
        return (
          <ProjectManagementPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "qp-service":
        return (
          <QpServicePage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "service-contract":
        return (
          <ServiceContractPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "how-and-where":
        return (
          <HowAndWherePage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "product-development":
        return (
          <ProductDevelopmentPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "product-list":
        return (
          <ProductListPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "careers":
        return (
          <CareersPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case "contact-us":
        return (
          <ContactUsPage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
            initialSubject={contactSubjectPrefill}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={(r) => handleNavigate(r)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
    }
  };

  return (
    <>
      <Layout
        currentRoute={currentRoute}
        onNavigate={(r) => handleNavigate(r)}
        onOpenQrLightbox={() =>
          handleOpenLightbox([ABBESS_ASSETS.googleQr], 0)
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </Layout>

      <ImageLightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </>
  );
}

export default App;
