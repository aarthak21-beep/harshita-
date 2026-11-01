export type BlouseCategory =
  | 'Simple Blouse Designs'
  | 'Traditional Blouse Designs'
  | 'Bridal Blouse Designs'
  | 'Party Wear Blouse Designs'
  | 'Designer Blouse Designs'
  | 'Maggam Work Blouse Designs'
  | 'Fancy Back Neck Designs'
  | 'Sleeve Designs'
  | 'Latest Trending Blouse Designs';

export interface BlouseDesign {
  id: string;
  name: string;
  category: BlouseCategory;
  image: string;
  modelImage: string;
  fabric: string;
  work: string;
  neckType: string;
  backDesign: string;
  sleeveStyle: string;
  idealFor: string;
  description: string;
  tags: string[];
  isTrending?: boolean;
  isBridalPick?: boolean;
}

export type EnquiryTopic =
  | 'general'
  | 'availability'
  | 'stitching_charges'
  | 'measurements'
  | 'delivery'
  | 'customization';
