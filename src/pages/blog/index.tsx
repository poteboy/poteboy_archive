import React from 'react';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import Meta from '../../components/meta';
import { Edge} from '../../entity'
import Topic from '../../components/topic/topic';
import { Link, graphql, useStaticQuery } from 'gatsby';
const style = require("../../styles/blog-index.module.scss");
const _ = require("lodash");

const BlogList = () => {

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
          publishedDate
          slug
          description
        }
        __typename
      }
    }
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

  const techs: Edge[] = posts.allContentfulTech.edges;
  const poems: Edge[] = posts.allContentfulPoem.edges
  let allPost: Edge[] = _.concat(techs, poems)


    allPost = allPost.sort(function (a, b) {
      var dateA = new Date(a.node.publishedDate).getTime();
      var dateB = new Date(b.node.publishedDate).getTime();
      return dateA - dateB;
    }).reverse()

    function convertTime(s: Date) {
      var tmp = new Date(s).toLocaleDateString()
      return tmp
    }

    return(
      <Blog>
          <Meta
            title="ぽてログ BLOG"
            description="新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信したり、お気持ち表明ポエムをしたりしています。"
          />
          <ol className={style.content}>
          {allPost.map( (edge: Edge) => {
              return(
                  <li className={style.list}>
                    <Link to={`${edge.node.slug}`}
                          className={style.link}>
                      <div className={style.post}>
                          
                            <h3>{edge.node.title}</h3>
                            <div className={style.sub}>
                              <Topic topic={edge.__typename}/>
                              <p style={{margin: "0"}}>{convertTime(edge.node.publishedDate)}</p>
                            </div>
                            <p className={style.desc}>{edge.node.description}</p>
                          
                      </div>
                    </Link>
                  </li>
              )
          })}
          </ol>
      </Blog>
    )

}

export default BlogList