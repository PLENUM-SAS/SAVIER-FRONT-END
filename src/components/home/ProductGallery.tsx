import { motion, Variants, Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

import heroBread from "@/assets/hero-bread.jpg";
import freshFruits from "@/assets/fresh-fruits.jpg";
import croissants from "@/assets/croissants.jpg";
import vegetables from "@/assets/vegetables.jpg";
import cheese from "@/assets/cheese.jpg";
import cakes from "@/assets/cakes.jpg";

const ProductGallery = () => {
  const products = [
    {
      image: heroBread,
      name: "Pan de Masa Madre",
      commerce: "Panadería Artesanal",
      commerceType: "Panadería",
      discount: 50,
      originalPrice: 12000,
      stock: 8,
    },
    {
      image: freshFruits,
      name: "Frutas Variadas Premium",
      commerce: "Frutería La Cosecha",
      commerceType: "Frutería",
      discount: 60,
      originalPrice: 25000,
      stock: 5,
    },
    {
      image: croissants,
      name: "Croissants de Almendra x3",
      commerce: "Café Parisino",
      commerceType: "Cafetería",
      discount: 55,
      originalPrice: 18000,
      stock: 12,
    },
    {
      image: vegetables,
      name: "Verduras Frescas Mix",
      commerce: "Mercado Verde",
      commerceType: "Frutería",
      discount: 65,
      originalPrice: 20000,
      stock: 3,
    },
    {
      image: cheese,
      name: "Quesos Artesanales",
      commerce: "Delicatessen Gourmet",
      commerceType: "Tienda Gourmet",
      discount: 45,
      originalPrice: 45000,
      stock: 6,
    },
    {
      image: cakes,
      name: "Torta de Chocolate",
      commerce: "Dulce Tentación",
      commerceType: "Pastelería",
      discount: 50,
      originalPrice: 35000,
      stock: 4,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as Easing },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-savier-deep-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-background">
            Esto es lo que puedes rescatar hoy
          </h2>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/productos">
            <Button variant="hero" className="group">
              Ver todos los productos disponibles
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;
