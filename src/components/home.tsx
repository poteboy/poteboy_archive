import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
const style = require('../styles/home.module.scss');

const Home = () => {

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
            <div className={style.table}>
                <div className={style.left}>
                    <div className={style.iconBox}>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconF}/>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconR}/>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.myname}>Keita Furuse</div>
                    <div className={style.myjob}>
                        <p className={style.desc}>Application Developer based in Tokyo.</p>
                    </div>
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
                </div>
            </div>
    )

}

export default Home