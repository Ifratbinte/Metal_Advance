import { AboutDataInterface } from "interfaces/about-data-interface";
import React from "react";

interface Props {
  about: AboutDataInterface;
}

const AboutObjectives: React.FC<Props> = ({ about }) => {
  return (
    <section id="aboutIdeas" className="about-ideas section-gap base-bg-light">
      <div className="container">
        <div className="row m-auto flex-row-reverse align-items-center">
          <div className="col-xl-5 offset-xl-1">
            <div className="about-ideas-thumb">
              <img className="about-ideas-thumb-lg img-fluid" src={about.about_ideas.about_ideas_img_lg} alt="Benemoy securities" />
              {/* <img className="about-ideas-thumb-sm img-fluid" src={about.about_ideas.about_ideas_img_sm} alt="Benemoy securities" /> */}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-ideas-inner mt-5 mt-xl-0">
              <h5 className="subtitle secondary text-uppercase font-Inter fw-bold fs-18">{about.about_ideas.subtitle}</h5>
              <h2 className="about-ideas-title font-Inter fw-bold">
                {about.about_ideas.about_ideas_title} <span className="secondary fw-normal">{about.about_ideas.about_ideas_title_span}</span>{" "}
                {about.about_ideas.about_ideas_titleEnd}
              </h2>
              <div className="about-ideas-desc">
                <p>{about.about_ideas.about_ideas_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutObjectives;
