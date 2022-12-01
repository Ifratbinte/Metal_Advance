import contactItem, { PhoneInterface } from "#mocks/contact";
import email, { EmailInterface } from "#mocks/email";
import footerContact, { FooterContactInterface } from "#mocks/footerContact";
import footerLinks, { FooterLinksInterface } from "#mocks/footerLinks";
import location, { LocationInterface } from "#mocks/location";
function Footer() {
  return (
    <>
      {/* <h1>footer</h1> */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="footer-logo">
                <img className="logo" src="../../../assets/Images/benemoy-securities.jpg" alt="Benemoy Securities" />
                <ul className="list-unstyled list">
                  {contactItem.map((item: PhoneInterface, i: number) => {
                    return (
                      <li key={i}>
                        {item.Icon ? <item.Icon className="contact-icon me-2" /> : null}
                        {item.phone}
                      </li>
                    );
                  })}
                </ul>
                <div className="email">
                  {email.map((item: EmailInterface, i: number) => {
                    return (
                      <span key={i}>
                        {item.email ? <item.Icon /> : null} {item.email}
                      </span>
                    );
                  })}
                </div>
                <div className="location">
                  {location.map((item: LocationInterface, i: number) => {
                    return (
                      <span>
                        {item.Icon ? <item.Icon /> : null} {item.location}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="footer-contact">
                <h4 className="title">Get In Touch</h4>
                <ul className="list-unstyled">
                  {footerContact.map((item: FooterContactInterface, i: number) => {
                    return (
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="footer-links">
                <h4 className="title">Get In Touch</h4>
                <ul className="list-unstyled">
                  {footerLinks.map((item: FooterLinksInterface, i: number) => {
                    return (
                      <li>
                        <a href="#">{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="newsletter">
                <h4 className="title">Newsletter SignUp Form</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo odit totam </p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Your Email..." />
                  <button className="btn btn-danger" type="submit" id="newsletterSubmit">
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
