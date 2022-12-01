import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  id: number;
  Icon: IconType;
}

const socialIcon: SocialIconInterface[] = [
  {
    id: 1,
    Icon: FaFacebookF,
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
  },
  {
    id: 3,
    Icon: FaTwitter,
  },
];
export default socialIcon;
