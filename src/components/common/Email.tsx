import email, { EmailInterface } from "#mocks/email";
function Email() {
  return (
    <>
      <div className="email">
        {email.map((item: EmailInterface, i: number) => {
          return (
            <div key={i} className="d-flex align-middle align-items-center">
              <span className="list-icon">{item.email ? <item.Icon className="icon me-2" /> : null}</span>
              <span className="list-content"> {item.email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Email;
