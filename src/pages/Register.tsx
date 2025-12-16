import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Shield,
  Check,
  Heart,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import croissantsImg from "@/assets/croissants.jpg";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

type RegisterDTO = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  password: string;
};

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const payload: RegisterDTO = {
      fullName: formData.name,
      email: formData.email,
      phoneNumber: formData.phone || undefined,
      password: formData.password,
    };

    try {
      await register(payload);
      // Optionally auto login or ask user to login
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strengthLabels = ["Débil", "Media", "Buena", "Excelente"];
  const strengthColors = [
    "bg-destructive",
    "bg-accent",
    "bg-success/70",
    "bg-success",
  ];

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <>
      <Helmet>
        <title>Crear Cuenta | SAVIER</title>
        <meta
          name="description"
          content="Únete a SAVIER y comienza a rescatar productos frescos con descuentos increíbles."
        />
      </Helmet>

      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Right column - Form */}
        <div className="flex items-center justify-center p-6 lg:p-12 bg-background">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-6"
          >
            <h2 className="font-heading text-3xl font-extrabold">
              Crear cuenta
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="text-sm font-semibold">Nombre</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="text-sm font-semibold">Teléfono</label>
                <Input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Contraseña */}
              <div>
                <label className="text-sm font-semibold">Contraseña</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {/* Confirmar contraseña */}
              <div>
                <label className="text-sm font-semibold">
                  Confirmar contraseña
                </label>
                <Input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Fuerza */}
              {formData.password && (
                <p className="text-xs">
                  Seguridad:{" "}
                  {strengthLabels[passwordStrength - 1] || "Muy débil"}
                </p>
              )}

              {/* Términos */}
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      acceptTerms: checked as boolean,
                    })
                  }
                />
                <span className="text-sm">Acepto términos y condiciones</span>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={!formData.acceptTerms}
              >
                Crear cuenta
              </Button>
            </form>

            <p className="text-center text-sm">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="font-bold underline">
                Inicia sesión
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Register;
