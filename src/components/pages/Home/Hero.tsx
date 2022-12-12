// import heroContents from "#mocks/heroContent";
import heroContent from "#mocks/jsonData/home.json";
import Slider from "react-slick";

const Hero = () => {
  const sliders = heroContent.home.hero.slider;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <section id="hero" className="hero base-bg-light">
      <Slider {...settings}>
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
                        <a href="#" className="btn button-base-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default Hero;
