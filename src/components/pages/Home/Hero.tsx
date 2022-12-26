import heroContent from "#mocks/jsonData/home.json";
import { Link } from "react-router-dom";

const Hero = () => {
  // const hero = heroContent.home.hero.slider;
  const hero = heroContent.home.hero;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <section id="hero" className="hero base-bg-white">
      <div className="container ">
        <div className="row gy-5 banner flex-row-reverse align-items-center justify-content-between hero-inner-content">
          <div className="col-lg-6">
            {/* <div className="banner-gfx" data-aos="fade-up" data-aos-duration="800"> */}
            <video className="banner-gfx hero-video" autoPlay muted loop data-aos="fade-up" data-aos-duration="800">
              <source src="/video/cryptocurrency_3.mp4" />
            </video>
            {/* </div> */}
          </div>
          <div className="col-lg-5">
            <div className="banner-block" data-aos="fade-down" data-aos-duration="800">
              <span className="badge rounded-pill primary-bg">Invest</span>
              <h1 className="banner-title fs-45 font-Poppins fw-semibold">{hero.title}</h1>
              <p className="banner-desc font-Poppins fs-16 fw-normal">{hero.desc}</p>
              <ul className="d-flex list">
                <li>
                  <Link to="#" className="btn button-base-primary font-Poppins">
                    Invest for Future
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn button-base-warning-outline font-Poppins">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Slider {...settings}>
        {sliders &&
          sliders.map((slider, i) => {
            return (
              <div key={i}>
                <div className="container ">
                  <div className="row gy-5 banner flex-row-reverse align-items-center justify-content-between hero-inner-content">
                    <div className="col-lg-5">
                      <div className="banner-img" data-aos="fade-up" data-aos-duration="800">
                        <img src={slider.img} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="banner-block pe-xl-4" data-aos="fade-down" data-aos-duration="800">
                        <h1 className="banner-title fs-64 font-Poppins fw-semibold">{slider.title}</h1>
                        <p className="banner-desc font-Poppins fs-16 fw-normal">{slider.desc}</p>
                        <Link to="#" className="btn button-base-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider> */}
    </section>
  );
};

export default Hero;
