// import contactItem, { PhoneInterface } from "#mocks/contact";
import Email from "#components/common/Email";
import Location from "#components/common/Location";
import PhoneContact from "#components/common/PhoneContact";
import SocialIcon from "#components/common/SocialIcon";

import footerContact, { FooterContactInterface } from "#mocks/footerContact";
import footerLinks, { FooterLinksInterface } from "#mocks/footerLinks";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer footer-gfx text-white">
        <div className="container footer-inner-content">
          <div className="row footer-top">
            <div className="col-lg-4">
              <div className="footer-info">
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
            <div className="col-lg-2 col-md-4">
              <div className="footer-links">
                <h4 className="footer-title">Get In Touch</h4>
                <ul className="list-unstyled">
                  {footerContact.map((item: FooterContactInterface, i: number) => (
                    <li key={i}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-links">
                <h4 className="footer-title">Important Link</h4>
                <ul className="list-unstyled">
                  {footerLinks.map((item: FooterLinksInterface, i: number) => (
                    <li key={i}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="footer-links newsletter">
                <h4 className="footer-title font-Ubuntu fw-medium fs-20">Newsletter SignUp Form</h4>
                <p className="newsletter-text text-white sf-14">
                  To get updated news, smart decision making, exclusive offers & opportunities, subscribe to Benemoy’s newsletter.
                </p>
                <div className="newsletter-form input-group">
                  <input type="text" className="form-control" placeholder="Your Email..." />
                  <button className="btn button-solid-primary submit-btn" type="submit" id="newsletterSubmit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gradient-shadow-bottom"></div> */}
      </footer>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="copyright">
                <span className="fs-16">
                  All rights reserved by &copy;
                  <span className="fw-bold" style={{ color: "var(--baseSecondary)" }}>
                    2023
                  </span>
                </span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="footer-social">
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
