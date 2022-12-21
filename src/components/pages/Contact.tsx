import ContactTitle from "#mocks/jsonData/contact.json";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  const members = ContactTitle.contact;
  return (
    <>
      <section className="sub-header" id="contact">
        <div className="container">
          <div className="sub-header-inner d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="sub-header-title font-Poppins fs-45 fw-bold">{members.title}</h2>
            <h6 className="sub-header-subtitle font-Poppins fs-20 fw-normal">Home - {members.pathname}</h6>
          </div>
        </div>
      </section>
      <section className="contact section-gap base-bg-white">
        <div className="container">
          <div className="row no-gutters shadow p-5">
            <div className="col-md-7 d-flex align-items-stretch">
              <div className="contact-wrap w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.850171106826!2d90.42163829074954!3d23.72140413726657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b851efbfffff%3A0xec8d1a110f0764fe!2sBenemoy%20Securities!5e0!3m2!1sen!2sus!4v1671532758268!5m2!1sen!2sus"
                  width={800}
                  height={450}
                ></iframe>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch p-0">
              <div className="contact-inner w-100 p-lg-5 p-4">
                <h3 className="mb-4 mt-md-4">Contact us</h3>
                <div className="contact-info w-100 d-flex align-items-center">
                  <div className="list-icon contact-icons">
                    <FiPhoneCall />
                  </div>
                  <div className="list-content ps-3">
                    <span className="me-3">+8801404428804</span>
                    <span>+880247120687</span>
                  </div>
                </div>
                <div className="contact-info w-100 d-flex align-items-center">
                  <div className="list-icon contact-icons">
                    <FiMail />
                  </div>
                  <div className="list-content ps-3">
                    <span>contact@benemoysecurities.com</span>
                  </div>
                </div>
                <div className="contact-info w-100 d-flex align-middle">
                  <div className="list-icon contact-icons">
                    <FiMapPin />
                  </div>
                  <div className="list-content ps-3">
                    <span>Swantex Bhaban (5th Floor), 9/I, Motijheel Commercial Area, Dhaka-1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
