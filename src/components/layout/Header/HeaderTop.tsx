import PhoneContact from "#components/common/PhoneContact";
import { useEffect, useState } from "react";

function HeaderTop() {
  // sticky header hide show
  const [display, setDisplay] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setDisplay("none") : setDisplay("block");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <section id="topBar" className="topBar text-white" style={{ display: display }}>
        <div className="row ">
          <div className="col-md-4 topBar-left">
            <PhoneContact />
          </div>
          <div className="col-md-8 topBar-right">
            <marquee className="ticker fw-semibold fs-18">Benemoy Securities Ltd</marquee>
            {/* <SocialIcon /> */}
          </div>
        </div>
        {/* <div className="d-flex align-items-center justify-content-between">
          
          
        </div> */}
      </section>
    </>
  );
}
export default HeaderTop;
