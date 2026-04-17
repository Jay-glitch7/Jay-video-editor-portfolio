import { Video, Stat, Review } from './types';

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: 'I Convinced a Stranger to Rob a Bank',
    description: 'A showcase of high-end editing, color grading, and narrative storytelling.',
    tag: 'cinematic film',
    videoUrl: 'https://youtu.be/hh3JCjOHG_E?si=TMt4tqDB6yf9SraP',
    thumbnailUrl: 'https://img.youtube.com/vi/hh3JCjOHG_E/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'I Survived a Plane Crash',
    description: 'A showcase of high-end editing, color grading, and narrative storytelling.',
    tag: 'cinematic film',
    videoUrl: 'https://youtu.be/C17uszaP5Yw?si=1qjUIu4T649Qk8CD',
    thumbnailUrl: 'https://img.youtube.com/vi/C17uszaP5Yw/maxresdefault.jpg',
  },
  {
    id: '3',
    title: "1000 Hunters vs Minecraft's Deadliest Players",
    description: 'Dynamic Pacing: Balanced slow-burn resource gathering with high-intensity "Death Ball" skirmishes.',
    tag: 'Gaming Video',
    videoUrl: 'https://youtu.be/2_-0cSon4yc?si=OQIECgAPrVQt5Cj9',
    thumbnailUrl: 'https://img.youtube.com/vi/2_-0cSon4yc/maxresdefault.jpg',
  },
  {
    id: '4',
    title: 'Can You Profit From a First Class Flight?',
    description: 'Short film project emphasizing sound design and slow-burn pacing.',
    tag: 'IRL video',
    videoUrl: 'https://youtu.be/MP0tWdWZThg?si=ezE9MZxRc_iSTnDe',
    thumbnailUrl: 'https://img.youtube.com/vi/MP0tWdWZThg/maxresdefault.jpg',
  },
  {
    id: '5',
    title: 'I Tried Every Celebrity Experience!',
    description: 'A showcase of high-end editing, color grading, and narrative storytelling.',
    tag: 'IRL video',
    videoUrl: 'https://youtu.be/xV2jGu5_dsU?si=kIyrdsJUWZLgxbc3',
    thumbnailUrl: 'https://img.youtube.com/vi/xV2jGu5_dsU/maxresdefault.jpg',
  },
  {
    id: '6',
    title: 'STILL ALIVE!!',
    description: 'Showreel of best edit ',
    tag: 'Showreel',
    videoUrl: 'https://www.instagram.com/reel/DXE1i0bE7r_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnailUrl: 'https://m.media-amazon.com/images/M/MV5BMGUyZGViN2MtYTQ1Yi00YjU1LTk1YTctY2Y5YzA0YzI5YzA0XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: '7',
    title: 'song promotion edit',
    description: 'A deep dive into dynamic transitions and fluid motion graphics.',
    tag: 'Motion Graphics',
    videoUrl: 'https://www.instagram.com/reel/DO79DnpEsXo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnailUrl: 'https://picsum.photos/seed/promo/1080/1920',
  },
  {
    id: '8',
    title: 'high quality edit',
    description: 'an high quality speed edit.',
    tag: 'CAP EDIT',
    videoUrl: 'https://www.instagram.com/reel/DXCjHckE9df/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnailUrl: 'https://picsum.photos/seed/reel3/1080/1920',
  },
  {
    id: '9',
    title: 'For prime videos',
    description: 'A showcase of high-end editing and visual storytelling.',
    tag: 'Showreel',
    videoUrl: 'https://www.instagram.com/reel/DXJIT4KDY3j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    thumbnailUrl: 'https://picsum.photos/seed/prime/1080/1920',
  },
  {
    id: '10',
    title: 'I Tried Every Seat on the Most Expensive Train',
    description: 'An inside look at the production and post-production process.',
    tag: 'Documentary',
    videoUrl: 'https://youtu.be/Ye-VZFF0qLE?si=juryrRq_GdBfmVLf',
    thumbnailUrl: 'https://img.youtube.com/vi/Ye-VZFF0qLE/maxresdefault.jpg',
  },
];

export const STATS: Stat[] = [
  { value: '3+', label: 'Years Experience' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '570M+', label: 'Total views' }
];

export const CONTACT = {
  name: 'JAY',
  email: 'workwithogjack@gmail.com',
  tagline: "Working with the world's biggest creators",
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Mack',
    role: 'Creator',
    content: 'The level of cinematic quality and narrative flow in their edits is unmatched. They truly know how to bring a story to life.',
    rating: 5,
    avatarUrl: 'https://unavatar.io/youtube/@mackhopkins'
  },
  {
    id: '2',
    name: 'Karl',
    role: 'Creator',
    content: 'Incredible turnaround time without sacrificing quality. The pacing and sound design really made our brand campaign stand out.',
    rating: 3,
    avatarUrl: 'https://unavatar.io/youtube/@karl'
  },
  {
    id: '3',
    name: 'Ayush Bhandari',
    role: 'Creator',
    content: 'The storytelling is top-tier. They captured all the high-intensity moments perfectly with clean transitions and great music sync.',
    rating: 4,
    avatarUrl: 'https://unavatar.io/youtube/@ayushbhandari'
  }
];
