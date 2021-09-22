import React from 'react';
import Layout from '../../components/layout';
import Home from '../../components/home';
import BlogPost from '../../components/BlogList/BlogList';
import Meta from '../../components/meta';
import { Edge, PostData } from '../../entity';
import Topic from '../../components/topic/topic';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Spacer } from '@src/components/Lib/Spacer';
const style = require('../../styles/blog-index.module.scss');
const _ = require('lodash');

const BlogList = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate
            slug
            description
            emoji
          }
          __typename
        }
      }
    }
  `);

  let allPost: Edge[] = posts.allContentfulBlog.edges;

  allPost = allPost
    .sort(function (a, b): number {
      var dateA: number = new Date(a.node.publishedDate).getTime();
      var dateB: number = new Date(b.node.publishedDate).getTime();
      return dateA - dateB;
    })
    .reverse();

  function convertTime(s: Date): string {
    var tmp = new Date(s).toLocaleDateString();
    return tmp;
  }

  return (
    <Layout path={`blog`} side={true}>
      <Meta
        title="ぽてログ BLOG"
        description="新卒ソフトウェアエンジニアがプログラミングやIT技術について情報発信したり、お気持ち表明ポエムをしたりしています。"
      />
      <Spacer size={50} />
      <BlogPost edges={allPost} topic={`all`} />
    </Layout>
  );
};

export default BlogList;
