
import React from 'react';
import { 
  Camera, 
  Code, 
  Share2, 
  BarChart3, 
  Zap, 
  Target, 
  Layers 
} from 'lucide-react';
import { Service, Package, TeamMember, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'content',
    title: 'Content Creation',
    description: 'High-impact social media posts, reels, blogs, and professional graphics that capture attention.',
    icon: 'Camera',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Bespoke websites, landing pages, and e-commerce solutions built for performance and conversion.',
    icon: 'Code',
  },
  {
    id: 'social',
    title: 'Social Media Handling',
    description: 'End-to-end account management, consistent posting, and active community engagement.',
    icon: 'Share2',
  },
  {
    id: 'strategy',
    title: 'Digital Marketing & Strategy',
    description: 'Data-driven paid ads, deep analytics, and strategic growth recommendations for scaling.',
    icon: 'BarChart3',
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: '₹15,000',
    duration: '1 Month',
    deliverables: [
      '10 Custom Reels',
      '5 Strategic Posts',
      '2 Carousel Slides',
      'Basic Social Media Handling',
      'Community Engagement'
    ],
  },
  {
    id: 'growth',
    name: 'Growth Package',
    price: '₹35,000',
    duration: '3 Months',
    deliverables: [
      '30 Professional Reels',
      '15 Strategic Posts',
      '6 Carousel Slides',
      'Full Social Media Management',
      'Ad Strategy & Execution',
      'Monthly Analytics Report'
    ],
    isPopular: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Flexible Discovery',
    description: 'We dive deep into your brand identity without rigid templates.',
    tagline: 'tailored approach',
  },
  {
    id: 'strategy',
    title: 'Custom Roadmap',
    description: 'Strategy that pivots as fast as the market does.',
    tagline: 'tailored approach',
  },
  {
    id: 'execution',
    title: 'Agile Execution',
    description: 'High-quality content delivery with iterative feedback loops.',
    tagline: 'tailored approach',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Aaryan Sharma',
    role: 'Founder & Head of Strategy',
    tagline: 'Visionary behind the brand.',
    image: 'https://picsum.photos/seed/p1/400/400',
  },
  {
    id: '2',
    name: 'Priya Verma',
    role: 'Creative Director',
    tagline: 'Crafting visual stories.',
    image: 'https://picsum.photos/seed/p2/400/400',
  },
  {
    id: '3',
    name: 'Rahul Kapur',
    role: 'Lead Developer',
    tagline: 'Building the digital backbone.',
    image: 'https://picsum.photos/seed/p3/400/400',
  },
  {
    id: '4',
    name: 'Sanya Malhotra',
    role: 'Social Media Manager',
    tagline: 'Engagement specialist.',
    image: 'https://picsum.photos/seed/p4/400/400',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Ads & Growth Analyst',
    tagline: 'Master of the algorithm.',
    image: 'https://picsum.photos/seed/p5/400/400',
  },
  {
    id: '6',
    name: 'Ishani Roy',
    role: 'Content Strategist',
    tagline: 'Words that sell.',
    image: 'https://picsum.photos/seed/p6/400/400',
  },
  {
    id: '7',
    name: 'Arjun Das',
    role: 'Video Editor',
    tagline: 'Making every frame count.',
    image: 'https://picsum.photos/seed/p7/400/400',
  },
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Camera': return <Camera className="w-8 h-8" />;
    case 'Code': return <Code className="w-8 h-8" />;
    case 'Share2': return <Share2 className="w-8 h-8" />;
    case 'BarChart3': return <BarChart3 className="w-8 h-8" />;
    case 'Zap': return <Zap className="w-8 h-8" />;
    case 'Target': return <Target className="w-8 h-8" />;
    case 'Layers': return <Layers className="w-8 h-8" />;
    default: return <Zap className="w-8 h-8" />;
  }
};
