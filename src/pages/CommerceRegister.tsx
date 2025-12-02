import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye, EyeOff, Lock, Store, FileText, User, Mail, Phone,
  MapPin, Upload, Check, ArrowRight, ArrowLeft, Sparkles
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import cakesImg from "@/assets/cakes.jpg";

const CommerceRegister = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    nit: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    categories: [] as string[],
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptCommission: false,
    acceptNewsletter: true,
  });

  const businessTypes = [
    { value: "panaderia", label: "🥖 Panadería", icon: "🥖" },
    { value: "fruteria", label: "🍎 Frutería / Verdurería", icon: "🍎" },
    { value: "cafeteria", label: "☕ Cafetería", icon: "☕" },
    { value: "pasteleria", label: "🍰 Pastelería / Repostería", icon: "🍰" },
    { value: "supermercado", label: "🏪 Supermercado / Minimarket", icon: "🏪" },
    { value: "carniceria", label: "🥩 Carnicería / Charcutería", icon: "🥩" },
    { value: "restaurante", label: "🍕 Restaurante", icon: "🍕" },
    { value: "gourmet", label: "🧀 Tienda Gourmet / Delicatessen", icon: "🧀" },
    { value: "saludable", label: "🥗 Comida Saludable", icon: "🥗" },
    { value: "otro", label: "🍜 Otro", icon: "🍜" },
  ];

  const cities = [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Bucaramanga", "Pereira", "Santa Marta", "Manizales", "Ibagué"
  ];

  const productCategories = [
    "Pan y bollería", "Frutas frescas", "Verduras", "Lácteos",
    "Carnes y embutidos", "Productos de pastelería", "Comidas preparadas",
    "Bebidas", "Productos gourmet", "Productos veganos/vegetarianos",
    "Productos orgánicos", "Otro"
  ];

  const toggleCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Commerce register:", formData);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              s < step
                ? "bg-secondary text-secondary-foreground"
                : s === step
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {s < step ? <Check className="h-5 w-5" /> : s}
          </div>
          {s < 3 && (
            <div
              className={`w-12 h-1 mx-2 rounded ${
                s < step ? "bg-secondary" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Registrar Comercio | SAVIER</title>
        <meta name="description" content="Registra tu comercio en SAVIER y comienza a convertir tus excedentes en ingresos. Para panaderías, fruterías, cafeterías y más." />
      </Helmet>

      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex relative overflow-hidden">
          <img
            src={cakesImg}
            alt="Productos de pastelería"
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
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl xl:text-5xl font-extrabold leading-tight"
              >
                Tu próximo canal de ventas te espera
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {businessTypes.slice(0, 6).map((type) => (
                  <span
                    key={type.value}
                    className="px-3 py-1.5 rounded-full bg-background/20 text-sm"
                  >
                    {type.label}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-dark rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                    PA
                  </div>
                  <div>
                    <p className="italic text-muted mb-2">
                      "Reducimos desperdicio 60% y aumentamos ingresos 35%"
                    </p>
                    <p className="font-semibold">Panadería Artesanal</p>
                    <p className="text-sm opacity-70">Bogotá</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex items-start justify-center p-6 lg:p-12 bg-background overflow-y-auto min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md py-8"
          >
            <Link to="/" className="lg:hidden block text-center mb-6">
              <span className="font-heading text-3xl font-black text-foreground">SAVIER</span>
            </Link>

            <StepIndicator />

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Business Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground">
                      Paso 1: Información del comercio
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Nombre del comercio</label>
                    <div className="relative">
                      <Store className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Ej: Panadería Artesanal El Buen Pan"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="h-14 pl-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Tipo de comercio</label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger className="h-14 text-base">
                        <SelectValue placeholder="Selecciona el tipo de comercio" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">NIT o RUT</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="900.123.456-7"
                        value={formData.nit}
                        onChange={(e) => setFormData({ ...formData, nit: e.target.value })}
                        className="h-14 pl-12 text-base"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Necesario para facturación</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Nombre del responsable</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Tu nombre completo"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        className="h-14 pl-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email corporativo</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="contacto@micomercio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-14 pl-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Teléfono del comercio</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">+57</div>
                      <Input
                        type="tel"
                        placeholder="601 234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-14 pl-14 text-base"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="secondary" className="w-full h-14 text-lg font-bold">
                    Continuar
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Operational Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground">
                      Paso 2: Detalles operativos
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Dirección completa</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                      <textarea
                        placeholder="Calle, número, barrio, ciudad"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full min-h-[100px] pl-12 pr-4 py-3 text-base border border-input rounded-xl bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Ciudad</label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) => setFormData({ ...formData, city: value })}
                    >
                      <SelectTrigger className="h-14 text-base">
                        <SelectValue placeholder="Selecciona tu ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">
                      ¿Qué tipo de productos vendes? (elige los que apliquen)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {productCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => toggleCategory(category)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            formData.categories.includes(category)
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-muted text-muted-foreground hover:border-secondary border-2 border-transparent"
                          }`}
                        >
                          {formData.categories.includes(category) && (
                            <Check className="h-4 w-4 inline mr-1" />
                          )}
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Logo del comercio (opcional)</label>
                    <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-secondary transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Arrastra tu logo o haz clic para seleccionar
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">JPG, PNG hasta 5MB</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 h-14"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Atrás
                    </Button>
                    <Button type="submit" variant="secondary" className="flex-1 h-14 font-bold">
                      Continuar
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Configuration */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-foreground">
                      Paso 3: Configuración de acceso
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Mínimo 8 caracteres"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Confirmar contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="Repite tu contraseña"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="h-14 pl-12 text-base"
                        required
                      />
                      {formData.confirmPassword && formData.password === formData.confirmPassword && (
                        <Check className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-success" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                        className="mt-0.5"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                        Acepto los{" "}
                        <Link to="/terminos-comercios" className="text-secondary hover:underline font-medium">
                          términos y condiciones para comercios
                        </Link>
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="commission"
                        checked={formData.acceptCommission}
                        onCheckedChange={(checked) => setFormData({ ...formData, acceptCommission: checked as boolean })}
                        className="mt-0.5"
                      />
                      <label htmlFor="commission" className="text-sm text-muted-foreground cursor-pointer">
                        Acepto la{" "}
                        <Link to="/comisiones" className="text-secondary hover:underline font-medium">
                          política de comisiones
                        </Link>{" "}
                        (15% por venta confirmada)
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.acceptNewsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, acceptNewsletter: checked as boolean })}
                        className="mt-0.5"
                      />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                        Quiero recibir tips y mejores prácticas por email
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1 h-14"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Atrás
                    </Button>
                    <Button
                      type="submit"
                      variant="secondary"
                      className="flex-1 h-14 font-bold"
                      disabled={!formData.acceptTerms || !formData.acceptCommission}
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Crear cuenta
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground pt-2">
                    Al registrarte, aceptas nuestros términos y política de privacidad
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CommerceRegister;
