import React from 'react';
import Blog from './blog';
import { graphql } from 'gatsby';
import { documentToReactComponents} from '@contentful/rich-text-react-renderer';
const style = require("../styles/post.module.scss")


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

const Post = (props: {data : any}) => {

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
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.post}>
                    <h1>{thema.title}</h1>
                        <div>
                            {thema.publishedDate}
                            <div dangerouslySetInnerHTML={{ __html: body }} />
                        </div>
                    </div>
                </div>
            </div>
        </Blog>
    )
}
export default Post