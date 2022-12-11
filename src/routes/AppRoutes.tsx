import About from "#components/pages/About";
import Home from "#components/pages/Home";
import Service from "#components/pages/Service";
import MasterLayout from "#container/layout/MasterLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about-benemoy" element={<About />} /> */}
          {/* <Route path="/board-of-director" element={<About />} />
          <Route path="/senior-management" element={<About />} /> */}
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
