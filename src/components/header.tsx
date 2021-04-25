import React, { useState } from 'react';
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

    

    return(
        <header className={style.header}>
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
                            to="/tech">
                            TECH
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
                            to="/tech">
                            TECH
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