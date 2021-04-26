import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
const style = require("../styles/about.module.scss")

const About = () => {

    const me = useStaticQuery(
        graphql`
        {
            file(name: { eq: "me" }) {
                publicURL
            }
        }
        `
    )
    return(
        <Layout>
            <div className={style.table}>
                <section className={style.content}>
                    <img src={me.file.publicURL} alt="me" className={style.me}/>
                    <h3>Bio</h3>
                    <p>
                        <em>1997</em>
                        生まれる
                    </p>
                    <p>
                        <em>2020</em>
                        早稲田大学 国際教養学部 卒業
                    </p>
                    <p>
                        <em>2021</em>
                        Micin.Inc オンライン診療事業部
                    </p>
                    <br/>
                    <h3>Profile</h3>
                    <p>
                        <span style={style.profle}>
                    TypeScript、筋トレ、お絵かきが好きです。
                    </span>
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export default About