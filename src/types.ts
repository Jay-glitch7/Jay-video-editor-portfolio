export interface Video {
  id: string;
  title: string;
  description: string;
  tag: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}
