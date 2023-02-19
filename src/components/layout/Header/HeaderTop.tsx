import contactItem from "#mocks/contact";
import tickerData from "#mocks/jsonData/ticker.json";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function HeaderTop() {
  // sticky header hide show
  const [display, setDisplay] = useState("block");
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
          <div className="col-lg-4 topBar-left">
            <div className="section-topContact">
              <img src="/gif/phone-icon.gif" alt="" className="icon" />
              <span className="fw-semibold font-Poppins"> Call Now : {contactItem[0].phone}</span>
            </div>
          </div>
          <div className="col-lg-8 topBar-right animatedBg">
            <Marquee className="marquee-overlay" speed={50} style={{ width: "100%" }}>
              <ul className="list d-flex align-items-center">
                {tickerData.ticker &&
                  tickerData.ticker.map((ticker: any, i: number) => (
                    <li key={i} className="fs-14">
                      <span className="fw-medium me-2 primary">{ticker.title}</span> <span className="danger fw-medium">{ticker.item}</span>
                    </li>
                  ))}
              </ul>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeaderTop;
