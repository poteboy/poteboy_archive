import React from 'react';
import Footer from './footer';
import Header from './header';
import SideBar from './sidebar';
import Meta from './meta';

const Layout = (props: {children: any}) => {
    return(
        <div id="wrapper" >
            <SideBar/>
                {props.children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout