import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import ServiceSlider from "#components/pages/ServiceSlider";
import aboutData from "#mocks/jsonData/about.json";

const About = () => {
  const about = aboutData.about;
  // const pathname = window.location.pathname;

  return (
    <>
      <section className="section sub-header">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{aboutData.title_main}</h2>
          </div>
        </div>
      </section>

      {/* About */}

      <section id="about" className="about section-gap base-bg-white">
        <div className="container">
          <div className="row align-items-center section-description about-content">
            <div className="col-lg-4" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
              <div className="about-gfx">
                <img src={about.image} alt={about.title} />
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 pe-5" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
              <div className="about-heading">
                <SectionHeading subtitle={about.subtitle} title={about.title} span={about.title_span} isNotCenter={false} isDimBg={true} />
              </div>
              <div className="description">
                <p>{about.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section id="mission-vision" className="mission-vision section-gap base-bg-light">
        <div className="container">
          <SectionHeading title={about.mission_vision.title} short_title={about.mission_vision.subtitle} />
          <div className="row justify-content-center justify-content-lg-around">
            {about.mission_vision.mission_item &&
              about.mission_vision.mission_item.map((item: any, i: number) => {
                return (
                  <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="single-item d-flex flex-column align-items-center ">
                      <div className="single-item-img mb-4">
                        <img src={item.icon} alt={item.title} className="rounded-circle" />
                      </div>
                      <div className="single-item-desc text-center">
                        <h4 className="fs-22 fw-bold mb-3">{item.title}</h4>
                        <p className="single-item-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* about card */}
      <section id="aboutCard" className="about-card section-gap">
        <div className="container">
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

      {/* objectives */}
      <section id="aboutIdeas" className="about-ideas section-gap base-bg-light">
        <div className="container">
          <div className="row m-auto align-items-center">
            <div className="col-xl-6 mt-5 mt-xl-0">
              <div className="about-ideas-inner mt-5 mt-xl-0 pe-5" data-aos="fade-down-left" data-aos-duration="1500">
                <h5 className="subtitle secondary text-uppercase font-Inter fw-bold fs-18">{about.about_ideas.subtitle}</h5>
                <h2 className="about-ideas-title font-Inter fw-bold fs-45">
                  {about.about_ideas.about_ideas_title} <span className="secondary fw-normal">{about.about_ideas.about_ideas_title_span}</span>{" "}
                  {about.about_ideas.about_ideas_titleEnd}
                </h2>
                <div className="about-ideas-desc">
                  <p className="fs-16">{about.about_ideas.about_ideas_desc}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-ideas-thumb" data-aos="fade-up-right" data-aos-duration="1500">
                <img className="about-ideas-thumb-lg img-fluid" src={about.about_ideas.about_ideas_img_lg} alt="Benemoy securities" />
                <img className="about-ideas-thumb-sm img-fluid" src={about.about_ideas.about_ideas_img_sm} alt="Benemoy securities" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service slider */}
      <ServiceSlider />
    </>
  );
};

export default About;
