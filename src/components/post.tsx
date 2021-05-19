import React from 'react';
import Blog from './blog';
import Meta from './meta';
import SNSDataNext from './sns-share/data-next';
import PrevNext from './prev-next';
import Topic from './topic/topic';
import { graphql } from 'gatsby';
import { sumarrize } from '../func/sumarrize';
import { TypeName, Node, PostData } from '../entity';
const style = require("../styles/post.module.scss");


export const query = graphql`
    query($slug: String) {
    contentfulTech(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        description
        body {
            childMarkdownRemark {
                html
            }
          }
    }
    contentfulPoem(slug: {eq: $slug}) {
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
    `

const Post = (props: {data : PostData, pageContext: PageContext}) => {

    let thema: Node;
    let html: string;
    let topic: TypeName;
    
    if (props.data.contentfulTech === null) {
        thema = props.data.contentfulPoem;
        html = thema.body.childMarkdownRemark.html;
        topic = 'ContentfulPoemEdge';

    } else {
        thema = props.data.contentfulTech;
        html = thema.body.childMarkdownRemark.html
        topic = 'ContentfulTechEdge';
    };
 
    return(
        <Blog>
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
                                <Topic topic={topic}/>
                                {thema.publishedDate}
                                <SNSDataNext title={thema.title}/>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                    </div>
                    <div className={style.sns}>
                    <SNSDataNext title={thema.title}/>
                    </div>
                    <PrevNext prev={props.pageContext.prev} next={props.pageContext.next}/>
                </div>
            </div>
        </Blog>
    )
}
export default Post

interface PageContext {
    slug: string,
    next: {slug: string, title: string} | null,
    prev: {slug: string, title: string} | null,
}