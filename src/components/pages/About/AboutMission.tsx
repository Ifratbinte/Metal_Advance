import SectionHeading from "#components/common/SectionHeading";
import React from "react";

interface MissionItemInterface {
  icon: string;
  title: string;
  description: string;
}
interface Props {
  data: {
    title: string;
    subtitle: string;
    mission_item: MissionItemInterface[];
  };
}
const AboutMission: React.FC<Props> = ({ data }) => {
  return (
    <section id="mission-vision" className="mission-vision section-gap">
      <div className="mission-vision-inner">
        <div className="container">
          <SectionHeading title={data.title} short_title={data.subtitle} />
          <div className="row g-gap justify-content-center justify-content-lg-around">
            {data.mission_item &&
              data.mission_item.map((item: MissionItemInterface) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="single-item d-flex flex-column align-items-center">
                      <div className="single-item-img mb-4">
                        <img src={item.icon} alt={item.title} className="rounded-circle" />
                      </div>
                      <div className="text-center">
                        <h4 className="fs-22 fw-bold mb-3">{item.title}</h4>
                        <p className="single-item-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
