import { motion, Variants, Easing } from "framer-motion";
import { Search, ShoppingCart, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Descubre productos",
      description:
        "Explora cientos de productos de comercios locales cerca de ti. Filtra por tipo de comercio, categoría o descuento. Elige exactamente lo que quieres.",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5",
      glowColor: "primary",
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: "Elige cantidad y reserva",
      description:
        "Selecciona cuántas unidades quieres de cada producto. Agrega al carrito, paga online de forma segura y recibe confirmación inmediata con el stock reservado para ti.",
      color: "text-accent",
      bgColor: "from-accent/20 to-accent/5",
      glowColor: "accent",
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Recoge o recibe",
      description:
        "Pasa por el comercio en el horario indicado o recibe tu pedido en casa. ¡Listo para disfrutar tus productos frescos!",
      color: "text-success",
      bgColor: "from-success/20 to-success/5",
      glowColor: "success",
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
    <section id="como-funciona" className="py-24 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Proceso Simple
            </span>
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-4">
            Tan fácil que da{' '}
            <span className="text-gradient-primary">gusto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solo 3 pasos te separan de productos frescos con descuentos increíbles
          </p>
        </motion.div>

        {/* Steps Grid with Connectors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative group"
            >
              <div className="glass-strong rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Watermark Number with 3D effect */}
                <motion.span
                  className="absolute top-6 right-6 font-bebas text-8xl lg:text-9xl text-muted/20 select-none"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                >
                  {step.number}
                </motion.span>

                {/* Icon with 3D rotation */}
                <motion.div
                  className="relative z-10 w-20 h-20 mb-6"
                  whileHover={{
                    rotateY: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.8, type: "spring" }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                  <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center shadow-medium`}>
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Paso {index + 1}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>

              {/* Connector arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
