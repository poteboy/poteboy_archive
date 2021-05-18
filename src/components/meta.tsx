import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery} from 'gatsby';
import PropTypes from "prop-types"

const Meta = ({title, description }: metaProps) => {

    const siteMetadata = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
        }
      }
    }    
    `).site.siteMetadata

    const seo = {
        title: title || siteMetadata.title,
        description: description || siteMetadata.description
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{seo.title}</title>
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:type" content="website"/>
                <meta name="google-site-verification" content="ThCy6ZbcWv-YFbvd_QEWvYQfBtArkhVqnutTomqPaUs" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:image" content="https://poteboy.com/static/6bdbf18104cab1d4ec7d3d23f03949a9/poteicon.png" />
            </Helmet>
        </>
    )
}

interface metaProps {
    title?: string,
    description?: string,
}

export default Meta