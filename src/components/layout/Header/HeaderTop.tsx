import SocialIcon from "#components/common/icon/SocialIcon";
import PhoneContact from "#components/common/phone/phoneContact";

function HeaderTop() {
  return (
    <>
      <section id="topBar" className="topBar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info d-flex align-items-center">
            <PhoneContact />
          </div>
          <SocialIcon />
        </div>
      </section>
    </>
  );
}
export default HeaderTop;
