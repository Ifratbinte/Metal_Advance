import heroContent from "#mocks/jsonData/home.json";
import { Link } from "react-router-dom";

const Hero = () => {
  // const hero = heroContent.home.hero.slider;
  const hero = heroContent.home.hero;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <section id="hero" className="hero">
      <div className="container ">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="banner-title fs-45 font-Poppins fw-semibold text-light">{hero.title}</h1>
          <p className="banner-desc font-Poppins fs-16 fw-normal">{hero.desc}</p>
          <ul className="list-multiple list">
            <li>
              <Link to="/service" className="btn button-base-primary font-Poppins">
                Invest for Future
              </Link>
            </li>
            <li>
              <Link to="/contact" className="btn button-base-warning-outline font-Poppins">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
