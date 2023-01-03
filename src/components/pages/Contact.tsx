import ContactTitle from "#mocks/jsonData/contact.json";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  const members = ContactTitle.contact;
  return (
    <>
      {/* <section className="sub-header base-top-gap" id="contact">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{members.title}</h2>
          </div>
        </div>
      </section> */}
      <section id="contact" className="contact base-bg-white base-top-gap h-50vh">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div className="col-md-6 d-flex align-items-stretch p-0">
              <div className="nk-block-contact nk-block-contact-s1 animated" data-animate="fadeInUp" data-delay="0.1">
                <ul className="contact-list">
                  <li className="animated" data-animate="fadeInUp" data-delay="0.2">
                    <FiPhoneCall className="contact-icon" />
                    <div className="contact-text">
                      <span>+880247120687</span>
                    </div>
                  </li>
                  <li className="animated" data-animate="fadeInUp" data-delay="0.3">
                    <FiMail className="contact-icon" />
                    <div className="contact-text">
                      <span>info@company.com</span>
                    </div>
                  </li>
                  <li className="animated" data-animate="fadeInUp" data-delay="0.4">
                    <FiMapPin className="contact-icon" />
                    <div className="contact-text">
                      <span>Swantex Bhaban (5th Floor), 9/I, Motijheel Commercial Area, Dhaka-1000</span>
                    </div>
                  </li>
                </ul>
                <div className="nk-circle-animation nk-df-center white small"></div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="contact-wrap w-100">
                <iframe
                  className="contact-location h-50vh w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.850171106826!2d90.42163829074954!3d23.72140413726657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b851efbfffff%3A0xec8d1a110f0764fe!2sBenemoy%20Securities!5e0!3m2!1sen!2sus!4v1671532758268!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
