import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import { AboutDataInterface } from "interfaces/about-data-interface";
import React from "react";

interface Props {
  about: AboutDataInterface;
}

const AboutServices: React.FC<Props> = ({ about }) => {
  return (
    <section className="section-gap about-service">
      <div className="container">
        <SectionHeading title={about.card.title} subtitle={about.card.subtitle} />
        <div className="row g-gap justify-content-center justify-content-lg-around section-card">
          {about.card &&
            about.card.services.map((about: any, i: number) => {
              return (
                <div className="col-xl-4 col-md-6" key={i}>
                  <CardComponent image={about.image} alt={about.image_alt} title={about.about_title} description={about.about_desc} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
