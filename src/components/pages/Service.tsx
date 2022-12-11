import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import serviceData from "#mocks/jsonData/service.json";
import ServiceSlider from "react-slick";
var Slider = {
  autoplay: true,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Service = () => {
  const services = serviceData.service;
  return (
    <section id="service" className="service section-gap">
      <div className="container">
        <SectionHeading subtitle={services.subtitle} title={services.title} />
        <div className="row gy-4 section-card">
          <ServiceSlider {...Slider}>
            {services.card &&
              services.card.map((service: any, i: number) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <CardComponent
                      image={service.image}
                      alt={service.image_alt}
                      title={service.service_title}
                      description={service.service_desc}
                      button={service.service_btn}
                    />
                  </div>
                );
              })}
          </ServiceSlider>
        </div>
      </div>
    </section>
  );
};

export default Service;
