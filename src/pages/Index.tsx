import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ProductGallery from "@/components/home/ProductGallery";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";
import FinalCTA from "@/components/home/FinalCTA";
import TrustBadges from "@/components/home/TrustBadges";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  const productsRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/productos" && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>SAVIER | Comida que merece ser disfrutada - Rescata productos frescos</title>
        <meta
          name="description"
          content="SAVIER conecta comercios locales con compradores inteligentes. Productos de calidad con hasta 70% de descuento, rescatados antes del desperdicio. Panaderías, fruterías, cafeterías y más."
        />
        <meta name="keywords" content="comida, descuentos, sostenibilidad, comercios locales, productos frescos, rescate alimentos, Colombia" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <main>
          <HeroSection />
          <TrustBadges />
          <HowItWorks />
          <section id="productos" ref={productsRef} className="scroll-mt-32">
            <ProductGallery />
          </section>
          <ImpactSection />
          <Testimonials />
          <CTASection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

