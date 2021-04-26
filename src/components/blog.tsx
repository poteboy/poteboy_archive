import React from 'react';
import Layout from './layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
const style = require("../styles/blog-index.module.scss");


const Blog = (props: {children: any}) => {

    const image = useStaticQuery(
        graphql`
        {
            file(name: { eq: "poteicon" }) {
                publicURL
            }
        }
        `
    )

    return(
        <Layout>
          <div className={style.main}>
                    {props.children}
              <aside>
                 <div className={style.iconTable}>
                    <img src={image.file.publicURL} alt="icon" className={style.icon}></img>
                    <div className={style.myName}>Keita Furuse</div>
                 </div>
              </aside>
            </div>
        </Layout>
    )

}

export default Blog