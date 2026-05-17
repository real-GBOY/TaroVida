import { Droplets, FlaskConical, Leaf, Layers, Package, Sprout, type LucideIcon } from 'lucide-react';

export type ProductCategory = 'Nutrition' | 'Wellness' | 'Agriculture' | 'Materials';

export interface Product {
  id: string;
  name: string;
  tag: string;
  category: ProductCategory;
  shortDesc: string;
  description: string;
  image: string;
  icon: LucideIcon;
  price: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  impact: string[];
  process?: string[];
}

/** Shared taro leaf preparation before tea vs. powder finishing */
const leafPreparationSteps = [
  'Wash thoroughly to remove soil and debris',
  'Soak in salted water for 1 hour',
  'Boil for 1 hour',
  'Rinse and wash again',
  'Dry completely',
];

const IMAGES = {
  herbalTea: 'https://i.postimg.cc/xTW3Fy2L/Artboard-1-jpg.jpg',
  milk: 'https://i.postimg.cc/8zQLbpdG/Artboard-2-jpg.jpg',
  hydrogelGel: 'https://i.postimg.cc/VkqnGx4m/Artboard-3-jpg.jpg',
  bioLeather: 'https://i.postimg.cc/nLn763wP/Artboard-4-jpg.jpg',
  leafPowder: 'https://i.postimg.cc/hGMxgVkS/Artboard-5-jpg.jpg',
  hydrogelPowder: 'https://i.postimg.cc/500zt6JC/Artboard-6-jpg.jpg',
} as const;

export const products: Product[] = [
  {
    id: 'taro-milk',
    name: 'Taro Milk',
    tag: 'Plant-Based Nutrition',
    category: 'Nutrition',
    shortDesc:
      'A nutritious, dairy-free alternative made from taro corms — rich in minerals and naturally creamy.',
    description:
      'Taro Milk is produced from surplus taro corms that would otherwise rot in seasonal gluts. Through gentle processing, we create a stable, shelf-ready plant milk that opens new markets for Shanawan farmers beyond raw commodity sales.',
    image: IMAGES.milk,
    icon: Droplets,
    price: '1 L · Contact for pricing',
    features: [
      'Made from locally sourced Shanawan taro corms',
      'Dairy-free with natural creaminess',
      'Reduces post-harvest waste from oversupply',
      'Supports year-round farmer income',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Taro corms (surplus & grade-B)' },
      { label: 'Processing', value: 'Milling, extraction, pasteurization' },
      { label: 'Pack Size', value: '1 liter' },
      { label: 'Farmers Engaged', value: '5+ in pilot phase' },
    ],
    applications: [
      'Household consumption',
      'Cafés and beverage outlets',
      'School nutrition programs',
      'Plant-based product lines',
    ],
    impact: [
      'Diverts corms from waste during price crashes',
      'Creates value-added revenue per kilogram of taro',
      'Reduces reliance on middlemen for raw crop sales',
    ],
  },
  {
    id: 'herbal-leaf',
    name: 'Wariqa Herbal Tea',
    tag: 'Natural Remedies',
    category: 'Wellness',
    shortDesc:
      'Premium herbal tea from processed taro leaves — 20 bags per box, rooted in local wellness traditions.',
    description:
      'Wariqa (وُرَيْقَة) transforms taro leaves that are often discarded after harvest into a packaged herbal tea line. Leaves go through washing, salting, boiling, and drying — then whole dried leaves are combined with mint and bagged without grinding. Each box contains 20 bags.',
    image: IMAGES.herbalTea,
    icon: Leaf,
    price: '20 bags · Contact for pricing',
    features: [
      'Traditional wash, soak, boil, and dry preparation',
      'Whole dried leaves with mint — not ground',
      'Ready-to-steep bagged format (20 bags per box)',
      'Women-led processing opportunities',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Fresh taro leaves + mint' },
      { label: 'Processing', value: 'Wash → salt soak (1 hr) → boil (1 hr) → wash → dry → bag' },
      { label: 'Product Form', value: 'Boxed herbal tea (20 bags)' },
      { label: 'Brand Line', value: 'Wariqa' },
    ],
    process: [
      ...leafPreparationSteps,
      'Pack dried whole leaves with mint into tea bags — no grinding',
    ],
    applications: [
      'Herbal tea retail',
      'Traditional medicine practitioners',
      'Farmers markets',
      'Wellness retailers',
    ],
    impact: [
      'Monetizes a part of the plant previously left in the field',
      'Supports circular use of the entire taro plant',
      'Creates flexible work for community processors',
    ],
  },
  {
    id: 'taro-leaf-powder',
    name: 'Taro Leaf Powder',
    tag: 'Pure Leaf Extract',
    category: 'Wellness',
    shortDesc:
      'Pure taro leaf powder — 100% natural, 125 g, free from calcium oxalate for safe consumption.',
    description:
      'Our Wurayqa (وَرَيْقَة) leaf powder is milled from dried taro leaves into a fine, shelf-stable format. It is marketed as pure taro leaf powder with careful processing to reduce oxalate content, opening export and specialty food channels.',
    image: IMAGES.leafPowder,
    icon: Sprout,
    price: '125 g · Contact for pricing',
    features: [
      '100% natural leaf powder',
      'Calcium oxalate–conscious processing',
      'Lightweight for distribution',
      'Complements the Wariqa tea line',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Dried taro leaves (same prep as Wariqa)' },
      { label: 'Processing', value: 'Shared leaf prep, then milling & packaging' },
      { label: 'Net Weight', value: '125 g' },
      { label: 'Brand Line', value: 'Wurayqa' },
    ],
    process: [
      ...leafPreparationSteps,
      'Mill dried leaves into fine powder, then sieve and pack',
    ],
    applications: [
      'Smoothies and functional foods',
      'Supplement and wellness brands',
      'Bakery and beverage fortification',
      'Research and formulation labs',
    ],
    impact: [
      'Adds a high-margin powdered format to leaf processing',
      'Extends shelf life and market reach beyond fresh leaves',
      'Creates year-round demand for leaf harvest labor',
    ],
  },
  {
    id: 'taro-hydrogel',
    name: 'Taro Hydrogel (Gel Form)',
    tag: 'Biodegradable Innovation',
    category: 'Agriculture',
    shortDesc:
      'Taro cellulose hydrogel in gel form — made from stem cellulose for eco-friendly water retention in agriculture.',
    description:
      'Our gel-form hydrogel is produced from cellulose extracted from the taro stem — turning a by-product of the plant into a biodegradable soil amendment that holds moisture and slowly releases it to roots. It is designed for Egyptian smallholders facing water stress and rising irrigation costs.',
    image: IMAGES.hydrogelGel,
    icon: FlaskConical,
    price: 'Contact for pricing',
    features: [
      'Made from taro stem cellulose',
      'Biodegradable — no plastic microbeads',
      'Improves water retention in sandy soils',
      'Ready-to-use gel application',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Cellulose from taro stem' },
      { label: 'Processing', value: 'Cellulose extraction → hydrogel formation (gel)' },
      { label: 'Product Form', value: 'Gel' },
      { label: 'R&D Status', value: 'Pilot trials with local growers' },
    ],
    process: [
      'Extract cellulose from taro stem',
      'Process cellulose into a hydrogel matrix',
      'Form into ready-to-use gel for agricultural application',
    ],
    applications: [
      'Smallholder vegetable farms',
      'Greenhouse operations',
      'Landscaping and nurseries',
      'Research partnerships (agri-tech)',
    ],
    impact: [
      'Lowers irrigation demand in water-scarce regions',
      'Adds value to taro stem by-products',
      'Aligns with SDG 12 and SDG 15',
    ],
  },
  {
    id: 'hidrolock-powder',
    name: 'Hidrolock (Powder Form)',
    tag: 'Soil Moisture Technology',
    category: 'Agriculture',
    shortDesc:
      'Taro cellulose hydrogel powder — high water absorption, less fertilizer use, and reduced irrigation frequency.',
    description:
      'Hidrolock is our powdered hydrogel format: made from taro stem cellulose, then milled for easy mixing into soil or substrates. It offers high water absorption capacity, helps decrease fertilizer usage, and reduces how often fields need irrigation.',
    image: IMAGES.hydrogelPowder,
    icon: Package,
    price: '125 g · Contact for pricing',
    features: [
      'High water absorption capacity',
      'Decreases fertilizer usage',
      'Reduces irrigation frequency',
      'Easy to store and transport as powder',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Cellulose from taro stem' },
      { label: 'Product Form', value: 'Powder' },
      { label: 'Net Weight', value: '125 g' },
      { label: 'Brand', value: 'Hidrolock' },
    ],
    process: [
      'Extract cellulose from taro stem',
      'Process cellulose into a hydrogel matrix',
      'Dry and mill into powder, then pack (125 g)',
    ],
    applications: [
      'Field crops in arid regions',
      'Potted plants and nurseries',
      'Land restoration projects',
      'Agri-tech distribution partners',
    ],
    impact: [
      'Scalable powder format for wider farmer adoption',
      'Converts taro stem by-products into agri-input revenue',
      'Supports climate-resilient farming practices',
    ],
  },
  {
    id: 'bio-leather',
    name: 'Bio Leather',
    tag: 'Sustainable Materials',
    category: 'Materials',
    shortDesc:
      'Flexible, eco-friendly bio-leather made from taro cellulose — sustainable alternative to conventional leather.',
    description:
      'TaroVida Bio Leather is developed from taro cellulose streams, offering a sustainable, flexible material for fashion, accessories, and packaging applications. It closes the loop on plant processing waste while targeting growing demand for bio-based materials.',
    image: IMAGES.bioLeather,
    icon: Layers,
    price: 'Contact for pricing',
    features: [
      'Made from taro cellulose',
      'Sustainable and flexible',
      'Eco-friendly alternative to animal leather',
      'Supports circular bioeconomy goals',
    ],
    specifications: [
      { label: 'Primary Input', value: 'Taro cellulose' },
      { label: 'Properties', value: 'Sustainable, flexible, eco-friendly' },
      { label: 'Product Form', value: 'Rolled sheet material' },
      { label: 'R&D Status', value: 'Prototype / early commercial' },
    ],
    applications: [
      'Fashion and accessories',
      'Sustainable packaging',
      'Interior design samples',
      'Material science partnerships',
    ],
    impact: [
      'Creates a novel high-value material from plant waste',
      'Opens non-food revenue streams for the enterprise',
      'Demonstrates full-plant valorization beyond nutrition and agri-tech',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
