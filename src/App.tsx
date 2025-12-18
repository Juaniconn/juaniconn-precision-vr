import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AcercaDe from "./pages/AcercaDe";
import Mision from "./pages/Mision";
import Contacto from "./pages/Contacto";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaVenta from "./pages/PoliticaVenta";
import Devoluciones from "./pages/Devoluciones";
import FAQPage from "./pages/FAQPage";
import EspecificacionesTecnicas from "./pages/EspecificacionesTecnicas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-venta" element={<PoliticaVenta />} />
          <Route path="/garantia-devoluciones" element={<Devoluciones />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/especificaciones-tecnicas" element={<EspecificacionesTecnicas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
