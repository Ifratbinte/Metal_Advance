import { FiMail, FiPhoneCall } from "react-icons/fi";
interface Props {
  title: string;
  phone: string;
  telephone?: string;
  phone2?: string;
  phone3?: string;
  email?: string;
  icon: string;
}

const Contact: React.FC<Props> = ({ title, phone, telephone, phone2, phone3, email, icon }) => {
  return (
    <>
      <div className="col-md-4 contact-service">
        <div className="contact-service-list">
          <div className="contact-gfx d-flex justify-content-center">
            <img src={icon} alt={title} className="icon" />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="contact-list-title text-center">
              <h4>{title}</h4>
            </div>
          </div>
          <div className="text-center p-3">
            <div className="contact-service-list-item">
              <span className="me-2">
                <FiPhoneCall />
              </span>
              <span>{phone}</span>
            </div>

            {telephone && (
              <div className="contact-service-list-item">
                <span className="me-2">
                  <FiPhoneCall />
                </span>
                <span>{telephone}</span>
              </div>
            )}

            {phone2 && (
              <div className="contact-service-list-item">
                <span className="me-2">
                  <FiPhoneCall />
                </span>
                <span>{phone2}</span>
              </div>
            )}

            {phone3 && (
              <div className="contact-service-list-item">
                <span className="me-2">
                  <FiPhoneCall />
                </span>
                <span>{phone3}</span>
              </div>
            )}
            {email && (
              <div className="contact-service-list-item">
                <span className="me-2">
                  <FiMail />
                </span>
                <span>{email}</span>
              </div>
            )}
          </div>
          <div className="contact-gfx2">
          <img src="/images/icon/service-desk-icon.svg" alt="" />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Contact;
