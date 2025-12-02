import { motion } from "framer-motion";
import { Leaf, CloudOff, Heart } from "lucide-react";
import vegetablesImg from "@/assets/vegetables.jpg";

const ImpactSection = () => {
  const stats = [
    {
      icon: Leaf,
      number: "52 toneladas",
      label: "de productos rescatados este año",
      color: "text-success",
    },
    {
      icon: CloudOff,
      number: "210 ton CO₂",
      label: "equivalentes de emisiones evitadas",
      color: "text-accent",
    },
    {
      icon: Heart,
      number: "10.200+",
      label: "personas alimentadas con precios justos",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={vegetablesImg}
                alt="Productos frescos rescatados"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 glass-dark rounded-xl px-4 py-3">
                <span className="text-background font-semibold flex items-center gap-2">
                  🌍 Impacto Real
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <span className="inline-block text-success text-sm font-bold uppercase tracking-widest">
              Nuestro Impacto
            </span>

            {/* Headline */}
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-background leading-tight">
              Cada producto rescatado cuenta una historia
            </h2>

            {/* Description */}
            <p className="text-lg text-muted leading-relaxed">
              No solo ahorras dinero. Ayudas a comercios locales, reduces el desperdicio de alimentos y combates el cambio climático. Un producto a la vez.
            </p>

            {/* Stats */}
            <div className="space-y-8 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <span className="font-bebas text-4xl text-background">
                      {stat.number}
                    </span>
                    <p className="text-muted text-sm mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
