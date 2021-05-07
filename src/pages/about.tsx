import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Blog from '../components/blog';
import Meta from '../components/meta';
import { StaticImage } from "gatsby-plugin-image";
import { sumarrize } from '../func';
const style = require("../styles/about.module.scss")

const About = () => {

    const defaultDesc = `TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。`

    return(
        <Blog>
            <Meta 
                title="ぽてログ ABOUT"
                description={sumarrize(defaultDesc)}
            />
            <div className={style.table}>
                <section className={style.content}>
                    <div className={style.youngMe}>
                        <StaticImage
                            src="../assets/images/youngerme.jpg"
                            alt="young keita furuse aka poteboy"
                            imgClassName="img-me"
                        />
                    </div>
                    <div style={style.profile}>
                    <h3>Profile</h3>
                            <p>
                                フロントエンド開発とTypeScriptが好きな新卒ディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。
                                <br/>
                                プログラムを書いたり、絵を描いたり、ベンチプレスすることが好きです。最近は料理やアルゴリズムのお勉強も嗜んでます。
                                <br/>
                                アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。
                            </p>
                    </div>
                    <br/>
                    <h3>About</h3>
                        <p>
                            このサイトはGatsbyという静的サイトジェネレーターを使って作りました。言語にはTypeScript、スタイルにはSCSSを使用しています。
                            <br/>
                            {/* 起動には少し時間がかかりますが、一度サイトをロードし終えたらまるでネイティブアプリのように高速に使えるかと思いますので、是非色々なページを徘徊してみてください。
                            <br/> */}
                            このサイトのソースコードは<a href='https://github.com/poteboy/poteboy' target="_blank" rel="noopener">GitHub上のリンク</a>からご覧になる事ができます。
                            <br/>
                            なお、このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。
                        </p>
                    <br/>
                    <div style={style.contact}>
                        <h3>Contact</h3>
                        <p>
                            ・<a href="mailto:keitatkins4@gmail.com">Email</a>
                        </p>
                    </div>
                    <br/>
                </section>
            </div>
        </Blog>
    )
}

export default About