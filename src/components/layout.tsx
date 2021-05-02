import React from 'react';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

const Layout = (props: {children: any}) => {
    return(
        <div id="wrapper">
            <Header/>
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout