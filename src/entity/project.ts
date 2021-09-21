export interface Project {
  slug: string;
  name: string;
  createdAt: Date;
  fileName: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: 'muscleNote',
    name: 'Muscle Note',
    createdAt: new Date(),
    fileName: 'app/bigsur.png',
    description:
      'React Nativeで作ったiOSアプリの処女作。シンプルな筋トレ記録ノートアプリ',
  },
];
