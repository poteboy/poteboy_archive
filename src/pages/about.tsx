import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Blog from '../components/blog';
import Meta from '../components/meta';
import { StaticImage } from "gatsby-plugin-image";
const style = require("../styles/about.module.scss")

const About = () => {

    return(
        <Blog>
            <Meta 
                title="ぽてログ ABOUT"
                description="TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。"
            />
            <div className={style.table}>
                <section className={style.content}>
                    <div className={style.youngMe}>
                        <StaticImage
                            src="../assets/images/youngme.jpg"
                            alt="young poteboy"
                            imgClassName="img-me"
                        />
                    </div>
                    {/* <div className={style.bio}>
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
                            早稲田大学 卒業
                        </p>
                        <p>
                            <em>2021</em>
                            Micin.Inc ソフトウェアディベロッパー 正社員
                        </p>
                    </div>
                    <br/> */}
                    <div style={style.profile}>
                    <h3>Profile</h3>
                            <p>
                                TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。
                                <br/>
                                プログラムを書いたり、絵を描いたり、ベンチプレスすることが好きです。最近は料理やアルゴリズムのお勉強も嗜んでます。
                                <br/>
                                アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。
                            </p>
                    </div>
                    <br/>
                    <h3>About</h3>
                        <p>
                            このサイトはGatsbyという静的サイトジェネレーターを使って作りました。
                            <br/>
                            起動には少し時間がかかりますが、一度サイトをロードし終えたらまるでネイティブアプリのように高速に使えるかと思いますので、是非色々なページを徘徊してみてください。
                            <br/>
                            なお、このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。
                        </p>
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