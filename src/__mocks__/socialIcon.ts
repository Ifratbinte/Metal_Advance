import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  id: number;
  Icon: IconType;
  url: string;
}

const socialIcon: SocialIconInterface[] = [
  {
    id: 1,
    Icon: FaFacebookF,
    url: "https://www.facebook.com/BenemoySecuritiesLimited",
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    url: "linkedin.com/company/benemoy-securities-limited",
  },
  {
    id: 3,
    Icon: FaTwitter,
    url: "https://twitter.com/Benemoy_",
  },
  {
    id: 3,
    Icon: FaInstagramSquare,
    url: "https://www.instagram.com/benemoysecurities/",
  },
];
export default socialIcon;
