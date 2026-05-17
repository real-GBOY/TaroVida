import { BookOpen, Building2, FlaskConical, Sprout, Users, type LucideIcon } from 'lucide-react';

export interface Partner {
  name: string;
  type: string;
  impact: string;
  icon: LucideIcon;
}

export const partners: Partner[] = [
  {
    name: 'Menoufia University',
    type: 'Academic Institution',
    impact: 'Research support and student innovation ',
    icon: BookOpen,
  },
  {
    name: 'El Nile Company for Bakeries',
    type: 'Industry Partner',
    impact: 'Food industry distribution and product testing',
    icon: Building2,
  },
  {
    name: 'Enactus Menoufia',
    type: 'Social Enterprise Chapter',
    impact: 'Project incubation and community outreach',
    icon: Users,
  },
  {
    name: 'Shanawan Farmers Cooperative',
    type: 'Farmer Cooperative',
    impact: 'Raw taro supply and field pilot sites',
    icon: Sprout,
  },
  {
    name: 'Faculty of Agriculture',
    type: 'Research Partner',
    impact: 'Agronomy trials and hydrogel validation',
    icon: FlaskConical,
  },
];

export const partnershipTypes = [
  {
    title: 'Farmers & Cooperatives',
    description:
      'Join our network to access stable pricing, processing support, and training on post-harvest handling.',
    benefits: [
      'Reduced waste from seasonal gluts',
      'Multiple revenue streams per harvest',
      'On-site collection and processing support',
      'Training in value-added production',
    ],
  },
  {
    title: 'Food & Beverage Buyers',
    description:
      'Source plant-based ingredients and co-develop products using Shanawan taro.',
    benefits: [
      'Locally traceable supply',
      'Custom formulations (milk, starch, extracts)',
      'Story-driven branding for sustainability',
      'Pilot batches before scale-up',
    ],
  },
  {
    title: 'Universities & Research',
    description:
      'Collaborate on agronomy, food science, and biodegradable materials research.',
    benefits: [
      'Field trial access in Menoufia',
      'Student project integration',
      'Shared publications and impact data',
      'Lab-to-market pathways',
    ],
  },
  {
    title: 'Community & NGOs',
    description:
      'Support rural livelihoods, nutrition programs, and environmental education.',
    benefits: [
      'Community workshop partnerships',
      'SDG-aligned impact reporting',
      'Volunteer and outreach programs',
      'Visibility for rural development',
    ],
  },
];
