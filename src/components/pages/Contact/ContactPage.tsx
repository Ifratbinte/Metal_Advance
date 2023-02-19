// import "#components/pages/customStyle/theme.css";
import ContactInfo from "#components/common/contact";
import ContactData from "#mocks/jsonData/contact.json";
import headingTitle from "#mocks/jsonData/subheading.json";
import TOKEN from "#store/token";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const [response, setResponse] = useState<string>();
  const [error, setError] = useState<string>();
  const contact = ContactData.contact;

  useEffect(() => {
    if (window.location.hash) {
      window.location.replace(window.location.href);
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api.binimoysecurities.com/v1/email/",
        {
          key1: "value1",
          key2: "value2",
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      setResponse(res.data);
    } catch (err) {
      setError(error);
    }
  };

  console.log({ response });
  console.log({ error });

  return (
    <>
      <section className="sub-header base-top-gap">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fw-bold">{headingTitle.sub_heading.contact_title}</h2>
          </div>
        </div>
      </section>
      <section className="contact section-gap" id="contact">
        <div className="container">
          <div className="contact-block contact-block-about">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 text-center mb-5 mb-lg-0">
                <div className="contact-block-contact contact-block-contact-s1 circle-animate-block">
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
                  <div className="circle-animation contact-df-center white small"></div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="contact-block-text">
                  <div className="contact-block-text-head">
                    <p className="fw-medium">
                      We are always open and we welcome any questions you have for our team. If you wish to get in touch, please fill out the form below.
                    </p>
                  </div>
                  <form className="contact-form-submit" onSubmit={handleSubmit}>
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
                          <label className="field-label ttu">Your Contact</label>
                          <div className="field-wrap">
                            <input name="contact-phone" placeholder="Your Contact" type="text" className="form-control input-bordered required phone" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="field-item">
                          <label className="field-label ttu">Your Email</label>
                          <div className="field-wrap">
                            <input name="contact-email" placeholder="Your Email" type="text" className="form-control input-bordered required email" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field-item">
                      <label className="field-label ttu">Your Message</label>
                      <div className="field-wrap">
                        <textarea
                          name="contact-message"
                          placeholder="Write what you want to know"
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
            </div>
          </div>
        </div>
      </section>
      <section id="supportContact" className="base-bg-light section-gap">
        <div className="container">
          <h2 className="font-Poppins fw-bold fs-24 text-center mb-5 primary">Request for a Service</h2>
          <div className="row">
            {contact.contactPage.contact_info &&
              contact.contactPage.contact_info.map((contact: any, i: number) => {
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
        <div className="container">
          <div className="contact-wrap">
            <h3 className="title text-center">Get Direction</h3>
            <iframe
              className="contact-location w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.850171106826!2d90.42163829074954!3d23.72140413726657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b851efbfffff%3A0xec8d1a110f0764fe!2sBenemoy%20Securities!5e0!3m2!1sen!2sus!4v1671532758268!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
