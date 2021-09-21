// import React, { FC, useState, useEffect } from 'react';
// import { Link } from 'gatsby';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faPaintBrush, faBlog } from '@fortawesome/free-solid-svg-icons';
// import { Path } from 'src/entity/path';
// const style = require("../styles/header.module.scss")

// type Props = {
//     path?: Path
// }
// const Header: FC<Props> = ({path}) => {

//     let [toggle, setToggle ] = useState(false);

//     const nonClickStyle = {
//         opacity: 0,
//         transform: "translateY(-100%)"
//     }

//     const clickStyle = {
//         transform: "translateY(0)",
//         opacity: 1,
//     }

//     const [onTop, setOnTop] = useState(true)

//     function onScroll() {
//       const offset =
//         window.pageYOffset ||
//         (document.documentElement && document.documentElement.scrollTop) ||
//         document.body.scrollTop

//       if (offset >= 20 && !onTop) return false
//       if (offset >= 20 && onTop) {
//         setOnTop(false)
//         return false
//       }
//       setOnTop(true)
//     }

//     useEffect(() => {
//       document.addEventListener('scroll', onScroll)
//       return () => document.removeEventListener('scroll', onScroll)
//     })

//     // style={{paddingBottom: onTop ? '3rem' : '1rem' }}

//     return(
//         <header className={style.header}>
//             <ul className={style.ul}>
//                 <li>
//                     <Link
//                         className={style.navItem}
//                         style={{color: path === 'home' ? 'snow' : '#dccaca'}}
//                         to="/">
//                         <div className={style.fav}>
//                         <FontAwesomeIcon icon={faHome} size="2x"/>
//                         </div>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                         className={style.navItem}
//                         style={{color: path === 'about' ? 'snow' : '#dccaca'}}
//                         to="/about/">
//                         <div className={style.fav}>
//                         <FontAwesomeIcon icon={faUser} size="2x"/>
//                         </div>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                         className={style.navItem}
//                         style={{color: path === 'blog' ? 'snow' : '#dccaca'}}
//                         to="/blog/">
//                         <div className={style.fav}>
//                         <FontAwesomeIcon icon={faBlog} size="2x"/>
//                         </div>
//                     </Link>
//                 </li>
//             </ul>
//             <nav className={style.sp} style={{
//                 opacity: toggle ? 1 : 0,
//                 transform: toggle ? "translateY(0)" : "translateY(-100%)",
//             }}>
//                 <ul>
//                     <li>
//                         <Link
//                             className={style.spNav}
//                             onClick={() => {setToggle(false)}}
//                             to="/">
//                             HOME
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             className={style.spNav}
//                             onClick={() => {setToggle(false)}}
//                             to="/about">
//                             ABOUT
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             className={style.spNav}
//                             onClick={() => {setToggle(false)}}
//                             to="/blog">
//                             BLOG
//                         </Link>
//                     </li>
//                     <li className={style.close}><span onClick={() => {setToggle(false)}}>CLOSE</span></li>
//                 </ul>
//             </nav>
//             <div className={style.ham} onClick={() => {setToggle(true)}}>
//                 <span></span>
//             </div>
//         </header>
//     )
// }

// export default Header

import React, { FC } from 'react';
import styled from 'styled-components';
import { Path } from 'src/entity';
import { Link } from 'gatsby';
import { Button, Drawer, IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

type Props = {
  path?: Path;
};

const Header: FC<Props> = props => {
  return (
    <Wrapper>
      <Home>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HomeButton
            style={{
              borderRadius: 5,
              backgroundColor: '#0de0ba',
              color: 'snow',
              fontFamily: 'phenomena-bold',
              fontSize: 18,
            }}
          >
            HOME
          </HomeButton>
        </Link>
      </Home>
      <IconButton>
        <MenuIcon
          style={{
            width: 32,
            height: 32,
          }}
        />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: white;
  position: sticky;
  top: 0px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  width: 100vw;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15); */
  box-shadow: rgb(176 186 197 / 20%) 0px 6px 20px;
`;

const Home = styled.div`
  justify-content: center;
  align-self: center;
  padding: 3px 20px;
`;

const HomeButton = styled(Button)`
  border-radius: 4px;
  border: 2px solid #8484843d;
  :hover {
    /* fill: rebeccapurple; */
    box-shadow: 0 0 5px #3affdb;
  }
`;

const MenuIcon = styled(MenuRoundedIcon)`
  width: 32px;
  height: 32px;
`;

export default Header;

// #acb6e5
// #86fde8
