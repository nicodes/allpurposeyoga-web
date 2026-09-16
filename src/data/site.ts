export const site = {
  name: 'All Purpose Yoga',
  shortName: 'APY',
  url: 'https://www.allpurposeyoga.com',
  description:
    'All Purpose Yoga is a small, locally operated, female-owned yoga studio in Boulder, Colorado. Smaller classes, no added heat, and a welcoming space for all levels.',
  locale: 'en_US',
  themeColor: '#a02c49',
  backgroundColor: '#f2eed7',
  email: 'info@allpurposeyoga.com',
  founder: 'Jade Powell',
  priceRange: '$$',
  bookingUrl: 'https://momence.com/All-Purpose-Yoga',
  ogImage: '/brand/og-image.jpg',
  logo: '/brand/icon-512.png',
  address: {
    streetAddress: '2825 Wilderness Place',
    addressLocality: 'Boulder',
    addressRegion: 'CO',
    postalCode: '80301',
    addressCountry: 'US',
  },
  geo: {
    latitude: 40.02576,
    longitude: -105.24971,
  },
  sameAs: [
    'https://www.instagram.com/allpurposeyoga/',
    'https://www.facebook.com/p/All-Purpose-Yoga-61581909070626',
  ],
  practices: [
    'Vinyasa',
    'Gentle',
    'Yin',
    'Kundalini',
    'Vin Yin',
    'Restorative Yin & Sound Healing',
    'Sound Healing',
  ],
  amenities: [
    'No added heat',
    'All levels welcome',
    'Live stream classes available',
    'Studio mats available',
  ],
  offers: [
    { name: 'New students, two weeks unlimited', price: '50.00' },
    { name: 'Drop-in class', price: '28.00' },
    { name: 'Sangha Unlimited membership', price: '129.00' },
    { name: 'Reduced-rate unlimited membership', price: '99.00' },
    { name: '5 class card', price: '130.00' },
    { name: '10 class card', price: '220.00' },
    { name: '20 class card', price: '400.00' },
  ],
  pages: [
    {
      path: '/',
      markdown: '/index.md',
      title: 'Home',
      summary: 'Studio overview, class types, memberships, and class cards.',
    },
    {
      path: '/schedule/',
      markdown: '/schedule.md',
      title: 'Schedule',
      summary: 'Live weekly class calendar and booking via Momence.',
    },
    {
      path: '/events/',
      markdown: '/events.md',
      title: 'Events',
      summary: 'Workshops, sound healing, and special offerings.',
    },
    {
      path: '/about/',
      markdown: '/about.md',
      title: 'About',
      summary: 'Studio intention, Sangha membership, Seva, and teacher bios.',
    },
    {
      path: '/connect/',
      markdown: '/connect.md',
      title: 'Connect',
      summary: 'Address, email, work-trade, and teaching inquiries.',
    },
  ],
} as const;

export const formattedAddress = `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`;

export function pageMarkdownPath(pathname: string) {
  if (pathname === '/') return '/index.md';
  return `${pathname.replace(/\/+$/, '')}.md`;
}

export function pageTitle(pathname: string) {
  const page = site.pages.find((entry) => entry.path === pathname);
  return page?.title ?? site.name;
}
