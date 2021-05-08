import React from 'react';
import Blog from './blog';
import Meta from './meta';
import SNSDataNext from './sns-share/data-next';
import PrevNext from './prev-next';
import { graphql } from 'gatsby';
import { documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { sumarrize } from '../func/sumarrize';
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

const Post = (props: {data : any, pageContext: PageContext}) => {

    let thema = null;
    let body = null;
    
    if (props.data.contentfulTech === null) {
        thema = props.data.contentfulPoem;
        body = thema.body.childMarkdownRemark.html

    } else {
        thema = props.data.contentfulTech;
        body = thema.body.childMarkdownRemark.html
    };
 
    return(
        <Blog>
            <Meta
                title={thema.title}
                description={sumarrize(body, thema.description)}
            />
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.post}>
                    <h1>{thema.title}</h1>
                        <div>
                            <div className={style.data}>
                            {thema.publishedDate}
                            <SNSDataNext title={thema.title}/>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: body }} />
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