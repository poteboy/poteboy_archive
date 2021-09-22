export interface Illustration {
  slug: string;
  name: string;
  createdAt: Date;
  fileName: string;
  description: string;
}

export const illustrations: Illustration[] = [
  {
    slug: 'curon-boy',
    name: 'ある日',
    createdAt: new Date(),
    fileName: 'art/just-a-boy.jpg',
    description: '',
  },
  {
    slug: 'end-of-summer',
    name: '夏の終わり',
    createdAt: new Date(),
    fileName: 'art/end-of-summer.jpg',
    description: '',
  },
];
