import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
const style = require('../styles/home.module.scss');
import { StaticImage } from "gatsby-plugin-image"
import Layout from './layout';

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
            </div>
    )

}

export default Home