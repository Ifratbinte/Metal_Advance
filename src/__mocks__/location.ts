import { FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface LocationInterface {
  id: number;
  Icon: IconType;
  location: string;
}

const location: LocationInterface[] = [
  {
    id: 1,
    Icon: FiMapPin,
    location: "+880 Swantex Bhaban (5th Floor), 9/i Motijheel Commercial Area, Dhaka- 1000",
  },
];
export default location;
