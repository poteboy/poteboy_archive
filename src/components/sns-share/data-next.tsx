import React , {useEffect, useState} from 'react';
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon, HatenaShareButton, HatenaIcon } from 'react-share';
import { graphql, useStaticQuery } from 'gatsby';
const style = require("./data-next.module.scss")


const SNSDataNext = (props: {title: string}) => {

    const siteUrl = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `).site.siteMetadata.siteUrl

    const [path, setPathName] = useState('')

    useEffect(() => {
        setPathName(window.location.pathname)
    })

    return(
      <>
        <div className={style.icons}>
          <TwitterShareButton title={props.title} url={siteUrl + path} className={style.sns}>
              <TwitterIcon round size={32}/>
          </TwitterShareButton>
          <LineShareButton title={props.title} url={siteUrl + path} className={style.sns}>
              <LineIcon round size={32}/>
          </LineShareButton>
          <HatenaShareButton title={props.title} url={siteUrl + path} className={style.sns}>
              <HatenaIcon round size={32}/>
          </HatenaShareButton>
        </div>
      </>
    )

}

export default SNSDataNext