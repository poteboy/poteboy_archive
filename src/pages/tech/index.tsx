import React from 'react';
import Layout from '../../components/layout';
import Blog from '../../components/blog';
import Meta from '../../components/meta';
import { Node, Edge} from '../../entity'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { func } from 'prop-types';
const style = require("../../styles/blog-index.module.scss");
const _ = require("lodash");

const Tech = () => {

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
      console.log(dateA, dateB)
      return dateA - dateB;
    }).reverse()

    function convertTime(s: Date) {
      var tmp = new Date(s).toLocaleDateString()
      return tmp
    }

    return(
      <Blog>
          <Meta
            title="ぽてログ TECH"
            description="新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信しています。"
          />
          <ol className={style.content}>
          {allPost.map( (edge: Edge) => {
              return(
                  <li className={style.list}>
                      <div className={style.post}>
                          <Link to={`${edge.node.slug}`}
                          className={style.link}
                          >
                            <h3>{edge.node.title}</h3>
                            <p>{convertTime(edge.node.publishedDate)}</p>
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

export default Tech