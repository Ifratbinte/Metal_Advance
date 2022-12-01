import { FiPhoneCall } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface PhoneInterface {
  id: number;
  Icon?: IconType;
  phone: string;
}
const contactItem: PhoneInterface[] = [
  {
    id: 1,
    Icon: FiPhoneCall,
    phone: "+880 194066 0088",
  },
  {
    id: 2,
    phone: "+880 24712 0687",
  },
];
export default contactItem;
