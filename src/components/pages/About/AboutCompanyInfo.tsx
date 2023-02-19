import SectionHeading from "#components/common/SectionHeading";
import React from "react";

interface Props {
  data: {
    image: string;
    title: string;
    subtitle: string;
    title_span: string;
    description: string;
  };
}
const AboutCompanyInfo: React.FC<Props> = ({ data }) => {
  return (
    <section id="about" className="about section-gap pt-0">
      <div className="container">
        <div className="row align-items-center flex-row-reverse section-description about-content">
          <div className="col-xl-5" data-aos="fade-right">
            <div className="about-gfx">
              <img src={data.image} alt={data.title} className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 pe-3 pe-xl-5" data-aos="fade-left">
            <div className="about-heading">
              <SectionHeading subtitle={data.subtitle} title={data.title} span={data.title_span} isNotCenter={false} isDimBg={true} />
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyInfo;
