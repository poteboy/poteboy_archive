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

    const desc = `現役ソフトウェアエンジニアが気ままに運営する個人サイト。プログラミングやIT関連の技術ポエムを語ったり、絵も描いて載せたりします。`

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta name="google-site-verification" content="ThCy6ZbcWv-YFbvd_QEWvYQfBtArkhVqnutTomqPaUs" />
            </Helmet>
        </>
    )
}

export default Meta