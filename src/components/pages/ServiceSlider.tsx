import SectionHeading from "#components/common/SectionHeading";
import serviceData from "#mocks/jsonData/service.json";
import ServiceSlider from "react-slick";
var Slider = {
  autoplay: true,
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const Service = () => {
  const services = serviceData.service;
  return (
    <>
      <section id="service" className="service_area section-gap">
        <div className="container">
          <SectionHeading subtitle={services.subtitle} title={services.title} />
          <div className="row gy-4 section-card">
            <ServiceSlider {...Slider}>
              {services.card &&
                services.card.map((service: any, i: number) => {
                  return (
                    <div className="col-lg-4" key={i}>
                      <div className="single_service rounded" style={{ background: `url(${service.image})` }}>
                        <div className="service_hover position-relative d-flex flex-column align-items-center">
                          <img src={service.icon} alt={service.title} className="service-icon rounded-circle border border-0 bg-light mb-3" />
                          <h3 className="service-item-title text-white fs-22">{service.service_title}</h3>
                          <div className="hover_content">
                            <div className="hover_content_inner text-center">
                              <p className="text-light">{service.service_desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </ServiceSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
