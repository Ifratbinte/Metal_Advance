import About from "#components/pages/About";
import BoardOfDirector from "#components/pages/BoardOfDirector";
import Contact from "#components/pages/Contact";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
