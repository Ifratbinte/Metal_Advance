import contactItem, { PhoneInterface } from "#mocks/contact";
import email, { EmailInterface } from "#mocks/email";
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
                      <span>{item.Icon ? <item.Icon/> : null} {item.location}</span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="footer-contact">
                <h4 className="title">Get In Touch</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 footer-info">
              <div className="footer-links">
                <h4 className="title">Get In Touch</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="">BSEC</a>
                  </li>
                  <li>
                    <a href="">DCL</a>
                  </li>
                  <li>
                    <a href="">BBL</a>
                  </li>
                  <li>
                    <a href="">CCL</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
