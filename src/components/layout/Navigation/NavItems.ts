const NavItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
    submenu: [
      {
        id: 1,
        title: 'Corporate Profile',
        url: '/about/benemoy',
      },
      {
        id: 2,
        title: 'Board of Directors',
        url: '/about/board-of-director',
      },
      {
        id: 3,
        title: 'Management Team',
        url: '/about/management',
      },
      {
        id: 4,
        title: 'Sister Concerns',
        url: '/about/benemoy#sisterConcern',
      },
    ],
  },
  {
    id: 3,
    title: 'IPO',
    url: '/ipo',
    submenu: [
      {
        id: 1,
        title: 'Online IPO Application',
        url: '/ipo/online-ipo-application',
      },
      {
        id: 2,
        title: 'Upcoming IPO',
        url: 'https://sec.gov.bd/home/ipofixed',
      },
    ],
  },
  {
    id: 4,
    title: 'Service',
    url: '/services',
    submenu: [
      {
        id: 1,
        title: ' General Services',
        url: '/services/general-service',
      },
      {
        id: 2,
        title: 'Digital Services',
        url: '/services/digital-services#digitalService',
      },
      {
        id: 3,
        title: 'Mobile Trading',
        url: 'https://play.google.com/store/apps/details?id=com.benemoy.ost',
      },
      {
        id: 4,
        title: 'Downloads',
        url: '/services/download',
      },
    ],
  },
  {
    id: 5,
    title: 'R & D',
    url: '/rnd',
    submenu: [
      {
        id: 1,
        title: 'Daily Market Update',
        url: '/rnd/daily-market',
      },
    ],
  },
  {
    id: 6,
    title: 'News & Updates',
    url: '/news',
    submenu: [
      {
        id: 3,
        title: 'DSE News',
        url: 'https://www.dsebd.org/display_news.php',
      },
      {
        id: 4,
        title: 'BSEC News',
        url: 'https://www.sec.gov.bd/home/press',
      },
      {
        id: 2,
        title: 'Company News',
        url: '/articles',
      },
      {
        id: 5,
        title: 'FAQs',
        url: '/news/faq',
      },
    ],
  },

  {
    id: 7,
    title: 'Contact',
    url: '/contact',
  },
];
export default NavItems;
