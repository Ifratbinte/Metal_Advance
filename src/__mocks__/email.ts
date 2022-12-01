import { FiMail } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface EmailInterface {
  id: number;
  Icon: IconType;
  email: string;
}

const email: EmailInterface[] = [
  {
    id: 1,
    Icon: FiMail,
    email: "contact@benemoy.com",
  },
];
export default email;
