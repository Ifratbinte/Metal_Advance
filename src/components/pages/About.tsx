// import Subtitle from "#components/common/subTitle";
// import Title from "#components/common/title";
import SectionHeading from "#components/common/sectionHeading";
import aboutData from "#mocks/jsonData/about.json";
const About = () => {
  const about = aboutData.about;

  return (
    <>
      <section id="about" className="about section-gap base-bg-white">
        <div className="container">
          <div className="section-head section-border text-center">
            <SectionHeading subtitle={about.subtitle} title={about.title} span={about.title_span} />
          </div>
          <div className="row section-description">
            <div className="col-lg-5">
              <div className="number">
                <span className="year-base fs-200">{about.year_base}</span> <span className="number-text">{about.year_content}</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="description">
                <p>{about.description}</p>
                <a href={about.link} className="link">
                  {about.link_text}
                </a>
              </div>
            </div>
          </div>
          <div className="row section-card">
            {about.card &&
              about.card.map((card: any, i: number) => {
                return (
                  <div className="col-lg-4">
                    <div className="card h-100">
                      <img src={card.image} className="card-img-top" alt={card.image_alt} />
                      <div className="card-body">
                        <h5 className="card-title">{card.about_title}</h5>
                        <p className="card-text">{card.about_desc}</p>
                      </div>
                    </div>
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
