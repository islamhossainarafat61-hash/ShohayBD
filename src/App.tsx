import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import BackToTop from "./components/layout/BackToTop";
import FloatingSupportWidget from "./components/layout/FloatingSupportWidget";
import FloatingAIWidget from "./components/layout/FloatingAIWidget";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Technicians from "./pages/Technicians";
import AISupport from "./pages/AISupport";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/ai-support" element={<AISupport />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-white dark:bg-[#08060f]">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/technicians" element={<Technicians />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <BackToTop />
                <FloatingSupportWidget />
                <FloatingAIWidget />
              </div>
            }
          />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}
