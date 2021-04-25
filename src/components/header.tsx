import React from 'react';
import { Link } from 'gatsby';
const style = require("../styles/header.module.scss")

const Header = () => {
    return(
        <header className={style.header}>
            <nav>
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
                            to="/tech-blog">
                            TECH BLOG
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header