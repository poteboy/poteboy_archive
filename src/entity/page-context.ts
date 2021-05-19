import { TypeName } from './edge';

export interface PageContext extends PrevNext{
    slug: string,
    topic: TypeName,
}

export interface PrevNext {
    next: {slug: string, title: string} | null,
    prev: {slug: string, title: string} | null,
}