export type TagType = 'All' | 'Merchandise' | 'Proposal' | 'Internal' | 'Briefing';

export interface Project {
  title: string;
  description: string;
  href: string;
  tag: TagType;
  date: string;
  client: string;
  allowedClients: string[];
}

export const projects: Project[] = [
  {
    title: 'Timeless Treatments Digital Marketing Strategy',
    description: 'SEO & Social Media strategy for pre-launch buzz and growth to £30k/month revenue',
    href: '/timeless-treatments',
    tag: 'Proposal',
    date: 'Nov 2025',
    client: 'Timeless Treatments',
    allowedClients: ['timeless-treatments', 'admin']
  },
  {
    title: 'Restaurant Tycoon 3 Merchandise Strategy',
    description: 'Roblox-Shopify integration strategy for automated merch store with in-game purchasing',
    href: '/restaurant-tycoon-3',
    tag: 'Merchandise',
    date: 'Nov 2025',
    client: 'Restaurant Tycoon',
    allowedClients: ['restaurant-tycoon', 'admin']
  },
  {
    title: 'AU Vodka Personalisation Strategy',
    description: 'Global travel retail opportunity with personalised gold bottles for international travellers',
    href: '/au-vodka',
    tag: 'Proposal',
    date: 'Nov 2025',
    client: 'AU Vodka',
    allowedClients: ['au-vodka', 'admin']
  },
  {
    title: 'Candelabra Concerts Digital Marketing Strategy',
    description: 'Candlelit concerts marketing strategy - website foundations, social media, and competitive positioning',
    href: '/candelabra-concerts',
    tag: 'Proposal',
    date: 'Dec 2025',
    client: 'Candelabra Concerts',
    allowedClients: ['candelabra-concerts', 'admin']
  },
];

export const tags: TagType[] = ['All', 'Proposal', 'Merchandise', 'Internal', 'Briefing'];
