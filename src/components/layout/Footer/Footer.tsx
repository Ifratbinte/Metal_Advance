// import contactItem, { PhoneInterface } from "#mocks/contact";
import Email from "#components/common/Email";
import Location from "#components/common/Location";
import PhoneContact from "#components/common/PhoneContact";

import footerContact, { FooterContactInterface } from "#mocks/footerContact";
import footerLinks, { FooterLinksInterface } from "#mocks/footerLinks";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="footer-logo">
                <li>
                  <img className="logo footer-logo" src="images/benemoy-securities.png" alt="Benemoy Securities" />
                </li>
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
            <div className="col-lg-2 offset-1">
              <div className="footer-links">
                <h4 className="title footer-title">Get In Touch</h4>
                <ul className="list-unstyled">
                  {footerContact.map((item: FooterContactInterface, i: number) => {
                    return (
                      <li key={i}>
                        <a href="#">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-links">
                <h4 className="title footer-title">Important Link</h4>
                <ul className="list-unstyled">
                  {footerLinks.map((item: FooterLinksInterface, i: number) => {
                    return (
                      <li key={i}>
                        <a href="#">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="newsletter">
                <h4 className="title newsletter-title text-uppercase hello">Newsletter SignUp Form</h4>
                <p className="newsletter-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className="newsletter-form input-group">
                  <input type="text" className="form-control" placeholder="Your Email..." />
                  <button className="btn btn-danger submit-btn" type="submit" id="newsletterSubmit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
