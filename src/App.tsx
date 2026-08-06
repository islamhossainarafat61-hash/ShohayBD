import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import BackToTop from "./components/layout/BackToTop";
import FloatingSupportWidget from "./components/layout/FloatingSupportWidget";
import FloatingAIWidget from "./components/layout/FloatingAIWidget";
import SubPageTopBar from "./components/layout/SubPageTopBar";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Technicians from "./pages/Technicians";
import AISupport from "./pages/AISupport";
import NotFound from "./pages/NotFound";

// Wrapper: Home page layout (with Navbar, Footer, floating widgets)
function HomeLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#08060f]">
      <Navbar />
      <Home />
      <Footer />
      <BackToTop />
      <FloatingSupportWidget />
      <FloatingAIWidget />
    </div>
  );
}

// Wrapper: Inner page layout (with SubPageTopBar only, no navbar/footer/widgets)
function InnerPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#08060f]">
      <SubPageTopBar title={title} />
      {children}
    </div>
  );
}

// Localized page titles for SubPageTopBar
function useLocalizedTitle() {
  const { lang } = useLanguage();
  return {
    about: lang === "bn" ? "সম্পর্কে" : "About Us",
    technicians: lang === "bn" ? "আমাদের টেকনিশিয়ান" : "Our Technicians",
    contact: lang === "bn" ? "যোগাযোগ" : "Contact Us",
    privacy: lang === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy",
    terms: lang === "bn" ? "শর্তাবলী" : "Terms & Conditions",
    service: lang === "bn" ? "সার্ভিসের বিস্তারিত" : "Service Details",
    notFound: lang === "bn" ? "পেজ পাওয়া যায়নি" : "Page Not Found",
  };
}

// Component that uses language context to render routes
function AppRoutes() {
  const titles = useLocalizedTitle();
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />

      <Routes location={location}>
        {/* AI Support - standalone (no navbar/footer) */}
        <Route path="/ai-support" element={<AISupport />} />

        {/* Home - with full navbar, footer, floating widgets */}
        <Route path="/" element={<HomeLayout />} />

        {/* Inner pages - with SubPageTopBar only */}
        <Route
          path="/about"
          element={
            <InnerPageLayout title={titles.about}>
              <AboutUs />
            </InnerPageLayout>
          }
        />
        <Route
          path="/technicians"
          element={
            <InnerPageLayout title={titles.technicians}>
              <Technicians />
            </InnerPageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <InnerPageLayout title={titles.contact}>
              <Contact />
            </InnerPageLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <InnerPageLayout title={titles.privacy}>
              <PrivacyPolicy />
            </InnerPageLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <InnerPageLayout title={titles.terms}>
              <Terms />
            </InnerPageLayout>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <InnerPageLayout title={titles.service}>
              <ServiceDetail />
            </InnerPageLayout>
          }
        />

        {/* 404 - with SubPageTopBar */}
        <Route
          path="*"
          element={
            <InnerPageLayout title={titles.notFound}>
              <NotFound />
            </InnerPageLayout>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </ThemeProvider>
  );
}
