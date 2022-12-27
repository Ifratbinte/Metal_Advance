export interface FooterLinksInterface {
  id: number;
  name: string;
  url: string;
}

const footerLinks: FooterLinksInterface[] = [
  {
    id: 1,
    name: "BSEC",
    url: "https://www.sec.gov.bd/",
  },
  {
    id: 2,
    name: "DSE",
    url: "https://www.dsebd.org/"
  },
  {
    id: 3,
    name: "CDBL",
    url: "https://www.cdbl.com.bd/"
  },
];
export default footerLinks;
