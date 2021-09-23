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
];
