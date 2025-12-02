import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Package, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const discountedPrice = originalPrice * (1 - discount / 100);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="glass px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground">
            {commerceType}
          </span>
          <span className="bg-accent px-3 py-1.5 rounded-lg font-bebas text-lg text-accent-foreground">
            -{discount}%
          </span>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-savier-deep-black/90 via-savier-deep-black/50 to-transparent flex flex-col justify-end p-5"
        >
          <h3 className="font-heading text-xl font-bold text-background mb-2 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 text-muted mb-2">
            <Store className="h-4 w-4" />
            <span className="text-sm">{commerce}</span>
          </div>

          <div className="flex items-center gap-2 text-accent mb-3">
            <Package className="h-4 w-4" />
            <span className="text-sm font-medium">Quedan {stock} unidades</span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-muted/70 text-sm line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="font-heading text-2xl font-bold text-background">
              {formatPrice(discountedPrice)}
            </span>
          </div>

          {/* Quantity Selector & Add Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="w-9 h-9 rounded-lg border-2 border-background/20 bg-background/10 text-background flex items-center justify-center hover:bg-background/20 disabled:opacity-30 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-bold text-lg text-background">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                disabled={quantity >= stock}
                className="w-9 h-9 rounded-lg border-2 border-background/20 bg-background/10 text-background flex items-center justify-center hover:bg-background/20 disabled:opacity-30 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              variant="default"
              className="flex-1 h-9 rounded-lg"
              onClick={() => console.log(`Added ${quantity} of ${name}`)}
            >
              <ShoppingCart className="h-4 w-4" />
              Agregar
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Card Info (visible when not hovering on mobile) */}
      <div className="p-4 lg:hidden">
        <h3 className="font-heading font-bold text-foreground line-clamp-1 mb-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{commerce}</p>
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
  );
};

export default ProductCard;
