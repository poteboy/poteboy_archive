import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Blog from '../components/blog';
const style = require("../styles/about.module.scss")

const About = () => {

    return(
        <Blog>
            <div className={style.table}>
                <section className={style.content}>
                    <div className={style.bio}>
                        <h3>Bio</h3>
                        <p>
                            <em>1997</em>
                            生まれる
                        </p>
                        <p>
                            <em>2020</em>
                            Micin.Inc ソフトウェアディベロッパー インターン
                        </p>
                        <p>
                            <em>2021</em>
                            早稲田大学 国際教養学部 卒業
                        </p>
                        <p>
                            <em>2021</em>
                            Micin.Inc ソフトウェアディベロッパー 正社員
                        </p>
                    </div>
                    <br/>
                    <div style={style.profile}>
                    <h3>Profile</h3>
                            <p>
                                TypeScriptが好きな新卒ディベロッパーです。仕事ではReactやAngular、RoR周りをぽちぽち書いてます。
                                <br/>
                                プログラムを書いたり、絵を描いたり、ベンチプレスしたりすることが好きです。最近は料理やアルゴリズムのお勉強も嗜んでます。
                                <br/>
                                アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。
                                <br/>
                                このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。
                            </p>
                    </div>
                    <br/>
                    <div style={style.contact}>
                        <h3>Contact</h3>
                        <p>
                            ・<a href="https://github.com/poteboy"　target="_blank">GitHub</a>
                        </p>
                    </div>
                    <br/>
                </section>
            </div>
        </Blog>
    )
}

export default About