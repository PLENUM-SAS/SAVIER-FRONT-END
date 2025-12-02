import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Store, BarChart3, Zap, Headphones, CreditCard, Percent, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import cheeseImg from "@/assets/cheese.jpg";

const CommerceLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Commerce login attempt:", { email, password, rememberMe });
  };

  const features = [
    { icon: Percent, text: "Ingresos adicionales sin esfuerzo" },
    { icon: BarChart3, text: "Analíticas en tiempo real" },
    { icon: Store, text: "Para todo tipo de comercio" },
    { icon: Zap, text: "Reputación sostenible" },
    { icon: CreditCard, text: "Pago semanal garantizado" },
  ];

  return (
    <>
      <Helmet>
        <title>Portal Comercios | SAVIER</title>
        <meta name="description" content="Accede al panel de control de tu comercio en SAVIER. Gestiona productos, revisa analíticas y convierte excedentes en ingresos." />
      </Helmet>

      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex relative overflow-hidden">
          <img
            src={cheeseImg}
            alt="Productos gourmet"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70" />

          <div className="relative z-10 flex flex-col justify-between p-12 text-secondary-foreground">
            <Link to="/" className="font-heading text-3xl font-black tracking-tight">
              SAVIER
            </Link>

            <div className="max-w-lg space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-4xl xl:text-5xl font-extrabold leading-tight"
              >
                Gestiona tu comercio, reduce desperdicio
              </motion.h1>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-background/20 flex items-center justify-center">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="text-lg">{feature.text}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-dark rounded-2xl p-6"
              >
                <p className="text-accent font-bebas text-3xl mb-1">$2.8M/mes</p>
                <p className="text-sm opacity-80">Ganancia promedio de comercios aliados</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex items-center justify-center p-8 lg:p-12 bg-background">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-8"
          >
            <Link to="/" className="lg:hidden block text-center mb-8">
              <span className="font-heading text-3xl font-black text-foreground">SAVIER</span>
            </Link>

            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground">
                Portal Comercios
              </h2>
              <p className="text-muted-foreground mt-2">
                Accede a tu panel de control
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email del comercio</label>
                <div className="relative">
                  <Store className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="contacto@micomercio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Recordarme en este dispositivo
                </label>
              </div>

              <Button type="submit" variant="secondary" className="w-full h-14 text-lg font-bold">
                Acceder al panel
              </Button>
            </form>

            <div className="border-t border-border" />

            {/* New Business Card */}
            <div className="bg-success/10 border-l-4 border-secondary rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    ¿Aún no formas parte?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Únete a cientos de comercios que ya están convirtiendo su excedente en ingresos mientras ayudan al planeta. Panaderías, fruterías, cafeterías y más.
                  </p>
                </div>
              </div>
              <Link to="/comercios/registro">
                <Button variant="outline" className="w-full h-12 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Registrar mi comercio
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              ¿Problemas para acceder?{" "}
              <Link to="/soporte" className="text-secondary hover:underline font-medium">
                Contacta soporte
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CommerceLogin;
