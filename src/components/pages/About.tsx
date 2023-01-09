import CardComponent from '#components/common/Card';
import SectionHeading from '#components/common/SectionHeading';
import ServiceSlider from '#components/pages/ServiceSlider';
import aboutData from '#mocks/jsonData/about.json';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const about = aboutData.about;
  // const pathname = window.location.pathname;

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div
            className="sub-header-inner d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">
              {aboutData.title_main}
            </h2>
          </div>
        </div>
      </section>
      <section id="about" className="about section-gap base-bg-white">
        <div className="container">
          <SectionHeading
            subtitle={about.subtitle}
            title={about.title}
            span={about.title_span}
          />

          <div className="row align-items-center section-description about-content">
            <div className="col-lg-4 offset-1">
              <div
                className="number d-flex justify-content-between"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <span className="year-base font-Poppins fw-bold fs-200">
                  {about.year_base}
                </span>
                <span className="number-text d-flex align-items-end font-Inter fw-semibold fs-18">
                  {about.year_content}
                </span>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="description ps-4 pe-5"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <p>{about.description}</p>
                {/* <Link to={about.link} className="link fw-bold">
                  {about.link_text}
                  <FiArrowRight className="ps-2 icon" />
                </Link> */}
              </div>
            </div>
          </div>
          <div className="row gy-4 section-card pt-5">
            {about.card &&
              about.card.map((about: any, i: number) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <CardComponent
                      image={about.image}
                      alt={about.image_alt}
                      title={about.about_title}
                      description={about.about_desc}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section
        id="aboutIdeas"
        className="about-ideas section-gap base-bg-light"
      >
        <div className="container">
          <div className="row m-auto">
            <div className="col-xl-6">
              <div
                className="about-ideas-thumb"
                data-aos="fade-up-right"
                data-aos-duration="1500"
              >
                <img
                  className="about-ideas-thumb-lg img-fluid"
                  src={about.about_ideas.about_ideas_img_lg}
                  alt="Benemoy securities"
                />
                <img
                  className="about-ideas-thumb-sm img-fluid"
                  src={about.about_ideas.about_ideas_img_sm}
                  alt="Benemoy securities"
                />
              </div>
            </div>
            <div className="col-xl-6 mt-5 mt-xl-0">
              <div
                className="about-ideas-inner mt-5 mt-xl-0"
                data-aos="fade-down-left"
                data-aos-duration="1500"
              >
                <h5 className="subtitle danger text-uppercase font-Inter fw-bold fs-18">
                  {about.subtitle}
                </h5>
                <h2 className="about-ideas-title font-Inter fw-bold fs-45">
                  {about.about_ideas.about_ideas_title}
                </h2>
                <div className="about-ideas-desc">
                  <p className="fs-16">
                    {about.about_ideas.about_ideas_desc}
                  </p>
                  <p className="fs-16">
                    {about.about_ideas.about_ideas_desc_2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSlider />
    </>
  );
};

export default About;
