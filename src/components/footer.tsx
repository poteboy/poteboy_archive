import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
const style = require('../styles/footer.module.scss');


const Footer = () => {

    const myName = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
        }
      }
    }
    `).site.siteMetadata.author

    return(
        <footer>
            <p>© 2021 {myName}.</p>
        </footer>
    )
}

export default Footer