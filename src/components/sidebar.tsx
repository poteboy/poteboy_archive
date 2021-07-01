import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
const style = require("../styles/sidebar.module.scss");

const SideBar = () => {
    return(
        <aside>
            <ul>
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
                        to="/about">
                        <div className={style.fav}>
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                        </div>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar