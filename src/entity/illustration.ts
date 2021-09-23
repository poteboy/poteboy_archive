export interface Illustration {
  slug: string;
  name: string;
  createdAt: Date;
  fileName: string;
  description: string;
  url?: string;
}

export const illustrations: Illustration[] = [
  {
    slug: 'curon-boy',
    name: 'ある日',
    createdAt: new Date(),
    fileName: 'art/just-a-boy.jpg',
    description: '',
    url: 'https://www.pixiv.net/artworks/90836146',
  },
  {
    slug: 'end-of-summer',
    name: '夏の終わり',
    createdAt: new Date(),
    fileName: 'art/end-of-summer.jpg',
    description: '',
    url: 'https://www.pixiv.net/artworks/92371319',
  },
];
