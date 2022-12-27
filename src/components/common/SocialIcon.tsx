import socialIcon, { SocialIconInterface } from "#mocks/socialIcon";
import { Link } from "react-router-dom";

function SocialIcon() {
  return (
    <>
      <ul className="list-unstyled list social-icon">
        {socialIcon.map((item: SocialIconInterface, i: number) => {
          return (
            <li key={i}>
              <Link className="social-icon-link" to="">
                {<item.Icon />}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default SocialIcon;
