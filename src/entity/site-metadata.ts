export interface SiteMetaData extends MetaType {
  pathPrefix: string;
  author: `Keita Furuse`;
  siteUrl: `https://poteboy.com`;
}

export interface MetaType {
  title?: string;
  description?: string;
}
