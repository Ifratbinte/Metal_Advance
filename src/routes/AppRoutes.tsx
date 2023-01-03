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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
