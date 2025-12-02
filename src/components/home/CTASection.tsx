import { motion } from "framer-motion";
import { Check, ShoppingBag, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const buyerBenefits = [
    "Elige productos específicos, no packs sorpresa",
    "Descuentos de hasta 70%",
    "Productos frescos de calidad",
    "Nuevas opciones cada día",
    "Recogida o delivery",
  ];

  const commerceBenefits = [
    "Para todo tipo de comercio de alimentación",
    "Sin costos de setup",
    "Comisión justa por venta",
    "Panel de control profesional",
    "Pago semanal garantizado",
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card for Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 lg:p-12 shadow-medium hover:shadow-strong transition-shadow duration-300"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <ShoppingBag className="h-4 w-4" />
              Para Compradores
            </span>

            <h3 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              ¿Listo para comprar inteligente?
            </h3>

            <ul className="space-y-4 mb-8">
              {buyerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/registro">
              <Button variant="default" size="xl" className="w-full">
                Empezar a ahorrar
              </Button>
            </Link>
          </motion.div>

          {/* Card for Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary rounded-3xl p-8 lg:p-12 shadow-secondary"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 text-secondary-foreground text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              Para Comercios
            </span>

            <h3 className="font-heading text-3xl lg:text-4xl font-extrabold text-secondary-foreground mb-6">
              Convierte excedentes en ingresos
            </h3>

            <ul className="space-y-4 mb-8">
              {commerceBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-secondary-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/comercios/registro">
              <Button variant="accent" size="xl" className="w-full">
                <Sparkles className="h-5 w-5" />
                Registrar mi comercio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
