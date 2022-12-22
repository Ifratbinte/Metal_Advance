export interface FooterContactInterface {
  id: number;
  name: string;
  url: string;
}

const footerContact: FooterContactInterface[] = [
  {
    id: 1,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 2,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    name: "FAQ",
    url: "/faq",
  },
  {
    id: 4,
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
];
export default footerContact;
