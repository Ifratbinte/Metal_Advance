import socialIcon, { SocialIconInterface } from "#mocks/socialIcon";

function SocialIcon() {
  return (
    <>
      <ul className="list-unstyled list social-icon">
        {socialIcon.map((item: SocialIconInterface, i: number) => {
          return (
            <li key={i}>
              <a href="">{<item.Icon />}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default SocialIcon;
