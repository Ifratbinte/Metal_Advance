import DigitalPaymentJson from "#assets/lottie-files/DigitalPayment.json";
import DigitalPayment2Json from "#assets/lottie-files/DigitalPayment2.json";
import IPOJson from "#assets/lottie-files/IPO.json";
import IPO2Json from "#assets/lottie-files/IPO2.json";
import MobileTradingJson from "#assets/lottie-files/MobileTrading.json";
import MobileTrading2Json from "#assets/lottie-files/MobileTrading2.json";
import MobileTrading3Json from "#assets/lottie-files/MobileTrading3.json";
import MobileTrading4Json from "#assets/lottie-files/MobileTrading4.json";
import OnlineBOJson from "#assets/lottie-files/OnlineBO.json";
import OnlineBO2Json from "#assets/lottie-files/OnlineBO2.json";
import OnlineTradingJson from "#assets/lottie-files/OnlineTrading.json";
import OnlineTrading2Json from "#assets/lottie-files/OnlineTrading2.json";
import SupportJson from "#assets/lottie-files/Support.json";
import LinkComponent from "#components/common/LinkComponent";
import LottieRender from "#components/common/lottie";
import ScrollDown from "#components/common/scroll-icon/ScrollDown";
import heroContent from "#mocks/jsonData/hero.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const hero = heroContent.home.hero;

  const icons: any = {
    OnlineBOJson,
    IPOJson,
    OnlineTradingJson,
    MobileTradingJson,
    MobileTrading2Json,
    MobileTrading3Json,
    MobileTrading4Json,
    DigitalPaymentJson,
    SupportJson,
    OnlineBO2Json,
    IPO2Json,
    OnlineTrading2Json,
    DigitalPayment2Json,
  };

  return (
    <>
      <section id="hero" className="hero d-flex flex-column justify-content-between">
        {/* <HeroSection /> */}
        <div className="container" style={{ zIndex: 2 }}>
          {/* <div className="gradient-shadow-top d-none d-lg-block"></div> */}
          <div className="row g-gap align-items-center banner-gfx">
            <div className="col-lg-6 col-xl-5">
              <div className="banner-heading d-flex flex-column">
                <h1 className="banner-title font-Poppins fw-semibold text-light">
                  Smart <span className="secondary animate-text">Investment</span> for <span className="fw-semibold secondary">Better</span> Future
                </h1>
                <p className="banner-desc font-Poppins fs-16 fw-normal text-white">{hero.desc}</p>
                <ul className="list-multiple d-flex justify-content-lg-start justify-content-center list mb-4 mb-lg-0">
                  <li>
                    <Link to="/contact" className="btn button-gradient-primary font-Poppins">
                      Get In Touch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 offset-lg-1 offset-xl-1">
              <div className="row g-gap banner-service">
                {hero.banner_service &&
                  hero.banner_service.map((item: any, i: number) => {
                    return (
                      <div className="col-xl-4 col-lg-6 col" key={i}>
                        <LinkComponent url={item.url} className="banner-service-item">
                          <div className="content p-2">
                            <div className="item-icon pb-2 d-flex justify-content-center align-items-center">
                              <LottieRender
                                data={icons[item.icon]}
                                width={
                                  item.icon === "OnlineTrading2Json"
                                    ? 70
                                    : item.icon === "DigitalPaymentJson" || item.icon === "SupportJson" || item.icon === "MobileTrading4Json"
                                    ? 100
                                    : 80
                                }
                              />
                            </div>
                            <div className="item-title text-center">
                              <h6 className="text-uppercase text-gray">{item.title}</h6>
                            </div>
                          </div>
                        </LinkComponent>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="shape hero-ovm shape-square"></div>
        <div className="mb-3 mt-3 mt-md-0" style={{ zIndex: 1 }}>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Hero;
