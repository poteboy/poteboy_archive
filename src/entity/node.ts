export interface Node {
  title: string;
  publishedDate: Date;
  slug: string;
  description: string;
  body: Body;
  emoji: string;
}

export interface Body {
  childMarkdownRemark: ChildMarkdownRemark;
}

export interface ChildMarkdownRemark {
  html: string;
}
