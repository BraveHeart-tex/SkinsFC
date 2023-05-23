export interface NavLinkType {
  label: string;
  url: string;
}

const NAV_LINKS: NavLinkType[] = [
  {
    label: 'Hakkımızda',
    url: '#about',
  },
  {
    label: 'Oyuncular',
    url: '#players',
  },
  {
    label: 'Maçlar',
    url: '#games',
  },
  {
    label: 'Hall of Fame',
    url: 'hallOfFame',
  },
];

export default NAV_LINKS;
