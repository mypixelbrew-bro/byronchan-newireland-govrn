export type RecordStatus = 'Delivered' | 'Underway' | 'Not started';

export interface RecordDetailEntry {
  slug: string;
  title: string;
  meta: string;
  status: RecordStatus;
  lastUpdated: string;
  cost?: string;
  sector: string;
  ward: string;
  llg: string;
  fundingSource: string;
  contractor: string;
  description: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

const PLACEHOLDER = '[PLACEHOLDER]';

export const recordEntries: RecordDetailEntry[] = [
  {
    slug: 'revised-2026-budget',
    title: 'Revised 2026 provincial budget — K499.6 million',
    meta: 'Passed in NI Assembly, Jun 2026',
    status: 'Delivered',
    lastUpdated: 'Jun 2026',
    cost: 'K499,600,000',
    sector: 'Budget & Governance',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      "The revised 2026 budget represents a K113.5 million increase from the initial K386 million budget. The increase is driven by a K105 million surge in National Government development grants and rising internal revenue from gold mining royalties following the successful negotiation to increase the provincial royalty rate from 2 to 3 percent on the Lihir and Simberi mines.",
      'The record K499.6 million budget — themed "New Ireland Destiny" — is the largest in the province\'s history, allocated across infrastructure, health, education, agriculture and economic development.',
    ],
    image: '/images/img-ni-01.svg',
    imageAlt: 'Kavieng harbour, representing the provincial budget',
    imageCaption: 'Kavieng harbour — placeholder image',
  },
  {
    slug: 'nidc-board-appointed',
    title: 'New Ireland Development Corporation board appointed',
    meta: 'Sworn in Kavieng, May 2026',
    status: 'Delivered',
    lastUpdated: 'May 2026',
    sector: 'Governance & Investment',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'The New Ireland Development Corporation board has been appointed to drive investment across the province, with active projects including the proposed Malagan International Hotel, the Arrow Trading retail complex, and a joint-venture fishing project.',
    ],
    image: '/images/img-ni-01.svg',
    imageAlt: 'Kavieng harbour, representing provincial investment',
    imageCaption: 'Kavieng harbour — placeholder image',
  },
  {
    slug: 'lihir-simberi-royalty-increase',
    title: 'Lihir & Simberi royalty increase — 2% to 3%',
    meta: 'Negotiated with mining companies',
    status: 'Delivered',
    lastUpdated: 'Apr 2026',
    sector: 'Revenue & Royalties',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      "A significant share of New Ireland's internal revenue comes from gold mining royalties. The provincial government successfully negotiated an increase from 2 to 3 percent on the Lihir and Simberi mines.",
      "Combined with rising global gold prices, this has substantially strengthened the province's fiscal position and reduced dependence on national government transfers.",
    ],
    image: '/images/img-ni-06.svg',
    imageAlt: 'Road through the Lihir and Simberi mining region',
    imageCaption: 'Boluminski Highway — placeholder image',
  },
  {
    slug: 'fish-cannery-moa-kavieng',
    title: 'MOA signed — fish cannery, Kavieng',
    meta: 'Private investor partnership',
    status: 'Delivered',
    lastUpdated: 'May 2026',
    sector: 'Fisheries',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'A memorandum of agreement has been signed for a fish cannery in Kavieng, part of the push to grow agriculture and fisheries as the backbone of the rural economy.',
      'The project sits alongside the balsa processing factory in Namatanai and the New Ireland Development Corporation\'s wider investment programme.',
    ],
    image: '/images/img-ni-04.svg',
    imageAlt: 'Fish market and wharf, Kavieng',
    imageCaption: 'Fish market / wharf — placeholder image',
  },
  {
    slug: 'balsa-factory-moa-namatanai',
    title: 'MOA signed — balsa processing factory, Namatanai',
    meta: 'Private investor partnership',
    status: 'Delivered',
    lastUpdated: 'May 2026',
    sector: 'Agriculture',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'A memorandum of agreement has been signed for a balsa processing factory in Namatanai, part of the push to grow agriculture and fisheries as the backbone of the rural economy.',
      'The project sits alongside the fish cannery MOA in Kavieng and the New Ireland Development Corporation\'s wider investment programme.',
    ],
    image: '/images/img-ni-04.svg',
    imageAlt: 'Fish market scene, representing agricultural processing investment',
    imageCaption: 'Fish market scene — placeholder image',
  },
  {
    slug: 'kavieng-hospital-upgrade',
    title: 'K10 million — Kavieng Hospital facilities upgrade',
    meta: 'Allocated in revised budget',
    status: 'Underway',
    lastUpdated: 'Jun 2026',
    cost: 'K10,000,000',
    sector: 'Health',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'K10 million has been allocated in the revised budget for Kavieng Hospital facilities. Free primary healthcare is being reinforced at aid posts across both districts, alongside subsidised education.',
      'The allocation includes increased funding for rural health worker housing and medical supply chains to the outer islands.',
    ],
    image: '/images/img-ni-05.svg',
    imageAlt: 'School building, used as a placeholder for health infrastructure',
    imageCaption: 'Health & social infrastructure — placeholder image',
  },
  {
    slug: 'teacher-nursing-college-funding',
    title: 'K10 million — teacher and nursing college funding',
    meta: 'Allocated in revised budget',
    status: 'Underway',
    lastUpdated: 'Jun 2026',
    cost: 'K10,000,000',
    sector: 'Education',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'K10 million has been allocated for teacher and nursing college development. New Ireland has 366 elementary schools and 156 primary schools.',
      'The budget maintains subsidised education and increases school infrastructure funding for outer-island LLGs.',
    ],
    image: '/images/img-ni-05.svg',
    imageAlt: 'School classroom, New Ireland Province',
    imageCaption: 'School classroom — placeholder image',
  },
  {
    slug: 'climate-resilient-farming-initiative',
    title: 'K10 million — climate-resilient farming initiative',
    meta: 'MOA with Dept of Agriculture',
    status: 'Not started',
    lastUpdated: 'Jun 2026',
    cost: 'K10,000,000',
    sector: 'Agriculture',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'A K10 million climate-resilient farming initiative has been agreed with the Department of Agriculture and Livestock, forming part of the wider push to strengthen agriculture and fisheries as the backbone of the rural economy.',
    ],
    image: '/images/img-ni-04.svg',
    imageAlt: 'Fish market scene, used as a placeholder for the agriculture initiative',
    imageCaption: 'Agriculture & fisheries — placeholder image',
  },
  {
    slug: 'technical-committee-agriculture-fisheries',
    title: 'Technical committee — agriculture & fisheries',
    meta: 'Across all 10 LLGs',
    status: 'Underway',
    lastUpdated: 'Jun 2026',
    sector: 'Agriculture',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'A technical committee for agriculture and fisheries has been established, coordinating initiatives across the province\'s LLGs alongside the fish cannery, balsa factory and climate-resilient farming projects.',
    ],
    image: '/images/img-ni-04.svg',
    imageAlt: 'Fish market scene, representing agriculture and fisheries coordination',
    imageCaption: 'Agriculture & fisheries — placeholder image',
  },
  {
    slug: 'development-academy-philippines-training',
    title: 'Development Academy of the Philippines — staff training',
    meta: 'Delegation visit Jun 2026',
    status: 'Underway',
    lastUpdated: 'Jun 2026',
    sector: 'Capacity Building',
    ward: PLACEHOLDER,
    llg: PLACEHOLDER,
    fundingSource: PLACEHOLDER,
    contractor: PLACEHOLDER,
    description: [
      'A delegation visit with the Development Academy of the Philippines took place in June 2026, focused on staff training and building provincial administration capacity.',
    ],
    image: '/images/img-ni-01.svg',
    imageAlt: 'Kavieng harbour, representing provincial administration capacity building',
    imageCaption: 'Kavieng harbour — placeholder image',
  },
];

export function getRecordEntry(slug: string): RecordDetailEntry | undefined {
  return recordEntries.find((entry) => entry.slug === slug);
}
