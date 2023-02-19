import BoardOfDirector from "#components/pages/About/BoardOfDirector";
import ArticleDetails from "#components/pages/Article/ArticleDetails";
import Articles from "#components/pages/Article/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "#components/pages/Contact/ContactPage";
import Home from "#components/pages/Home/Home";
import FAQ from "#components/pages/NewsUpdates/FAQ";
import Downloads from "#components/pages/Service/Downloads";
import Management from "#components/pages/About/SeniorManagement";
import PrivacyPolicy from "#components/pages/PrivacyPolicy";
import Service from "#components/pages/Service/Service";
import MasterLayout from "#container/layout/MasterLayout";

import AboutPage from "#components/pages/About";
import ForecastIpo from "#components/pages/ForecastIpo";
import IpoApplication from "#components/pages/IPO/IpoApplication";
import NotifyInvestors from "#components/pages/NotifyInvestors";
import Digital from "#components/pages/Service/DigitalService";
import MobileApp from "#components/pages/Service/MobileApps";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about/benemoy" element={<AboutPage />} />
          <Route path="/about/board-of-director" element={<BoardOfDirector />} />
          <Route path="/about/management" element={<Management />} />

          <Route path="/services/general-service" element={<Service />} />
          <Route path="/services/digital-services" element={<Digital />} />
          <Route path="/services/mobile-trading" element={<MobileApp />} />
          <Route path="/services/download" element={<Downloads />} />

          <Route path="/ipo/online-ipo-application" element={<IpoApplication />} />
          <Route path="/ipo/forecast-ipo" element={<ForecastIpo />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/news/faq" element={<FAQ />} />

          <Route path="/notify" element={<NotifyInvestors />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
