// types/index.ts

export type OfferingItem = {
  title: string;
  description: string;
  bullets?: string[]
};

export type ServiceSection = {
  heading: string;
  subheading?: string;       
  body?: string;             
  offerings?: OfferingItem[]
  bullets?: string[];        
  image?: string;            
};

export type Service = {
  name: string;
  slug: string;
  icon: string;              

  // Card component fields
  cardQuestion: string;      
  cardPoints: string[];      

  // Hero / page header
  tagline: string;           
  heroDescription: string;   

  // Main page content
  sections: ServiceSection[];

  // Optional enrichment
  stats?: { label: string; value: string }[];
  useCases?: string[];
};