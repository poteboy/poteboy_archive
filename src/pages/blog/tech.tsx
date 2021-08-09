import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import Home from '../../components/home';
import Meta from '../../components/meta';
import { Edge, PostData } from '../../entity'
import BlogPost from '../../components/BlogList/BlogList'

const TechBlog = () => {

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

    let techs: Edge[] = posts.allContentfulTech.edges;

    techs = techs.sort(function (a, b): number {
        var dateA: number = new Date(a.node.publishedDate).getTime();
        var dateB: number = new Date(b.node.publishedDate).getTime();
        return dateA - dateB;
      }).reverse()

    return(
        <Layout path={`blog`}>
        <Home path={`blog`}>
          <Meta
            title="ぽてログ BLOG"
            description="新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信したり、お気持ち表明ポエムをしたりしています。"
          />
        <BlogPost edges={techs} topic={`tech`} ></BlogPost>
          </Home>
      </Layout>
    )
}

export default TechBlog;