import Footer from "#components/layout/Footer/Footer";
import Header from "#components/layout/Header/HeaderMain";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
