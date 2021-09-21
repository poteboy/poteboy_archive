import { Node } from './node';

export interface Edge {
  node: Node;
  __typename: TypeName;
}

export type TypeName = 'ContentfulTechBlog';
