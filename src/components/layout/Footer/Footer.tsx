// import contactItem, { PhoneInterface } from "#mocks/contact";
import Email from "#components/common/Email";
import Location from "#components/common/Location";
import PhoneContact from "#components/common/PhoneContact";

import footerContact, { FooterContactInterface } from "#mocks/footerContact";
import footerLinks, { FooterLinksInterface } from "#mocks/footerLinks";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-info">
                <img className="logo footer-logo" src="images/benemoy-securities.png" alt="Benemoy Securities" />
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
            <div className="col-lg-2 offset-1">
              <div className="footer-links">
                <h4 className="footer-title">Get In Touch</h4>
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
                <h4 className="footer-title">Important Link</h4>
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
<<<<<<< HEAD
                <h4 className="newsletter-title font-Ubuntu fw-medium text-uppercase fs-20">Newsletter SignUp Form</h4>
=======
                <h4 className="title newsletter-title text-uppercase fs-18">Newsletter SignUp Form</h4>
>>>>>>> 2b0cfb7e720e45628a768eb2f211090fbd06bba7
                <p className="newsletter-text text-white sf-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
