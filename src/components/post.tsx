import React from 'react';
import Blog from './blog';
const style = require("../styles/post.module.scss")

const Post = () => {
    return(
        <Blog>
            <div className={style.all}>
                <div className={style.content}>
                </div>
            </div>
        </Blog>
    )
}
export default Post