import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import serviceData from "#mocks/jsonData/service.json";

const Service = () => {
  const services = serviceData.service;
  return (
    <section id="service" className="service section-gap">
      <div className="container">
        <SectionHeading subtitle={services.subtitle} title={services.title} />
        <div className="row section-card">
          {services.card &&
            services.card.map((service: any, i: number) => {
              return (
                <div className="col-lg-4">
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
        </div>
      </div>
    </section>
  );
};

export default Service;
