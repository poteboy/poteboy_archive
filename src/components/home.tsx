import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
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
            <div className={style.profile}>
                <img src={image.file.publicURL} alt="icon" className={style.icon}/>
                <p className={style.name}>Keita Furuse</p>
                <p className={style.description}>Hi! I am an Application Developer based in Tokyo.</p>
                <div className={style.sns}>
                        <div className={style.icons}>
                            <a href="https://github.com/poteboy" title="GitHub">
                            <FontAwesomeIcon icon={faGithub}
                            size="2x"
                             />
                             </a>
                        </div>
                        <div className={style.icons}>
                            <a href="https://www.linkedin.com/in/keitafuruse/" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} 
                            size="2x"
                            />
                            </a>
                        </div>
                    </div>
            </div>
    )

}

export default Home