import Footer from '#components/layout/Footer/Footer';
import Header from '#components/layout/Header/HeaderMain';
import HeaderTransparent from '#components/layout/HeaderTransparent/HeaderMain';
import { Outlet, useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import {
  MdHeadphones,
  MdOutlineMail,
  MdPhone,
} from 'react-icons/md';

const MasterLayout = () => {
  const navLocation = useLocation();

  const someFunctionForTheMainButton = () => {};
  const handleEmailOnClick = () => {
    const link = 'mailto:example@test.com';
    window.location.href = link;
  };
  const handleCallOnClick = () => {
    const link = 'tel:+8801940660088';
    window.location.href = link;
  };

  return (
    <>
      {/* {navLocation.pathname !== "/" ? <Header /> : <HeaderTransparent />} */}
      <Header />
      <main>
        <Fab
          // mainButtonStyles={mainButtonStyles}
          // actionButtonStyles={actionButtonStyles}
          // style={style}
          icon={<MdHeadphones />}
          // event={event}
          alwaysShowTitle={true}
          onClick={someFunctionForTheMainButton}
        >
          <Action text="Email" onClick={handleEmailOnClick}>
            <MdOutlineMail />
          </Action>
          <Action text="Mobile" onClick={handleCallOnClick}>
            <MdPhone />
          </Action>
        </Fab>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
