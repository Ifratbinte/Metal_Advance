import heroContents from "#mocks/heroContent";
const Hero = () => {
  return (
    <>
      <section id="hero" className="hero base-bg-light">
        <div className="container position-relative">
          <div className="row gy-5 banner my-auto flex-row-reverse align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="banner-img">
                <img src={heroContents.img} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-block pe-xl-5">
                <h1 className="title banner-title fs-64 font-Poppins fw-semibold">{heroContents.title}</h1>
                <p className="banner-desc font-Poppins fs-16 fw-normal">{heroContents.desc}</p>
                <a href="#" className="btn button-base-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
