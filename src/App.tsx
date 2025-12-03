import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/layout/Layout"; // ⬅️ Layout global
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CommerceLogin from "./pages/CommerceLogin";
import CommerceRegister from "./pages/CommerceRegister";
import NotFound from "./pages/NotFound";
import HowWeWorkPage from '@/pages/HowWeWorkPage';
import ForCommerceInfo from './pages/ForCommerceInfo';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Usa Layout para TODAS las rutas */}
            <Route element={<Layout />}> {/* ⬅️ Navbar siempre visible */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/comercios/login" element={<CommerceLogin />} />
              <Route path="/comercios/registro" element={<CommerceRegister />} />
              <Route path="/how-we-work" element={<HowWeWorkPage />} />
              <Route path="/para-comercios" element={<ForCommerceInfo />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;