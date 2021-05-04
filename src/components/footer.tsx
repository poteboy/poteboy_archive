import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
const style = require('../styles/footer.module.scss');


const Footer = () => {

    const title = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
        }
      }
    }
    `).site.siteMetadata.title

    return(
        <footer>
            <div className={style.footer}>
                <p>© 2021 {title}</p>
                <p>
                    <Link to="/privacy-policy"
                        className={style.link}
                    >
                    privacy policy
                    </Link>
                    </p>
            </div>
        </footer>
    )
}

export default Footer