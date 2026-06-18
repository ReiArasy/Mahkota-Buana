export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'infrastructure' | 'industrial';
  location: string;
  year: string;
  client: string;
  description: string;
  image: string;
  budget?: string;
  status: 'complet' | 'ongoing';
  features: string[];
  galleryImages?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to Map to Lucide Icon
  details: string[];
  bannerImage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  projectAssociated: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}
