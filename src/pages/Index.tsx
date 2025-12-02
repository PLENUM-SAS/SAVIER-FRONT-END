import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ProductGallery from "@/components/home/ProductGallery";
import ImpactSection from "@/components/home/ImpactSection";
import CTASection from "@/components/home/CTASection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
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
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <ProductGallery />
          <ImpactSection />
          <CTASection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
