import About from "#components/pages/About";
import BoardOfDirector from "#components/pages/BoardOfDirector";
import Home from "#components/pages/Home";
import Management from "#components/pages/Management";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
