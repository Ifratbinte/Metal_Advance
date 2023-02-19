import { ImageInterface } from "./image";

interface DirectorAttributes {
  name: string;
  content: string;
  btn_text: null | string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  role: "director" | "management" | "member";
  designation: string;
  priority: number;
  image: {
    data: ImageInterface;
  };
}
interface DirectorInterface {
  id: number;
  attributes: DirectorAttributes;
}
export default DirectorInterface;
