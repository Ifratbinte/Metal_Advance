import React from 'react';

interface Props {
  title: string;
}
const AboutHero: React.FC<Props> = ({ title }) => {
  return (
    <section className="section sub-header">
      <div className="container">
        <div
          className="sub-header-inner d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="sub-header-title font-Poppins fw-bold">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
