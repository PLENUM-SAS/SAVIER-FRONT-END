import { motion, Variants, Easing } from "framer-motion";
import { Search, ShoppingCart, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Descubre productos",
      description:
        "Explora cientos de productos de comercios locales cerca de ti. Filtra por tipo de comercio, categoría o descuento. Elige exactamente lo que quieres.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: "Elige cantidad y reserva",
      description:
        "Selecciona cuántas unidades quieres de cada producto. Agrega al carrito, paga online de forma segura y recibe confirmación inmediata con el stock reservado para ti.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Recoge o recibe",
      description:
        "Pasa por el comercio en el horario indicado o recibe tu pedido en casa. ¡Listo para disfrutar tus productos frescos!",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
  };

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground">
            Tan fácil que da gusto
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Watermark Number */}
              <span className="absolute top-6 right-6 font-bebas text-8xl text-muted/30 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="relative z-10 font-heading text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
