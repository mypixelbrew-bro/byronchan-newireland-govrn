export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Record & Budget',
    href: '/budget/',
    children: [
      { label: 'The mandate', href: '/budget/#mandate' },
      { label: 'The budget breakdown', href: '/budget/#budget' },
      { label: 'Revenue & royalties', href: '/budget/#revenue' },
    ],
  },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Biography', href: '/about/#biography' },
      { label: 'Legacy', href: '/about/#legacy' },
      { label: "People's Progress Party", href: '/about/#ppp' },
    ],
  },
  { label: 'New Ireland', href: '/province/' },
  {
    label: 'Campaign',
    href: '/campaign/',
    children: [
      { label: 'Support Byron Chan', href: '/campaign/#ask' },
      { label: 'Endorsements', href: '/campaign/#endorsements' },
      { label: 'Get involved', href: '/campaign/#involved' },
      { label: 'Upcoming events', href: '/campaign/#events' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];
