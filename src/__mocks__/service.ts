import { FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface ServiceInterface {
  id: number;
  Icon: IconType;
  title: string;
  content: string
}

const service: ServiceInterface[] = [
  {
    id: 1,
    Icon: FiMapPin,
    title: "BO Account Opening",
    content: "Explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. "
  },
  {
    id: 2,
    Icon: FiMapPin,
    title: "BO Account Opening",
    content: "Explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. "
  },
  {
    id: 3,
    Icon: FiMapPin,
    title: "BO Account Opening",
    content: "Explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. "
  },
  {
    id: 4,
    Icon: FiMapPin,
    title: "BO Account Opening",
    content: "Explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. "
  },
];
export default service;
