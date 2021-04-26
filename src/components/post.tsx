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
            raw
        }
    }
    contentfulPoem(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        description
        body {
            raw
        }
    }
  }
    `

const Post = (props: {data : any}) => {

    let thema = null;
    
    if (props.data.contentfulTech === null) {
        thema = props.data.contentfulPoem;
    } else {
        thema = props.data.contentfulTech;
    };

    console.log(thema)

    const body = JSON.parse(thema.body.raw)
    return(
        <Blog>
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.post}>
                    <h1>{thema.title}</h1>
                        <div>
                            {thema.publishedDate}
                            {documentToReactComponents(body)}
                        </div>
                    </div>
                </div>
            </div>
        </Blog>
    )
}
export default Post