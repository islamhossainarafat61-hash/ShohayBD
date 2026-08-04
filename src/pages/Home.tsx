import Hero from "../components/home/Hero";
import AppShowcase from "../components/home/AppShowcase";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";
import TeamPreview from "../components/home/TeamPreview";
import Testimonials from "../components/home/Testimonials";
import Professionals from "../components/home/Professionals";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <AppShowcase />
      <Services />
      <HowItWorks />
      <About />
      <TeamPreview />
      <Testimonials />
      <Professionals />
      <FAQ />
    </>
  );
}
