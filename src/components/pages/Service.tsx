import SectionHeading from "#components/common/SectionHeading";
import ServiceComponent from "#components/common/ServiceCard";
import CONFIGS from "#configs/index";
import serviceData from "#mocks/jsonData/service.json";
import { useGetServicesQuery } from "#store/api/service";

const Service = () => {
  const { data: serviceInfo, isLoading, isError, error } = useGetServicesQuery(null);
  console.log("serviceInfo", serviceInfo);

  const services = serviceData.service;
  // const pathname = window.location.pathname;
  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{serviceData.title_main}</h2>
          </div>
        </div>
      </section>
      <section id="service" className="service section-gap">
        <div className="container">
          <SectionHeading subtitle={services.subtitle} title={services.title} />
          <div className="service-inner">
            {serviceInfo &&
              serviceInfo.data.map((service: any, i: number) => {
                return (
                  <ServiceComponent
                    image={CONFIGS.CMS_URL + service.attributes.image.data.attributes.formats.thumbnail.url}
                    alt={service.attributes.title}
                    title={service.attributes.title}
                    description={service.attributes.content}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
