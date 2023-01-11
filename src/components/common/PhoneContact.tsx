import contactItem from "#mocks/contact";
import { FiPhoneCall } from "react-icons/fi";

function phoneContact() {
  console.log({ contactItem });
  return (
    <>
      <div className="section-topContact">
        <FiPhoneCall className="icon me-2" />
        {/* <img src="/gif/phone-ringing.gif" alt="" className="icon me-2" /> */}
        <span className="fw-semibold font-Poppins"> Call Now : {contactItem[0].phone}</span>
      </div>
      {/* <ul className="list-unstyled list list-border gap-3">
        {contactItem.map((item: PhoneInterface, i: number) => {
          return (
            <li key={i} className="d-flex align-middle align-items-center p-0">
              {item.Icon && <span className="list-icon">{item.Icon ? <item.Icon className="icon me-2" /> : null}</span>}
              <span className="list-content">{item.phone}</span>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}
export default phoneContact;
