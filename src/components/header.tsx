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
                            to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.navItem}
                            to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.navItem}
                            to="/">
                            TECH BLOG
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header