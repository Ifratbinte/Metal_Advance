import CardComponent from "#components/common/Card";
import SectionHeading from "#components/common/SectionHeading";
import aboutData from "#mocks/jsonData/about.json";
const About = () => {
  const about = aboutData.about;

  return (
    <>
      <section id="about" className="about section-gap base-bg-white">
        <div className="container">
          <SectionHeading subtitle={about.subtitle} title={about.title} span={about.title_span} />

          <div className="row section-description">
            <div className="col-lg-5">
              <div className="number">
                <span className="year-base fs-200">{about.year_base}</span> <span className="number-text">{about.year_content}</span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="description">
                <p>{about.description}</p>
                <a href={about.link} className="link">{about.link_text}</a>
              </div>
            </div>
          </div>
          <div className="row section-card">
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
