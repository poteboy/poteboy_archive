import React from 'react';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import Meta from '../../components/meta';
import { Link, graphql, useStaticQuery } from 'gatsby';
const style = require("../../styles/blog-index.module.scss");


const Poem = () => {

    const posts = useStaticQuery(graphql`
    query {
      allContentfulPoem (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            description
          }
        }
      }
    }
    `);

    return(
      <Blog>
          <Meta
            title="ぽてログ POEM"
            description="新卒ソフトウェアエンジニアが技術ポエム、もしくは日常の出来事に対してお気持ち表明するページ"
          />
          <ol className={style.content}>
          {posts.allContentfulPoem.edges.map( (edge: {node: any}) => {
              return(
                  <li className={style.list}>
                      <div className={style.post}>
                          <Link to={`${edge.node.slug}`}
                          className={style.link}
                          >
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.publishedDate}</p>
                            <p className={style.desc}>{edge.node.description}</p>
                          </Link>
                      </div>
                  </li>
              )
          })}
          </ol>
      </Blog>
    )

}

export default Poem