import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import aboutData from "#mocks/jsonData/about.json";
import { FiArrowRight } from "react-icons/fi";
const About = () => {
  const about = aboutData.about;

  return (
    <>
      <section id="about" className="about section-gap base-bg-white">
        <div className="container">
          <SectionHeading subtitle={about.subtitle} title={about.title} span={about.title_span} />

          <div className="row align-items-center section-description about-content">
            <div className="col-lg-4 offset-1">
              <div className="number d-flex justify-content-between">
                <span className="year-base font-Poppins fw-bold fs-200">{about.year_base}</span>
                <span className="number-text d-flex align-items-end font-Inter fw-semibold fs-18">{about.year_content}</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="description ps-4 pe-5">
                <p>{about.description}</p>
                <a href={about.link} className="link fw-bold">
                  {about.link_text}
                  <FiArrowRight className="ps-2 icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="row gy-4 section-card pt-5">
            {about.card &&
              about.card.map((about: any, i: number) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <CardComponent image={about.image} alt={about.image_alt} title={about.about_title} description={about.about_desc} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
