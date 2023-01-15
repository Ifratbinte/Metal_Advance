import heroContent from "#mocks/jsonData/hero.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const hero = heroContent.home.hero;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="gradient-shadow-top"></div>
        <div className="row align-items-center banner-gfx">
          <div className="col-lg-5">
            <div className="d-flex flex-column">
              <h1 className="banner-title fs-45 font-Poppins fw-semibold text-light">
                Smart <span className="fw-normal secondary">Investment</span> for <span className="fw-semibold secondary">Better</span> Future
              </h1>
              <p className="banner-desc font-Poppins fs-16 fw-normal">{hero.desc}</p>
              <ul className="list-multiple list">
                <li>
                  <Link to="/contact" className="btn button-gradient-primary font-Poppins">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="row banner-service">
              {hero.banner_service &&
                hero.banner_service.map((item: any, i: number) => {
                  return (
                    <div className="col-md-4 col-sm-6 col">
                      <div className="banner-service-item">
                        <div className="item-icon">
                          <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="item-title">
                          <h6 className="text-uppercase">{item.title}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
