import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery} from 'gatsby';

const Meta = () => {

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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
        </>
    )
}

export default Meta