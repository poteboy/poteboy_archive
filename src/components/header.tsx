import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
const style = require("../styles/header.module.scss")

const Header = () => {

    let [toggle, setToggle ] = useState(false);


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

    
    // style={{paddingBottom: onTop ? '3rem' : '1rem' }}

    return(
        <header className={style.header}>
            <ul className={style.ul}>
                <li>
                    <Link 
                        className={style.navItem}
                        activeClassName={style.activeNavItem}
                        to="/">
                        <div className={style.fav}>
                        <FontAwesomeIcon icon={faHome} size="2x"/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link 
                        className={style.navItem}
                        activeClassName={style.activeNavItem}
                        to="/about/">
                        <div className={style.fav}>
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                        </div>
                    </Link>
                </li>
            </ul>
            <nav className={style.sp} style={{
                opacity: toggle ? 1 : 0,
                transform: toggle ? "translateY(0)" : "translateY(-100%)",
            }}>
                <ul>
                    <li>
                        <Link
                            className={style.spNav} 
                            onClick={() => {setToggle(false)}}
                            to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.spNav} 
                            onClick={() => {setToggle(false)}}
                            to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className={style.close}><span onClick={() => {setToggle(false)}}>CLOSE</span></li>
                </ul>
            </nav>
            <div className={style.ham} onClick={() => {setToggle(true)}}>
                <span></span>
            </div>
        </header>
    )
}

export default Header