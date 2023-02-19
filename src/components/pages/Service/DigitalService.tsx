import DigitalServiceComponent from "#components/common/dgService";
import Loader from "#components/common/Loader/Loader";
import SectionHeading from "#components/common/SectionHeading";
import CONFIGS from "#configs/index";
import dgServiceData from "#mocks/jsonData/service.json";
import headingTitle from "#mocks/jsonData/subheading.json";
import { useGetServicesQuery } from "#store/api/service";
import { useEffect } from "react";

const DigitalService = () => {
  const { data: dgService, isLoading, isError, error } = useGetServicesQuery("/v1/services?populate=*&filters[type][$eq]=digital&sort=priority:ASC");
  const services = dgServiceData.service.digital_service;
  console.log({ dgService });

  useEffect(() => {
    if (window.location.hash) {
      window.location.replace(window.location.href);
    }
  }, []);

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center">
            <h2 className="sub-header-title font-Poppins fw-bold">{headingTitle.sub_heading.DgService_title}</h2>
          </div>
        </div>
      </section>

      <section id="dg-service-top" className="section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="bn-block-img bn-block-ca">
                <div className="bn-circle-animation circle"></div>
                <img className="rounded shadow dg-service-banner mb-5 mb-lg-0 img-fluid" src={services.about_dgImage} alt={services.span} />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 ">
              <div className="dg-service-content">
                <h3>
                  {services.about_dgService}
                  <span className="secondary ps-2">{services.span}</span>
                </h3>
                <p>
                  {services.about_dgContent}
                  <br /> <br />
                  {services.about_dgContent_2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoading && !isError ? (
        <Loader />
      ) : (
        <section id="digitalService" className="digital-service section-gap base-bg-light">
          <div className="container">
            <SectionHeading title={services.services_title} />
            <div className="row g-gap dg">
              {dgService?.data?.map((service: any, i: number) => {
                return (
                  <div className="col-xl-4 col-md-6 dg-service">
                    <DigitalServiceComponent
                      index={i}
                      title={service.attributes.title}
                      image={CONFIGS.CMS_URL + service.attributes.image.data.attributes.url}
                      content={service.attributes.content}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="dg-service-bank section-gap section-bg-white">
        <div className="container">
          <SectionHeading title={services.bank_details.title} />
          <h4 className="text-center mb-5">
            {services.bank_details.subtitle} <span className="secondary animate-text">{services.bank_details.span}</span>{" "}
          </h4>
          <div className="row align-items-center h-100">
            <div className="col-lg-5">
              <div className="bank-img">
                <img src={services.bank_details.image} alt={services.bank_details.title} />
              </div>
            </div>
            <div className="col-lg-7 ps-lg-5 pt-3 pt-lg-0">
              <div className="row">
                {services.bank_details.info.map((data: any, i: number) => (
                  <div className="col-sm-6 bank-details my-2" key={i}>
                    <div className="dg-service-item text-center rounded-1 p-4 h-100">
                      <img className="pb-3" src={data.icon} alt={data.title} />
                      <h5>{data.title}</h5>
                      <span>{data.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalService;
