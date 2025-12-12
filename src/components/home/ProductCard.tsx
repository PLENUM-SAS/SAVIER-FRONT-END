import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Store, Package, MapPin, TrendingDown, Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  commerce: string;
  commerceType: string;
  discount: number;
  originalPrice: number;
  stock: number;
}

const ProductCard = ({
  image,
  name,
  commerce,
  commerceType,
  discount,
  originalPrice,
  stock,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Efecto 3D con mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const discountedPrice = originalPrice * (1 - discount / 100);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Shimmer loading effect */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-shimmer" />
          )}

          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              } ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Badges mejorados */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
            <motion.span
              className="glass px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground backdrop-blur-md shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {commerceType}
            </motion.span>

            {/* Badge de descuento ultra-premium */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ rotate: [0, -5, 5, 0] }}
            >
              <motion.span
                className="relative z-10 bg-gradient-to-br from-[#F4C46A] via-[#EBBF68] to-[#F4904D] px-3 py-1.5 rounded-lg font-bebas text-lg text-accent-foreground shadow-accent flex items-center gap-1"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <TrendingDown className="h-4 w-4" />
                -{discount}%
              </motion.span>
              {/* Glow pulsante mejorado */}
              <motion.div
                className="absolute inset-0 bg-accent rounded-lg blur-lg -z-10"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>

          {/* Stock badge (visible siempre) */}
          <motion.div
            className="absolute bottom-3 right-3 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-1.5 shadow-sm">
              <Package className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">
                {stock} unidades
              </span>
            </div>
          </motion.div>

          {/* Hover Overlay mejorado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-savier-deep-black/95 via-savier-deep-black/60 to-transparent flex flex-col justify-end p-5"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-heading text-xl font-bold text-background mb-3 line-clamp-2">
                {name}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted">
                  <Store className="h-4 w-4" />
                  <span className="text-sm">{commerce}</span>
                </div>

                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Disponible para recoger</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mt-4 mb-2">
                <span className="text-muted/70 text-sm line-through">
                  {formatPrice(originalPrice)}
                </span>
                <span className="font-heading text-3xl font-bold text-background">
                  {formatPrice(discountedPrice)}
                </span>
              </div>

              {/* Rating simulado */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-accent text-accent"
                  />
                ))}
                <span className="text-xs text-muted ml-1">(4.8)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Shine effect al hacer hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            initial={{ x: '-100%' }}
            animate={isHovered ? { x: '100%' } : { x: '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>

        {/* Card Info (visible when not hovering on mobile) */}
        <div className="p-4 lg:hidden">
          <h3 className="font-heading font-bold text-foreground line-clamp-1 mb-1">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mb-2">
            <Store className="h-3.5 w-3.5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{commerce}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="font-heading text-xl font-bold text-primary">
              {formatPrice(discountedPrice)}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;