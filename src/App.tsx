
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AirportGuide from "./pages/AirportGuide";
import CreditCardGuide from "./pages/CreditCardGuide";
import MatchSchedule from "./pages/MatchSchedule";
import Blomi from "./pages/Blomi";
import EducationInfo from "./pages/EducationInfo";
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
          <Route path="/airport-guide" element={<AirportGuide />} />
          <Route path="/credit-card-guide" element={<CreditCardGuide />} />
          <Route path="/match-schedule" element={<MatchSchedule />} />
          <Route path="/blomi" element={<Blomi />} />
          <Route path="/education-info" element={<EducationInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

