import contactItem, { PhoneInterface } from "#mocks/contact";

function phoneContact() {
  return (
    <>
      <ul className="list-unstyled list">
        {contactItem.map((item: PhoneInterface, i: number) => {
          console.log(item.Icon);

          return (
            <li key={i}>
              {item.Icon ? <item.Icon className="contact-icon me-2" /> : null}
              {item.phone}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default phoneContact;
