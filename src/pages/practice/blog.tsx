import React from 'react';
import { Link } from 'gatsby';

const BlogPage = () => {
    return(
        <div>
            <p>posts will show up here later on</p>
            <Link to='/practice/count'>count</Link>
            <div><Link to='/'>home</Link></div>
        </div>
    )
}

export default BlogPage