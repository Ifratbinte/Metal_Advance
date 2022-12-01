import SocialIcon from "#components/common/icon/SocialIcon";
import contactItem from "#mocks/contact";
function HeaderTop() {
  return (
    <>
      <section id="topBar" className="topBar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info d-flex align-items-center">
            <ul className="list-unstyled list">
              {contactItem.map((item: any, i: any) => {
                console.log(item.Icon);

                return (
                  <li key={i}>
                    {item.Icon ? <item.Icon className="contact-icon me-2" /> : null}
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <SocialIcon />
        </div>
      </section>
    </>
  );
}
export default HeaderTop;
