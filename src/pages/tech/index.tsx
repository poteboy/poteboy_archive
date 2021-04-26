import React from 'react';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import { Link, graphql, useStaticQuery } from 'gatsby';
const style = require("../../styles/blog-index.module.scss");


const Tech = () => {

    const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
      edges {
          node {
            frontmatter {
              title
              data
              desc
            }
          fields {
              slug
              }
          }
      }
      }
  }
    `);

    return(
      <Blog>
          <ol className={style.content}>
          {posts.allMarkdownRemark.edges.map( (edge: {node: any}) => {
              return(
                  <li className={style.list}>
                      <div className={style.post}>
                          <Link to={`${edge.node.fields.slug}`}
                          className={style.link}
                          >
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.data}</p>
                            <p className={style.desc}>{edge.node.frontmatter.desc}</p>
                          </Link>
                      </div>
                  </li>
              )
          })}
          </ol>
      </Blog>
    )

}

export default Tech