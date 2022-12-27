import contactItem, { PhoneInterface } from "#mocks/contact";

function phoneContact() {
  return (
    <>
      <ul className="list-unstyled list list-border gap-3">
        {contactItem.map((item: PhoneInterface, i: number) => {
          return (
            <li key={i} className="d-flex align-middle align-items-center p-0">
              {item.Icon && <span className="list-icon">{item.Icon ? <item.Icon className="icon me-2" /> : null}</span>}
              <span className="list-content">{item.phone}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default phoneContact;
