export interface AboutServices {
  id: number;
  image: string;
  image_alt: string;
  about_title: string;
  about_desc: string;
}

export interface CertificateInfos {
  id: number;
  title?: string;
  value?: string;
}

export interface CertificatesInterface {
  id: number;
  cr_title: string;
  info: CertificateInfos[];
}
export interface MissionItemInterface {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface AboutDataInterface {
  id: number;
  subtitle: string;
  title: string;
  title_span: string;
  year_base: string;
  image: string;
  year_content: string;
  description: string;
  link: string;
  link_text: string;
  card: {
    title: string;
    subtitle: string;
    services: AboutServices[];
  };
  certificate: {
    title: string;
    cards: CertificatesInterface[];
  };
  about_ideas: {
    subtitle: string;
    about_ideas_img_lg: string;
    about_ideas_img_sm: string;
    about_ideas_title: string;
    about_ideas_title_span: string;
    about_ideas_titleEnd: string;
    about_ideas_desc: string;
  };
  mission_vision: {
    title: string;
    subtitle: string;
    mission_item: MissionItemInterface[];
  };
}
