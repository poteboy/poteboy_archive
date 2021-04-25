import React from 'react';
import Layout from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
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
            }
          }
        }
      }
    `)

    return(
        <Layout>
            <ol className={style.content}>
                {posts.allMarkdownRemark.edges.map( (edge: {node: any}) => {
                    return(
                        <li className={style.list}>
                            <div className={style.post}>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.data}</p>
                                <p>{edge.node.frontmatter.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )

}

export default Tech