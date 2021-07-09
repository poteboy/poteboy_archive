import React, { FC, useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path } from 'src/entity/path';

const style = require('../styles/home.module.scss');

type Props =  {
    children: any,
    path: Path
}

const Home: FC<Props> = ({children, path}) => {

    const isBrowser = typeof window !== "undefined"

    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1195
      );
    type Orientation = "portrait" | 'landscape';

    const [orientation, setOrientation] = useState<Orientation>(
        typeof window !== "undefined" ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait'
    );
    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
            if(window.innerHeight > window.innerWidth){
                setOrientation('portrait')
            } else {
                setOrientation('landscape')
            }
        }
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })

    const image = useStaticQuery(
        graphql`
        {
            file(name: { eq: "poteicon" }) {
                publicURL
            }
        }
        `
    )
    
    const isMobile = (): boolean => {
        return width < 1195  && path !== 'home' && orientation === 'portrait'
    }

    const isLaptop = (): boolean => {
        return width > 1194
    }

    return(
            <div className={style.table}>
                { isMobile() ? <></> : <div className={style.left}>
                    <div className={style.iconBox}>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconF}/>
                    </div>
                    <div className={style.name}>Keita Furuse</div>
                    <div className={style.links}>
                            <div className={style.linkBox}>
                                <a href="https://github.com/poteboy" title="GitHub" target="_blank" rel="noopener">
                                    <div className={style.sns}>
                                        <FontAwesomeIcon icon={faGithub}
                                        size="2x"
                                        />
                                        <span>GitHub</span>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/keitafuruse/" title="LinkedIn" target="_blank" rel="noopener">
                                    <div className={style.sns}>
                                        <FontAwesomeIcon icon={faLinkedin} 
                                        size="2x"
                                        />
                                        <span>LinkedIn</span>
                                    </div>
                                </a>
                                <a href="https://twitter.com/_poteboy_" title="Twitter" target="_blank" rel="noopener">
                                    <div className={style.sns}>
                                        
                                        <FontAwesomeIcon icon={faTwitter} 
                                        size="2x"
                                        />
                                        <span>Twitter</span>
                                    </div>
                                </a>
                                <a href="https://www.pixiv.net/users/59139347" title="Twitter" target="_blank" rel="noopener">
                                    <div className={style.sns}>
                                        
                                        <FontAwesomeIcon icon={faPalette} 
                                        size="2x"
                                        />
                                        <span>Pixiv</span>
                                    </div>
                                </a>
                            </div>
                        </div> 
                </div>}
                {children}
            </div>
    )
}

export default Home