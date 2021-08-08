import { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Tech = () => {

    const posts = useStaticQuery(graphql`
  query {
    allContentfulTech (
      sort: {
        fields: publishedDate
        order: DESC
      }
    ) {
      edges {
        node {
          title
          publishedDate
          slug
          description
        }
        __typename
      }
    }
  }
  `);

    return(
        <>
        </>
    )
}

export default Tech;