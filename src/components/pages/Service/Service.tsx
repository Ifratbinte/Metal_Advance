import Loader from "#components/common/Loader/Loader";
import SectionHeading from "#components/common/SectionHeading";
import ServiceComponent from "#components/common/ServiceCard";
import CONFIGS from "#configs/index";
import serviceData from "#mocks/jsonData/service.json";
import headingTitle from "#mocks/jsonData/subheading.json";
import { useGetServicesQuery } from "#store/api/service";

const Service = () => {
  const { data: serviceInfo, isLoading, isError, error } = useGetServicesQuery("/v1/services?populate=*&filters[type][$eq]=general&sort=priority:ASC");
  console.log("serviceInfo", serviceInfo);

  const services = serviceData.service;
  // const pathname = window.location.pathname;
  return (
    <>
      <section className="section sub-header ">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fw-bold">{headingTitle.sub_heading.service_title}</h2>
          </div>
        </div>
      </section>
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <section id="service" className="service section-gap base-bg-light">
          <div className="container">
            <SectionHeading title={services.title} />
            <div className="service-inner">
              {serviceInfo &&
                serviceInfo.data.map((service: any, i: number) => {
                  return (
                    <div className="row d-gap section-gap-sm service-content align-items-center justify-content-between">
                      <ServiceComponent
                        image={CONFIGS.CMS_URL + service.attributes.image.data.attributes.url}
                        alt={service.attributes.title}
                        title={service.attributes.title}
                        description={service.attributes.content}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Service;
