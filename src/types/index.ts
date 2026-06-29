export interface Service {
  id: string;
  title: string;
  slug: string;
  short: string;
  longDescription: string;
  image: string;
  whatsappMessage: string;
  href?: string;
}

export interface TestimonialType {
  quote: string;
  author: string;
  service?: string;
}

export interface BridalPackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
}

export interface InstagramPost {
  image: string;
  span: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface Transformation {
  before: string;
  after: string;
  label: string;
}
