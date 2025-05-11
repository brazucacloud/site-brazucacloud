import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ScrollRestoration } from "@/components/ui/ScrollRestoration";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import { default as AuthPage } from "./pages/AuthPage";
import CloudCenterPage from "@/pages/CloudCenterPage";
import PrivateCloudPage from "@/pages/PrivateCloudPage";
import VirtualDatacenterPage from "@/pages/VirtualDatacenterPage";
import CloudServerPage from "@/pages/CloudServerPage";
import ClientAreaPage from "@/pages/ClientAreaPage";
import { LanguageProvider } from "@/hooks/useLanguage";
import LanguageSelector from "@/components/ui/LanguageSelector";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { CookieConsent } from "@/components/ui/cookie-consent";
import AdminPage from "@/pages/AdminPage"; 
import BlogPage from "@/pages/BlogPage"; 
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CookiesPolicyPage from "@/pages/CookiesPolicyPage";
import IpTelephonyPage from "@/pages/IpTelephonyPage";
import CloudBackupPage from "@/pages/CloudBackupPage"; 
import CloudConsultingPage from "@/pages/CloudConsultingPage"; 

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={AboutPage} />
      <Route path="/cloud-center" component={CloudCenterPage} />
      <Route path="/nuvem-privada" component={PrivateCloudPage} />
      <Route path="/datacenter-virtual" component={VirtualDatacenterPage} />
      <Route path="/cloud-server" component={CloudServerPage} />
      <Route path="/client-area" component={ClientAreaPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/admin" component={AdminPage} /> 
      <Route path="/blog" component={BlogPage} />
      <Route path="/politica-de-privacidade" component={PrivacyPolicyPage} />
      <Route path="/termos-de-servico" component={TermsOfServicePage} />
      <Route path="/politica-de-cookies" component={CookiesPolicyPage} />
      <Route path="/telefonia-ip" component={IpTelephonyPage} />
      <Route path="/backup-em-nuvem" component={CloudBackupPage} />
      <Route path="/consultoria-em-cloud" component={CloudConsultingPage} />
            <Route path="/backup-em-nuvem" component={CloudBackupPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollRestoration />
          <Router />
          <LanguageSelector />
          <BackToTopButton />
          <CookieConsent />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;