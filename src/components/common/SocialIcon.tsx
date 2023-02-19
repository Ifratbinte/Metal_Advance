import socialIcon, { SocialIconInterface } from "#mocks/socialIcon";
interface Props {
  team_social?: string;
}

const SocialIcon: React.FC<Props> = ({ team_social }) => {
  return (
    <>
      <ul className={team_social ? "social" : "list-unstyled list social-icon"}>
        {socialIcon.map((item: SocialIconInterface, i: number) => {
          return (
            <li key={i}>
              <a href={item.url} className={team_social ? "" : "social-icon-link"}>
                {<item.Icon className={team_social ? "member-social-icon" : ""} />}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SocialIcon;
