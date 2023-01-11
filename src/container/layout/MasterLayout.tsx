import Footer from "#components/layout/Footer/Footer";
import Header from "#components/layout/Header/HeaderMain";
import HeaderTransparent from "#components/layout/HeaderTransparent/HeaderMain";
import { Outlet, useLocation } from "react-router-dom";

const MasterLayout = () => {
  const navLocation = useLocation();
  console.log("useLocation", navLocation);

  return (
    <>
      {/* {navLocation.pathname !== "/" ? <Header /> : <HeaderTransparent />} */}
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
