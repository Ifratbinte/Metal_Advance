// import contactItem, { PhoneInterface } from "#mocks/contact";
import Email from "#components/common/Email";
import Location from "#components/common/Location";
import PhoneContact from "#components/common/PhoneContact";
import SocialIcon from "#components/common/SocialIcon";

import footerContact, { FooterContactInterface } from "#mocks/footerContact";
import footerLinks, { FooterLinksInterface } from "#mocks/footerLinks";
import LinkItem from "./LinkItem";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer footer-gfx text-white">
        <div className="container footer-inner-content">
          <div className="row footer-top">
            <div className="col-xxl-4 col-lg-6">
              <div className="footer-info ft-gp">
                <img className="logo footer-logo" src="/images/benemoy-securities.png" alt="Benemoy Securities" />
                <ul className="footer-info-content">
                  <li>
                    <PhoneContact />
                  </li>
                  <li>
                    <Email />
                  </li>
                  <li>
                    <Location />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3">
              <div className="footer-links ft-gp">
                <h4 className="footer-title">Get In Touch</h4>
                <ul className="list-unstyled">
                  {footerContact.map((item: FooterContactInterface, i: number) => (
                    <LinkItem key={i} title={item.name} url={item.url} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3">
              <div className="footer-links ft-gp">
                <h4 className="footer-title">Important Link</h4>
                <ul className="list-unstyled">
                  {footerLinks.map((item: FooterLinksInterface, i: number) => (
                    <LinkItem key={i} title={item.name} url={item.url} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-12">
              <div className="footer-links newsletter ft-gp">
                <h4 className="footer-title font-Ubuntu fw-medium fs-20 text-center">Newsletter SignUp Form</h4>
                <p className="newsletter-text text-white text-center text-md-left sf-14">
                  To get updated news, smart decision making, exclusive offers & opportunities, subscribe to Benemoy’s newsletter.
                </p>
                <div className="newsletter-form input-group">
                  <input type="text" className="form-control" placeholder="Your Email..." />
                  <button className="btn button-gradient-primary submit-btn" type="submit" id="newsletterSubmit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape footer-ovm shape-wave"></div>
      </footer>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-md-8">
              <div className="copyright text-light">
                All rights reserved by
                <span className="fw-bold ps-1" style={{ color: "var(--baseSeaBlue)" }}>
                  <em>Benemoy Securities Ltd </em>
                </span>
                <strong>&copy;2023</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-social pt-2 pt-md-0 d-flex justify-content-md-end justify-content-center">
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
