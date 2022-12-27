import Footer from '#components/layout/Footer/Footer';
import Header from '#components/layout/Header/HeaderMain';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
