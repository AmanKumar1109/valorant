export type EventCategory =
  | 'tech-ai'
  | 'gaming'
  | 'robotics-iot'
  | 'cultural'
  | 'media'
  | 'sports'
  | 'culinary';

export type ClubId = 'helix' | 'tarangini' | 'circuitron' | 'xpectra' | 'panthers';

export interface Coordinator {
  name: string;
  phone?: string;
}

export interface Event {
  id: string;
  name: string;
  tagline: string;
  category: EventCategory;
  club: ClubId;
  description: string;
  venue: string;
  date: string | null;
  time: string | null;
  duration: string;
  format: string;
  teamSize: string;
  requirements: string[];
  rules: string[];
  coordinators: Coordinator[];
  posterUrl?: string;
  status: 'active' | 'cancelled' | 'tba';
}

export interface Club {
  id: ClubId;
  name: string;
  tagline: string;
  description: string;
  mission: string;
  logoUrl: string;
  accentColor: string;
  eventCount: number;
}

export interface CategoryConfig {
  id: EventCategory;
  label: string;
  icon: string;
  description: string;
  accentColor: string;
}
