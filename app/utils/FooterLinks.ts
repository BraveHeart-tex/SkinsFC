export interface FooterLink {
  heading: string;
  links: {
    label: string;
    href: string;
    isExternal: boolean;
  }[];
}

const FooterLinks: FooterLink[] = [
  {
    heading: 'Takım',
    links: [
      {
        label: 'RakipBul',
        href: 'https://www.rakipbul.com/takim/160681',
        isExternal: true,
      },
      {
        label: 'Pasliga',
        href: 'https://www.pasliga.com/istanbul/takim/skins-580/sonuclar',
        isExternal: true,
      },
    ],
  },
  {
    heading: 'Oyuncular',
    links: [
      { label: 'Hall of Fame', href: '/hallOfFame', isExternal: false },
      { label: 'Takım Galerisi', href: '/#players', isExternal: false },
    ],
  },
  {
    heading: 'Sosyal Medyada Biz',
    links: [
      { label: 'Instagram', href: '#', isExternal: true },
      { label: 'Tiktok', href: '#', isExternal: true },
    ],
  },
];

export default FooterLinks;
