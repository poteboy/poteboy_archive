import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const style = require('../styles/top.module.scss');

const Top = () => {


    const [onTop, setOnTop] = useState(true)

    function onScroll() {
      const offset =
        window.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop
  
      if (offset >= 600 && !onTop) return false
      if (offset >= 600 && onTop) {
        setOnTop(false)
        return false
      }
      setOnTop(true)
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
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

    return(
            <React.Fragment>
                <div className={style.profileFirst}>
                    <div className={style.containerFirst}>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.icon}/>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconTwo}/>
                    </div>
                </div>

                <div className={style.profileSecond} id="about">
                    <div className={style.containerSecond}>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.icon}/>
                    </div>
                    {onTop ? <></> : <div className={style.about}>
                        <div className={style.table}>
                            <h2>About Me</h2>
                            <div className={style.aboutMe}>
                                早稲田大学国際教養学部卒業後にMedTech系スタートアップに新卒入社し、オンライン診療アプリの開発をしています。
                                <br/>
                                大学時代から長期インターンとして実務開発に携わり、主にAngular、React.js、Ruby on Railsを用いたアプリケーション開発の経験を積みました。
                                <br/>
                                フロントエンド、UXデザイン、お絵描きが好きです。
                            </div>
                        </div>
                    </div>}
                </div>

                
            </React.Fragment>
    )

}

export default Top