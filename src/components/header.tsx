import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
const style = require("../styles/header.module.scss")

const Header = () => {

    let [toggle, setBool ] = useState(false);


    const nonClickStyle = {
        opacity: 0,
        transform: "translateY(-100%)"
    }

    const clickStyle = {
        transform: "translateY(0)",
        opacity: 1,
    }

    const [onTop, setOnTop] = useState(true)

    function onScroll() {
      const offset =
        window.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop
  
      if (offset >= 20 && !onTop) return false
      if (offset >= 20 && onTop) {
        setOnTop(false)
        return false
      }
      setOnTop(true)
    }
    
    useEffect(() => {
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    })

    

    return(
        <header className={style.header} style={{paddingBottom: onTop ? '3rem' : '1rem' }}>
            <nav className={style.pc}>
                <ul className={style.navList}>
                    <li>
                        <Link 
                            className={style.navItem}
                            activeClassName={style.activeNavItem}
                            to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.navItem}
                            activeClassName={style.activeNavItem}
                            to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.navItem}
                            activeClassName={style.activeNavItem}
                            to="/blog">
                            BLOG
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={style.sp} style={{
                opacity: toggle ? 1 : 0,
                transform: toggle ? "translateY(0)" : "translateY(-100%)",
            }}>
                <ul>
                    <li>
                        <Link
                            className={style.spNav} 
                            onClick={() => {setBool(false)}}
                            to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.spNav}
                            onClick={() => {setBool(false)}}
                            to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.spNav}
                            onClick={() => {setBool(false)}}
                            to="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li className={style.close}><span onClick={() => {setBool(false)}}>CLOSE</span></li>
                </ul>
            </nav>
            <div className={style.ham} onClick={() => {setBool(true)}}>
                <span></span>
            </div>
        </header>
    )
}

export default Header