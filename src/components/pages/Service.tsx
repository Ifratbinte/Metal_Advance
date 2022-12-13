import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import serviceData from "#mocks/jsonData/service.json";

const Service = () => {
  const services = serviceData.service;
  // const pathname = window.location.pathname;
  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{serviceData.title_main}</h2>
            <h6 className="sub-header-subtitle font-Poppins fs-20 fw-normal">Home - {serviceData.pathname}</h6>
          </div>
        </div>
      </section>
      <section id="service" className="service section-gap">
        <div className="container">
          <SectionHeading subtitle={services.subtitle} title={services.title} />
          <div className="row gy-4 section-card">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
