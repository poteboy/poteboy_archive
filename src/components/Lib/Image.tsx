import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

type Props = {
  filename: string;
  className?: string;
  style?: React.CSSProperties;
};

const Image: React.FC<Props> = props => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              childrenImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
                gatsbyImageData
              }
            }
          }
        }
      }
    `,
  );

  const edges: Edge[] = data.images.edges;
  const image = edges.find(n => {
    return n.node.relativePath === props.filename;
  });
  if (!image) {
    return null;
  }
  return <img src={image.node.publicURL} className={props.className} />;
};

type Edge = {
  node: {
    relativePath: string;
    name: string;
    publicURL: string;
    childrenImageSharp: {
      gatsbyImageData: any;
    }[];
  };
};

export default Image;
