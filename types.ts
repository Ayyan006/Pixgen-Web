
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  deliverables: string[];
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  tagline: string;
}
