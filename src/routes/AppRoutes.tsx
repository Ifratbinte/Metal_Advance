import About from "#components/pages/About";
import ArticleDetails from "#components/pages/ArticleDetails";
import Articles from "#components/pages/Articles";
import BoardOfDirector from "#components/pages/BoardOfDirector";
// import Contact from "#components/pages/Contact";
import Contact from "#components/pages/ContactPage";
import Downloads from "#components/pages/Downloads";
import FAQ from "#components/pages/FAQ";
import Home from "#components/pages/Home";
import Management from "#components/pages/Management";
import PrivacyPolicy from "#components/pages/PrivacyPolicy";
import Service from "#components/pages/Service";
import MasterLayout from "#container/layout/MasterLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Digital from "#components/pages/DigitalService";
import DseNews from "#components/pages/DseNews";
import Group from "#components/pages/GroupConcern";
import IPO from "#components/pages/IpoService";
import MobileApp from "#components/pages/MobileApps";
import NotifyInvestors from "#components/pages/NotifyInvestors";
import DailyNews from "./../components/pages/DailyNews";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-benemoy" element={<About />} />
          <Route path="/board-of-director" element={<BoardOfDirector />} />
          <Route path="/senior-management" element={<Management />} />
          <Route path="/service" element={<Service />} />
          <Route path="/download" element={<Downloads />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/group-concern" element={<Group />} />
          <Route path="/digital-services" element={<Digital />} />
          <Route path="/mobile-apps" element={<MobileApp />} />
          <Route path="/ipo-service" element={<IPO />} />
          <Route path="/notify" element={<NotifyInvestors />} />
          <Route path="/daily-news" element={<DailyNews />} />
          <Route path="/dse-news" element={<DseNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
