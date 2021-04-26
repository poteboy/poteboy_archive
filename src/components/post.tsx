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
  }
    `

const Post = (props: {data : { contentfulTech: any}}) => {
    const body = JSON.parse(props.data.contentfulTech.body.raw)
    return(
        <Blog>
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.post}>
                    <h1>{props.data.contentfulTech.title}</h1>
                        <div>
                            {props.data.contentfulTech.publishedDate}
                            {documentToReactComponents(body)}
                        </div>
                    </div>
                </div>
            </div>
        </Blog>
    )
}
export default Post