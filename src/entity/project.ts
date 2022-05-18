export interface Project {
  slug: string;
  name: string;
  createdAt: Date;
  fileName: string;
  description: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    slug: 'muscleNote',
    name: 'Muscle Note',
    createdAt: new Date(),
    fileName: 'app/bigsur.png',
    description:
      'シンプルな筋トレ記録ノートアプリ。React Nativeで作ったiOSアプリ処女作',
    tags: ['iOS'],
    url: 'https://apps.apple.com/jp/app/muscle-note/id1585741817',
  },
  // {
  //   slug: 'coindy',
  //   name: 'Coindy',
  //   createdAt: new Date(),
  //   fileName: 'app/coindy.png',
  //   description:
  //     '割り勘・立て替え精算計算アプリ',
  //   tags: ['iOS'],
  //   url: 'https://apps.apple.com/jp/app/%E5%89%B2%E3%82%8A%E5%8B%98-%E7%AB%8B%E3%81%A6%E6%9B%BF%E3%81%88%E8%A8%88%E7%AE%97%E3%82%A2%E3%83%97%E3%83%AA-coindy/id1624328319',
  // },
];
