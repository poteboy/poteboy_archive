import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
            <p>© 2021 {title}</p>
        </footer>
    )
}

export default Footer