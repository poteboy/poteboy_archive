import React, { ReactNode } from 'react';
import Layout from './layout';
import AdSidebar from './ads/adsidebar';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';
const style = require("../styles/blog-index.module.scss");


const Blog = (props: {children: Partial<ReactNode>}) => {

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
                     <div className={style.itsMe}>
                     <Link to="/">
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.icon}></img>
                    </Link>
                    </div>
                    <div className={style.myName}>Keita Furuse</div>
                    <div className={style.sns}>
                        <div className={style.icons}>
                            <a href="https://github.com/poteboy" title="GitHub" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faGithub}
                            size="2x"
                             />
                             </a>
                        </div>
                        <div className={style.icons}>
                            <a href="https://www.linkedin.com/in/keitafuruse/" title="LinkedIn" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faLinkedin} 
                            size="2x"
                            />
                            </a>
                        </div>
                        <div className={style.icons}>
                            <a href="https://twitter.com/_poteboy_" title="Twitter" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faTwitter} 
                            size="2x"
                            />
                            </a>
                        </div>
                    </div>
                 </div>
              </aside>
            </div>
        </Layout>
    )

}

export default Blog