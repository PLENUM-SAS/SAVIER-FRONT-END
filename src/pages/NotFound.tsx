import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <span className="font-bebas text-[150px] lg:text-[200px] text-primary/20 leading-none block">
          404
        </span>
        <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground -mt-8 mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Parece que esta página no existe o fue movida. Pero no te preocupes, ¡hay muchos productos frescos esperándote!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="h-5 w-5" />
              Ir al inicio
            </Button>
          </Link>
          <Link to="/productos">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Search className="h-5 w-5" />
              Ver productos
            </Button>
          </Link>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mt-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver atrás
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
