import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import heroImage from "@/assets/hero-bread.jpg";
import { loginAPI } from "@/services/users";
type LoginDto = {
  email: string;
  password: string;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: LoginDto = {
      email: email,
      password: password,
    };

    try {
      const res = await loginAPI(payload);
      localStorage.setItem("token", res.token); // ajusta si se llama distinto
    } catch (error) {
      console.error("Login failed:", error);
    }
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión | SAVIER</title>
        <meta
          name="description"
          content="Inicia sesión en SAVIER para descubrir productos frescos con descuentos increíbles."
        />
      </Helmet>

      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex relative overflow-hidden">
          {/* Background Image */}
          <img
            src={heroImage}
            alt="Productos frescos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-savier-deep-black/90 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-12 text-background">
            <Link
              to="/"
              className="font-heading text-3xl font-black tracking-tight"
            >
              SAVIER
            </Link>

            <div className="max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-4xl xl:text-5xl font-extrabold leading-tight mb-8"
              >
                Tus productos favoritos te están esperando
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <span className="font-bebas text-4xl text-primary">15K+</span>
                  <p className="text-sm text-muted mt-1">Productos</p>
                </div>
                <div className="text-center">
                  <span className="font-bebas text-4xl text-secondary">
                    320+
                  </span>
                  <p className="text-sm text-muted mt-1">Comercios</p>
                </div>
                <div className="text-center">
                  <span className="font-bebas text-4xl text-accent">70%</span>
                  <p className="text-sm text-muted mt-1">Ahorro</p>
                </div>
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
            {/* Mobile Logo */}
            <Link to="/" className="lg:hidden block text-center mb-8">
              <span className="font-heading text-3xl font-black text-foreground">
                SAVIER
              </span>
            </Link>

            {/* Header */}
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground">
                Iniciar sesión
              </h2>
              <p className="text-muted-foreground mt-2">
                Descubre productos increíbles hoy
              </p>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-14 justify-center gap-3 text-base border-border hover:border-foreground"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuar con Google
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 justify-center gap-3 text-base border-border hover:border-foreground"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continuar con Facebook
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  o continúa con email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 text-base border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 text-base border-border focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Recordarme
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-secondary hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <Button type="submit" className="w-full h-14 text-lg font-bold">
                Entrar
              </Button>
            </form>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Register Link */}
            <p className="text-center text-muted-foreground">
              ¿No tienes cuenta?{" "}
              <Link
                to="/registro"
                className="font-bold text-primary hover:underline"
              >
                Regístrate gratis
              </Link>
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground/60 text-xs">
              <Shield className="h-4 w-4" />
              <span>Conexión segura SSL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
