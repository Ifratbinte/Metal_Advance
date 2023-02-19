import SectionHeading from "#components/common/SectionHeading";
import React from "react";

interface CardInfoInterface {
  id: number;
  title?: string;
  value?: string;
  desc?: string;
}
interface CardInterface {
  id: number;
  cr_title: string;
  info: CardInfoInterface[];
}
interface Props {
  certificate: {
    title: string;
    cards: CardInterface[];
  };
}
const AboutLicenseDetails: React.FC<Props> = ({ certificate }) => {
  return (
    <section className="section certificate section-gap base-bg-light" id="certificate">
      <div className="container">
        <div className="certificate-heading">
          <SectionHeading title={certificate.title} />
        </div>
        <div className="row g-gap justify-content-center justify-content-lg-around">
          {certificate.cards.map((certificate: CardInterface) => (
            <div className="col-xl-4 col-md-6 text-center">
              <div className="cr-card">
                <div className="cr-header">
                  <h6 className="fw-bold">{certificate.cr_title}</h6>
                </div>
                <div className="cr-body">
                  <ul className="cr-list">
                    {certificate.info.map((list: CardInfoInterface) => (
                      <>
                        <li>
                          {list.title && <span className="fw-medium me-2">{list.title} : </span>} {list.value}
                        </li>
                        <span> {list.desc}</span>
                      </>
                    ))}
                  </ul>
                  <div className="cr-bg">
                    <img src="/images/icon/award.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLicenseDetails;
