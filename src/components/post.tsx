import React from 'react';
import Home from './home';
import Layout from './layout';
import Meta from './meta';
import SNSDataNext from './sns-share/data-next';
import PrevNextComponent from './prev-next';
import Topic from './topic/topic';
import { graphql } from 'gatsby';
import { sumarrize } from '../func/sumarrize';
import { TypeName, Node, PostData, PageContext } from '../entity';
const style = require('../styles/post.module.scss');

export const query = graphql`
  query($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      description
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const Post = (props: { data: PostData; pageContext: PageContext }) => {
  const topic = props.pageContext.topic;
  const thema: Node = props.data.contentfulBlog;
  const html: string = thema.body.childMarkdownRemark.html;

  return (
    <Layout path={`blog`} side={true}>
      <Home path={`post`}>
        <Meta
          title={thema.title + ' - ぽてログ'}
          description={sumarrize(html, thema.description)}
        />
        <div className={style.all}>
          <div className={style.content}>
            <div className={style.post}>
              <h1>{thema.title}</h1>
              <div>
                <div className={style.data}>
                  <Topic topic={topic} />
                  {thema.publishedDate}
                  <SNSDataNext title={thema.title} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
            <div className={style.sns}>
              <SNSDataNext title={thema.title} />
            </div>
            <PrevNextComponent
              prev={props.pageContext.prev}
              next={props.pageContext.next}
            />
          </div>
        </div>
      </Home>
    </Layout>
  );
};
export default Post;
