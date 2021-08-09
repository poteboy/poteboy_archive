import React from 'react';
import Layout from '../../components/layout';
import Home from '../../components/home';
import BlogPost from '../../components/BlogList/BlogList'
import Meta from '../../components/meta';
import { Edge, PostData } from '../../entity'
import Topic from '../../components/topic/topic';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components'
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


    allPost = allPost.sort(function (a, b): number {
      var dateA: number = new Date(a.node.publishedDate).getTime();
      var dateB: number = new Date(b.node.publishedDate).getTime();
      return dateA - dateB;
    }).reverse()

    function convertTime(s: Date): string {
      var tmp = new Date(s).toLocaleDateString()
      return tmp
    }

    return(
      <Layout path={`blog`}>
        <Home path={`blog`}>
          <Meta
            title="ぽてログ BLOG"
            description="新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信したり、お気持ち表明ポエムをしたりしています。"
          />
        <BlogPost edges={allPost} topic={`all`} ></BlogPost>
          </Home>
      </Layout>
    )

}

const BlogTable = styled.ol`
  flex: 1;
  margin: 10vh 15vh 10vh 0;
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  @media (max-width: 1194px) {
            flex-direction: column;
            margin: 0 0;
        }
`

const Title = styled.h3`
  color: snow;
`

export default BlogList