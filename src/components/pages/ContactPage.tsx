// import "#components/pages/customStyle/theme.css";
import ContactInfo from "#components/common/contact";
import ContactData from "#mocks/jsonData/contact.json";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const contact = ContactData.contact;
  console.log({ contact });

  return (
    <>
      <section className="sub-header base-top-gap">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{contact.title}</h2>
          </div>
        </div>
      </section>
      <section className="bn section" id="contact">
        <div className="container">
          <div className="contact-block contact-block-about">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 offset-1">
                <div className="contact-block-text">
                  <div className="contact-block-text-head">
                    <p className="fw-medium">
                      We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below.
                    </p>
                  </div>
                  <form className="contact-form-submit" action="form/contact.php" method="post">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="field-item">
                          <label className="field-label ttu">Your Name</label>
                          <div className="field-wrap">
                            <input name="contact-name" placeholder="Your name" type="text" className="form-control input-bordered required" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="field-item">
                          <label className="field-label ttu">Your Email</label>
                          <div className="field-wrap">
                            <input name="contact-email" placeholder="Your Email" type="email" className="form-control input-bordered required email" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field-item">
                      <label className="field-label ttu">Your Message</label>
                      <div className="field-wrap">
                        <textarea
                          name="contact-message"
                          placeholder="Write what you've want to know"
                          className="form-control input-bordered input-textarea required"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-5 text-end">
                        <button type="submit" className="btn button-gradient-primary font-Poppins">
                          SEND
                        </button>
                      </div>
                      <div className="col-sm-7 order-sm-first">
                        <div className="form-results"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 text-center order-lg-first">
                <div className="contact-block-contact contact-block-contact-s1">
                  <ul className="contact-list">
                    <li>
                      <FiPhoneCall className="contact-icon" />
                      <div className="contact-text">
                        <span>+880 194066 0088</span>
                      </div>
                    </li>
                    <li>
                      <FiMail className="contact-icon" />
                      <div className="contact-text">
                        <span>contact@benemoysecurities.com</span>
                      </div>
                    </li>
                    <li>
                      <FiMapPin className="contact-icon" />
                      <div className="contact-text">
                        <span>Swantex Bhaban (5th Floor), 9/i Motijheel Commercial Area, Dhaka- 1000</span>
                      </div>
                    </li>
                  </ul>
                  <div className="contact-circle-animation contact-df-center white small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-bg section-gap">
        <div className="container">
          <div className="row">
            {contact.contactPage &&
              contact.contactPage.map((contact: any, i: number) => {
                return (
                  <ContactInfo
                    title={contact.title}
                    icon={contact.icon}
                    phone={contact.phone}
                    telephone={contact.telephone}
                    phone2={contact.phone2}
                    phone3={contact.phone3}
                    email={contact.email}
                  />
                );
              })}
          </div>
        </div>
      </section>

      <section className="section-map section-gap">
        <div className="contact-wrap w-70 m-auto">
          <h3 className="title text-center">Get Direction</h3>
          <iframe
            className="contact-location w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.850171106826!2d90.42163829074954!3d23.72140413726657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b851efbfffff%3A0xec8d1a110f0764fe!2sBenemoy%20Securities!5e0!3m2!1sen!2sus!4v1671532758268!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
